import { RouteObject } from 'react-router-dom';
import { LandingPage, NotFound } from '../pages';
import LandingLayout from '../layouts/LandingLayout';
import WhoAreWe from '../pages/WhoAreWe';
import { HomePage } from '../pages/applicant';
import Feature from '../pages/Feature';

const routesConfig: RouteObject[] = [
    { path: '/applicant/find-work', element: <HomePage /> },
    {
        path: '/',
        element: <LandingLayout />,
        children: [
            { path: '/', element: <LandingPage /> },
            { path: 'who-are-we', element: <WhoAreWe /> },
            { path: 'feature', element: <Feature /> },
        ],
    },
    { path: '*', element: <NotFound /> },
];

export default routesConfig;
