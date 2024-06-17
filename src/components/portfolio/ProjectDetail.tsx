import { useEffect } from 'react';
import { TbArrowLeft } from 'react-icons/tb';
import { Link, useOutletContext, useParams } from 'react-router-dom';
import ProjectDetailContent from '../projects/ProjectDetailContent';
import useProjectDetail from '@/hooks/useProjectDetail';
import { PortfolioConfiguration } from '@/types/portfolio.type';

const ProjectDetail = () => {
    const { portfolioDomain, projectId } = useParams();
    const [portfolio]: [PortfolioConfiguration] = useOutletContext();

    useEffect(() => {
        window.scrollTo({
            left: 0,
            top: 0,
            behavior: 'smooth',
        });
    }, []);

    const { data } = useProjectDetail(projectId);

    return (
        <>
            <div className="mx-auto mt-[10vh] w-[90vw]">
                <Link
                    to={`/portfolio/${portfolioDomain}`}
                    className="group flex items-center gap-4 text-[2vh] font-light uppercase"
                >
                    <TbArrowLeft className="portfolio-secondary text-[3vh] transition group-hover:opacity-80" />
                    Go back to portfolio
                </Link>
            </div>

            {data && (
                <ProjectDetailContent
                    color={portfolio.palette?.['--text-color'] || '#000000'}
                    scaleType="viewport"
                    data={data}
                />
            )}
        </>
    );
};

export default ProjectDetail;
