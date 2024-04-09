import { TbX } from 'react-icons/tb';
import { Button } from '../ui/button';
import { Avatar } from '@nextui-org/react';
import { PiAirplaneTakeoffFill } from 'react-icons/pi';
import { TextareaAutosize } from '@udecode/plate-caption';

type ReplyPanelProps = {
    setReplying: (value: boolean) => void;
};

const ReplyPanel = ({ setReplying }: ReplyPanelProps) => {
    return (
        <div className="relative mt-6 rounded-3xl bg-black p-5 text-white">
            <p className="text-xs font-normal text-gray-200">replying to</p>
            <Button
                onClick={() => setReplying(false)}
                className="absolute right-3 top-3 rounded-full hover:bg-gray-700"
                size="icon"
                variant="ghost"
            >
                <TbX className="text-white" />
            </Button>
            <div className="mt-2">
                <div className="flex gap-3">
                    <Avatar
                        size="sm"
                        radius="md"
                        src="https://scontent.fsin14-1.fna.fbcdn.net/v/t39.30808-1/427960051_1320112391991936_7308053656975620819_n.jpg?stp=dst-jpg_p100x100&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEmu0zlnDSTc99RpozdhlEZYqEH5OHlswJioQfk4eWzAm-vLFjaQ24OVM9Q6z69Xh6ye1Huu8g4v14U6n4U7vkM&_nc_ohc=ft82a2shwRoAb7X9keN&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsin14-1.fna&oh=00_AfA4SdqRurcwBZAyBOfmw0n5x1iSiKduaDi04c18Yp8Hjw&oe=661A77DE"
                        className="flex-shrink-0"
                    />
                    <div className="min-w-0">
                        <p className="font-semibold">Phan Tu</p>
                        <p className="mt-0.5 text-xs font-normal text-gray-300">3 hrs ago</p>
                        <p className="mt-1">Hey, you always give good quotes. What would you say about this?</p>
                    </div>
                </div>
            </div>

            <div className="-mx-3 -mb-3 mt-4 rounded-2xl bg-white px-5 pb-3 pt-5 text-[15px] text-black">
                <TextareaAutosize
                    className="-m-2 w-[calc(100%+16px)] rounded-xl border border-[#E8E8E8] p-2 focus:border-[#E8E8E8] focus:ring-0"
                    defaultValue={`One thing I would say is that...
I have found in myh experience people rarely change and when they do, they're not be trusted`}
                />
                <Button
                    variant="secondary"
                    className="relative -mx-2 mt-[14px] h-10 w-[calc(100%+16px)] rounded-full bg-[#feebd2] shadow-none"
                >
                    <p className="font-semibold text-black">Reply to Tu</p>
                    <div className="absolute right-0.5 top-0.5 flex aspect-square h-[calc(100%-4px)] items-center justify-center rounded-full bg-black">
                        <PiAirplaneTakeoffFill className="text-lg text-white" />
                    </div>
                </Button>
            </div>
        </div>
    );
};

export default ReplyPanel;
