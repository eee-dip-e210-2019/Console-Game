import React from 'react';

import FireApp from '../../utils/firebase';
import { Input, Prompt, Form, Name, CommandWrapper } from './style';

function sendMessage(repo, name = 'Professor X', color, message) {
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
	React.useEffect(() => {
		const remove = window.addEventListener('click', () => {
			inputValue.focus();
		});
		return remove;
	}, []);

	return (
		<Form
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
				sendMessage(firestore, 'Professor X', color, value)
					.then(function() {})
					.catch(function(error) {});
				setValue('');
			}}
		>
			<Prompt>
				~/Xperience/<Name color={color}>WhoAmI</Name>&nbsp;
			</Prompt>
			<CommandWrapper>
				<Prompt>{`$`}&nbsp;</Prompt>
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
