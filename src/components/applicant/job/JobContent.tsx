import useJobStore from '@/stores/jobStore';
import AboutCompany from './AboutCompany';
import AboutJob from './AboutJob';
import JobBenefit from './JobBenefit';

const JobContent = () => {
    const { detail } = useJobStore();

    return (
        <div>
            {/* Title */}
            <p className="font-serif text-lg font-medium text-default-500 underline">{detail?.org.name}</p>
            <p className="font-serif text-4xl font-black text-text">{detail?.title}</p>
            <p>
                <span className="font-serif text-sm font-medium text-default-500">{detail?.owner?.name}</span>
                <span className="mx-2 font-serif text-sm font-medium text-default-500">•</span>
                <span className="font-serif text-sm font-medium text-default-500">{detail?.time}</span>
            </p>

            <JobBenefit />

            <AboutCompany />

            <AboutJob />
        </div>
    );
};

export default JobContent;
