import { FormDraft, PreviewProject } from '@/components/projects';
import { Button } from '@/components/ui/button';
import NewResourceLayout from '@/layouts/NewResourceLayout';
import useNewProjectStore, { Info } from '@/stores/newProject';
import { dataURLtoFile } from '@/utils/file';
import { useState } from 'react';

const NewProject = () => {
    const [loading, setLoading] = useState(false);
    const [previewing, setPreviewing] = useState(false);
    const [setError, info] = useNewProjectStore((state) => [state.setError, state.info]);

    const validate = (info: Info) => {
        const res = [];

        if (!info.title) {
            res.push('Title is required');
        }

        return res;
    };

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
            console.log(dataURLtoFile(info.cover, 'cover'));
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
