import { Project as ProjectType } from '@/types/project.type';
import { useNavigate } from 'react-router-dom';

type ProjectProps = {
    data: ProjectType;
    setModal: React.Dispatch<React.SetStateAction<{ active: boolean; index: number }>>;
    index: number;
};

const Project = ({ data, setModal, index }: ProjectProps) => {
    const navigate = useNavigate();
    return (
        <div
            onClick={() => navigate('/p/agma22ka9065bndal')}
            onMouseEnter={() => {
                setModal({ active: true, index });
            }}
            onMouseLeave={() => {
                setModal({ active: false, index });
            }}
            className="project flex h-[20vh] w-full cursor-pointer items-center justify-between border-t border-gray-300 px-24 transition-all duration-200"
        >
            <h2 className="m-0 text-[5vh] font-medium transition-all duration-400">{data.title}</h2>
            <p className="font-light transition-all duration-400">Design & Development</p>
        </div>
    );
};

export default Project;
