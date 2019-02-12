import React from 'react';
import ReactGA from 'react-ga';
import styled, { createGlobalStyle } from 'styled-components';
import randomColor from 'random-color';
import randomName from 'random-name';

import FetchData from './FetchData';
import PostData from './PostData';

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

function initializeReactGA() {
	ReactGA.initialize('UA-124593102-3');
	ReactGA.pageview('/homepage');
}

const App = () => {
	initializeReactGA();
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
