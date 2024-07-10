import { Textarea } from '../ui/textarea';

const GenAIComposer = () => {
    return (
        <div className="relative flex w-[calc(100%)] max-w-[42rem] items-end rounded-2xl border p-0.5 transition-shadow focus-within:shadow-medium">
            <Textarea
                placeholder="Brief description about you here."
                className="h-12 max-h-80 min-h-28 flex-grow resize-none rounded-2xl border-none bg-transparent p-3.5 text-base shadow-none outline-none placeholder:text-foreground/50 focus-visible:!ring-0"
            />
        </div>
    );
};

export default GenAIComposer;
