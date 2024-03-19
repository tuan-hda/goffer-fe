import { NextUIProvider } from '@nextui-org/react';
import { useRoutes } from 'react-router-dom';
import routesConfig from './configs/routes';
import { Toaster } from 'react-hot-toast';

function App() {
    const routes = useRoutes(routesConfig);

    return (
        <NextUIProvider>
            {routes}
            <Toaster
                toastOptions={{
                    style: {
                        maxWidth: 500,
                    },
                }}
            />
        </NextUIProvider>
    );
}

export default App;
