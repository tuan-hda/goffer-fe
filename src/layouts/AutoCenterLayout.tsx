import classNames from 'classnames';
import { matchRoutes, useLocation } from 'react-router-dom';

type AutoCenterLayoutProps = {
    children: React.ReactNode;
};
const AutoCenterLayout = ({ children }: AutoCenterLayoutProps) => {
    const location = useLocation();
    const routes = [
        {
            path: '/app/individual/discover',
            children: [
                {
                    path: 'people',
                },
            ],
        },
    ];

    const match = matchRoutes(routes, location.pathname);

    return (
        <div className="flex w-full">
            <div
                className={classNames('m-auto w-full', {
                    'max-w-7xl': !match || match.length === 0,
                })}
            >
                {children}
            </div>
        </div>
    );
};

export default AutoCenterLayout;
