import useGetOrganizationJob from '@/hooks/useGetOrganizationJob';
import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { TbBaguette } from 'react-icons/tb';
import { Link, matchRoutes, useLocation, useParams } from 'react-router-dom';

type RouteFunc = (...args: any[]) => { el: React.ReactNode; to?: string }[];

const routes: Record<string, RouteFunc> = {
    '/app/organization/:domain': () => [
        {
            el: (
                <>
                    <TbBaguette className="text-lg" /> Jobs
                </>
            ),
        },
    ],
    '/app/organization/:domain/job/:id': (...args: any[]) => [
        {
            el: (
                <>
                    <TbBaguette className="text-lg" /> Jobs
                </>
            ),
            to: `/app/organization/${args.at(0)}`,
        },
        {
            el: args.at(2),
        },
    ],
    '/app/organization/:domain/job/:id/questions': (...args: any[]) => [
        {
            el: (
                <>
                    <TbBaguette className="text-lg" /> Jobs
                </>
            ),
            to: `/app/organization/${args.at(0)}`,
        },
        {
            el: args.at(2),
            to: `/app/organization/${args.at(0)}/job/${args.at(1)}`,
        },
        {
            el: 'Questions',
        },
    ],
    '/app/organization/:domain/job/:id/custom-feedback': (...args: any[]) => [
        {
            el: (
                <>
                    <TbBaguette className="text-lg" /> Jobs
                </>
            ),
            to: `/app/organization/${args.at(0)}`,
        },
        {
            el: args.at(2),
            to: `/app/organization/${args.at(0)}/job/${args.at(1)}`,
        },
        {
            el: 'Custom feedback',
        },
    ],
    '/app/organization/:domain/job/:id/custom-assessment': (...args: any[]) => [
        {
            el: (
                <>
                    <TbBaguette className="text-lg" /> Jobs
                </>
            ),
            to: `/app/organization/${args.at(0)}`,
        },
        {
            el: args.at(2),
            to: `/app/organization/${args.at(0)}/job/${args.at(1)}`,
        },
        {
            el: 'Custom assessment',
        },
    ],
    '/app/organization/:domain/job/:id/applicant/:applicantId': (...args: any[]) => [
        {
            el: (
                <>
                    <TbBaguette className="text-lg" /> Jobs
                </>
            ),
            to: `/app/organization/${args.at(0)}`,
        },
        {
            el: args.at(2),
            to: `/app/organization/${args.at(0)}/job/${args.at(1)}`,
        },
        {
            el: `(Applicant) ${args.at(3)}`,
        },
    ],
};

const AppBreadcrumb = () => {
    const [args, setArgs] = useState<string[]>([]);
    const location = useLocation();
    const matches = matchRoutes(
        Object.keys(routes).map((k) => ({ path: k })),
        location.pathname,
    );
    const { domain, id } = useParams();
    const { data: job } = useGetOrganizationJob(id);

    const renderFn = matches && matches.length > 0 && routes[matches.at(0)?.route.path as keyof typeof routes];

    useEffect(() => {
        const res = [];
        if (domain) res.push(domain);
        if (id) {
            res.push(id);
            if (job) {
                res.push(job.title);
            }
        }
        setArgs(res);
    }, [domain, id, job]);

    if (!matches || !renderFn) return null;

    return (
        <Breadcrumbs>
            {renderFn &&
                renderFn(...args).map((el, index) => (
                    <BreadcrumbItem key={index}>
                        <Link to={el.to || '#'} className="flex gap-1">
                            {el.el}
                        </Link>
                    </BreadcrumbItem>
                ))}
        </Breadcrumbs>
    );
};

export default AppBreadcrumb;
