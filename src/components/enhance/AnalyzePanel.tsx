import Enhancement from './Enhancement';
import OverallEvaluation from './OverallEvaluation';
import Summary from './Summary';

const AnalyzePanel = () => {
    return (
        <div className="h-[calc(100vh-58px)] flex-1 space-y-6 overflow-y-auto p-5">
            <OverallEvaluation />

            <Summary />

            <div className="rounded-xl pb-5 shadow-small">
                <div className="flex h-10 items-center gap-2 rounded-t-xl bg-[#333] px-5 font-semibold text-white">
                    Enhancement <span>📈</span>
                </div>
                <div className="mb-3 mt-6 px-5">
                    <Enhancement assessment="Average" title="Impact" />
                    <div className="-mx-5 mb-6 mt-7 border-t px-5" />
                    <Enhancement assessment="Excellent" title="Brevity" />
                    <div className="-mx-5 mb-6 mt-7 border-t px-5" />
                    <Enhancement assessment="Good" title="Styles" />
                    <div className="-mx-5 mb-6 mt-7 border-t px-5" />
                    <Enhancement assessment="Needs work" title="Skills" />
                </div>
            </div>
        </div>
    );
};

export default AnalyzePanel;
