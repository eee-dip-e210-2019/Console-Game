import React from 'react';
import FireApp from '../utils/firebase';

import { Input, Prompt, Form } from './style';

function sendMessage(repo, name, color, message) {
	const time = new Date().getTime();
	return repo
		.collection('messages')
		.doc(time.toString())
		.set({
			name,
			message,
			color,
			time
		});
}

const App = ({ name, color }) => {
	let inputValue;
	const firestore = FireApp.firestore;
	const [value, setValue] = React.useState('');
	return (
		<Form
			onClick={() => inputValue.focus()}
			onSubmit={e => {
				e.preventDefault();
				setValue('');
				sendMessage(firestore, name, color, value)
					.then(function() {
						console.log('Document successfully written!');
					})
					.catch(function(error) {
						console.error('Error writing document: ', error);
					});
			}}
		>
			<Prompt>{`~/trashbin/${name} $`}</Prompt>
			<Input
				value={value}
				autoFocus
				onChange={e => setValue(e.target.value)}
				ref={input => (inputValue = input)}
			/>
		</Form>
	);
};
export default App;
