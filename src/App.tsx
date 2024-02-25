import { NextUIProvider } from '@nextui-org/react'
import { useNavigate, useRoutes } from 'react-router-dom'
import routesConfig from './configs/routes'

function App() {
    const navigate = useNavigate()
    const routes = useRoutes(routesConfig)

    return <NextUIProvider navigate={navigate}>{routes}</NextUIProvider>
}

export default App
