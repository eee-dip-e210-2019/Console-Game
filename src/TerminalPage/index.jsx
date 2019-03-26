import React from 'react';
import styled from 'styled-components';
import randomColor from 'random-color';
import randomName from 'sillyname';
import FetchData from './FetchData';
import PostData from './PostData';
import QRPage from './QRPage';

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
		<Terminal>
			<FetchData cipher={cipher} />
			<PostData name={name} color={color.hexString()} setCipher={setCipher} setShowQR={setShowQR} />
			<QRPage showQR={showQR} />
		</Terminal>
	);
};
export default App;
