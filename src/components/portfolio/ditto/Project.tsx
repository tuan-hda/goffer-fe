import { ProjectDetail } from '@/types/project.type';
import { useNavigate } from 'react-router-dom';

type ProjectProps = {
    data: ProjectDetail;
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const Project = ({ data, setModal }: ProjectProps) => {
    const navigate = useNavigate();

    return (
        <div
            onClick={() => navigate(data.id)}
            className="group relative rounded-[4vh]"
            onMouseEnter={() => setModal(() => true)}
            onMouseLeave={() => {
                setModal(() => false);
            }}
        >
            <div className="aspect-[1.1] w-full overflow-hidden rounded-[4vh]">
                <img
                    src={data.cover}
                    className="h-full w-full object-cover transition group-hover:scale-[1.2]"
                    style={{
                        transitionDuration: '0.85s',
                        transitionTimingFunction: 'ease-in-out',
                    }}
                />
                <div className="absolute bottom-0 left-0 mt-[1.4vh] flex h-[40vh] w-full items-end rounded-b-[4vh] bg-gradient-to-t from-black/30 to-black/0 pb-[5vh] pl-[5vh] text-[3.6vh] leading-[100%] text-white opacity-0 transition group-hover:opacity-100">
                    {data.title}
                </div>
            </div>
        </div>
    );
};

export default Project;
