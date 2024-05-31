import { Outlet, RouteObject } from 'react-router-dom';
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
    OrgSettings,
    OrgJobs,
    NewJob,
    JobDetail,
    Questions,
    CustomFeedback,
    Finalize,
    ApplicantDetail,
    PreviewJob,
    WhoAreWe,
    Feature,
    Profile,
    Team,
    Notifications,
    Assessment,
    AssessmentSession,
    AssessmentSuccess,
    Messages,
    Enhance,
    Dashboard,
    Portfolio,
    NewProject,
    Reports,
} from '../pages';
import { Discover, JobDiscover } from '@/components/applicant/discover';
import {
    AdminLayout,
    AppLayout,
    ApplicantLayout,
    AssessmentLayout,
    AuthLayout,
    FocusLayout,
    LandingLayout,
    OrgDetailLayout,
    OrgLayout,
    RootLayout,
} from '../layouts';
import Test from '@/pages/Test';
import Editor from '@/components/common/editor/Editor';
import { Application, JobApply } from '@/components/applicant/apply';
import { Ditto, OnceInAMoon, PortfolioLayout } from '@/components/portfolio';
import ProjectDetail from '@/components/portfolio/ProjectDetail';
import DrawRectangle from '@/components/canvas/DrawRectangle';

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
                        path: '/app',
                        element: <ApplicantLayout />,
                        children: [
                            { path: '/app/home', element: <Editor /> },
                            {
                                path: '/app/discover',
                                element: <Discover />,
                                // children: [
                                //     { path: '/app/individual/discover/people', element: <PeopleDiscover /> },
                                //     { path: '/app/individual/discover/companies', element: <>Companies</> },
                                // ],
                            },
                            { path: '/app/jobs', element: <JobDiscover /> },
                        ],
                    },
                    {
                        path: '/app/admin',
                        element: <AdminLayout />,
                        children: [
                            {
                                index: true,
                                element: <Dashboard />,
                            },
                            {
                                path: 'reports',
                                element: <Reports />,
                            },
                        ],
                    },
                    {
                        path: '/app/profile',
                        element: <Profile />,
                    },
                    {
                        path: '/app/portfolio',
                        element: <Portfolio />,
                    },
                    {
                        path: '/app/messages',
                        element: <Messages />,
                    },
                    {
                        path: '/app/enhance',
                        element: <Enhance />,
                    },
                    {
                        path: '/app/settings',
                        element: <Settings />,
                    },
                    {
                        path: '/app/notifications',
                        element: <Notifications />,
                    },
                    {
                        path: '/app/organization/:domain',
                        element: <OrgJobs />,
                    },
                    {
                        path: '/app/organization/:domain/settings',
                        element: <OrgSettings />,
                    },
                    {
                        path: '/app/organization/:domain/notifications',
                        element: <Notifications />,
                    },
                    {
                        path: '/app/organization/:domain/team',
                        element: <Team />,
                    },
                    {
                        path: '/app/organization/:domain/job/:id',
                        element: (
                            <OrgLayout>
                                <OrgDetailLayout>
                                    <Outlet />
                                </OrgDetailLayout>
                            </OrgLayout>
                        ),
                        children: [
                            {
                                path: '/app/organization/:domain/job/:id',
                                element: <JobDetail />,
                            },
                            {
                                path: '/app/organization/:domain/job/:id/preview',
                                element: <PreviewJob />,
                            },
                            {
                                path: '/app/organization/:domain/job/:id/questions',
                                element: <Questions />,
                            },
                            {
                                path: '/app/organization/:domain/job/:id/custom-feedback',
                                element: <CustomFeedback />,
                            },
                            {
                                path: '/app/organization/:domain/job/:id/finalize',
                                element: <Finalize />,
                            },
                            {
                                path: '/app/organization/:domain/job/:id/applicant/:candidateId',
                                element: <ApplicantDetail />,
                            },
                        ],
                    },
                ],
            },
            {
                path: '/organization/new',
                element: <NewOrganization />,
            },
            {
                path: '/app/organization/:domain/new',
                element: <NewJob />,
            },
            {
                path: '/project/new',
                element: <NewProject />,
            },
            {
                path: '/job',
                element: <FocusLayout />,
                children: [
                    {
                        path: ':id',
                        children: [
                            {
                                index: true,
                                element: <JobApply />,
                            },
                            {
                                path: 'application',
                                element: <Application />,
                            },
                        ],
                    },
                ],
            },
            {
                path: '/assessment',
                element: <AssessmentLayout />,
                children: [
                    {
                        path: '/assessment/:id',
                        element: <Assessment />,
                    },
                    {
                        path: '/assessment/:id/:type',
                        element: <AssessmentSession />,
                    },

                    { path: '/assessment/:id/success', element: <AssessmentSuccess /> },
                ],
            },
        ],
    },
    {
        path: '/get-started',
        element: <GetStarted />,
    },
    {
        path: '/test',
        element: <DrawRectangle />,
    },
    {
        path: '/p',
        element: <PortfolioLayout />,
        children: [
            {
                index: true,
                element: <OnceInAMoon />,
            },
            {
                path: '1',
                element: <Ditto />,
            },
            {
                path: '/p/:id',
                element: <ProjectDetail />,
            },
        ],
    },
    { path: '*', element: <NotFound /> },
];

export default routesConfig;
