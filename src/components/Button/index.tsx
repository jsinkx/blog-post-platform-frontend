import React, { ButtonHTMLAttributes } from 'react'

import Colors from '../../shared/colors'

import StyledButton, { ButtonVariant } from './styles'

export type ButtonProps = {
	variant?: ButtonVariant
	className?: string
	children: React.ReactNode
	onClick?: React.MouseEventHandler<HTMLButtonElement>
	type?: 'submit' | 'reset' | 'button'
	width?: string
	height?: string
	margin?: string
	textColor?: string
	color?: string
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button: React.FC<ButtonProps> = ({
	className,
	children,
	onClick,
	type = 'button',
	variant = 'contained',
	width = '300px',
	height = '36px',
	margin = '0',
	textColor = Colors.white,
	color = Colors.black,
	...props
}) => {
	return (
		<StyledButton
			className={className}
			onClick={onClick}
			type={type}
			$variant={variant}
			$width={width}
			$height={height}
			$margin={margin}
			$textColor={textColor}
			$color={color}
			{...props}
		>
			{children}
		</StyledButton>
	)
}

export default Button
