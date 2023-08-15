import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import HelloPage from '../../pages/HelloPage'

import GlobalStyles from '../GlobalStyles'

const router = createBrowserRouter([
	{
		path: '/',
		element: <HelloPage />,
	},
])

const Routes: React.FC = () => {
	return (
		<div className="app">
			<GlobalStyles />
			<RouterProvider router={router} />
		</div>
	)
}

export default Routes
