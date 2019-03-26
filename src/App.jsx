import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import randomColor from 'random-color';
import randomName from 'sillyname';
import { BrowserRouter, Route } from 'react-router-dom';
import FetchData from './FetchData';
import PostData from './PostData';
import QRPage from './QRPage';
import Login from './Login';
import LoadingPage from './LoadingPage';

const GS = createGlobalStyle`
	* { box-sizing:border-box; }
	html, body {
		margin:0;
		color: lightgreen;
		font-family: 'Courier New', Courier, monospace;
		background: #333;
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
`;
const Terminal = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	max-height: 100vh;
	padding: 10px;
`;

const App = () => {
	const [cipher, setCipher] = React.useState(true);
	const [showQR, setShowQR] = React.useState(false);
	const color = randomColor(0.99, 0.99);
	const name = randomName();
	return (
		<BrowserRouter>
			<GS />
			<Route path="/" exact component={Login} />
			<Route path="/load" exact component={LoadingPage} />
			<Route
				path="/term/"
				component={() => (
					<Terminal>
						<FetchData cipher={cipher} />
						<PostData
							name={name}
							color={color.hexString()}
							setCipher={setCipher}
							setShowQR={setShowQR}
						/>
						<QRPage showQR={showQR} />
					</Terminal>
				)}
			/>
		</BrowserRouter>
	);
};
export default App;
