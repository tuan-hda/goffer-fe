import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react';
import { TbBaguette } from 'react-icons/tb';
import { Link, matchRoutes, useLocation } from 'react-router-dom';

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
            el: args.at(1),
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
            el: args.at(1),
            to: `/app/organization/${args.at(0)}/job/${args.at(1)}`,
        },
        {
            el: args.at(2),
        },
    ],
};

const AppBreadcrumb = () => {
    const location = useLocation();
    const matches = matchRoutes(
        Object.keys(routes).map((k) => ({ path: k })),
        location.pathname,
    );

    if (!matches) return null;

    return (
        <Breadcrumbs>
            {routes[matches.at(0)?.route.path as keyof typeof routes] &&
                routes[matches.at(0)?.route.path as keyof typeof routes](
                    'spotify',
                    'Senior Software Engineer',
                    'Questions',
                ).map((el, index) => (
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
