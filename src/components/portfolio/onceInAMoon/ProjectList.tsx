import { projects } from '@/data/mock/projects';
import Project from './Project';
import { useState } from 'react';
import Modal from './Modal';

const ProjectList = () => {
    const [modal, setModal] = useState({ active: false, index: 0 });

    return (
        <div className="mx-auto w-full max-w-[80vw]">
            <p className="mb-[10vh] mt-[calc(55vh-200px)] text-center uppercase">PROJECTS</p>
            {projects.map((project, index) => {
                return <Project key={index} setModal={setModal} index={index} data={project} />;
            })}
            <Modal modal={modal} projects={projects} />
        </div>
    );
};

export default ProjectList;
