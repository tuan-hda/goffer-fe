import { projects } from '@/data/mock/projects';

const ProjectList = () => {
    return (
        <>
            <p className="mt-[calc(50vh-200px)] text-center uppercase">PROJECTS</p>
            {projects.map((project, index) => {
                return <div key={index}></div>;
            })}
        </>
    );
};

export default ProjectList;
