import React from 'react';
import FireApp from '../../utils/firebase';
import { Wrapper, Message } from './style';
import { mapToEmoji, constructEmojiMap } from '../../utils/emojiMap';

const App = ({ cipher }) => {
	const firestore = FireApp.firestore;
	const [result, setResult] = React.useState([]);
	const [emojiMap, setEmojiMap] = React.useState({});
	const myRef = React.createRef();
	React.useEffect(() => {
		const node = myRef.current;
		const unsubsribe = firestore.collection('messages').onSnapshot(function(ss) {
			setResult(ss.docs.map(doc => doc.data()));
			node.scrollIntoView({ behavior: 'smooth', block: 'start' });
		});
		setEmojiMap(constructEmojiMap());
		return unsubsribe;
	}, []);

	return (
		<Wrapper>
			{result &&
				result.map((item, i) => (
					<Message key={item.time} color={item.color}>
						<span>{`${item.name}: `}</span>
						{cipher ? `${mapToEmoji(item.message, emojiMap)}` : item.message}
					</Message>
				))}
			<span ref={myRef} />
		</Wrapper>
	);
};
export default App;
