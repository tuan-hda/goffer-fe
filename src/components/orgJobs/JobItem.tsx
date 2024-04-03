import { TbLocation } from 'react-icons/tb';

const JobItem = () => {
    return (
        <div className="space-y-1 rounded-xl p-5 text-sm text-text shadow-small">
            <p className="text-lg font-bold text-black">Senior Website Software Engineer</p>
            <div className="flex items-center">
                <TbLocation />
                <p className="ml-2 overflow-hidden text-ellipsis whitespace-nowrap">
                    364 Cong Hoa, Ward 13, Tan Binh District, Ho Chi Minh City, Vietnam
                </p>
            </div>
        </div>
    );
};

export default JobItem;
