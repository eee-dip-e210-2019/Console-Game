import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	user-select: none;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;
const Loader = styled.div`
	width: 80vw;
	height: 2rem;
	overflow: hidden;
	font-style: italic;
`;
const Landing = styled.pre`
	margin: 10rem 0;
`;
const Gradiant = styled.div`
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	background: linear-gradient(90deg, #3ff, #85ec85, #3ff);
	-webkit-text-fill-color: transparent;
	-webkit-background-clip: text;
	background-size: 300% 300%;

	animation: myAni 3s ease infinite;

	@keyframes myAni {
		0%,
		100% {
			background-position: 0% 0%;
		}
		50% {
			background-position: 50% 100%;
		}
	}
`;
export default ({ history }) => {
	const LoginText = `
    ____             ____                             _  __
   / __ \\_________  / __/__  ______________  _____   | |/ /
  / /_/ / ___/ __ \\/ /_/ _ \\/ ___/ ___/ __ \\/ ___/   |   /
 / ____/ /  / /_/ / __/  __(__  |__  ) /_/ / /      /   |
/_/   /_/   \\____/_/  \\___/____/____/\\____/_/      /_/|_|
`;
	let count = 0;
	const [load, setLoad] = React.useState('');
	React.useEffect(() => {
		const interval = setInterval(() => {
			count += 1;
			setLoad('#'.repeat(count));
		}, 90);
		return () => {
			clearInterval(interval);
		};
	}, []);

	React.useEffect(() => {
		const to = setTimeout(() => {
			history.push('/term');
		}, 12000);
		return () => {
			clearTimeout(to);
		};
	}, []);

	return (
		<Wrapper>
			<Gradiant>
				<p className="success">Login Successful! Welcome</p>
				<Landing>{LoginText}</Landing>
				<Loader>{load}</Loader>
			</Gradiant>
		</Wrapper>
	);
};
