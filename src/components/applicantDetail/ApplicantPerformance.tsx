import ApplicantResponse from './ApplicantResponse';

const ApplicantPerformance = () => {
    return (
        <div className="mt-14">
            <p className="text-3xl">Applicant's responses</p>
            <div className="mt-4 space-y-8">
                <ApplicantResponse />
                <ApplicantResponse />
                <ApplicantResponse />
            </div>

            <p className="mt-16 text-3xl">Assessment average: 80%</p>
            <p className="mt-4 text-base font-medium">Assessment 1</p>
            <div className="mt-4 flex items-center justify-center rounded-2xl bg-gray-50 px-10 py-16">
                <p>Applicant have not taken assessment 1 yet.</p>
            </div>
        </div>
    );
};

export default ApplicantPerformance;
