import React from 'react'

import { fetchAuthMe } from '../../redux/slices/auth/slice'

import useAppDispatch from '../../hooks/useAppDispatch'

import GlobalStyles from '../GlobalStyles'
import Routes from '../Routes'

const App: React.FC = () => {
	const dispatch = useAppDispatch()

	React.useEffect(() => {
		const token = window.localStorage.getItem('token')

		token && dispatch(fetchAuthMe())
	}, [dispatch])

	return (
		<div className="app">
			<GlobalStyles />
			<Routes />
		</div>
	)
}

export default App
