import skills from '@/data/skills';
import { PlateEditor } from '../editor/PlateEditor';
import { Input } from '../ui/input';
import MultipleSelector from '../ui/mutli-selector';
import tools from '@/data/tools';
import classNames from 'classnames';
import useNewProjectStore from '@/stores/newProject';
import { shallow } from 'zustand/shallow';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import { TbTerminal } from 'react-icons/tb';

type FormDraftProps = {
    hidden?: boolean;
    editorKey?: string;
    initialValue?: any[];
};

const FormDraft = ({ hidden, editorKey, initialValue }: FormDraftProps) => {
    const [info, setInfo, error] = useNewProjectStore((state) => [state.info, state.setInfo, state.error], shallow);

    return (
        <div
            className={classNames(
                'mx-auto mt-24 h-10 w-full max-w-2xl',
                hidden && 'pointer-events-none fixed max-h-0 max-w-0 opacity-0',
            )}
        >
            {error && (
                <Alert variant="destructive" className="col-span-2 mb-6">
                    <TbTerminal className="h-4 w-4" />
                    <AlertTitle>Error!</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                </Alert>
            )}
            <Input
                autoFocus
                value={info.title}
                onChange={(e) =>
                    setInfo((prev) => ({
                        ...prev,
                        title: e.target.value,
                    }))
                }
                className="-mx-3 w-full border-0 text-4xl font-semibold shadow-none focus-visible:ring-0"
                placeholder="Your project title"
            />
            <div>
                <MultipleSelector
                    className="mt-8 h-fit rounded-2xl border-none bg-white/60 shadow-small"
                    placeholder="Skills..."
                    maxSelected={3}
                    options={skills}
                    value={info.skills.map((tool) => ({
                        label: tool,
                        value: tool,
                    }))}
                    onChange={(selected) => {
                        setInfo((prev) => ({
                            ...prev,
                            skills: selected.map(({ value }) => value),
                        }));
                    }}
                />
            </div>
            <div className="h-2"></div>
            <div>
                <MultipleSelector
                    className="h-fit rounded-2xl border-none bg-white/60 shadow-small"
                    placeholder="Tools..."
                    maxSelected={5}
                    options={tools}
                    value={info.tools.map((tool) => ({
                        label: tool,
                        value: tool,
                    }))}
                    onChange={(selected) => {
                        setInfo((prev) => ({
                            ...prev,
                            tools: selected.map(({ value }) => value),
                        }));
                    }}
                />
            </div>
            <div className="h-2"></div>
            <PlateEditor
                key={editorKey}
                initialValue={initialValue}
                top="top-16"
                wrapperClassName="min-h-[400px] border-none shadow-small bg-white/60"
            />
            <div className="h-24" />
        </div>
    );
};

export default FormDraft;
