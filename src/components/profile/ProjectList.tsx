import useSelfProfileQuery from '@/hooks/useSelfProfileQuery';
import Project from '../projects/Project';
import { Fragment } from 'react';
import useListProject from '@/hooks/useListProject';

const ProjectList = () => {
    const { data: self } = useSelfProfileQuery();
    const { data } = useListProject({
        owner: self?.id,
    });
    const projects = data?.results || [];

    return (
        <div className="space-y-8">
            {projects.map((project, index) => (
                <Fragment key={index}>
                    <Project key={index} info={project} />
                    {index < projects.length - 1 && <div className="border-t"></div>}
                </Fragment>
            ))}
        </div>
    );
};

export default ProjectList;
