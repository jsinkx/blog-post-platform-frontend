import React from 'react'
import { FieldValues, useForm } from 'react-hook-form'

import Colors from '../../../shared/colors'

import Button from '../../Button'
import ButtonLoginApple from '../../Button/Login/ButtonLoginApple'
import ButtonLoginGoogle from '../../Button/Login/ButtonLoginGoogle'
import Divider from '../../Divider'

import { StyledInput, StyledLoginForm } from './styles'

const FormLogin: React.FC = () => {
	const { register, handleSubmit } = useForm()

	const onSubmit = (data: FieldValues) => {
		console.log('data', data)
	}

	return (
		<StyledLoginForm onSubmit={handleSubmit(onSubmit)}>
			<h2> Log In </h2>
			<ButtonLoginGoogle onClick={() => null} margin="20px 0 15px" />
			<ButtonLoginApple onClick={() => null} margin="5px 0 20px" />
			<Divider text="Or" />
			<StyledInput {...register('username')} placeholder="Username..." />
			<StyledInput {...register('password')} type="password" placeholder="Password..." />
			<Button textColor={Colors.black} color={Colors.white} type="submit" margin="20px 0 15px">
				Next
			</Button>
			<Button variant="outlined" color={Colors.white} onClick={() => null} margin="5px 0">
				Forgot password ?
			</Button>
		</StyledLoginForm>
	)
}

export default FormLogin
