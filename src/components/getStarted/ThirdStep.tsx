import { Button } from '@nextui-org/react';
import { useState } from 'react';
import { TbChevronLeft } from 'react-icons/tb';
import { StartedInfo } from 'src/types/start.type';
import { AvatarEdit } from '../common';

type ThirdStepProps = {
    onContinue: () => void;
    onBack: () => void;
    info: StartedInfo;
    setInfo: React.Dispatch<React.SetStateAction<StartedInfo>>;
};

const ThirdStep = ({ onContinue, onBack, info, setInfo }: ThirdStepProps) => {
    const [loading, setLoading] = useState(false);
    const avatar = info.avatar;
    const setAvatar = (avatar: string) => {
        setInfo((prev) => ({ ...prev, avatar }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (loading) return;
        if (!avatar) return;
        onContinue();
    };

    return (
        <div>
            <p className="text-sm font-light text-black/40">Step 3/4</p>
            <h1 className="mt-4 font-serif text-4xl">Set your avatar</h1>
            <form onSubmit={handleSubmit}>
                <AvatarEdit
                    className="ml-[46px] mt-5"
                    uploadClassName="mt-5"
                    loading={loading}
                    setLoading={setLoading}
                    avatar={avatar}
                    setAvatar={setAvatar}
                />
                <div className="mt-6 flex items-center gap-3">
                    <Button onClick={onBack} isIconOnly radius="full" variant="flat">
                        <TbChevronLeft className="text-lg" />
                    </Button>
                    <Button type="submit" isDisabled={!avatar || loading} size="md" color="primary">
                        Continue
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default ThirdStep;
