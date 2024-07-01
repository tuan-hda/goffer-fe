import useSelfProfileQuery from '@/hooks/useSelfProfileQuery';
import EvaluationList from './EvaluationList';
import OverallEvaluation from './OverallEvaluation';

const AnalyzePanel = () => {
    const { data: self } = useSelfProfileQuery();
    if (!self?.enhance) {
        return null;
    }

    return (
        <div className="flex h-[calc(100vh-58px)] flex-1 flex-col overflow-y-auto p-6">
            <div className="mx-auto max-w-[600px] flex-1">
                <h1 className="mt-2 text-4xl font-semibold">Review result and suggestions</h1>
                <div className="mt-6 space-y-2">
                    <div className="flex h-12 items-center gap-2 text-2xl font-medium">In-a-nutshell ✨</div>
                    <OverallEvaluation />
                </div>

                <div className="mt-10">
                    <div className="flex h-12 items-center gap-2 text-2xl font-medium">
                        Deep details and our suggestions <span>📈</span>
                    </div>
                    <div className="mt-3 space-y-7">
                        <div className="rounded-xl px-7 pb-5 pt-2 shadow-small">
                            <div className="flex h-12 items-center gap-2 text-base font-semibold">Summary</div>
                            <EvaluationList suggestion={self.enhance.result.summary} />
                        </div>
                        <div className="rounded-xl px-7 pb-5 pt-2 shadow-small">
                            <div className="flex h-12 items-center gap-2 text-base font-semibold">Format</div>
                            <EvaluationList suggestion={self.enhance.result.format} />
                        </div>
                        <div className="rounded-xl px-7 pb-5 pt-2 shadow-small">
                            <div className="flex h-12 items-center gap-2 text-base font-semibold">Contact</div>
                            <EvaluationList suggestion={self.enhance.result.contact} />
                        </div>
                        <div className="rounded-xl px-7 pb-5 pt-2 shadow-small">
                            <div className="flex h-12 items-center gap-2 text-base font-semibold">Skills</div>
                            <EvaluationList suggestion={self.enhance.result.skills} />
                        </div>
                        <div className="rounded-xl px-7 pb-5 pt-2 shadow-small">
                            <div className="flex h-12 items-center gap-2 text-base font-semibold">Experiences</div>
                            <EvaluationList suggestion={self.enhance.result.experiences} />
                        </div>
                        <div className="rounded-xl px-7 pb-5 pt-2 shadow-small">
                            <div className="flex h-12 items-center gap-2 text-base font-semibold">Educations</div>
                            <EvaluationList suggestion={self.enhance.result.educations} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnalyzePanel;
