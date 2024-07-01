import useSelfProfileQuery from '@/hooks/useSelfProfileQuery';
import AnalyzePanel from './AnalyzePanel';
import ViewPanel from './ViewPanel';

const EnhanceResult = () => {
    const { data: self } = useSelfProfileQuery();

    if (!self?.resume) {
        return null;
    }

    if (!self.enhance) {
        return (
            <div className="mt-20 flex w-full flex-col items-center gap-10">
                <img className="h-[400px] w-[400px] rounded-full object-contain shadow-small" src="/cat.gif" />
                <p className="w-[400px] text-center text-base">
                    Hang on tight... Our system is analyzing your resume... Try reloading the page after 1 min.
                </p>
            </div>
        );
    }

    return (
        <>
            <ViewPanel url={self?.resume} />
            <div className="h-full border-r" />
            <AnalyzePanel />
        </>
    );
};

export default EnhanceResult;
