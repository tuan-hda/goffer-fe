import { RouteObject } from 'react-router-dom'
import { LandingPage, NotFound } from '../pages'
import LandingLayout from '../layouts/LandingLayout'
import WhoAreWe from '../pages/WhoAreWe'

const routesConfig: RouteObject[] = [
    {
        path: '/',
        element: <LandingLayout />,
        children: [
            { path: '/', element: <LandingPage /> },
            { path: 'who-are-we', element: <WhoAreWe /> },
        ],
    },
    { path: '*', element: <NotFound /> },
]

export default routesConfig
