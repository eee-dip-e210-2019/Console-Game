import React from 'react';
import SevenSegmentDisplay from '../Segments';
import styled from 'styled-components';

const Wrapper = styled.div`
	height: 100vh;
	width: 100vw;
	background: #222;
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: row;
	padding: 0 20vw;
`;

const Input = styled.input`
	position: fixed;
	opacity: 0;
	top: 0;
`;
const App = ({ history }) => {
	const input_ = React.useRef();
	const [input, setInput] = React.useState('');
	const [wrong, setWrong] = React.useState(false);

	React.useEffect(() => {
		const remove = window.addEventListener('click', () => {
			try {
				input_.current.focus();
			} catch (e) {}
		});
		return remove;
	}, []);

	return (
		<Wrapper>
			<Input
				ref={input_}
				autoFocus
				type="number"
				onChange={e => {
					if (e.target.value.length === 4)
						if (e.target.value === '2730')
							setTimeout(() => {
								history.push('/load');
							}, 1000);
						else {
							setWrong(true);
							setTimeout(() => {
								setWrong(false);
								setInput('');
							}, 300);
						}
					setInput(e.target.value.slice(0, 4));
				}}
				value={input}
			/>
			<SevenSegmentDisplay value={input[0] || 10} onColor={wrong ? '#F93D5B' : '#3ff'} />
			<SevenSegmentDisplay value={input[1] || 10} onColor={wrong ? '#F93D5B' : '#f3f'} />
			<SevenSegmentDisplay value={input[2] || 10} onColor={wrong ? '#F93D5B' : '#ff3'} />
			<SevenSegmentDisplay value={input[3] || 10} onColor={wrong ? '#F93D5B' : '#4f4'} />
		</Wrapper>
	);
};

export default App;
