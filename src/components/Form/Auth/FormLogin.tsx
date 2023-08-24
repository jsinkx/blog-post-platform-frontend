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
			<ButtonLoginGoogle onClick={() => null} margin="20px 0" />
			<ButtonLoginApple onClick={() => null} margin="20px 0" />
			<Divider text="Or" />
			<StyledInput {...register('username')} placeholder="Username..." />
			<StyledInput {...register('password')} type="password" placeholder="Password..." />
			<Button isSubmit margin="20px 0">
				Next
			</Button>
			<Button
				backgroundColor="#00000000"
				color={Colors.white}
				border={`1px solid ${Colors.white}`}
				onClick={() => null}
				margin="20px 0"
			>
				Forgot password ?
			</Button>
		</StyledLoginForm>
	)
}

export default FormLogin
