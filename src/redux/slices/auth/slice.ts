import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import type { AxiosError, AxiosResponse } from 'axios'

import type { AuthLoginBody, AuthLoginError, AuthLoginResponse, IAuthState } from './types'

import axios from '../../../shared/axios'
import Status from '../../../shared/status'

// Thunks

export const fetchLogin = createAsyncThunk<AuthLoginResponse, AuthLoginBody>(
	'auth/fetchLogin',
	async (body, { rejectWithValue }) => {
		try {
			const { data } = await axios.post<AuthLoginBody, AxiosResponse<AuthLoginResponse>, AuthLoginBody>(
				'/api/auth/login',
				body,
			)

			return data
		} catch (err) {
			const { response } = err as AxiosError<AuthLoginError>
			return rejectWithValue(response?.data)
		}
	},
)

// Slice

const initialState: IAuthState = {
	data: null,
	status: Status.INIT,
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		// Login
		builder
			.addCase(fetchLogin.pending, (state) => {
				state.data = null
				state.status = Status.LOADING
			})
			.addCase(fetchLogin.fulfilled, (state, action) => {
				state.data = action.payload
				state.status = Status.LOADED
			})
			.addCase(fetchLogin.rejected, (state) => {
				state.data = null
				state.status = Status.ERROR
			})
	},
})

export const authReducer = authSlice.reducer
