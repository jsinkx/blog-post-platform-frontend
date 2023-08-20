import React from 'react'

import FormAuthContext, { FormAuthNames } from '../../../context/form-auth-context'

import FormLogin from './FormLogin'
import FormRegister from './FormRegister'

const FormAuth: React.FC = () => {
	const { currentForm } = React.useContext(FormAuthContext)

	switch (currentForm) {
		case FormAuthNames.LOGIN:
			return <FormLogin />
		case FormAuthNames.LOGIN_APPLE:
			return <FormLogin />
		case FormAuthNames.LOGIN_GOOGLE:
			return <FormLogin />
		case FormAuthNames.REGISTER:
			return <FormRegister />
		default:
			return <FormLogin />
	}
}

export default FormAuth
