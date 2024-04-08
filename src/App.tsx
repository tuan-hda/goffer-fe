import { NextUIProvider } from '@nextui-org/react';
import { useRoutes } from 'react-router-dom';
import routesConfig from './configs/routes';
import { Toaster } from 'react-hot-toast';
import { PlateController } from '@udecode/plate-common';
import 'non.geist';

// For Geist Mono
import 'non.geist/mono';

function App() {
    const routes = useRoutes(routesConfig);

    return (
        <PlateController>
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
        </PlateController>
    );
}

export default App;
