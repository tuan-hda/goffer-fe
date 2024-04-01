import { TbCheck } from 'react-icons/tb';
import AuthTwoSection from '@/layouts/AuthTwoSection';
import SignUpForm from './SignUpForm';

const OrganizationSignUp = () => {
    return (
        <AuthTwoSection
            right={
                <div className="m-auto p-10 font-light">
                    <h2 className="w-full max-w-[420px] font-serif text-4xl font-semibold text-white">
                        The all-in-one platform to speed up your hiring process
                    </h2>
                    <div className="mt-6 flex items-center gap-4">
                        <TbCheck className="text-2xl text-green-500" />{' '}
                        <p className="text-white">Discover the most talented individuals in the field</p>
                    </div>
                    <div className="mt-4 flex items-center gap-4">
                        <TbCheck className="text-2xl text-green-500" />{' '}
                        <p className="text-white">Get insights of your candidate</p>
                    </div>
                    <div className="mt-4 flex items-center gap-4">
                        <TbCheck className="text-2xl text-green-500" />{' '}
                        <p className="text-white">Audio and video response, with analytics</p>
                    </div>
                    <div className="mt-4 flex items-center gap-4">
                        <TbCheck className="text-2xl text-green-500" />{' '}
                        <p className="text-white">One platform to maintain all your candidates</p>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 top-0 overflow-hidden">
                        <img
                            src="/assets/cone.png"
                            className="h-full w-full scale-110 object-contain pl-10 pt-20 opacity-80 mix-blend-difference"
                            alt="Cone"
                        />
                    </div>
                </div>
            }
        >
            <div className="m-auto w-80 text-sm">
                <SignUpForm type="organization" />
            </div>
        </AuthTwoSection>
    );
};

export default OrganizationSignUp;
