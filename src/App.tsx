import { NextUIProvider } from '@nextui-org/react'
import { useRoutes } from 'react-router-dom'
import routesConfig from './configs/routes'

function App() {
    const routes = useRoutes(routesConfig)

    return <NextUIProvider>{routes}</NextUIProvider>
}

export default App
