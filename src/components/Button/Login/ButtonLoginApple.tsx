import React from 'react'

import Colors from '../../../shared/colors'

import Button, { ButtonProps } from '..'

import { StyledAppleLogoIcon } from './styles'

type ButtonLoginAppleProps = Omit<ButtonProps, 'children'>

const ButtonLoginApple: React.FC<ButtonLoginAppleProps> = (props) => {
	return (
		<Button textColor={Colors.black} color={Colors.white} {...props}>
			<StyledAppleLogoIcon />
			Sign Up with Apple ID
		</Button>
	)
}

export default ButtonLoginApple
