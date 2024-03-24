import { Navigate, RouteObject } from 'react-router-dom';
import {
    AboutUs,
    ContactUs,
    LandingPage,
    NotFound,
    Pricing,
    SignUp,
    TrustedBy,
    Login,
    ForgotPassword,
    ResetPassword,
    GetStarted,
    Settings,
} from '../pages';
import Feature from '../pages/Feature';
import WhoAreWe from '../pages/WhoAreWe';
import { Discover, JobDiscover, PeopleDiscover } from 'src/components/applicant/discover';
import { AppLayout, ApplicantLayout, AuthLayout, LandingLayout, RootLayout } from '../layouts';
import Test from 'src/pages/Test';
import Editor from 'src/components/common/editor/Editor';

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
                    { path: 'forgot-password', element: <ForgotPassword /> },
                    { path: 'reset-password', element: <ResetPassword /> },
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
                    {
                        path: '/app/get-started',
                        element: <GetStarted />,
                    },
                    {
                        path: '/app/settings',
                        element: <Settings />,
                    },
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
                            { index: true, element: <Navigate to="home" /> },
                            { path: '/app/individual/home', element: <Editor /> },
                            {
                                path: '/app/individual/discover',
                                element: <Discover />,
                                children: [
                                    { path: '/app/individual/discover/jobs', element: <JobDiscover /> },
                                    { path: '/app/individual/discover/people', element: <PeopleDiscover /> },
                                    { path: '/app/individual/discover/companies', element: <>Companies</> },
                                ],
                            },
                            { path: '/app/individual/:user_id', element: <>User Profile</> },
                        ],
                    },
                ],
            },
            { path: '*', element: <NotFound /> },
        ],
    },
];

if (process.env.NODE_ENV === 'development') {
    routesConfig[0].children?.push({
        path: 'test',
        element: <Test />,
    });
}

export default routesConfig;
