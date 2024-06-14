import { FormDraft, PreviewProject } from '@/components/projects';
import { Button } from '@/components/ui/button';
import useSelfProfileQuery from '@/hooks/useSelfProfileQuery';
import NewResourceLayout from '@/layouts/NewResourceLayout';
import { uploadFileService } from '@/services/file.service';
import { updateSelfService } from '@/services/users.service';
import useNewProjectStore from '@/stores/newProject';
import { ProjectCreate } from '@/types/project.type';
import catchAsync from '@/utils/catchAsync';
import { dataURLtoFile } from '@/utils/file';
import { useEditorRef } from '@udecode/plate-common';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewProject = () => {
    const [loading, setLoading] = useState(false);
    const [previewing, setPreviewing] = useState(false);
    const [setError, info] = useNewProjectStore((state) => [state.setError, state.info]);

    const { data: self, refetch } = useSelfProfileQuery();
    const editor = useEditorRef();
    const navigate = useNavigate();

    const validate = (info: ProjectCreate) => {
        const res = [];

        if (!info.title) {
            res.push('Title is required');
        }

        if (editor.children.length < 1) {
            res.push('Content is required');
        }

        return res;
    };

    const saveProject = () =>
        catchAsync(
            async () => {
                const previousProjects = self?.projects || [];
                const newProject: ProjectCreate = {
                    ...info,
                    content: JSON.stringify(editor.children),
                };

                try {
                    const cover = info.cover;
                    const result = dataURLtoFile(cover, 'cover.jpg');
                    const image = await uploadFileService(result);
                    newProject.cover = image.data.file.url;
                } catch (error) {
                    // Do nothing
                }

                const updatedProjects = [...previousProjects, newProject];
                await updateSelfService({
                    projects: updatedProjects,
                });
                await refetch();
                navigate('/app/profile?tab=projects');
            },
            () => {
                setLoading(false);
            },
        );

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const errors = validate(info);
        if (errors.length) {
            setError(errors.join(','));
            return;
        }

        setError('');

        if (!previewing) {
            setPreviewing(true);
        } else {
            saveProject();
        }
    };

    return (
        <NewResourceLayout
            secondaryButton={
                previewing ? (
                    <Button type="button" variant="outline" onClick={() => setPreviewing(false)} className="ml-auto">
                        Back to draft
                    </Button>
                ) : null
            }
            showPreview={false}
            submitText={previewing ? 'Publish' : 'Continue'}
            handleSubmit={handleSubmit}
            loading={loading}
        >
            <FormDraft hidden={previewing} />
            <PreviewProject hidden={!previewing} />
        </NewResourceLayout>
    );
};

export default NewProject;
