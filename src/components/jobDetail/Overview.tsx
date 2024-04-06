import { TbClock, TbCoin, TbSchool, TbUser } from 'react-icons/tb';
import { Badge } from '../ui/badge';
import { Avatar } from '@nextui-org/react';
import { PlainPlate } from '../common';

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
        description: `[{\"type\":\"p\",\"lineHeight\":\"var(--artdeco-reset-typography_getLineHeight)\",\"children\":[{\"text\":\"We are looking for a Front-End Engineer who is motivated to combine the art of design with the art of programming. Responsibilities will include translation of the UI/UX design wireframes to actual code that will produce visual elements of the application. You will work with the UI/UX designer and bridge the gap between graphical design and technical implementation, taking an active role on both sides and defining how the application looks as well as how it works.\",\"fontSize\":\"14px\",\"backgroundColor\":\"rgb(255, 255, 255)\",\"color\":\"rgba(0, 0, 0, 0.9)\"}],\"id\":\"j0gkg\"},{\"type\":\"p\",\"lineHeight\":\"var(--artdeco-reset-typography_getLineHeight)\",\"children\":[{\"text\":\"Job Responsibilities:\",\"fontSize\":\"14px\",\"backgroundColor\":\"rgb(255, 255, 255)\",\"color\":\"rgba(0, 0, 0, 0.9)\",\"bold\":true,\"underline\":true}],\"id\":\"oaymm\"},{\"type\":\"p\",\"listStyleType\":\"disc\",\"indent\":1,\"children\":[{\"text\":\"Embrace ownership of domain areas and goes above and beyond to execute\",\"fontSize\":\"14px\",\"backgroundColor\":\"rgb(255, 255, 255)\",\"color\":\"rgba(0, 0, 0, 0.9)\"}],\"id\":\"xe6b0\"},{\"type\":\"p\",\"listStyleType\":\"disc\",\"indent\":1,\"id\":\"1ba5c\",\"children\":[{\"fontSize\":\"14px\",\"backgroundColor\":\"rgb(255, 255, 255)\",\"color\":\"rgba(0, 0, 0, 0.9)\",\"text\":\"Develop new user-facing features\"}],\"listStart\":2},{\"type\":\"p\",\"listStyleType\":\"disc\",\"indent\":1,\"id\":\"m0d8i\",\"listStart\":3,\"children\":[{\"fontSize\":\"14px\",\"backgroundColor\":\"rgb(255, 255, 255)\",\"color\":\"rgba(0, 0, 0, 0.9)\",\"text\":\"Build reusable code and libraries for future use\"}]},{\"type\":\"p\",\"listStyleType\":\"disc\",\"indent\":1,\"id\":\"1jdya\",\"listStart\":4,\"children\":[{\"fontSize\":\"14px\",\"backgroundColor\":\"rgb(255, 255, 255)\",\"color\":\"rgba(0, 0, 0, 0.9)\",\"text\":\"Ensure the technical feasibility of UI/UX designs\"}]},{\"type\":\"p\",\"listStyleType\":\"disc\",\"indent\":1,\"id\":\"0hsnj\",\"listStart\":5,\"children\":[{\"fontSize\":\"14px\",\"backgroundColor\":\"rgb(255, 255, 255)\",\"color\":\"rgba(0, 0, 0, 0.9)\",\"text\":\"Optimize application for maximum speed and scalability\"}]},{\"type\":\"p\",\"listStyleType\":\"disc\",\"indent\":1,\"id\":\"xizto\",\"listStart\":6,\"children\":[{\"fontSize\":\"14px\",\"backgroundColor\":\"rgb(255, 255, 255)\",\"color\":\"rgba(0, 0, 0, 0.9)\",\"text\":\"Collaborate with other team members and stakeholders\"}]},{\"type\":\"p\",\"listStyleType\":\"disc\",\"indent\":1,\"id\":\"ntpz0\",\"listStart\":7,\"children\":[{\"fontSize\":\"14px\",\"backgroundColor\":\"rgb(255, 255, 255)\",\"color\":\"rgba(0, 0, 0, 0.9)\",\"text\":\"Use CSS or JavaScript-based animations to improve the app interactions\"}]},{\"type\":\"p\",\"id\":\"gukoy\",\"children\":[{\"fontSize\":\"14px\",\"backgroundColor\":\"rgb(255, 255, 255)\",\"color\":\"rgba(0, 0, 0, 0.9)\",\"text\":\"Job Qualifications:\",\"bold\":true,\"underline\":true}]},{\"type\":\"p\",\"id\":\"pjc3g\",\"children\":[{\"fontSize\":\"14px\",\"backgroundColor\":\"rgb(255, 255, 255)\",\"color\":\"rgba(0, 0, 0, 0.9)\",\"text\":\"4+ years of experience in Front-end\"}],\"indent\":1,\"listStyleType\":\"disc\"},{\"type\":\"p\",\"id\":\"bh2v4\",\"indent\":1,\"listStyleType\":\"disc\",\"children\":[{\"fontSize\":\"14px\",\"backgroundColor\":\"rgb(255, 255, 255)\",\"color\":\"rgba(0, 0, 0, 0.9)\",\"text\":\"Deep understanding of vanilla JavaScript, CSS, and HTML\"}],\"listStart\":2},{\"type\":\"p\",\"id\":\"ezt5r\",\"indent\":1,\"listStyleType\":\"disc\",\"listStart\":3,\"children\":[{\"fontSize\":\"14px\",\"backgroundColor\":\"rgb(255, 255, 255)\",\"color\":\"rgba(0, 0, 0, 0.9)\",\"text\":\"Experience with at least one of the front-end frameworks such as React, VueJS\"}]},{\"type\":\"p\",\"id\":\"18vz1\",\"indent\":1,\"listStyleType\":\"disc\",\"listStart\":4,\"children\":[{\"fontSize\":\"14px\",\"backgroundColor\":\"rgb(255, 255, 255)\",\"color\":\"rgba(0, 0, 0, 0.9)\",\"text\":\"Pay attention to UX\"}]},{\"type\":\"p\",\"id\":\"5phe0\",\"indent\":1,\"listStyleType\":\"disc\",\"listStart\":5,\"children\":[{\"fontSize\":\"14px\",\"backgroundColor\":\"rgb(255, 255, 255)\",\"color\":\"rgba(0, 0, 0, 0.9)\",\"text\":\"Have a great experience with converting designs in Figma into real codes with mock data using an existing component library\"}]},{\"type\":\"p\",\"id\":\"ym1a4\",\"indent\":1,\"listStyleType\":\"disc\",\"listStart\":6,\"children\":[{\"fontSize\":\"14px\",\"backgroundColor\":\"rgb(255, 255, 255)\",\"color\":\"rgba(0, 0, 0, 0.9)\",\"text\":\"Have experience with DOM APIs\"}]},{\"type\":\"p\",\"id\":\"pq008\",\"indent\":1,\"listStyleType\":\"disc\",\"listStart\":7,\"children\":[{\"fontSize\":\"14px\",\"backgroundColor\":\"rgb(255, 255, 255)\",\"color\":\"rgba(0, 0, 0, 0.9)\",\"text\":\"Have experience with building responsive websites, especially web-based mobile applications\"}]},{\"type\":\"p\",\"id\":\"px51l\",\"indent\":1,\"listStyleType\":\"disc\",\"listStart\":8,\"children\":[{\"fontSize\":\"14px\",\"backgroundColor\":\"rgb(255, 255, 255)\",\"color\":\"rgba(0, 0, 0, 0.9)\",\"text\":\"Have experience with building reusable UI components from the scratch\"}]},{\"type\":\"p\",\"id\":\"qr2qh\",\"indent\":1,\"listStyleType\":\"disc\",\"listStart\":9,\"children\":[{\"fontSize\":\"14px\",\"backgroundColor\":\"rgb(255, 255, 255)\",\"color\":\"rgba(0, 0, 0, 0.9)\",\"text\":\"Can work and build a completed flow of given product functionalities independently\"}]},{\"type\":\"p\",\"id\":\"lxtqm\",\"indent\":1,\"listStyleType\":\"disc\",\"listStart\":10,\"children\":[{\"fontSize\":\"14px\",\"backgroundColor\":\"rgb(255, 255, 255)\",\"color\":\"rgba(0, 0, 0, 0.9)\",\"text\":\"Comfortable working with and making changes to the large existing code base\"}]},{\"type\":\"p\",\"id\":\"fftjb\",\"indent\":1,\"listStyleType\":\"disc\",\"listStart\":11,\"children\":[{\"fontSize\":\"14px\",\"backgroundColor\":\"rgb(255, 255, 255)\",\"color\":\"rgba(0, 0, 0, 0.9)\",\"text\":\"Comfortable working with the design team\"}]},{\"type\":\"p\",\"listStyleType\":\"disc\",\"indent\":1,\"children\":[{\"text\":\"Proficient understanding of cross-browser compatibility issues and ways to work around them\",\"fontSize\":\"14px\",\"backgroundColor\":\"rgb(255, 255, 255)\",\"color\":\"rgba(0, 0, 0, 0.9)\"}],\"id\":\"m04ou\",\"listStart\":12},{\"type\":\"p\",\"listStyleType\":\"disc\",\"indent\":1,\"children\":[{\"text\":\"Familiar with researching and evaluating open-source libraries, figuring out their trade-offs, and choosing the right solutions\",\"fontSize\":\"14px\",\"backgroundColor\":\"rgb(255, 255, 255)\",\"color\":\"rgba(0, 0, 0, 0.9)\"}],\"id\":\"ywh7c\",\"listStart\":13},{\"type\":\"p\",\"listStyleType\":\"disc\",\"indent\":1,\"children\":[{\"text\":\"Having experience with building products\",\"fontSize\":\"14px\",\"backgroundColor\":\"rgb(255, 255, 255)\",\"color\":\"rgba(0, 0, 0, 0.9)\"}],\"id\":\"ynt22\",\"listStart\":14},{\"type\":\"p\",\"lineHeight\":\"var(--artdeco-reset-typography_getLineHeight)\",\"children\":[{\"text\":\"Nice to have:\",\"fontSize\":\"14px\",\"backgroundColor\":\"rgb(255, 255, 255)\",\"color\":\"rgba(0, 0, 0, 0.9)\",\"bold\":true,\"underline\":true}],\"id\":\"4i1uw\"},{\"type\":\"p\",\"listStyleType\":\"disc\",\"indent\":1,\"children\":[{\"text\":\"Have been working with TailwindCSS\",\"fontSize\":\"14px\",\"backgroundColor\":\"rgb(255, 255, 255)\",\"color\":\"rgba(0, 0, 0, 0.9)\"}],\"id\":\"vxntx\"},{\"type\":\"p\",\"listStyleType\":\"disc\",\"indent\":1,\"children\":[{\"text\":\"Familiar or involved with open source projects\",\"fontSize\":\"14px\",\"backgroundColor\":\"rgb(255, 255, 255)\",\"color\":\"rgba(0, 0, 0, 0.9)\"}],\"id\":\"ul8pc\",\"listStart\":2},{\"type\":\"p\",\"listStyleType\":\"disc\",\"indent\":1,\"children\":[{\"text\":\"Can optimize the front-end side to improve the performance of specific components or the entire app\",\"fontSize\":\"14px\",\"backgroundColor\":\"rgb(255, 255, 255)\",\"color\":\"rgba(0, 0, 0, 0.9)\"}],\"id\":\"ldjke\",\"listStart\":3},{\"type\":\"p\",\"listStyleType\":\"disc\",\"indent\":1,\"children\":[{\"text\":\"Own or contribute to a popular open-source project on GitHub\",\"fontSize\":\"14px\",\"backgroundColor\":\"rgb(255, 255, 255)\",\"color\":\"rgba(0, 0, 0, 0.9)\"}],\"id\":\"riymt\",\"listStart\":4},{\"type\":\"p\",\"listStyleType\":\"disc\",\"indent\":1,\"children\":[{\"text\":\"Make the UI accessible following the Web Content Accessibility Guidelines (WCAG)\",\"fontSize\":\"14px\",\"backgroundColor\":\"rgb(255, 255, 255)\",\"color\":\"rgba(0, 0, 0, 0.9)\"}],\"id\":\"zo435\",\"listStart\":5}]`,
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
        <div className="flex w-full items-start gap-6 text-sm">
            <div className="max-w-[320px] flex-shrink-0">
                <p className="text-xl">Basic</p>
                <div className="mt-2 w-full rounded-xl border bg-white/50 p-5">
                    <p className="text-sm">Slots</p>
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
            </div>

            <div className="min-w-0">
                <p className="mb-2 text-xl">Description</p>
                <PlainPlate data={JSON.parse(job.description)} />
            </div>
        </div>
    );
};

export default Overview;
