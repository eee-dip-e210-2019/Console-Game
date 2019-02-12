import styled from 'styled-components';
export const Message = styled.span`
	line-height: 1.5rem;
	color: #eee;
	& > span {
		color: ${props => `${props.color}`};
		background: ;
	}
`;
export const Wrapper = styled.div`
	pointer-events: none;
`;
