import { TbBulb } from 'react-icons/tb';

type TipsProps = {
    children?: React.ReactNode;
};

const Tips = ({ children }: TipsProps) => {
    return (
        <div className="rounded-2xl border p-5">
            <TbBulb className="text-4xl text-yellow-500" />
            {children}
        </div>
    );
};

export default Tips;
