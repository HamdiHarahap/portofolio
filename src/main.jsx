import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import About from './pages/About.jsx'
import Achievement from './pages/Achievement.jsx'
import ErrorPage from './pages/404.jsx'

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
	{
		path: '/about',
		element: <About />,
	},
	{
		path: '/achievement',
		element: <Achievement />,
	},
	{
		path: '*',
		element: <ErrorPage />,
	},
])

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
)
