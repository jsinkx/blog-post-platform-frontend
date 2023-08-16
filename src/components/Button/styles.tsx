import styled from 'styled-components'

type StyledButtonProps = {
	$height: string
	$width: string
	$margin: string
	$color: string
	$border: string
	$backgroundColor: string
}

const StyledButton = styled.button<StyledButtonProps>`
	display: flex;
	align-items: center;
	justify-content: center;
	height: ${({ $height }) => $height};
	width: ${({ $width }) => $width};
	margin: ${({ $margin }) => $margin};
	padding: 10px 30px;
	font-weight: bold;
	border-radius: 20px;
	color: ${({ $color }) => $color};
	background-color: ${({ $backgroundColor }) => $backgroundColor};
	border: ${({ $border }) => $border};
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	user-select: none;
	outline: none;
	box-shadow: none;

	&:hover {
		opacity: 0.77;
	}
`

export default StyledButton
