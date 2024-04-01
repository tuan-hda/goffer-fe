import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FirstStep, SecondStep, ThirdStep } from '@/components/getStarted';
import FourthStep from '@/components/getStarted/FourthStep';
import useSelfProfileQuery from '@/hooks/useSelfProfileQuery';
import { updateUserService } from '@/services/users.service';
import { StartedInfo } from '@/types/start.type';
import { UpdateUser } from '@/types/user.type';

const GetStarted = () => {
    const navigate = useNavigate();
    const { data: user, refetch } = useSelfProfileQuery();
    const [step, setStep] = useState(0);
    const [info, setInfo] = useState<StartedInfo>({});

    useEffect(() => {
        if (user) {
            setInfo({
                name: user.name,
                avatar: user.avatar,
            });
        }
    }, [user]);

    const handleContinue = () => {
        setStep((prev) => prev + 1);
    };

    const handleBack = () => {
        setStep((prev) => prev - 1);
    };

    const handleSubmit = async () => {
        const { skills, ...rest } = info;
        const data: UpdateUser = {
            ...rest,
        };
        if (skills && skills.size > 0) {
            data.skills = Array.from(skills);
        }
        await updateUserService(data);
        await refetch();
        navigate(`/app/${user?.initialType}`);
    };

    return (
        <div className="flex h-screen w-screen">
            <div className="m-auto w-[820px]">
                <div className=" flex items-center justify-between gap-10 rounded-2xl bg-white p-12 shadow-large">
                    {step === 0 && <FirstStep info={info} setInfo={setInfo} onContinue={handleContinue} />}
                    {step === 1 && (
                        <SecondStep info={info} setInfo={setInfo} onContinue={handleContinue} onBack={handleBack} />
                    )}
                    {step === 2 && (
                        <ThirdStep onBack={handleBack} onContinue={handleContinue} info={info} setInfo={setInfo} />
                    )}
                    {step === 3 && (
                        <FourthStep onBack={handleBack} onContinue={handleSubmit} info={info} setInfo={setInfo} />
                    )}
                    <img src="/trivia4.png" alt="Trivia-4" className="h-[360px] rounded-lg" />
                </div>
            </div>
        </div>
    );
};

export default GetStarted;
