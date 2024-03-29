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
    NewOrganization,
} from '../pages';
import Feature from '../pages/Feature';
import WhoAreWe from '../pages/WhoAreWe';
import { Discover, JobDiscover, PeopleDiscover } from 'src/components/applicant/discover';
import { AppLayout, ApplicantLayout, AuthLayout, FocusLayout, LandingLayout, RootLayout } from '../layouts';
import Test from 'src/pages/Test';
import Editor from 'src/components/common/editor/Editor';
import { JobApply } from 'src/components/applicant/apply';

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
                            { path: '/app/individual', element: <Editor /> },
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
                            { path: '/app/individual/discover/people', element: <PeopleDiscover /> },
                            {
                                path: '/app/individual/discover/companies',
                                element: <div className="h-full">Companies</div>,
                            },
                        ],
                    },
                    { path: '/app/individual/jobs', element: <JobDiscover /> },
                ],
            },

            {
                path: '/app/settings',
                element: <Settings />,
            },
        ],
    },
    {
        path: '/organization/new',
        element: <NewOrganization />,
    },
    {
        path: '/job',
        element: <FocusLayout />,
        children: [
            {
                path: ':id',
                element: <JobApply />,
            },
        ],
    },
    {
        path: '/get-started',
        element: <GetStarted />,
    },
    { path: '*', element: <NotFound /> },
];

if (process.env.NODE_ENV === 'development') {
    routesConfig[0].children?.push({
        path: 'test',
        element: <Test />,
    });
}

export default routesConfig;
