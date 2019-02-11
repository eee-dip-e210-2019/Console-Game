import React from 'react';
import FireApp from '../utils/firebase';
import styled from 'styled-components';
const Message = styled.span`
	line-height: 1.1rem;
`;

const App = () => {
	const firestore = FireApp.firestore;
	const [result, setResult] = React.useState([]);

	React.useEffect(() => {
		// getMessages(firestore).then(data => {
		// 	setResult(data);
		// });
		const unsubsribe = firestore.collection('messages').onSnapshot(function(ss) {
			setResult(ss.docs.map(doc => doc.data()));
		});
		return unsubsribe;
	}, []);

	return (
		result &&
		result.map((item, i) => (
			<div key={item.time}>
				<Message>{`msg: ${item.message}`}</Message>
			</div>
		))
	);
};
export default App;
