import React from 'react'

import Colors from '../../shared/colors'

import StyledButton, { ButtonVariant } from './styles'

export type ButtonProps = {
	variant?: ButtonVariant
	children: React.ReactNode
	width?: string
	height?: string
	textColor?: string
	color?: string
	disabled?: boolean
	type?: 'button' | 'submit' | 'reset'
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button: React.FC<ButtonProps> = ({
	children,
	variant = 'contained',
	width = '300px',
	height = '36px',
	textColor = Colors.white,
	color = Colors.black,
	disabled,
	type = 'button',
	...props
}) => {
	return (
		<StyledButton
			$variant={variant}
			$width={width}
			$height={height}
			$textColor={textColor}
			$color={color}
			disabled={disabled}
			type={type}
			{...props}
		>
			{children}
		</StyledButton>
	)
}

export default Button
