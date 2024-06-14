import { useEffect } from 'react';
import { TbArrowLeft } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import ProjectDetailContent from '../projects/ProjectDetailContent';

const ProjectDetail = () => {
    useEffect(() => {
        window.scrollTo({
            left: 0,
            top: 0,
            behavior: 'smooth',
        });
    }, []);

    return (
        <>
            <div className="mx-auto mt-[10vh] w-[90vw]">
                <Link to="/p" className="group flex items-center gap-4 text-[2vh] font-light uppercase">
                    <TbArrowLeft className="portfolio-secondary text-[3vh] transition group-hover:opacity-80" />
                    Go back to portfolio
                </Link>
            </div>

            <ProjectDetailContent />
        </>
    );
};

export default ProjectDetail;
