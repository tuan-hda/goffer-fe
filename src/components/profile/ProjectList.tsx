import useSelfProfileQuery from '@/hooks/useSelfProfileQuery';
import Project from '../projects/Project';
import { Fragment } from 'react';
import moment from 'moment';

const ProjectList = () => {
    const { data } = useSelfProfileQuery();
    const projects = data?.projects || [];
    const sortedProjects = projects.sort((a, b) => moment(b.createdAt).diff(moment(a.createdAt)));

    return (
        <div className="space-y-8">
            {sortedProjects.map((project, index) => (
                <Fragment key={index}>
                    <Project key={index} info={project} />
                    {index < projects.length - 1 && <div className="border-t"></div>}
                </Fragment>
            ))}
        </div>
    );
};

export default ProjectList;
