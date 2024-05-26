import { projects } from '@/data/mock/projects';
import Project from '../projects/Project';
import { Fragment } from 'react';

const ProjectList = () => {
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
