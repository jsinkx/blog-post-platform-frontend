import React from 'react'

import Button, { ButtonProps } from '..'

import AppleLogo from '../../../assets/images/logo-apple.png'

import StyledLoginLogoImg from './styles'

type ButtonLoginAppleProps = Omit<ButtonProps, 'children'>

const ButtonLoginApple: React.FC<ButtonLoginAppleProps> = (props) => {
	return (
		<Button {...props}>
			<StyledLoginLogoImg src={AppleLogo} alt="Apple" />
			Sign Up with Apple ID
		</Button>
	)
}

export default ButtonLoginApple
