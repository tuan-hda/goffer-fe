import Project from './Project';
import Modal from './Modal';
import { useState } from 'react';
import { SlideIn } from '@/components/common';
import { ProjectDetail } from '@/types/project.type';

type ProjectListProps = {
    projects: ProjectDetail[];
};

const ProjectList = ({ projects }: ProjectListProps) => {
    const [modal, setModal] = useState(false);

    return (
        <div id="projects" className="mx-auto grid w-full max-w-[84vw] grid-cols-2 gap-x-[3vh] gap-y-[6vh]">
            <p className="col-span-2 mb-[3vh] mt-[calc(20vh)] text-center text-[2vh] uppercase">PROJECTS</p>
            {projects.map((project, index) => {
                return (
                    <SlideIn key={index} delay={index % 2 === 1 ? 0.3 : 0}>
                        <Project setModal={setModal} key={index} data={project} />
                    </SlideIn>
                );
            })}
            <Modal modal={modal} />
        </div>
    );
};

export default ProjectList;
