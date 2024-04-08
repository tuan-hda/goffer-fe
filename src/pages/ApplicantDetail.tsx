import { Applicant, ApplicantResponse, ConnectedWorkspace } from '@/components/applicantDetail';
import { Button } from '@/components/ui/button';

const candidateSampleData = {
    name: 'Jane Doe',
    avatarUrl:
        'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-1/318662248_3420347351543223_543157534243100406_n.jpg?stp=c0.7.100.100a_dst-jpg_p100x100&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeE1AE393m0M-Qc7uh6nlOGZfma7FFkD0KJ-ZrsUWQPQoslg37NspBbSSaAO0VIqZKZQZa9ButGOiezVOTwYqFUF&_nc_ohc=LfIhXX56-_IAb49E5bt&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfBrBklVmMhuqFonm1GyjFMNxuyPsje-amWp51lzEtUJFA&oe=6617CEF2',
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
        <div className="flex gap-8 text-sm text-text">
            <div className="flex-1">
                <Applicant {...candidateSampleData} />
                <div className="mt-6">
                    <p className="text-3xl">Applicant's responses</p>
                    <div className="mt-4 space-y-8">
                        <ApplicantResponse />
                        <ApplicantResponse />
                        <ApplicantResponse />
                    </div>
                    <div className="mt-6 flex items-center gap-4">
                        <Button variant="outline" className="w-full" size="lg">
                            Reject
                        </Button>
                        <Button variant="default" className="w-full" size="lg">
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
