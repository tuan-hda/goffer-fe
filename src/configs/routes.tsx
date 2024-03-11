import { RouteObject } from 'react-router-dom';
import { AboutUs, ContactUs, LandingPage, NotFound, Pricing, SignUp, TrustedBy } from '../pages';
import Feature from '../pages/Feature';
import WhoAreWe from '../pages/WhoAreWe';
import { ApplicantLayout, AuthLayout, LandingLayout } from '../layouts';
import { Login } from 'src/components/auth';

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
