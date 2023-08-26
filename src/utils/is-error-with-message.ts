export type ErrorWithMessage = { message: string } | { message: string[] }

// Returns true if error rejected from server and has data
const isErrorWithMessage = (error: unknown): error is ErrorWithMessage => {
	return typeof error === 'object' && error !== null && 'message' in error
}

export default isErrorWithMessage
