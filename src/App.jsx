import React from 'react';
import FireApp from './utils/firebase';
import Data from './FetchData';
import styled, { createGlobalStyle } from 'styled-components';
const GS = createGlobalStyle`
	html, body {
		margin:0;
		color: lightgreen;
		font-family: serif;
		background: #363636;
	}
`;
const Terminal = styled.div`
	margin: 0;
	height: 100vh;
	padding: 20px;
	overflow: hidden;
`;
const Input = styled.input`
	border: none;
	outline: none;
	width: 80%;
	margin: 0 3px;
	font-size: 1rem;
	background: transparent;
	color: inherit;
	font-family: serif;
`;
const Prompt = styled.span`
	/* >>> */
`;
function sendMessage(repo, id, message) {
	const time = new Date().getTime();
	return repo
		.collection('messages')
		.doc(time.toString())
		.set({
			id,
			time,
			message
		});
}

const App = () => {
	let inputValue;
	const firestore = FireApp.firestore;
	const id = new Date().getTime();
	const [value, setValue] = React.useState('');
	return (
		<Terminal onClick={() => inputValue.focus()}>
			<GS />
			<Data />
			<form
				onSubmit={e => {
					e.preventDefault();
					setValue('');
					sendMessage(firestore, id, value)
						.then(function() {
							console.log('Document successfully written!');
						})
						.catch(function(error) {
							console.error('Error writing document: ', error);
						});
				}}
			>
				<Prompt>~/code/lab $</Prompt>
				<Input
					value={value}
					autoFocus
					onChange={e => setValue(e.target.value)}
					ref={input => (inputValue = input)}
				/>
			</form>
		</Terminal>
	);
};
export default App;
