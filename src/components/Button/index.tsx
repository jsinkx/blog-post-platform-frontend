import React from 'react'

import Colors from '../../shared/colors'

import StyledButton from './styles'

export type ButtonProps = {
	children: React.ReactNode
	onClick: () => void
	isSubmit?: boolean | undefined
	height?: string | undefined
	width?: string | undefined
	margin?: string | undefined
	color?: string | undefined
	border?: string | undefined
	borderColor?: string | undefined
	backgroundColor?: string | undefined
}

const Button: React.FC<ButtonProps> = ({
	children,
	onClick,
	isSubmit,
	height = '36px',
	width = '300px',
	margin = '0',
	color = Colors.black,
	border = 'none',
	backgroundColor = Colors.white,
}) => {
	return (
		<StyledButton
			type={isSubmit ? 'submit' : 'button'}
			onClick={onClick}
			$height={height}
			$width={width}
			$margin={margin}
			$color={color}
			$border={border}
			$backgroundColor={backgroundColor}
		>
			{children}
		</StyledButton>
	)
}

export default Button
