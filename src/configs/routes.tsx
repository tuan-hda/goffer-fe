import React, { lazy, Suspense } from 'react';
import { Outlet, RouteObject } from 'react-router-dom';
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
import { PortfolioLayout } from '@/components/portfolio';
import NewJobLayout from '@/layouts/NewJobLayout';
import AssessmentOrgLayout from '@/layouts/AssessmentOrgLayout';
const ForbidEditLayout = lazy(() => import('@/layouts/ForbidEditLayout'));
const AboutUs = lazy(() => import('../pages/AboutUs'));
const ContactUs = lazy(() => import('../pages/ContactUs'));
const LandingPage = lazy(() => import('../pages/LandingPage'));
const NotFound = lazy(() => import('../pages/NotFound'));
const Pricing = lazy(() => import('../pages/Pricing'));
const SignUp = lazy(() => import('../pages/SignUp'));
const TrustedBy = lazy(() => import('../pages/TrustedBy'));
const Login = lazy(() => import('../pages/Login'));
const ForgotPassword = lazy(() => import('../pages/ForgotPassword'));
const ResetPassword = lazy(() => import('../pages/ResetPassword'));
const GetStarted = lazy(() => import('../pages/GetStarted'));
const Settings = lazy(() => import('../pages/Settings'));
const NewOrganization = lazy(() => import('../pages/NewOrganization'));
const OrgSettings = lazy(() => import('../pages/OrgSettings'));
const OrgJobs = lazy(() => import('../pages/OrgJobs'));
const NewJob = lazy(() => import('../pages/NewJob'));
const JobDetail = lazy(() => import('../pages/JobDetail'));
const Questions = lazy(() => import('../pages/Questions'));
const CustomFeedback = lazy(() => import('../pages/CustomFeedback'));
const Finalize = lazy(() => import('../pages/Finalize'));
const ApplicantDetail = lazy(() => import('../pages/ApplicantDetail'));
const PreviewJob = lazy(() => import('../pages/PreviewJob'));
const WhoAreWe = lazy(() => import('../pages/WhoAreWe'));
const Feature = lazy(() => import('../pages/Feature'));
const Profile = lazy(() => import('../pages/Profile'));
const Team = lazy(() => import('../pages/Team'));
const Notifications = lazy(() => import('../pages/Notifications'));
const Assessment = lazy(() => import('../pages/Assessment'));
const AssessmentSession = lazy(() => import('../pages/AssessmentSession'));
const AssessmentSuccess = lazy(() => import('../pages/AssessmentSuccess'));
const Messages = lazy(() => import('../pages/Messages'));
const Enhance = lazy(() => import('../pages/Enhance'));
const Dashboard = lazy(() => import('../pages/Dashboard'));
const Portfolio = lazy(() => import('../pages/Portfolio'));
const NewProject = lazy(() => import('../pages/NewProject'));
const Reports = lazy(() => import('../pages/Reports'));
const UsersManagement = lazy(() => import('../pages/UsersManagement'));
const QuestionBank = lazy(() => import('../pages/QuestionBank'));
const QuestionBuilder = lazy(() => import('../pages/QuestionBuilder'));
const ProjectDetailPage = lazy(() => import('../pages/ProjectDetailPage'));
const Discover = lazy(() => import('@/components/applicant/discover/Discover'));
const JobDiscover = lazy(() => import('@/components/applicant/discover/JobDiscover'));
const Application = lazy(() => import('@/components/applicant/apply/Application'));
const JobApply = lazy(() => import('@/components/applicant/apply/JobApply'));
const OrgDetail = lazy(() => import('@/components/orgDetail/OrgDetail'));
const AssessmentOrg = lazy(() => import('@/pages/AssessmentOrg'));
const AssessmentCreate = lazy(() => import('@/pages/AssessmentCreate'));
const AssessmentResult = lazy(() => import('@/pages/AssessmentResult'));
const CustomAssessment = lazy(() => import('@/pages/CustomAssessment'));
const SubscribeResult = lazy(() => import('@/components/subscribe/SubscribeResult'));
const PortfolioDisplayPage = lazy(() => import('@/pages/PortfolioDisplayPage'));
const ProjectDetail = lazy(() => import('@/components/portfolio/ProjectDetail'));
const Invitation = lazy(() => import('@/components/invitation/Invitation'));
const Pipeline = lazy(() => import('@/components/pipeline/Pipeline'));
const AssessmentResultDetail = lazy(() => import('@/pages/AssessmentResultDetail'));
const MyApplications = lazy(() => import('@/pages/MyApplications'));
const OrganizationAbout = lazy(() => import('@/pages/OrganizationAbout'));
const ProfileDetail = lazy(() => import('@/pages/ProfileDetail'));
const Test = lazy(() => import('@/pages/Test'));

