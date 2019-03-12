import React from 'react';

export default ({ showQR }) => (
	<div
		style={{
			position: 'fixed',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			height: '100vh',
			width: '100vw',
			transition: '1.3s',
			opacity: showQR ? 1 : 0,
			cursorEvent: 'none',
			userSelect: 'none',
		}}
	>
		<img
			src="http://www.unitag.io/qreator/generate?crs=hQythUmB79bGc2uMmaA94NpuHBKNPHew2ymo4Pu7J3axReAf%252BQDoDwN4QD9DveYmQyxw9z3OOfZ3jl9X3ypOcei8gmbIaPN0cYrJmezRg5ZPjhuOrZZ%252FtopyvKvLL1eSYdxgKb7%252FbLCVI2bBYVZLgUeH471RmM%252Fsz5V0zo6MPkbJMgrYzea0%252FQ41fNPPC0aSRUcqqfSRz51dblMWAI5T%252FQ%253D%253D&crd=fhOysE0g3Bah%252BuqXA7NPQ0Oop2JxQVhDd8UvXwH8CPm6TSk%252Bwwg12Q3w825Gsbd0aFLBcdqkQ%252FgmzPF5dWpmfg%253D%253D"
			alt="QR Code"
		/>
	</div>
);
