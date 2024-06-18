 
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Organization } from '@/types/organization.type';
import { Avatar } from '@nextui-org/react';
import Color from 'color-thief-react';
import numeral from 'numeral';
import { useNavigate } from 'react-router-dom';

interface Props {
    data: Organization;
}

const CompanyCard = ({ data }: Props) => {
    const navigate = useNavigate();
    const onClick = () => {
        navigate(`/app/company/${data.domain}`);
    };
    return (
        <Card onClick={onClick} className="rounded-3xl text-sm shadow-none">
            <CardContent className="-mx-[20px] pb-0 pt-1">
                <Color format="hex" crossOrigin="anonymous" src={data.logo}>
                    {({ data: color, loading, error }) => {
                        console.log('data', color);
                        console.log('loading', loading);
                        console.log('error', error);
                        return (
                            <div
                                className="flex flex-col rounded-[22px] px-4 pb-6 pt-3"
                                style={{
                                    background: color ? `${color}33` : '#fff',
                                }}
                            >
                                <p className="lines-ellipsis mb-3 mt-1 text-[13px] text-gray-500">{data.location}</p>
                                <Avatar className="h-16 w-16 bg-white" src={data.logo} />
                                <p className="mt-4 text-lg font-medium">{data.name}</p>
                                <p className="lines-ellipsis mt-2 text-gray-600">{data.description}</p>
                            </div>
                        );
                    }}
                </Color>
            </CardContent>
            <CardFooter className="flex-col gap-2 px-4 py-4">
                <div className="flex w-full items-center justify-between gap-2">
                    <p className="text-gray-500">{numeral(data.follow).format('0a')} followers</p>
                    <Button onClick={onClick} size="sm" variant="outline" className="ml-auto text-sm">
                        Details
                    </Button>
                </div>
            </CardFooter>
        </Card>
    );
};

export default CompanyCard;
