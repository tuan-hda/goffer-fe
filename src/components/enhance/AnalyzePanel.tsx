import Enhancement from './Enhancement';
import OverallEvaluation from './OverallEvaluation';
import Summary from './Summary';

const AnalyzePanel = () => {
    return (
        <div className="flex h-[calc(100vh-58px)] flex-1 flex-col overflow-y-auto p-6">
            <div className="mx-auto max-w-[680px] flex-1 space-y-7">
                <OverallEvaluation />

                <Summary />

                <div className="rounded-xl pb-5 shadow-small">
                    <div className="flex h-12 items-center gap-2 rounded-t-xl bg-[#333] px-6 font-semibold text-white">
                        Enhancement <span>📈</span>
                    </div>
                    <div className="mb-3 mt-6 px-6">
                        <Enhancement assessment="Average" title="Impact" />
                        <div className="-mx-6 mb-6 mt-7 border-t px-6" />
                        <Enhancement assessment="Excellent" title="Brevity" />
                        <div className="-mx-6 mb-6 mt-7 border-t px-6" />
                        <Enhancement assessment="Good" title="Styles" />
                        <div className="-mx-6 mb-6 mt-7 border-t px-6" />
                        <Enhancement assessment="Needs work" title="Skills" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnalyzePanel;
