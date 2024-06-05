import { Avatar } from '@nextui-org/react';

const QuestionBankItemCoding = () => {
    return (
        <div>
            <p className="font-medium">1002. Find Common Characters</p>
            <p className="lines-ellipsis mt-2 text-gray-500">
                Given a string array words, return an array of all characters that show up in all strings within the
                words (including duplicates). You may return the answer in any order.
            </p>
            <div className="mt-4 flex items-center gap-2">
                <span className="text-[13px]">Created by</span>
                <Avatar
                    src="http://res.cloudinary.com/doxsstgkc/image/upload/v1714386131/goffer/ig8lpaodzrhtwzzkdaj3.jpg"
                    className="h-5 w-5"
                />
                <span>Hoang Dinh Anh Tuan</span>
                <span>10 days ago</span>
            </div>
        </div>
    );
};

export default QuestionBankItemCoding;
