import React from 'react'

import Colors from '../../shared/colors'

import StyledDividerContainerDiv from './styles'

type DividerProps = {
	width?: string
	color?: string
	text?: string
} & React.HTMLAttributes<HTMLDivElement>

const Divider: React.FC<DividerProps> = ({ width = '300px', color = Colors.white, text, ...props }) => {
	return (
		<StyledDividerContainerDiv $width={width} $color={color} {...props}>
			<div />
			<span> {text} </span>
			<div />
		</StyledDividerContainerDiv>
	)
}

export default Divider
