import { Avatar } from '@nextui-org/react';

const QuestionBankItemMCQ = () => {
    return (
        <>
            <p className="font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="mt-4 flex items-center gap-2">
                <span className="text-[13px]">Created by</span>
                <Avatar
                    src="http://res.cloudinary.com/doxsstgkc/image/upload/v1714386131/goffer/ig8lpaodzrhtwzzkdaj3.jpg"
                    className="h-5 w-5"
                />
                <span>Hoang Dinh Anh Tuan</span>
                <span>10 days ago</span>
            </div>
        </>
    );
};

export default QuestionBankItemMCQ;
