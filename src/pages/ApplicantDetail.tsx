import { Applicant, ConnectedWorkspace } from '@/components/applicantDetail';
import ApplicantPerformance from '@/components/applicantDetail/ApplicantPerformance';
import { Button } from '@/components/ui/button';

const candidateSampleData = {
    name: 'Jane Doe',
    avatarUrl: 'https://res.cloudinary.com/doxsstgkc/image/upload/v1714493760/goffer/rklmzhk6m6abekce57ha.jpg',
    jobTitle: 'Senior Frontend Developer',
    location: '1234 Maple Street, Anytown, Anystate',
    experience: '7 yoe: Acme Corp, Innovative Solutions, Tech Pioneers',
    tools: 'ReactJS, Redux, TypeScript, NodeJS, Express, MongoDB, Docker, AWS',
    description:
        'Passionate frontend developer with a knack for creating engaging user experiences. Skilled in a wide range of modern web technologies and tools, with a strong foundation in design principles and best practices. Committed to lifelong learning and staying at the cutting edge of technology.',
    match: 90,
    email: 'hdatdragon2@gmail.com',
    phone: '0123456789',
    isPro: true,
};

const ApplicantDetail = () => {
    return (
        <div className="flex flex-1 gap-8 text-sm text-text">
            <div className="flex-1">
                <Applicant {...candidateSampleData} />
                <div className="mt-6">
                    <ApplicantPerformance />
                    <div className="mt-6 flex items-center gap-4">
                        <Button variant="outline" className="w-full" size="lg">
                            Reject
                        </Button>
                        <Button variant="black" className="w-full" size="lg">
                            Move to
                        </Button>
                    </div>
                </div>
            </div>
            <ConnectedWorkspace />
        </div>
    );
};

export default ApplicantDetail;
