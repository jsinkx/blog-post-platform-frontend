import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import Colors from '../../../shared/colors'

import isErrorWithMessage from '../../../utils/is-error-with-message'

import Button from '../../Button'
import Error from '../../Error'

import { StyledForm, StyledInput } from './styles'

type FormRegisterValues = {
	username: string
	email: string
	password: string
}

const FormRegister: React.FC = () => {
	const {
		formState: { errors },
		register,
		handleSubmit,
	} = useForm<FormRegisterValues>({
		defaultValues: {
			username: '',
			email: '',
			password: '',
		},
	})

	const [handledErrors, setHandledErrors] = React.useState<string[]>([])

	const handleSuccessRegister = (token: string) => {
		token && window.localStorage.setItem('token', token)
	}
	const handleErrorRegister = (err: unknown) => {
		if (isErrorWithMessage(err)) {
			const { message } = err

			setHandledErrors(Array.isArray(message) ? message : [message])
		} else {
			setHandledErrors(['Something goes wrong'])
		}
	}

	const onSubmit: SubmitHandler<FormRegisterValues> = async () => {
		try {
			const token = ''
			console.log(1)
			handleSuccessRegister(token)
		} catch (err) {
			handleErrorRegister(err)
		}
	}

	return (
		<StyledForm onSubmit={handleSubmit(onSubmit)}>
			<h2> Join Blog Post Platform now.</h2>
			<StyledInput
				placeholder="Username..."
				{...register('username', { required: 'Please provide username' })}
			/>
			{errors.username && <Error message={errors.username.message || ''} />}
			<StyledInput placeholder="Email..." {...register('email', { required: 'Please provide email' })} />
			{errors.email && <Error message={errors.email.message || ''} />}
			<StyledInput
				type="password"
				placeholder="Password..."
				{...register('password', { required: 'Please provide password' })}
			/>
			{errors.password && <Error message={errors.password.message || ''} />}
			{handledErrors && handledErrors.map((err) => <Error key={err} message={err} />)}
			<Button
				type="submit"
				textColor={Colors.black}
				color={Colors.white}
				style={{
					marginTop: '20px',
				}}
			>
				Sign up
			</Button>
		</StyledForm>
	)
}

export default FormRegister
