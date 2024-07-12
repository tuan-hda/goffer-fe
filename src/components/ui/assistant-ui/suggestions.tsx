import { CSSProperties } from 'react';

type SuggestionsProps = {
    onChange?: (value: string) => void;
    suggestions?: string[];
    helperText?: string;
};

const Suggestions = ({ onChange, suggestions, helperText }: SuggestionsProps) => {
    return (
        <div className="rounded-b-xl text-sm">
            <p className="text-[13px] text-black/50">{helperText}</p>
            <div className="mt-1 grid grid-cols-3 gap-3 text-black/70">
                {suggestions?.map((s, i) => (
                    <div
                        key={i}
                        onClick={() => onChange && onChange(s)}
                        className="cursor-pointer rounded-xl p-3 shadow-small outline-primary/20 hover:text-primary hover:outline"
                    >
                        <p
                            className="lines-ellipsis"
                            style={
                                {
                                    '--lines': 3,
                                } as CSSProperties
                            }
                        >
                            {s}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Suggestions;
