import { Avatar, AvatarGroup, Button } from '@nextui-org/react';
import { TbBrandMailgun, TbChevronLeft } from 'react-icons/tb';
import { HiMiniGlobeAlt } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';

const OrgPanel = () => {
    const navigate = useNavigate();

    return (
        <div className="sticky left-0 top-0 flex h-screen w-1/4 flex-col items-center gap-4 bg-[#040304] px-8 py-4">
            <Button
                onPress={() => navigate(-1)}
                isIconOnly
                radius="full"
                variant="light"
                className="size-[10px] self-start"
            >
                <TbChevronLeft size={28} color="#F0F0F1" className="m-auto self-center" />
            </Button>
            <Avatar
                src="https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/xzivdk4kgjxejm2qkbpb"
                className="h-24 w-24"
            />
            <p className="text-text-100 pt-2 text-2xl font-medium">ClickUp</p>
            <p className="line-clamp-2 w-4/5 overflow-hidden text-ellipsis text-center text-[#A0A0A0]">
                Making the world more productive...together!
            </p>
            <div className="flex flex-row gap-x-4 py-3">
                <Button isIconOnly radius="full" variant="flat" className="size-[10px]">
                    <TbBrandMailgun className="m-auto self-center text-xl" color="#F0F0F1" />
                </Button>
                <Button isIconOnly radius="full" variant="flat" className="size-[10px]">
                    <HiMiniGlobeAlt className="m-auto self-center text-xl" color="#F0F0F1" />
                </Button>
            </div>
            <div className="flex aspect-[2/3] w-full flex-col items-center rounded-3xl bg-gradient-to-b from-[#3e3e3e] to-[#040304] py-12">
                <p className="text-text-100 pt-2 text-2xl font-medium">$35M</p>
                <p className="text-center font-light text-[#A0A0A0]">Total raised</p>

                <AvatarGroup className="mt-12" max={3}>
                    <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                    <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                    <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                    <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
                    <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
                    <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
                </AvatarGroup>
                <p className="mt-2 text-center font-light text-[#A0A0A0]">Company size</p>
            </div>
        </div>
    );
};

export default OrgPanel;
