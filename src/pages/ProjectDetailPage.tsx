import ProjectDetailContent from '@/components/projects/ProjectDetailContent';
import ProjectDetailHeader from '@/components/projects/ProjectDetailHeader';
import { analytics } from '@/configs/firebase';
import useProjectDetail from '@/hooks/useProjectDetail';
import { logEvent } from 'firebase/analytics';
import { useEffect } from 'react';
import { TbLoader } from 'react-icons/tb';
import { useParams } from 'react-router-dom';

const ProjectDetailPage = () => {
    useEffect(() => {
        logEvent(analytics, 'page_view', {
            page_location: window.location.href,
            page_path: window.location.pathname,
        })
    },[])

    const { projectId } = useParams();
    const { data, isLoading } = useProjectDetail(projectId);

    if (isLoading)
        return (
            <div className="flex h-screen">
                <TbLoader className="m-auto animate-spin text-xl" />
            </div>
        );

    if (!data) return <div className="flex h-screen items-center justify-center">Project not found.</div>;

    return (
        <div>
            <ProjectDetailHeader />
            <ProjectDetailContent data={data} scaleType="actual" />
            <div className="h-20"></div>
        </div>
    );
};

export default ProjectDetailPage;
