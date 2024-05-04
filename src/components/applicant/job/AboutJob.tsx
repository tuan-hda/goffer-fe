import useJobStore from '@/stores/jobStore';

const AboutJob = () => {
    const { detail } = useJobStore();

    return (
        <>
            <p className="mb-2 mt-10 font-serif text-lg  font-semibold text-default-700">About the job</p>

            <p className="text-sm font-medium text-text">{detail?.description}</p>
        </>
    );
};

export default AboutJob;
