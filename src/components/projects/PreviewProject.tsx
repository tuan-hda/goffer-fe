import { Label } from '../ui/label';
import AdditionalInformation from './AdditionalInformation';
import useNewProjectStore from '@/stores/newProject';
import Project from './Project';

type PreviewProjectProps = {
    hidden?: boolean;
};

export type Info = {
    title: string;
    skills: never[];
    tools: never[];
    description: string;
    cover: string;
};

const PreviewProject = ({ hidden = false }: PreviewProjectProps) => {
    const info = useNewProjectStore((state) => state.info);

    if (hidden) return null;
    return (
        <div className="flex w-full text-sm text-text">
            <div className="mx-auto mt-20 flex w-full max-w-7xl gap-10">
                <AdditionalInformation />
                <div className="h-full min-h-[calc(100vh-160px)] border-r border-black/10" />
                <div className="min-w-0 flex-1">
                    <Label>Preview</Label>
                    <p className="mb-7 mt-1">Here's what your project will look like to others.</p>

                    <Project info={info} />
                </div>
            </div>
        </div>
    );
};

export default PreviewProject;
