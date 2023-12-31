import Status from '../../../shared/status'

import type { ErrorWithMessage } from '../../../utils/is-error-with-message'

export type AuthRegisterBody = {
	username: string
	password: string
}

export type AuthRegisterResponse = {
	_id: string
	username: string
	firstName: string
	lastName: string
	patronymic: string
	email: string
	avatar: string
	posts: unknown[] // ? While posts interface creating in progress, type currently is unknown
	blogs: unknown[] // ? While blogs interface creating in progress, type currently is unknown
	createdAt: string
	updatedAt: string
	token: string
}

export type AuthLoginBody = {
	username: string
	password: string
}

export type AuthLoginResponse = AuthRegisterResponse

export type AuthResponseError = {
	response: {
		data: ErrorWithMessage
	}
}

export type AuthData = AuthRegisterResponse | AuthLoginResponse | null

export type IAuthState = {
	data: AuthData
	status: Status
}
