import { RouteObject } from 'react-router-dom';
import { LandingPage, NotFound, Pricing, TrustedBy } from '../pages';
import Feature from '../pages/Feature';
import WhoAreWe from '../pages/WhoAreWe';
import { ApplicantLayout, LandingLayout } from '../layouts';

const routesConfig: RouteObject[] = [
    {
        path: '/',
        element: <LandingLayout />,
        children: [
            { path: '/', element: <LandingPage /> },
            { path: 'who-are-we', element: <WhoAreWe /> },
            { path: 'features', element: <Feature /> },
            { path: 'trusted-by', element: <TrustedBy /> },
            { path: 'pricing', element: <Pricing /> },
        ],
    },
    {
        path: '/applicant',
        element: <ApplicantLayout />,
    },
    { path: '*', element: <NotFound /> },
];

export default routesConfig;
