import EditExperience from '../newJob/EditExperience';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import Candidate from './Candidate';

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
    phone: '0-123124145',
    email: 'hdatdragon@gmail.com',
};
const Sourcing = () => {
    return (
        <div className="w-full items-start gap-6 text-sm">
            <div className="flex gap-6">
                <div className="flex-1 items-center">
                    <h2 className="mb-3 text-xl">12 potential</h2>
                    <div className="space-y-4">
                        <Candidate {...{ ...candidateSampleData, match: 99, isPro: true }} />
                        <Candidate {...{ ...candidateSampleData, match: 89, isPro: true }} />
                        <Candidate {...{ ...candidateSampleData, match: 87, isPro: true }} />
                        <Candidate {...{ ...candidateSampleData, match: 80 }} />
                        <Candidate {...{ ...candidateSampleData, match: 79, isPro: true }} />
                        <Candidate {...{ ...candidateSampleData, match: 60 }} />
                        <Candidate {...{ ...candidateSampleData, match: 54 }} />
                    </div>
                </div>
                <div>
                    <p className="mb-3 text-xl">Filtering</p>

                    <Card className="bg-white/100 shadow-none">
                        <CardHeader>
                            <CardDescription>Use filters to narrow down the list of candidates</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" placeholder="Enter name..." />
                            </div>
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                <Label htmlFor="title">Title</Label>
                                <Input id="title" placeholder="Enter title..." />
                            </div>
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                <Label htmlFor="location">Location</Label>
                                <Input id="location" placeholder="Enter location..." />
                            </div>
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                <p>Experience</p>
                                <EditExperience />
                            </div>
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                <Label htmlFor="tools">Tools</Label>
                                <Input id="tools" placeholder="Enter tools..." />
                            </div>
                        </CardContent>
                        <CardFooter className="gap-4">
                            <Button variant="outline">Apply filter</Button>
                            <Button variant="ghost">Clear filter</Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Sourcing;