const routesConfig: RouteObject[] = [
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                path: '/',
                element: <LandingLayout />,
                children: [
                    {
                        path: '/',
                        element: (
                            <Suspense fallback={<div></div>}>
                                <LandingPage />
                            </Suspense>
                        ),
                    },
                    {
                        path: 'who-are-we',
                        element: (
                            <Suspense fallback={<div></div>}>
                                <WhoAreWe />
                            </Suspense>
                        ),
                    },
                    {
                        path: 'features',
                        element: (
                            <Suspense fallback={<div></div>}>
                                <Feature />
                            </Suspense>
                        ),
                    },
                    {
                        path: 'trusted-by',
                        element: (
                            <Suspense fallback={<div></div>}>
                                <TrustedBy />
                            </Suspense>
                        ),
                    },
                    {
                        path: 'pricing',
                        element: (
                            <Suspense fallback={<div></div>}>
                                <Pricing />
                            </Suspense>
                        ),
                    },
                ],
            },
            {
                path: '/about-us',
                element: (
                    <Suspense fallback={<div></div>}>
                        <AboutUs />
                    </Suspense>
                ),
            },
            {
                path: '/contact',
                element: (
                    <Suspense fallback={<div></div>}>
                        <ContactUs />
                    </Suspense>
                ),
            },
            {
                path: '/auth',
                element: <AuthLayout />,
                children: [
                    {
                        path: 'sign-up',
                        element: (
                            <Suspense fallback={<div></div>}>
                                <SignUp />
                            </Suspense>
                        ),
                    },
                    {
                        path: 'login',
                        element: (
                            <Suspense fallback={<div></div>}>
                                <Login />
                            </Suspense>
                        ),
                    },
                    {
                        path: 'forgot-password',
                        element: (
                            <Suspense fallback={<div></div>}>
                                <ForgotPassword />
                            </Suspense>
                        ),
                    },
                    {
                        path: 'reset-password',
                        element: (
                            <Suspense fallback={<div></div>}>
                                <ResetPassword />
                            </Suspense>
                        ),
                    },
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
                            {
                                path: '/app/discover',
                                element: (
                                    <Suspense fallback={<div></div>}>
                                        <Discover />
                                    </Suspense>
                                ),
                            },
                            {
                                path: '/app/my-applications',
                                element: (
                                    <Suspense fallback={<div></div>}>
                                        <MyApplications />
                                    </Suspense>
                                ),
                            },
                            {
                                path: '/app/company/:companyDomain',
                                element: (
                                    <Suspense fallback={<div></div>}>
                                        <OrgDetail />
                                    </Suspense>
                                ),
                            },
                            {
                                path: '/app/jobs',
                                element: (
                                    <Suspense fallback={<div></div>}>
                                        <JobDiscover />
                                    </Suspense>
                                ),
                            },
                            {
                                path: '/app/job/:id/pipeline',
                                element: (
                                    <Suspense fallback={<div></div>}>
                                        <Pipeline />
                                    </Suspense>
                                ),
                            },
                        ],
                    },
                    {
                        path: '/app/admin',
                        element: <AdminLayout />,
                        children: [
                            {
                                index: true,
                                element: (
                                    <Suspense fallback={<div></div>}>
                                        <Reports />
                                    </Suspense>
                                ),
                            },
                            {
                                path: 'users',
                                element: (
                                    <Suspense fallback={<div></div>}>
                                        <UsersManagement />
                                    </Suspense>
                                ),
                            },
                        ],
                    },
                    {
                        path: '/app/profile',
                        element: (
                            <Suspense fallback={<div></div>}>
                                <Profile />
                            </Suspense>
                        ),
                    },
                    {
                        path: '/app/profile/:userId',
                        element: (
                            <Suspense fallback={<div></div>}>
                                <ProfileDetail />
                            </Suspense>
                        ),
                    },
                    {
                        path: '/app/portfolio',
                        element: (
                            <Suspense fallback={<div></div>}>
                                <Portfolio />
                            </Suspense>
                        ),
                    },
                    {
                        path: '/app/messages',
                        element: (
                            <Suspense fallback={<div></div>}>
                                <Messages />
                            </Suspense>
                        ),
                    },
                    {
                        path: '/app/enhance',
                        element: (
                            <Suspense fallback={<div></div>}>
                                <Enhance />
                            </Suspense>
                        ),
                    },
                    {
                        path: '/app/settings',
                        element: (
                            <Suspense fallback={<div></div>}>
                                <Settings />
                            </Suspense>
                        ),
                    },
                    {
                        path: '/app/notifications',
                        element: (
                            <Suspense fallback={<div></div>}>
                                <Notifications />
                            </Suspense>
                        ),
                    },
                    {
                        path: '/app/organization/:domain',
                        element: (
                            <Suspense fallback={<div></div>}>
                                <OrgJobs />
                            </Suspense>
                        ),
                    },
                    {
                        path: '/app/organization/:domain/settings',
                        element: (
                            <Suspense fallback={<div></div>}>
                                <OrgSettings />
                            </Suspense>
                        ),
                    },
                    {
                        path: '/app/organization/:domain/notifications',
                        element: (
                            <Suspense fallback={<div></div>}>
                                <Notifications />
                            </Suspense>
                        ),
                    },
                    {
                        path: '/app/organization/:domain/team',
                        element: (
                            <Suspense fallback={<div></div>}>
                                <Team />
                            </Suspense>
                        ),
                    },
                    {
                        path: '/app/organization/:domain/about',
                        element: (
                            <Suspense fallback={<div></div>}>
                                <OrganizationAbout />
                            </Suspense>
                        ),
                    },
                    {
                        path: '/app/organization/:domain/assessment',
                        element: (
                            <Suspense fallback={<div></div>}>
                                <AssessmentOrgLayout />
                            </Suspense>
                        ),
                        children: [
                            {
                                index: true,
                                element: (
                                    <Suspense fallback={<div></div>}>
                                        <AssessmentOrg />
                                    </Suspense>
                                ),
                            },
                            {
                                path: '/app/organization/:domain/assessment/builder',
                                element: (
                                    <Suspense fallback={<div></div>}>
                                        <AssessmentCreate />
                                    </Suspense>
                                ),
                            },
                            {
                                path: '/app/organization/:domain/assessment/:id',
                                element: (
                                    <Suspense fallback={<div></div>}>
                                        <AssessmentCreate />
                                    </Suspense>
                                ),
                            },
                            {
                                path: '/app/organization/:domain/assessment/:id/results',
                                element: (
                                    <Suspense fallback={<div></div>}>
                                        <AssessmentResult />
                                    </Suspense>
                                ),
                            },
                            {
                                path: '/app/organization/:domain/assessment/:id/results/:takingId',
                                element: (
                                    <Suspense fallback={<div></div>}>
                                        <AssessmentResultDetail />
                                    </Suspense>
                                ),
                            },
                        ],
                    },
                    {
                        path: '/app/organization/:domain/bank',
                        element: (
                            <Suspense fallback={<div></div>}>
                                <QuestionBank />
                            </Suspense>
                        ),
                    },
                    {
                        path: '/app/organization/:domain/bank/:id',
                        element: (
                            <Suspense fallback={<div></div>}>
                                <QuestionBuilder />
                            </Suspense>
                        ),
                    },
                    {
                        path: '/app/organization/:domain/bank/builder/:type',
                        element: (
                            <Suspense fallback={<div></div>}>
                                <QuestionBuilder />
                            </Suspense>
                        ),
                    },
                    {
                        path: '/app/organization/:domain/messages',
                        element: (
                            <Suspense fallback={<div></div>}>
                                <Messages />
                            </Suspense>
                        ),
                    },
                    {
                        path: '/app/organization/:domain/job/:id',
                        element: (
                            <Suspense fallback={<div></div>}>
                                <OrgLayout>
                                    <OrgDetailLayout>
                                        <Outlet />
                                    </OrgDetailLayout>
                                </OrgLayout>
                            </Suspense>
                        ),
                        children: [
                            {
                                path: '/app/organization/:domain/job/:id',
                                element: (
                                    <Suspense fallback={<div></div>}>
                                        <JobDetail />
                                    </Suspense>
                                ),
                            },
                            {
                                path: '/app/organization/:domain/job/:id/preview',
                                element: (
                                    <Suspense fallback={<div></div>}>
                                        <PreviewJob />
                                    </Suspense>
                                ),
                            },
                            {
                                path: '/app/organization/:domain/job/:id',
                                element: (
                                    <Suspense fallback={<div></div>}>
                                        <ForbidEditLayout />
                                    </Suspense>
                                ),
                                children: [
                                    {
                                        path: '/app/organization/:domain/job/:id/questions',
                                        element: (
                                            <Suspense fallback={<div></div>}>
                                                <Questions />
                                            </Suspense>
                                        ),
                                    },
                                    {
                                        path: '/app/organization/:domain/job/:id/custom-feedback',
                                        element: (
                                            <Suspense fallback={<div></div>}>
                                                <CustomFeedback />
                                            </Suspense>
                                        ),
                                    },
                                    {
                                        path: '/app/organization/:domain/job/:id/custom-assessment',
                                        element: (
                                            <Suspense fallback={<div></div>}>
                                                <CustomAssessment />
                                            </Suspense>
                                        ),
                                    },
                                    {
                                        path: '/app/organization/:domain/job/:id/finalize',
                                        element: (
                                            <Suspense fallback={<div></div>}>
                                                <Finalize />
                                            </Suspense>
                                        ),
                                    },
                                ],
                            },
                            {
                                path: '/app/organization/:domain/job/:id/applicant/:applicationId',
                                element: (
                                    <Suspense fallback={<div></div>}>
                                        <ApplicantDetail />
                                    </Suspense>
                                ),
                            },
                        ],
                    },
                ],
            },
            {
                path: '/organization/new',
                element: (
                    <Suspense fallback={<div></div>}>
                        <NewOrganization />
                    </Suspense>
                ),
            },
            {
                path: '/app/organization/:domain',
                element: (
                    <Suspense fallback={<div></div>}>
                        <NewJobLayout />
                    </Suspense>
                ),
                children: [
                    {
                        path: '/app/organization/:domain/new',
                        element: (
                            <Suspense fallback={<div></div>}>
                                <NewJob />
                            </Suspense>
                        ),
                    },
                    {
                        path: '/app/organization/:domain/:id',
                        element: (
                            <Suspense fallback={<div></div>}>
                                <NewJob />
                            </Suspense>
                        ),
                    },
                ],
            },
            {
                path: '/project/new',
                element: (
                    <Suspense fallback={<div></div>}>
                        <NewProject />
                    </Suspense>
                ),
            },
            {
                path: '/project/:projectId',
                element: (
                    <Suspense fallback={<div></div>}>
                        <ProjectDetailPage />
                    </Suspense>
                ),
            },
            {
                path: '/project/:projectId/edit',
                element: (
                    <Suspense fallback={<div></div>}>
                        <NewProject />
                    </Suspense>
                ),
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
                                element: (
                                    <Suspense fallback={<div></div>}>
                                        <JobApply />
                                    </Suspense>
                                ),
                            },
                            {
                                path: 'application',
                                element: (
                                    <Suspense fallback={<div></div>}>
                                        <Application />
                                    </Suspense>
                                ),
                            },
                        ],
                    },
                ],
            },
            {
                path: '/subscribe',
                element: (
                    <Suspense fallback={<div></div>}>
                        <SubscribeResult />
                    </Suspense>
                ),
            },
            {
                path: '/assessment',
                element: <AssessmentLayout />,
                children: [
                    {
                        path: '/assessment/:assessmentId',
                        element: (
                            <Suspense fallback={<div></div>}>
                                <Assessment />
                            </Suspense>
                        ),
                    },
                    {
                        path: '/assessment/:assessmentId/:type',
                        element: (
                            <Suspense fallback={<div></div>}>
                                <AssessmentSession />
                            </Suspense>
                        ),
                    },
                    {
                        path: '/assessment/:assessmentId/success',
                        element: (
                            <Suspense fallback={<div></div>}>
                                <AssessmentSuccess />
                            </Suspense>
                        ),
                    },
                ],
            },
            {
                path: '/portfolio',
                element: <PortfolioLayout />,
                children: [
                    {
                        path: ':portfolioDomain',
                        element: (
                            <Suspense fallback={<div></div>}>
                                <PortfolioDisplayPage />
                            </Suspense>
                        ),
                    },
                    {
                        path: ':portfolioDomain/:projectId',
                        element: (
                            <Suspense fallback={<div></div>}>
                                <ProjectDetail />
                            </Suspense>
                        ),
                    },
                ],
            },
            {
                path: '/invitation',
                element: <FocusLayout />,
                children: [
                    {
                        path: ':id',
                        element: (
                            <Suspense fallback={<div></div>}>
                                <Invitation />
                            </Suspense>
                        ),
                    },
                ],
            },
        ],
    },
    {
        path: '/get-started',
        element: (
            <Suspense fallback={<div></div>}>
                <GetStarted />
            </Suspense>
        ),
    },
    {
        path: '/test',
        element: (
            <Suspense fallback={<div></div>}>
                <Test />
            </Suspense>
        ),
    },
    {
        path: '*',
        element: (
            <Suspense fallback={<div></div>}>
                <NotFound />
            </Suspense>
        ),
    },
];

export default routesConfig;
