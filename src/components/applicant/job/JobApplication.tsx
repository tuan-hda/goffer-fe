import { Badge } from '@/components/ui/badge';
import { Avatar } from '@nextui-org/avatar';
import { Textarea } from '@nextui-org/input';
import { TbCheck, TbExternalLink, TbFileTypePdf } from 'react-icons/tb';

const JobApplication = () => {
    return (
        <div className="my-4 flex flex-col gap-y-12">
            <div className="flex items-center gap-4 py-2">
                <Avatar alt="Album cover" radius="sm" size="lg" src="/lovers.png" />
                <div className="flex flex-1 flex-col items-start">
                    <p className="font-serif text-lg font-semibold text-default-700">Goffer</p>
                    <p className="text-sm font-normal text-default-500">Posted 18h ago</p>
                </div>
                <Badge className="gap-1 bg-[hsl(var(--nextui-success))] font-bold text-white">
                    <TbCheck size={16} />
                    Applied 2 days ago
                </Badge>
            </div>
            <p className="font-serif text-4xl font-black text-text">Senior Frontend Developer (React)</p>
            <div>
                <p className="mb-2 font-serif text-lg font-semibold text-default-700">Attachments</p>
                <a
                    href="cv-template.pdf"
                    target="_blank"
                    className="flex w-fit gap-x-4 rounded-lg border border-dashed border-default-500 bg-default-100 p-2 hover:bg-default-200"
                >
                    <div className="rounded-lg bg-primary/70 py-2">
                        <TbFileTypePdf size={48} className="text-white" />
                    </div>
                    <div className="flex flex-col justify-center gap-1">
                        <p className="text-xl font-bold text-text">Maruti Avantsa Resume</p>
                        <p className="text-sm font-medium text-default-400">2.03 MB</p>
                    </div>
                    <div className="ml-6 ">
                        <TbExternalLink size={32} className="text-default-500" />
                    </div>
                </a>
            </div>
            <div>
                <p className="mb-2 font-serif text-lg font-semibold text-default-700">Cover letter</p>
                <Textarea
                    readOnly
                    radius="sm"
                    className="h-fit w-full rounded-lg border border-dashed border-default-500"
                    placeholder="Type your letter here."
                    value={`    I am a great admirer of the fintech space and I believe, I have knowledge that I could contribute to making the platform stand out. My diverse experience also provides me an idea of how users work. I believe we can discuss the rest in a scheduled call if you are interested to know more about my ideas and how I can contribute value.`}
                />
            </div>
        </div>
    );
};

export default JobApplication;
