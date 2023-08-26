import { RootState } from '../../types'

export const selectAuthData = (state: RootState) => state.auth.data

export const selectAuthStatus = (state: RootState) => state.auth.status
