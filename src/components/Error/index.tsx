import React from 'react'

import StyledError from './styles'

type ErrorProps = {
	width?: string
	message: string
}

const Error: React.FC<ErrorProps> = ({ width = '300px', message }) => {
	return <StyledError $width={width}>{message}</StyledError>
}

export default Error
