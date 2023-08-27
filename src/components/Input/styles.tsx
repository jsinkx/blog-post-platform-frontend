import styled from 'styled-components'

import Colors from '../../shared/colors'

import IconButton from '../Button/IconButton'

type StyledInputWrapperProps = {
	$inputHeight: string
	$inputWidth: string
}

export const StyledIconButton = styled(IconButton)``

const StyledInputWrapper = styled.div<StyledInputWrapperProps>`
	display: flex;
	align-items: center;
	width: ${({ $inputWidth }) => $inputWidth};
	height: ${({ $inputHeight }) => $inputHeight};
	padding: 5px 10px;
	border: 1px solid ${Colors.grey};
	border-radius: 5px;
	box-sizing: border-box;
	background: transparent;
	transition: all 0.2s ease-in-out;

	input {
		width: 100%;
		height: 100%;
		font-size: 1em;
		color: ${Colors.white};
		border: none;
		margin: 0;
		padding: 0;
		transition: all 0.2s ease-in-out;
		background: transparent;
		box-sizing: border-box;
		outline: none;

		&::placeholder {
			color: #71767b;
			user-select: none;
		}

		&:-webkit-autofill {
			-webkit-text-fill-color: ${Colors.white};
			box-shadow: 0 0 0px 1000px ${Colors.black} inset;
			font-size: 1em;
		}
	}
`

export default StyledInputWrapper
