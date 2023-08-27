import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import type { AxiosError, AxiosResponse } from 'axios'

import type { AuthLoginBody, AuthLoginResponse, AuthResponseError, IAuthState } from './types'

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
			const { response } = err as AxiosError<AuthResponseError>

			return rejectWithValue(response?.data)
		}
	},
)

export const fetchAuthMe = createAsyncThunk<AuthLoginResponse, void>(
	'auth/fetchAuthMe',
	async (_, { rejectWithValue }) => {
		try {
			const { data } = await axios.get<void, AxiosResponse<AuthLoginResponse>, void>('/api/auth/me')

			return data
		} catch (err) {
			const { response } = err as AxiosError<AuthResponseError>

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

		// AuthMe
		builder
			.addCase(fetchAuthMe.pending, (state) => {
				state.data = null
				state.status = Status.LOADING
			})
			.addCase(fetchAuthMe.fulfilled, (state, action) => {
				state.data = action.payload
				state.status = Status.LOADED
			})
			.addCase(fetchAuthMe.rejected, (state) => {
				state.data = null
				state.status = Status.ERROR
			})
	},
})

export const authReducer = authSlice.reducer
