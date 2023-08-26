import axios from 'axios'

import { SERVER_URL } from './constants'

const instance = axios.create({ baseURL: SERVER_URL })

instance.interceptors.request.use((config) => {
	const token = window.localStorage.getItem('token')

	config.headers!.Authorization = `Bearer ${token}`

	return config
})

export default instance
