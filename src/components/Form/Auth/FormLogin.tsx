import React from 'react'
import { FieldValues, useForm } from 'react-hook-form'

import Colors from '../../../shared/colors'

import useInput from '../../../hooks/useInput'

import Button from '../../Button'
import ButtonLoginApple from '../../Button/Login/ButtonLoginApple'
import ButtonLoginGoogle from '../../Button/Login/ButtonLoginGoogle'
import Divider from '../../Divider'

import { StyledInput, StyledLoginForm } from './styles'

const FormLogin: React.FC = () => {
	const { register, handleSubmit } = useForm()

	// const username = useInput('')
	const password = useInput('')

	const onSubmit = (data: FieldValues) => {
		console.log(data)
	}

	return (
		<StyledLoginForm onSubmit={handleSubmit(onSubmit)}>
			<h2> Log In </h2>
			<ButtonLoginGoogle onClick={() => null} margin="20px 0" />
			<ButtonLoginApple onClick={() => null} margin="20px 0" />
			<Divider text="Or" />
			{/* <StyledInput name="username" value={username.value} onChange={username.onChange} placeholder="Login..." /> */}
			<StyledInput
				{...register('password', { required: true })}
				type="password"
				name="password"
				value={password.value}
				onChange={password.onChange}
				placeholder="Password..."
			/>
			<input type="submit" />
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
