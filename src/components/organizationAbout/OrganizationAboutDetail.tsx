import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import useCurrentMembership from '@/hooks/useCurrentMembership';
import useCurrOrganization from '@/hooks/useCurrOrganization';
import { Image } from '@nextui-org/react';
import moment from 'moment';
import { useMemo } from 'react';
import { IoSparkles } from 'react-icons/io5';

const OrganizationAboutDetail = () => {
    const { data: currentOrganization } = useCurrOrganization();
    const { data: currentMembership } = useCurrentMembership();

    const timeSpan = useMemo(() => {
        if (currentMembership?.role === 'owner') {
            return moment(currentOrganization?.createdAt).fromNow();
        }
        return moment(currentMembership?.createdAt).fromNow();
    }, [currentMembership, currentOrganization]);

    const joinedAt = useMemo(() => {
        if (currentMembership?.role === 'owner') {
            return moment(currentOrganization?.createdAt).format('ll');
        }
        return moment(currentMembership?.createdAt).format('ll');
    }, [currentMembership, currentOrganization]);

    return (
        <div className="text-base">
            <div className="flex gap-6">
                <Card className="flex-1">
                    <CardHeader>
                        <CardTitle>{currentOrganization?.name}</CardTitle>
                        <CardDescription>{currentOrganization?.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div>
                            <p className="text-[13px]">Email</p>
                            <p>{currentOrganization?.email}</p>
                        </div>
                        <div>
                            <p className="text-[13px]">Website</p>
                            <p>{currentOrganization?.website}</p>
                        </div>
                        <div>
                            <p className="text-[13px]">Field</p>
                            <p>{currentOrganization?.field}</p>
                        </div>
                    </CardContent>
                </Card>
                <Card className="w-[300px] min-w-0 p-10 shadow-small">
                    <Image src={currentOrganization?.logo} />
                </Card>
            </div>
            <div className="mt-6 flex gap-6">
                <Card className="flex aspect-square w-[300px] p-6">
                    <IoSparkles className="m-auto text-[200px] text-[#5688D5]" />
                </Card>
                <Card className="flex min-w-0 flex-1 flex-col">
                    <CardHeader>
                        <CardTitle>Clock</CardTitle>
                        <CardDescription>The time span you have companied with this organization</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-1 flex-col gap-5 space-y-2">
                        <div>
                            <p className="text-5xl">{timeSpan}</p>
                            <p className="mt-1 text-sm">Joined at {joinedAt}</p>
                        </div>
                        <div className="bg-image-doodles w-full flex-1 opacity-40"></div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default OrganizationAboutDetail;
