import React from 'react';
import ReactGA from 'react-ga';

import FireApp from '../utils/firebase';
import { Input, Prompt, Form, Name, CommandWrapper } from './style';

function sendMessage(repo, name, color, message) {
	const time = new Date().getTime();
	return repo
		.collection('messages')
		.doc(time.toString())
		.set({
			name,
			message,
			color,
			time,
		});
}

const App = ({ name, color, setCipher, setShowQR }) => {
	let inputValue;
	const firestore = FireApp.firestore;
	const [value, setValue] = React.useState('');
	React.useEffect(() => {
		inputValue.scrollIntoView();
	}, []);
	return (
		<Form
			onClick={() => inputValue.focus()}
			onSubmit={e => {
				e.preventDefault();
				if (value === process.env.REACT_APP_PASSWORD) {
					setCipher(false);
					setValue('');
					return;
				}
				if (value === process.env.REACT_APP_CRIMINAL_NAME) {
					setShowQR(true);
					setValue('');
					return;
				}
				sendMessage(firestore, name, color, value)
					.then(function() {
						ReactGA.event({
							category: 'Message',
							action: 'Post a message',
						});
					})
					.catch(function(error) {
						ReactGA.event({
							category: 'Error',
							action: 'Post a message cause error',
						});
					});
				setValue('');
			}}
		>
			<Prompt>
				~/Xperience/<Name color={color}>WhoAmI</Name>&nbsp;
			</Prompt>
			<CommandWrapper>
				<Prompt>{` $ `}</Prompt>
				<Input
					spellcheck={false}
					value={value}
					autoFocus
					onChange={e => setValue(e.target.value)}
					ref={input => (inputValue = input)}
				/>
			</CommandWrapper>
		</Form>
	);
};
export default App;
