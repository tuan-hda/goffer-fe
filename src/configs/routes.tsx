import { RouteObject } from 'react-router-dom';
import { AboutUs, ContactUs, LandingPage, NotFound, Pricing, SignUp, TrustedBy, Login } from '../pages';
import Feature from '../pages/Feature';
import WhoAreWe from '../pages/WhoAreWe';
import { AppLayout, ApplicantLayout, AuthLayout, LandingLayout, RootLayout } from '../layouts';

const routesConfig: RouteObject[] = [
    {
        path: '/',
        element: <RootLayout />,
        children: [
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
            {
                path: '/app',
                element: <AppLayout />,
                children: [
                    {
                        path: '/app/individual',
                        element: <ApplicantLayout />,
                        children: [
                            {
                                path: '/app/individual/discover',
                                element: <></>,
                                children: [
                                    { path: '/app/individual/discover/jobs', element: <></> },
                                    { path: '/app/individual/discover/people', element: <></> },
                                    { path: '/app/individual/discover/companies', element: <></> },
                                ],
                            },
                            { path: '/app/individual/tab2', element: <></> },
                            { path: '/app/individual/tab3', element: <></> },
                            { path: '/app/individual/tab4', element: <></> },
                        ],
                    },
                ],
            },
            { path: '*', element: <NotFound /> },
        ],
    },
];

export default routesConfig;
