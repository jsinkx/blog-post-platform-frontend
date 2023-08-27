import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import HelloPage from '../../pages/HelloPage'

const router = createBrowserRouter([
	{
		path: '/',
		element: <HelloPage />,
	},
])

const Routes: React.FC = () => {
	return <RouterProvider router={router} />
}

export default Routes
