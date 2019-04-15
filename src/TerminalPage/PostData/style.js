import styled from 'styled-components';

export const Input = styled.input`
	flex-grow: 1;
	border: none;
	outline: none;
	margin: 0 3px;
	font-size: 1rem;
	background: transparent;
	color: inherit;
	font-family: 'Courier New', Courier, monospace;
`;
export const Prompt = styled.div`
	/* >>> */
`;
export const Form = styled.form`
	height: 35px;
	display: flex;
	align-items: center;
	flex-wrap: nowrap;
	justify-content: flex-start;
	@media (max-width: 700px) {
		height: 50px;
		flex-direction: column;
		align-items: stretch;
	}
`;

export const Name = styled.span`
	color: ${props => props.color};
`;

export const CommandWrapper = styled.div`
	flex-grow: 1;
	display: flex;
	align-items: center;
`;
