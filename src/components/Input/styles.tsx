import styled from 'styled-components'

import Colors from '../../shared/colors'

type StyledInputProps = {
	$height: string
	$width: string
}

const StyledInput = styled.input<StyledInputProps>`
	height: ${({ $height }) => $height};
	width: ${({ $width }) => $width};
	padding-inline: 10px;
	font-size: 1em;
	border-radius: 5px;
	color: ${Colors.white};
	border: 1px solid ${Colors.grey};
	transition:
		all,
		color 0.2s ease-in-out;
	background: transparent;
	box-sizing: border-box;
	outline: none;

	&::placeholder {
		color: #71767b;
	}

	&:-webkit-autofill {
		-webkit-text-fill-color: ${Colors.white};
		box-shadow: 0 0 0px 1000px ${Colors.black} inset;
		font-size: 1em;
	}
`

export default StyledInput
