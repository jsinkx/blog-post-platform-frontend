import styled from 'styled-components'

export type ButtonVariant = 'text' | 'contained' | 'outlined'

type StyledButtonProps = {
	$variant: ButtonVariant
	$width: string
	$height: string
	$margin: string
	$textColor: string
	$color: string
}

const variantStyles = (textColor: string, color: string, variant: ButtonVariant) => {
	const styles = {
		text: `
			color: ${color};
			background: transparent;
			border: none;
	`,
		contained: `
			color: ${textColor};
			background-color: ${color};
			border: 1px solid ${color};`,
		outlined: `
			color: ${color};
			background-color: transparent;
			border: 1px solid ${color};`,
	}

	return styles[variant]
}

const StyledButton = styled.button<StyledButtonProps>`
	display: flex;
	align-items: center;
	justify-content: center;
	${({ $textColor, $color, $variant }) => variantStyles($textColor, $color, $variant)}
	height: ${({ $height }) => $height};
	width: ${({ $width }) => $width};
	margin: ${({ $margin }) => $margin};
	padding: 10px 30px;
	font-weight: bold;
	border-radius: 20px;
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
