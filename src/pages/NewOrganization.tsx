import { loadStripe } from '@stripe/stripe-js';
import { isAxiosError } from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { TbChevronLeft } from 'react-icons/tb';
import { useLocation, useNavigate } from 'react-router-dom';
import { FifthStep, FirstStep, FourthStep, SecondStep, Success, Cancel, ThirdStep } from 'src/components/newOrg';
import { Progress } from 'src/components/ui/progress';
import config from 'src/configs/config';
import { createOrganizationService } from 'src/services/organizations.service';
import { createCheckoutSessionService } from 'src/services/payment.service';
import { NewOrganization as NewOrganizationType } from 'src/types/organization.type';

const NewOrganization = () => {
    const [loading, setLoading] = useState(false);
    const [step, setStep] = useState(1);
    const [data, setData] = useState<NewOrganizationType>({
        name: '',
        logo: '',
        field: '',
        email: '',
        website: '',
        visibility: '',
        description: '',
    });

    const location = useLocation();
    const navigate = useNavigate();

    const result = new URLSearchParams(location.search).get('result');

    const makePayment = async () => {
        try {
            const stripe = await loadStripe(config.STRIPE_PUBLISHABLE_KEY);
            if (!stripe) {
                throw new Error('Failed to load stripe');
            }
            const session = await createCheckoutSessionService({
                mode: 'subscription',
                successUrl: `${window.location.origin}/organization/new?result=success&name=${data.name}`,
                cancelUrl: `${window.location.origin}/organization/new?result=cancel`,
            });

            if (session.id) {
                await stripe!.redirectToCheckout({ sessionId: session.id });
            }
        } catch (error) {
            if (isAxiosError(error)) {
                return toast.error(error.response?.data.message || 'Failed to create payment session');
            }
            toast.error('Failed to create payment session');
            console.log('Failed to create payment session:', error);
        }
    };

    const newOrganization = async () => {
        try {
            setLoading(true);
            await makePayment();
            // await createOrganizationService(data);
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
                <TbChevronLeft className="text-xl" /> Go home
                <div className="absolute -bottom-1 ml-1 w-full border-t opacity-0 transition group-hover:opacity-100" />
            </button>
            <div className="scroll-hidden relative flex h-screen w-full overflow-y-auto bg-pale/30 py-6 text-base backdrop-blur-xl">
                <div className="m-auto min-w-80">
                    {!result && (
                        <>
                            <Progress color="primary" className="mx-auto mb-6 h-[6px] w-80" value={(step / 4) * 100} />
                            {step === 1 && <FirstStep data={data} setData={setData} setStep={setStep} />}
                            {step === 2 && <SecondStep data={data} setData={setData} setStep={setStep} />}
                            {step === 3 && <ThirdStep data={data} setData={setData} setStep={setStep} />}
                            {step === 4 && <FourthStep data={data} setData={setData} setStep={setStep} />}
                            {step === 5 && (
                                <FifthStep
                                    loading={loading}
                                    handleSubmit={handleSubmit}
                                    data={data}
                                    setStep={setStep}
                                />
                            )}
                        </>
                    )}
                    {result === 'cancel' && <Cancel setData={setData} setStep={setStep} />}
                    {result === 'success' && <Success />}
                </div>
            </div>
        </div>
    );
};

export default NewOrganization;
