/* eslint-disable import/named */
import { TbBookmarks, TbPlanet, TbStarFilled } from 'react-icons/tb';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Avatar } from '@nextui-org/react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from '@/components/ui/tooltip';
import { Badge } from '@/components/ui/badge';
import { User } from '@/types/user.type';
import { getLatestExperience } from '@/utils/profile';

const colors = ['#F8F9FE'];

const tags = ['Hello', 'World', 'React', 'Next.js', 'TypeScript', 'TailwindCSS'];

interface Props {
    data: User;
}

const PersonCard = ({ data }: Props) => {
    const latestExp = getLatestExperience(data.experiences ?? []);

    return (
        <Card className="rounded-3xl shadow-none">
            <CardContent className="-mx-[20px] pb-0 pt-1">
                <div
                    className="flex flex-col items-center rounded-[22px] pb-6 pt-4"
                    style={{
                        background: colors[Math.floor(Math.random() * colors.length)],
                    }}
                >
                    <div className="mb-4 flex max-w-full items-center gap-1 px-4 text-[13px] text-gray-600">
                        <TbStarFilled className="text-[#FDB022]" /> 9.3 (5) |{' '}
                        <span className="min-w-0 flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-gray-500">
                            {data.location}
                        </span>
                    </div>
                    <div className="rounded-full bg-white p-1">
                        <Avatar className="h-16 w-16" src={data.avatar} />
                    </div>
                    <p className="mt-4 text-lg font-medium">{data.name}</p>
                    {latestExp && (
                        <p className="mt-1 text-gray-500">
                            {latestExp.title} @ {latestExp.company}
                        </p>
                    )}
                    <div className="mt-4 flex h-[66px] w-full flex-wrap justify-center gap-[6px] overflow-hidden px-4 font-mono">
                        {(data.skills ?? []).map((skill, index) => (
                            <Badge key={index} className="h-[30px] rounded-full py-[6px] font-normal" variant="outline">
                                {skill}
                            </Badge>
                        ))}
                    </div>
                </div>
            </CardContent>
            <CardFooter className="gap-2 px-4 py-4">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant="black" className="h-8 w-8 rounded-full" size="icon">
                                <TbPlanet className="text-base" />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Get in touch</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant="outline" className="h-8 w-8 rounded-full" size="icon">
                                <TbBookmarks className="text-base" />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Save</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>

                <Button size="sm" variant="outline" className="ml-auto text-sm">
                    Details
                </Button>
            </CardFooter>
        </Card>
    );
};

export default PersonCard;
