import { RouteObject } from 'react-router-dom'
import { LandingPage, NotFound } from '../pages'
import LandingLayout from '../layouts/LandingLayout'

const routesConfig: RouteObject[] = [
    { path: '/', element: <LandingLayout />, children: [{ path: '/', element: <LandingPage /> }] },
    { path: '*', element: <NotFound /> },
]

export default routesConfig
