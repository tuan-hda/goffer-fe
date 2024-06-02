import { NextUIProvider } from '@nextui-org/react';
import { useRoutes } from 'react-router-dom';
import routesConfig from './configs/routes';
import { PlateController } from '@udecode/plate-common';
import { Toaster } from '@/components/ui/sonner';

import 'non.geist';
// For Geist Mono
import 'non.geist/mono';
import CommandPalette from './components/command/CommandPalette';
import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';
import classNames from 'classnames';

function App() {
    const [isOpen, setOpen] = useState(false);
    const routes = useRoutes(routesConfig);

    const inApp = window.location.pathname.startsWith('/app');

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
                event.preventDefault();
                setOpen(true);
            }
            if (event.key === 'Escape' && isOpen) {
                setOpen(false);
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen]);

    return (
        <PlateController>
            <NextUIProvider>
                {routes}
                <Toaster position="top-right" />
            </NextUIProvider>
            {inApp && (
                <>
                    {createPortal(
                        <div
                            className={classNames(
                                'pointer-events-none fixed bottom-0 left-0 right-0 top-0 z-[9999] flex flex-col items-center justify-center bg-black/70 opacity-0 backdrop-blur-sm transition',
                                isOpen && 'pointer-events-auto opacity-100',
                            )}
                        >
                            <div className="w-full max-w-[500px]">
                                <CommandPalette />
                            </div>
                        </div>,
                        document.body,
                    )}
                </>
            )}
        </PlateController>
    );
}

export default App;
