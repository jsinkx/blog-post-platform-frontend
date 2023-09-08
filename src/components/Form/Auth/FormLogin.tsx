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
import Error from '../../Error'

import { StyledForm, StyledInput } from './styles'

type FormLoginValues = {
	username: string
	password: string
}

const FormLogin: React.FC = () => {
	const dispatch = useAppDispatch()

	const {
		formState: { errors },
		register,
		handleSubmit,
	} = useForm<FormLoginValues>({
		defaultValues: {
			username: '',
			password: '',
		},
	})

	const [handledErrors, setHandledErrors] = React.useState<string[]>([])

	const handleSuccessLogin = (token: string) => {
		token && window.localStorage.setItem('token', token)
	}

	const handleErrorLogin = (err: unknown) => {
		if (isErrorWithMessage(err)) {
			const { message } = err

			setHandledErrors(Array.isArray(message) ? message : [message])
		} else {
			setHandledErrors(['Something goes wrong'])
		}
	}

	const onSubmit: SubmitHandler<FormLoginValues> = async ({ username, password }) => {
		const loginBody = {
			username,
			password,
		}

		try {
			const { token } = await dispatch(fetchLogin(loginBody)).unwrap()

			handleSuccessLogin(token)
		} catch (err) {
			handleErrorLogin(err)
		}
	}

	return (
		<StyledForm onSubmit={handleSubmit(onSubmit)}>
			<h2> Log In </h2>
			<ButtonLoginGoogle
				onClick={() => null}
				style={{
					margin: '20px 0 15px',
				}}
			/>
			<ButtonLoginApple
				onClick={() => null}
				style={{
					margin: '5px 0 20px',
				}}
			/>
			<Divider text="Or" />
			<StyledInput
				{...register('username', { required: 'Please provide username' })}
				placeholder="Username..."
			/>
			{errors.username && <Error message={errors.username.message || ''} />}
			<StyledInput
				{...register('password', { required: 'Please provide password' })}
				type="password"
				placeholder="Password..."
			/>
			{errors.password && <Error message={errors.password.message || ''} />}
			{handledErrors && handledErrors.map((err) => <Error key={err} message={err} />)}
			<Button
				textColor={Colors.black}
				color={Colors.white}
				type="submit"
				style={{
					margin: '20px 0 15px',
				}}
			>
				Next
			</Button>
			<Button
				variant="outlined"
				color={Colors.white}
				onClick={() => null}
				style={{
					marginBlock: '5px',
				}}
			>
				Forgot password ?
			</Button>
		</StyledForm>
	)
}

export default FormLogin
