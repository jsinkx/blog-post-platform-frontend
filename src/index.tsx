import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import store from './redux/store'

import Routes from './components/Routes'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<Routes />
		</Provider>
	</React.StrictMode>,
)
