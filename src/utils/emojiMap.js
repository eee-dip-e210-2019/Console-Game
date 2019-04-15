function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
}

// prettier-ignore
const emoji = [
	'🐶','🐱','🐭','🐹','🐰','🦊','🐻','🐼','🐨','🐯','🦁','🐮','🐷','🐽','🐸','🐵','🙈','🙉','🙊','🐒','🐔','🐧','🐦','🐤','🐣','🐥',
	'🐗','🐴','🦄','🐝','🐛','🦋','🐌','🐚','🦂','🐢','🐍','🦎','🦐','🦀','🐡','🐠','🐅','🐄','🐎','🐖','🦌','🐩','🐈','🐓','🦃','🕊',
	'🐇','🐁','🐀','🐿','🐲','🌲','🌳','🎍','🍂','🍁','🍄','🌾','🌹','🥀',
	'😀','😁','😂','🤣','😃','😄','😅','😆','😉','😊','😋','😎','😍','😘','😗','😙','😚','🙂','🤗',
	'🤪','😵','😡','😠','🤬','😷','🤒','🤕','🤢','🤮','🤧','😇','🤠','🤡','🤥','🤫','🤭','🧐','🤓',
	'😈','👿','👹','👺','💀','👻','👽','🤖','💩','😺','😸','😹','😻','😼','😽','🙀','😿','😾'
];

const charArray = [];
for (let i = 0x21; i <= 0x7e; i++) {
	charArray.push(String.fromCharCode(i));
}

export const constructEmojiMap = (shuffle = true) =>
	charArray.reduce((agg, value, index) => {
		if (shuffle) shuffleArray(emoji);
		return { ...agg, [value]: emoji[index] };
	}, {});

export const basicEmojiMap = constructEmojiMap(false);

export const mapToEmoji = (string, emojiMap) => {
	const inputArray = string.toLowerCase().split('');
	const resultArray = inputArray.map(v => emojiMap[v] || v);
	return resultArray.join('');
};
