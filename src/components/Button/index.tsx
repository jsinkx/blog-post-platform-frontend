import React from 'react'

import Colors from '../../shared/colors'

import StyledButton from './styles'

export type ButtonProps = {
	className?: string
	children: React.ReactNode
	onClick: () => void
	isSubmit?: boolean
	height?: string
	width?: string
	margin?: string
	color?: string
	border?: string
	borderColor?: string
	backgroundColor?: string
}

const Button: React.FC<ButtonProps> = ({
	className,
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
			className={className}
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
