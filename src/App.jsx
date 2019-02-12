import React from 'react';
import FetchData from './FetchData';
import PostData from './PostData';
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
	padding: 10px;
`;

const App = () => {
	const [name, setName] = React.useState('');
	const [color, setColor] = React.useState('');
	React.useEffect(() => {
		fetch('http://uinames.com/api/')
			.then(res => res.json())
			.then(res => setName(res.name));
		fetch('http://www.colr.org/json/color/random')
			.then(res => res.json())
			.then(res => setColor(res['new_color']));
	}, []);
	return (
		<Terminal>
			<GS />
			<FetchData />
			<PostData name={name} color={color} />
		</Terminal>
	);
};
export default App;
