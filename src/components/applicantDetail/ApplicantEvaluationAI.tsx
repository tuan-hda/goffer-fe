import Markdown from 'react-markdown';

type ApplicantEvaluationAIProps = {
    evaluation?: string;
};

const ApplicantEvaluationAI = ({ evaluation }: ApplicantEvaluationAIProps) => {
    if (!evaluation) return null;
    const emojis = ['😊', '🔊', '✨'];
    return (
        <div className="grid grid-cols-1 gap-4">
            {evaluation
                .split('###')
                .slice(1)
                .map((item, index) => (
                    <div className="rounded-xl border p-6">
                        <p className="mb-2 text-3xl">{emojis[index % 3]}</p>
                        <Markdown key={index} className="markdown-html mb-4 space-y-2">
                            {`###${item}`.trim()}
                        </Markdown>
                    </div>
                ))}
        </div>
    );
};

export default ApplicantEvaluationAI;
