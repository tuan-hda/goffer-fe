import { Label } from '../ui/label';

type InformationProps = {
    title: string;
    content: string;
};

const Information = ({ title, content }: InformationProps) => {
    return (
        <div className="space-y-0.5">
            <Label className="font-normal text-black/60">{title}</Label>
            <p>{content}</p>
        </div>
    );
};

export default Information;
