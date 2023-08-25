import React from 'react'

import Colors from '../../../shared/colors'

import AppleLogo from '../../../assets/images/logo-apple.png'

import Button, { ButtonProps } from '..'

import StyledLoginLogoImg from './styles'

type ButtonLoginAppleProps = Omit<ButtonProps, 'children'>

const ButtonLoginApple: React.FC<ButtonLoginAppleProps> = (props) => {
	return (
		<Button textColor={Colors.black} color={Colors.white} {...props}>
			<StyledLoginLogoImg src={AppleLogo} alt="Apple" />
			Sign Up with Apple ID
		</Button>
	)
}

export default ButtonLoginApple
