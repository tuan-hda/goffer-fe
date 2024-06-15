import { TbSparkles } from 'react-icons/tb';
import GenAICreateProjectProvider from '../genai/GenAICreateProjectProvider';
import { Button } from '../ui/button';
import { CreateProjectResult } from '../genai/data';
import useNewProjectStore from '@/stores/newProject';
import { toast } from 'sonner';

type ProjectGenerateWithAIProps = {
    setInitialValue: React.Dispatch<React.SetStateAction<any[]>>;
};

const ProjectGenerateWithAI = ({ setInitialValue }: ProjectGenerateWithAIProps) => {
    const setInfo = useNewProjectStore((state) => state.setInfo);

    const handleResponse = (result: CreateProjectResult) => {
        if (typeof result === 'string') {
            return;
        }

        setInfo((state) => ({
            ...state,
            title: result.title,
            description: result.description,
            skills: result.skills,
            tools: result.tools,
        }));

        try {
            const value = result.content.map((d) => {
                return {
                    type: 'p',
                    lineHeight: '1.5',
                    children: [
                        {
                            text: d,
                            fontSize: '14px',
                            color: 'rgba(0, 0, 0, 0.9)',
                        },
                    ],
                    id: 'a6ghm',
                };
            });
            setInitialValue(value);
        } catch (error) {
            toast.error('Failed to parse content');
            console.log(error);
        }
    };

    return (
        <GenAICreateProjectProvider onResponse={handleResponse}>
            <Button type="button" variant="black">
                <TbSparkles className="mr-2 text-xl" /> Generate with AI
            </Button>
        </GenAICreateProjectProvider>
    );
};

export default ProjectGenerateWithAI;
