import React from 'react';
import FireApp from '../utils/firebase';
import { Wrapper, Message } from './style';

const App = () => {
	const firestore = FireApp.firestore;
	const [result, setResult] = React.useState([]);

	React.useEffect(() => {
		const unsubsribe = firestore.collection('messages').onSnapshot(function(ss) {
			setResult(ss.docs.map(doc => doc.data()));
		});
		return unsubsribe;
	}, []);

	return (
		result &&
		result.map((item, i) => (
			<Wrapper key={item.time}>
				<Message color={item.color}>
					<span>{`${item.name}: `}</span>
					{`${item.message}`}
				</Message>
			</Wrapper>
		))
	);
};
export default App;
