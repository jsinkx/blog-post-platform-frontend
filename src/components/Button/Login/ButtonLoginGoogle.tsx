import React from 'react'

import Colors from '../../../shared/colors'

import Button, { ButtonProps } from '..'

import { StyledGoogleLogoIcon } from './styles'

type ButtonLoginGoogleProps = Omit<ButtonProps, 'children'>

const ButtonLoginGoogle: React.FC<ButtonLoginGoogleProps> = (props) => {
	return (
		<Button textColor={Colors.black} color={Colors.white} {...props}>
			<StyledGoogleLogoIcon />
			Sign Up with Google
		</Button>
	)
}

export default ButtonLoginGoogle
