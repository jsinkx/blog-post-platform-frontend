export const IS_PROD = process.env.NODE_ENV === 'production'

export const CLIENT_URL = `${window.location.protocol}//${window.location.host}`

export const SERVER_URL = IS_PROD
	? process.env.REACT_APP_API_URL || 'http://localhost:5000'
	: 'http://localhost:5000'
