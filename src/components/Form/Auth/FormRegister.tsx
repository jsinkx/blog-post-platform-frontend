import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import Colors from '../../../shared/colors'

import isErrorWithMessage from '../../../utils/is-error-with-message'

import Button from '../../Button'
import Error from '../../Error'
import Stepper from '../../Stepper'

import { StyledForm, StyledInput } from './styles'

type FormRegisterValues = {
	username: string
	firstName: string
	lastName: string
	patronymic?: string
	email: string
	password: string
}

const FormRegister: React.FC = () => {
	const {
		formState: { errors },
		register,
		handleSubmit,
		trigger,
	} = useForm<FormRegisterValues>({
		defaultValues: {
			username: '',
			email: '',
			password: '',
		},
	})

	const [activeStep, setActiveStep] = React.useState(1)

	const handleNextStep = () => {
		trigger().then((isValid) => isValid && setActiveStep((p) => p + 1))
	}
	const handleBackStep = () => setActiveStep((p) => p - 1)

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

			handleSuccessRegister(token)
		} catch (err) {
			handleErrorRegister(err)
		}
	}

	return (
		<StyledForm onSubmit={handleSubmit(onSubmit)}>
			<h2> Join Blog Post Platform now.</h2>
			<Stepper
				activeStep={activeStep}
				maxStep={2}
				handleNextStep={handleNextStep}
				handleBackStep={handleBackStep}
			>
				{activeStep === 1 && (
					<>
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
					</>
				)}
				{activeStep === 2 && (
					<>
						<StyledInput
							placeholder="First name..."
							{...register('firstName', { required: 'Please provide first name' })}
						/>
						{errors.firstName && <Error message={errors.firstName.message || ''} />}
						<StyledInput
							placeholder="Last name..."
							{...register('lastName', { required: 'Please provide last name' })}
						/>
						{errors.lastName && <Error message={errors.lastName.message || ''} />}
						<StyledInput placeholder="Patronymic..." {...register('patronymic')} />
						<Button
							type="submit"
							textColor={Colors.black}
							color={Colors.white}
							style={{
								marginBlock: '20px',
							}}
						>
							Sign up
						</Button>
					</>
				)}
			</Stepper>
			{handledErrors && handledErrors.map((err) => <Error key={err} message={err} />)}
		</StyledForm>
	)
}

export default FormRegister
