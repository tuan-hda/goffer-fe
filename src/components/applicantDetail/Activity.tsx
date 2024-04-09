import { TbMail } from 'react-icons/tb';

type ActivityProps = {
    time: string;
    content: React.ReactNode;
};

const Activity = ({ time, content }: ActivityProps) => {
    return (
        <div className="relative z-[1] flex items-start gap-2">
            <TbMail className="bg-pale" />
            <div>
                <p className="text-xs text-text/80">{time}</p>
                <p className="mt-0.5">{content}</p>
            </div>
        </div>
    );
};

export default Activity;
