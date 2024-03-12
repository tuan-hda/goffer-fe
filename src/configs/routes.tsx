import { RouteObject } from 'react-router-dom';
import { AboutUs, ContactUs, LandingPage, NotFound, Pricing, SignUp, TrustedBy, Login } from '../pages';
import Feature from '../pages/Feature';
import WhoAreWe from '../pages/WhoAreWe';
import { ApplicantLayout, AuthLayout, LandingLayout } from '../layouts';

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
        children: [
            {
                path: '/applicant/discover',
                element: <></>,
                children: [
                    { path: '/applicant/discover/jobs', element: <></> },
                    { path: '/applicant/discover/people', element: <></> },
                    { path: '/applicant/discover/companies', element: <></> },
                ],
            },
            { path: '/applicant/tab2', element: <></> },
            { path: '/applicant/tab3', element: <></> },
            { path: '/applicant/tab4', element: <></> },
        ],
    },
    {
        path: '/about-us',
        element: <AboutUs />,
    },
    {
        path: '/contact',
        element: <ContactUs />,
    },
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            { path: 'sign-up', element: <SignUp /> },
            { path: 'login', element: <Login /> },
        ],
    },

    { path: '*', element: <NotFound /> },
];

export default routesConfig;
