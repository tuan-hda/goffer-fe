import useSelfProfileQuery from '@/hooks/useSelfProfileQuery';
import { Badge } from '../ui/badge';

const Basic = () => {
    const { data: profile } = useSelfProfileQuery();

    if (!profile) return null;

    return (
        <div>
            <p className="font-medium text-black">Bio</p>
            <p className="mt-3">
                Passionate frontend developer with a knack for creating engaging user experiences. Skilled in a wide
                range of modern web technologies and tools, with a strong foundation in design principles and best
                practices. Committed to lifelong learning and staying at the cutting edge of technology.
            </p>

            <p className="mt-6 font-medium text-black">Top Skills</p>
            <p className="mt-3">
                {profile.skills?.map((skill) => (
                    <Badge variant="outline" className="bg-[#F4F4F4] text-sm font-normal">
                        {skill}
                    </Badge>
                ))}
            </p>

            <p className="mt-6 font-medium text-black">Education</p>
            <p className="mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel nisl bibendum leo mattis ultrices
                sed non nulla. Proin justo orci, hendrerit non ex nec, suscipit venenatis urna.
            </p>
        </div>
    );
};

export default Basic;
