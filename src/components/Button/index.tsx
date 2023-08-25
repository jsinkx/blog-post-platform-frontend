import React, { ButtonHTMLAttributes } from 'react'

import Colors from '../../shared/colors'

import StyledButton, { ButtonVariant } from './styles'

export type ButtonProps = {
	variant?: ButtonVariant
	className?: string
	children: React.ReactNode
	onClick?: React.MouseEventHandler<HTMLButtonElement>
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
