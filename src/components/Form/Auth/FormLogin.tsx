import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import Colors from '../../../shared/colors'

import isErrorWithMessage from '../../../utils/is-error-with-message'

import { fetchLogin } from '../../../redux/slices/auth/slice'

import useAppDispatch from '../../../hooks/useAppDispatch'

import Button from '../../Button'
import ButtonLoginApple from '../../Button/Login/ButtonLoginApple'
import ButtonLoginGoogle from '../../Button/Login/ButtonLoginGoogle'
import Divider from '../../Divider'

import { StyledInput, StyledLoginForm } from './styles'

type FormLoginValues = {
	username: string
	password: string
}

const FormLogin: React.FC = () => {
	const dispatch = useAppDispatch()

	const { register, handleSubmit } = useForm<FormLoginValues>()

	const onSubmit: SubmitHandler<FormLoginValues> = async ({ username, password }) => {
		if (username && password) {
			const loginBody = {
				username,
				password,
			}

			try {
				const { token } = await dispatch(fetchLogin(loginBody)).unwrap()

				token && window.localStorage.setItem('token', token)

				// Todo Create handle success login
			} catch (err: unknown) {
				// Todo Create error handling
				console.log(isErrorWithMessage(err) ? err.message : err)
			}
		}
	}

	return (
		<StyledLoginForm onSubmit={handleSubmit(onSubmit)}>
			<h2> Log In </h2>
			<ButtonLoginGoogle onClick={() => null} margin="20px 0 15px" />
			<ButtonLoginApple onClick={() => null} margin="5px 0 20px" />
			<Divider text="Or" />
			{/*	// Todo Create input errors  */}
			<StyledInput {...register('username')} placeholder="Username..." />
			{/* // Todo create eye icon (show password) */}
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
