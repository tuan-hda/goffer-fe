import AboutCompany from './AboutCompany';
import AboutJob from './AboutJob';
import JobBenefit from './JobBenefit';

const JobContent = () => {
    return (
        <div>
            {/* Title */}
            <p className="font-serif text-lg font-medium text-default-500 underline">Goffer</p>
            <p className="font-serif text-4xl font-black text-text">Senior Frontend Developer (React)</p>
            <p>
                <span className="font-serif text-sm font-medium text-default-500">Tu Phan</span>
                <span className="mx-2 font-serif text-sm font-medium text-default-500">•</span>
                <span className="font-serif text-sm font-medium text-default-500">Full time</span>
            </p>

            <JobBenefit />

            <AboutCompany />

            <AboutJob />
        </div>
    );
};

export default JobContent;
