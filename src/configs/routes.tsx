import { RouteObject } from 'react-router-dom';
import { AboutUs, ContactUs, LandingPage, NotFound, Pricing, SignUp, TrustedBy, Login } from '../pages';
import Feature from '../pages/Feature';
import WhoAreWe from '../pages/WhoAreWe';
import { ApplicantLayout, AuthLayout, LandingLayout, RootLayout } from '../layouts';
import { Discover, JobDiscover, PeopleDiscover } from 'src/components/applicant/discover';

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
                path: '/individual',
                element: <ApplicantLayout />,
                children: [
                    { path: 'home', element: <>Home</> },
                    {
                        path: 'discover',
                        element: <Discover />,
                        children: [
                            { path: 'jobs', element: <JobDiscover /> },
                            { path: 'people', element: <PeopleDiscover /> },
                            { path: 'companies', element: <>Companies</> },
                        ],
                    },
                    { path: ':user_id', element: <>User Profile</> },
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
        ],
    },
];

export default routesConfig;
