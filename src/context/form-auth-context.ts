import React from 'react'

export enum FormAuthNames {
	LOGIN = 'LOGIN',
	LOGIN_APPLE = 'LOGIN_APPLE',
	LOGIN_GOOGLE = 'LOGIN_GOOGLE',
	REGISTER = 'REGISTER',
}

type InitialContext = {
	currentForm: FormAuthNames
	setCurrentForm: React.Dispatch<React.SetStateAction<FormAuthNames>>
}

const initialContext: InitialContext = {
	currentForm: FormAuthNames.LOGIN,
	setCurrentForm: () => null,
}

const FormAuthContext = React.createContext(initialContext)

export default FormAuthContext
