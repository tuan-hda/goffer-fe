import { TbClock, TbCoin, TbSchool, TbUser } from 'react-icons/tb';
import { Badge } from '../ui/badge';
import { Avatar } from '@nextui-org/react';

const Overview = () => {
    const job = {
        skills: ['2D Animator'],
        tools: [
            'Figma',
            'Adobe Illustrator',
            'Adobe Photoshop',
            'Adobe After Effects',
            'Adobe Premiere Pro',
            'Adobe Audition',
            'Adobe Animate',
        ],
        title: 'Senior Software Engineer',
        description: 'abc',
        location: 'Working from anywhere',
        salaryFrom: '3000',
        experience: '1-3 years',
        slots: 3,
        time: 'Working any time',
        workingHours: 40,
        orgId: '6608212874101000601bb0cb',
        id: '660d5ce5d5b60d0295d8eb6c',
        salaryTo: '4000',
        status: 'published',
    };

    return (
        <div className="mt-3 flex w-full items-start gap-6 text-sm">
            <div className="w-full max-w-[320px] rounded-xl border p-5">
                <p className="text-xl">Basic</p>
                <p className="mt-5 text-sm">Slots</p>
                <div className="mt-1 flex items-center gap-2">
                    <TbUser className="text-base" />
                    <span>{job.slots}/3</span>
                </div>
                <p className="mt-5 text-sm">Salary from</p>
                <div className="mt-1 flex items-center gap-2">
                    <TbCoin className="text-base" />
                    <span>{job.salaryFrom}</span>
                </div>
                {job.salaryTo && (
                    <>
                        <p className="mt-5 text-sm">Salary to</p>
                        <div className="mt-1 flex items-center gap-2">
                            <TbCoin className="text-base" />
                            <span>{job.salaryTo}</span>
                        </div>
                    </>
                )}
                <p className="mt-5 text-sm">Working hours per week</p>
                <div className="mt-1 flex items-center gap-2">
                    <TbClock className="text-base" />
                    <span>{job.workingHours} hours</span>
                </div>
                <p className="mt-5 text-sm">Experience</p>
                <div className="mt-1 flex items-center gap-2">
                    <TbSchool className="text-base" />
                    <span>{job.experience}</span>
                </div>
                <p className="mt-5 text-sm">Skills</p>
                <div className="mt-1 flex flex-wrap items-center gap-2">
                    {job.skills.map((skill, index) => (
                        <Badge key={index} className="bg-text text-white shadow-none">
                            <span>{skill}</span>
                        </Badge>
                    ))}
                </div>
                <p className="mt-5 text-sm">Tools</p>
                <div className="mt-1 flex flex-wrap items-center gap-2">
                    {job.tools.map((skill, index) => (
                        <Badge key={index} className="bg-text text-white shadow-none">
                            <span>{skill}</span>
                        </Badge>
                    ))}
                </div>

                <p className="mt-5 text-sm">Owner</p>
                <div className="mt-1 flex items-center gap-4">
                    <Avatar
                        size="lg"
                        src="https://scontent.fsgn19-1.fna.fbcdn.net/v/t1.15752-9/434114686_3555954397989972_4280541157441569246_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFCkPlr8MrbNkW5-E45Yk-SUr4oP7j5y0pSvig_uPnLSqqvoF3mY0BvFxImkz3Co8UAhR6l0vpspP1Urk_uJGTr&_nc_ohc=6dXfRYJDeYQAb4vQjfD&_nc_ht=scontent.fsgn19-1.fna&oh=03_AdW7HaUNgJm0uNRRBSWuBWU3fZE3_d2gjJ8DB0Eq5Z74OA&oe=6638A530"
                    />
                    <div>
                        <p className="font-semibold">Tuan Hoang Dinh Anh</p>
                        <p>Create at 21 March 2024</p>
                    </div>
                </div>
            </div>

            <div className="flex-1 rounded-xl border p-5">
                <p className="text-xl">Description</p>
            </div>
        </div>
    );
};

export default Overview;
