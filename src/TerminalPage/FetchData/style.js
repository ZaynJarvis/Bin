import styled from 'styled-components';
export const Message = styled.p`
	margin: 0;
	padding: 0;
	line-height: 1.5rem;
	color: #eee;
	& > span {
		color: ${props => `${props.color}`};
	}
`;
export const Wrapper = styled.div`
	max-height: calc(100% - 35px);
	user-select: none;
	@media (max-width: 700px) {
		max-height: calc(100% - 50px);
	}
`;
