import Project from './Project';
import { useState } from 'react';
import Modal from './Modal';
import { ProjectDetail } from '@/types/project.type';

type ProjectListProps = {
    projects: ProjectDetail[];
};

const ProjectList = ({ projects }: ProjectListProps) => {
    const [modal, setModal] = useState({ active: false, index: 0 });

    if (projects.length === 0) return null;

    return (
        <div id="projects" className="mx-auto w-full max-w-[64vw]">
            <p className="mb-[10vh] text-center uppercase">PROJECTS</p>
            {projects.map((project, index) => {
                return <Project key={index} setModal={setModal} index={index} data={project} />;
            })}
            <Modal modal={modal} projects={projects} />
        </div>
    );
};

export default ProjectList;
