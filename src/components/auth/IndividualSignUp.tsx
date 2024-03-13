import { TbCheck } from 'react-icons/tb';
import AuthTwoSection from 'src/layouts/AuthTwoSection';
import SignUpForm from './SignUpForm';

const IndividualSignUp = () => {
    return (
        <AuthTwoSection
            right={
                <div className="m-auto p-10 font-light">
                    <h2 className="w-full max-w-[420px] font-serif text-4xl font-semibold text-white">
                        Your sincerest companion in the world of work
                    </h2>
                    <div className="mt-6 flex items-center gap-4">
                        <TbCheck className="text-2xl text-green-500" />{' '}
                        <p className="text-white">Find jobs that match your skills</p>
                    </div>
                    <div className="mt-4 flex items-center gap-4">
                        <TbCheck className="text-2xl text-green-500" />{' '}
                        <p className="text-white">Improve your profile with our AI</p>
                    </div>
                    <div className="mt-4 flex items-center gap-4">
                        <TbCheck className="text-2xl text-green-500" />{' '}
                        <p className="text-white">Get discovered by companies</p>
                    </div>
                    <div className="mt-4 flex items-center gap-4">
                        <TbCheck className="text-2xl text-green-500" />{' '}
                        <p className="text-white">Expand your network</p>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 top-0">
                        <img
                            src="/assets/tunnel.png"
                            className="h-full w-full object-contain mix-blend-difference"
                            alt="Cone"
                        />
                    </div>
                </div>
            }
        >
            <div className="m-auto w-80 text-sm">
                <SignUpForm />
            </div>
        </AuthTwoSection>
    );
};

export default IndividualSignUp;
