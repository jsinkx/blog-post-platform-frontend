import React from 'react'

import { ButtonProps } from '..'

import StyledIconButton from './styles'

type IconButtonProps = {
	size?: string
	children: React.ReactNode
	onClick: () => void
} & ButtonProps

const IconButton: React.FC<IconButtonProps> = ({ size = '23px', children, ...props }) => {
	return (
		<StyledIconButton width={size} height={size} {...props}>
			{children}
		</StyledIconButton>
	)
}

export default IconButton
