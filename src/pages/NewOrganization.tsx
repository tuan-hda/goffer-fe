import { loadStripe } from '@stripe/stripe-js';
import { isAxiosError } from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { TbChevronLeft } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';
import { FifthStep, FirstStep, FourthStep, SecondStep, Success, ThirdStep } from 'src/components/newOrg';
import { Progress } from 'src/components/ui/progress';
import config from 'src/configs/config';
import { createOrganizationService } from 'src/services/organizations.service';
import { NewOrganization as NewOrganizationType } from 'src/types/organization.type';

const NewOrganization = () => {
    const [loading, setLoading] = useState(false);
    const [step, setStep] = useState(5);
    const [data, setData] = useState<NewOrganizationType>({
        name: 'GitHub',
        logo: 'https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png',
        field: '',
        email: '',
        website: '',
        visibility: '',
        description: '',
    });
    const navigate = useNavigate();

    // const makePayment = async () => {
    //     try {
    //         const stripe = await loadStripe(config.STRIPE_PUBLISHABLE_KEY);
    //     } catch (error) {
    //         toast.error('Failed to create payment session');
    //     }
    // };

    const newOrganization = async () => {
        try {
            setLoading(true);
            await createOrganizationService(data);
            setStep(5);
        } catch (error) {
            if (isAxiosError(error)) {
                return toast.error(error.response?.data.message || 'Failed to create organization');
            }
            toast.error('Failed to create organization');
            console.log('New organization error:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await newOrganization();
    };

    return (
        <div>
            <img src="/diamond.png" alt="bloom" className="fixed left-[16vw] top-[4vh] w-[35vw] opacity-50" />
            <img
                src="/flower.png"
                alt="bloom"
                className="fixed bottom-[16vh] left-[65vw] w-[35vw] -translate-x-1/2 opacity-50"
            />
            <button onClick={() => navigate(-1)} className="group fixed left-4 top-4 z-[1] flex gap-2 text-sm">
                <TbChevronLeft className="text-xl" /> Go back
                <div className="absolute -bottom-1 ml-1 w-full border-t opacity-0 transition group-hover:opacity-100" />
            </button>
            <div className="scroll-hidden relative flex h-screen w-full overflow-y-auto bg-pale/30 py-6 text-base backdrop-blur-xl">
                <div className="m-auto min-w-80">
                    {step !== 5 && (
                        <Progress color="primary" className="mx-auto mb-6 h-[6px] w-80" value={(step / 4) * 100} />
                    )}
                    {step === 1 && <FirstStep data={data} setData={setData} setStep={setStep} />}
                    {step === 2 && <SecondStep data={data} setData={setData} setStep={setStep} />}
                    {step === 3 && <ThirdStep data={data} setData={setData} setStep={setStep} />}
                    {step === 4 && <FourthStep data={data} setData={setData} setStep={setStep} />}
                    {step === 5 && (
                        <FifthStep
                            loading={loading}
                            handleSubmit={handleSubmit}
                            data={data}
                            setData={setData}
                            setStep={setStep}
                        />
                    )}
                    {step === 6 && <Success data={data} />}
                </div>
            </div>
        </div>
    );
};

export default NewOrganization;
