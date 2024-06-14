import ProjectDetailContent from '@/components/projects/ProjectDetailContent';
import useProjectDetail from '@/hooks/useProjectDetail';
import { TbChevronLeft, TbLoader } from 'react-icons/tb';
import { Link, useParams, useSearchParams } from 'react-router-dom';

const ProjectDetailPage = () => {
    const [searchParams] = useSearchParams();
    const { projectId } = useParams();
    const { data, isLoading } = useProjectDetail(projectId);

    const previousUrl = searchParams.get('previousUrl');

    if (isLoading)
        return (
            <div className="flex h-screen">
                <TbLoader className="m-auto animate-spin text-xl" />
            </div>
        );

    if (!data) return <div className="flex h-screen items-center justify-center">Project not found.</div>;

    return (
        <div>
            <div className="mx-auto mt-8 flex h-full max-w-4xl items-center gap-2">
                <Link
                    to={previousUrl || '/app'}
                    type="button"
                    className="group relative mr-auto flex flex-shrink-0 gap-2 text-sm"
                >
                    <TbChevronLeft className="text-xl" /> Go {previousUrl ? 'back' : 'home'}
                    <div className="absolute -bottom-1 ml-1 w-full border-t border-t-gray-700 opacity-0 transition group-hover:opacity-100" />
                </Link>
            </div>

            <ProjectDetailContent data={data} scaleType="actual" />
            <div className="h-20"></div>
        </div>
    );
};

export default ProjectDetailPage;
