import { FormDraft, PreviewProject } from '@/components/projects';
import ProjectGenerateWithAI from '@/components/projects/ProjectGenerateWithAI';
import { Button } from '@/components/ui/button';
import useListProject from '@/hooks/useListProject';
import useProjectDetail from '@/hooks/useProjectDetail';
import useSelfProfileQuery from '@/hooks/useSelfProfileQuery';
import NewResourceLayout from '@/layouts/NewResourceLayout';
import { uploadFileService } from '@/services/file.service';
import { createProjectService, updateProjectService } from '@/services/projects.service';
import useNewProjectStore from '@/stores/newProject';
import { ProjectCreate, ProjectUpdate } from '@/types/project.type';
import catchAsync from '@/utils/catchAsync';
import { dataURLtoFile } from '@/utils/file';
import { useEditorRef } from '@udecode/plate-common';
import { useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'sonner';

const NewProject = () => {
    const [loading, setLoading] = useState(false);
    const [previewing, setPreviewing] = useState(false);
    const [setError, info, setInfo] = useNewProjectStore((state) => [state.setError, state.info, state.setInfo]);
    const { projectId } = useParams();
    const { data: project } = useProjectDetail(projectId);
    const { refetch: refetchProject } = useProjectDetail(projectId);

    const [initialValue, setInitialValue] = useState<any[]>([]);

    const { data: self } = useSelfProfileQuery();
    const { refetch } = useListProject({
        owner: self?.id,
    });
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

    useEffect(() => {
        if (projectId && project) {
            try {
                setInfo({
                    title: project.title,
                    cover: project.cover,
                    content: '',
                    description: project.description,
                    skills: project.skills,
                    tools: project.tools,
                });
                const content = JSON.parse(project.content);
                setInitialValue(content);
            } catch (error) {
                toast.error('Failed to load project');
            }
        }
    }, [project, projectId]);

    const editorKey = useMemo(() => {
        if (initialValue) {
            return window.crypto.randomUUID();
        }
    }, [initialValue]);

    const createProject = async (projectData: ProjectCreate) => {
        await createProjectService(projectData);
    };

    const updateProject = async (projectId: string, projectData: Partial<ProjectUpdate>) => {
        await updateProjectService(projectId, projectData);
        await refetchProject();
    };

    const saveProject = () =>
        catchAsync(
            async () => {
                setLoading(true);
                const projectData: ProjectCreate = {
                    ...info,
                    content: JSON.stringify(editor.children),
                };

                try {
                    const cover = info.cover;
                    const result = dataURLtoFile(cover, 'cover.jpg');
                    const image = await uploadFileService(result);
                    projectData.cover = image.data.file.url;
                } catch (error) {
                    // Do nothing
                }

                if (!projectId) {
                    await createProject(projectData);
                } else {
                    await updateProject(projectId, projectData);
                }
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
            helperTitle={
                <span className="mr-4 text-sm">
                    {projectId ? 'Edit project' : 'Create new project'}
                    {projectId ? ` - ${project?.title}` : ''}
                </span>
            }
            secondaryButton={
                previewing ? (
                    <Button disabled={loading} type="button" variant="outline" onClick={() => setPreviewing(false)}>
                        Back to draft
                    </Button>
                ) : (
                    <ProjectGenerateWithAI setInitialValue={setInitialValue} />
                )
            }
            showPreview={false}
            submitText={previewing ? 'Publish' : 'Continue'}
            handleSubmit={handleSubmit}
            loading={loading}
        >
            <FormDraft editorKey={editorKey} initialValue={initialValue} hidden={previewing} />
            <PreviewProject hidden={!previewing} />
        </NewResourceLayout>
    );
};

export default NewProject;
