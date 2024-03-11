import { Link } from 'react-router-dom';

const FirstStep = () => {
    return (
        <>
            <h1 className="m-auto text-center font-serif text-3xl font-bold">What brings you to Goffer?</h1>
            <div className="mt-10 flex w-full justify-between gap-8">
                <Link
                    to="/auth/sign-up?type=individual"
                    className="flex h-64 w-80 flex-col items-center rounded-2xl bg-white/90 p-6 shadow-small transition hover:scale-105 hover:shadow-large"
                >
                    <img src="/female.svg" alt="individual" className="min-h-0 p-6" />
                    <p className="mt-auto font-semibold text-black">I&apos;m an individual</p>
                    <p className="text-light text-text/60">Look for jobs and improve profile</p>
                </Link>
                <Link
                    to="/auth/sign-up?type=organization"
                    className="flex h-64 w-80 flex-col items-center rounded-2xl bg-white/90 p-6 shadow-small transition hover:scale-105 hover:shadow-large"
                >
                    <img src="/people.svg" alt="organization" className="min-h-0 flex-1 p-6" />
                    <p className="mt-auto font-semibold text-black">We&apos;re an organization</p>
                    <p className="text-light text-text/60">Post jobs and find the right fit</p>
                </Link>
            </div>
        </>
    );
};

export default FirstStep;
