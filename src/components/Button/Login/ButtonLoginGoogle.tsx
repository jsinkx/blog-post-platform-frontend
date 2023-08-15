import React from 'react'

import Button, { ButtonProps } from '..'

import GoogleLogo from '../../../assets/images/logo-google.png'

import StyledLoginLogoImg from './styles'

type ButtonLoginGoogleProps = Omit<ButtonProps, 'children'>

const ButtonLoginGoogle: React.FC<ButtonLoginGoogleProps> = (props) => {
	return (
		<Button {...props}>
			<StyledLoginLogoImg src={GoogleLogo} alt="G" />
			Sign Up with Google
		</Button>
	)
}

export default ButtonLoginGoogle
