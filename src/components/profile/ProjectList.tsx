import useSelfProfileQuery from '@/hooks/useSelfProfileQuery';
import Project from '../projects/Project';
import { Fragment } from 'react';
import useListProject from '@/hooks/useListProject';
import { ProjectDetail } from '@/types/project.type';

type Props = {
    projects?: ProjectDetail[];
};

const ProjectList = ({ projects: outerProjects }: Props) => {
    const { data: self } = useSelfProfileQuery();
    const { data } = useListProject({
        owner: self?.id,
    });
    const projects = outerProjects || data?.results || [];

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
