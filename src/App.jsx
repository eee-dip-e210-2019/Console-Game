import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import LoadingPage from './LoadingPage';
import TerminalPage from './TerminalPage';

const GS = createGlobalStyle`
	* { box-sizing:border-box; }
	html, body {
		margin:0;
		color: lightgreen;
		font-family: 'Courier New', Courier, monospace;
		background: #222;
		font-size: 20px;
	}
	html {
    overflow: hidden;
    height: 100vh;
	}
	body {
			height: 100%;
			overflow: auto;
	}
	::selection {
		background: #FF5E99;
	}
`;

const App = () => {
	return (
		<BrowserRouter>
			<GS />
			<Route path="/" exact component={LoginPage} />
			<Route path="/load" exact component={LoadingPage} />
			<Route path="/term/" component={TerminalPage} />
		</BrowserRouter>
	);
};
export default App;
