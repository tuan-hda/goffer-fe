import Project from './Project';
import { useState } from 'react';
import Modal from './Modal';

const ProjectList = () => {
    const [modal, setModal] = useState({ active: false, index: 0 });

    return (
        <div id="projects" className="mx-auto w-full max-w-[64vw]">
            <p className="mb-[10vh] text-center uppercase">PROJECTS</p>
            {[].map((project, index) => {
                return <Project key={index} setModal={setModal} index={index} data={project} />;
            })}
            <Modal modal={modal} projects={[]} />
        </div>
    );
};

export default ProjectList;
