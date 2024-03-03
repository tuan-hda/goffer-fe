import { RouteObject } from 'react-router-dom';
import { LandingPage, NotFound } from '../pages';
import WhoAreWe from '../pages/WhoAreWe';
import { ApplicantLayout, LandingLayout } from '../layouts';

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
    {
        path: '/applicant',
        element: <ApplicantLayout />,
    },
];

export default routesConfig;
