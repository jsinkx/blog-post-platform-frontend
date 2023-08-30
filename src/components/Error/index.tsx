import React from 'react'

import StyledError from './styles'

type ErrorProps = {
	width?: string
	message: string
} & React.HTMLAttributes<HTMLDivElement>

const Error: React.FC<ErrorProps> = ({ width = '300px', message, ...props }) => {
	return (
		<StyledError $width={width} {...props}>
			{message}
		</StyledError>
	)
}

export default Error
