import React from 'react'

import Colors from '../../shared/colors'

type CrossIconProps = {
	size?: string
	color?: string
	className?: string
}

const CrossIcon: React.FC<CrossIconProps> = ({ size = '20px', color = Colors.white, className }) => {
	return (
		<svg
			className={className}
			fill={color}
			width={size}
			height={size}
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M4.293,18.293,10.586,12,4.293,5.707A1,1,0,0,1,5.707,4.293L12,10.586l6.293-6.293a1,1,0,1,1,1.414,1.414L13.414,12l6.293,6.293a1,1,0,1,1-1.414,1.414L12,13.414,5.707,19.707a1,1,0,0,1-1.414-1.414Z" />
		</svg>
	)
}

export default CrossIcon
