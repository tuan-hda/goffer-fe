type SuggestionsProps = {
    onChange?: (value: string) => void;
    suggestions?: string[];
};

const Suggestions = ({ onChange, suggestions }: SuggestionsProps) => {
    return (
        <div className="mt-3 px-4 text-sm">
            <p className="text-[13px] text-black/50">Get started with common questions below.</p>
            <div className="mt-1 grid grid-cols-3 gap-3 text-black/70">
                {suggestions?.map((s, i) => (
                    <div
                        key={i}
                        onClick={() => onChange && onChange(s)}
                        className="cursor-pointer rounded-xl p-3 shadow-small outline-primary/20 hover:text-primary hover:outline"
                    >
                        {s}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Suggestions;
