import { createBrowserRouter } from 'react-router-dom'
import { LandingPage } from '../pages'

const router = createBrowserRouter([
    {
        path: '/',
        element: <LandingPage />,
    },
])

export default router
