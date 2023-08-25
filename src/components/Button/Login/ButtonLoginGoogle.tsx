import React from 'react'

import Colors from '../../../shared/colors'

import GoogleLogo from '../../../assets/images/logo-google.png'

import Button, { ButtonProps } from '..'

import StyledLoginLogoImg from './styles'

type ButtonLoginGoogleProps = Omit<ButtonProps, 'children'>

const ButtonLoginGoogle: React.FC<ButtonLoginGoogleProps> = (props) => {
	return (
		<Button textColor={Colors.black} color={Colors.white} {...props}>
			<StyledLoginLogoImg src={GoogleLogo} alt="G" />
			Sign Up with Google
		</Button>
	)
}

export default ButtonLoginGoogle
