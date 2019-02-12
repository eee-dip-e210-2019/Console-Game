import React from 'react';
import FetchData from './FetchData';
import PostData from './PostData';
import styled, { createGlobalStyle } from 'styled-components';
import randomColor from 'random-color';
import randomName from 'random-name';

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
	const color = randomColor(0.99, 0.99);
	const name = randomName.first();
	return (
		<Terminal>
			<GS />
			<FetchData />
			<PostData name={name} color={color.hexString()} />
		</Terminal>
	);
};
export default App;
