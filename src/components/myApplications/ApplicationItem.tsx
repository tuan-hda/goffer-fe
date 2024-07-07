import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import useGetOrganization from '@/hooks/useGetOganization';
import { Apply } from '@/types/application.type';
import { Button } from '../ui/button';
import moment from 'moment';
import { sentenceCase } from '@/utils/string';
import { Link } from 'react-router-dom';

type ApplicationItemProps = {
    data: Apply;
};

const ApplicationItem = ({ data }: ApplicationItemProps) => {
    const { data: org } = useGetOrganization(data.job.org as unknown as string);

    return (
        <Card className="flex flex-col">
            <CardHeader>
                <CardTitle className="text-xl">{data.job.title}</CardTitle>
                <CardDescription>by {org?.name}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
                <p className="font-semibold">Current phase: {sentenceCase(data.phase || 'Applied')}</p>
                <p>Applied at {moment(data.createdAt).format('DD/MM/YYYY - hh:mm')}</p>
                <p>Updated at {moment(data.createdAt).format('DD/MM/YYYY - hh:mm')}</p>
            </CardContent>
            <CardFooter>
                <Button variant="outline" asChild>
                    <Link to={`/app/job/${data.job.id}/pipeline`}>View detail</Link>
                </Button>
            </CardFooter>
        </Card>
    );
};

export default ApplicationItem;
