/* eslint-disable import/named */
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Avatar } from '@nextui-org/react';
import Color from 'color-thief-react';
import { useNavigate } from 'react-router-dom';

const CompanyCard = () => {
    const navigate = useNavigate();
    const onClick = () => {
        navigate('/app/org/_orgid');
    };
    return (
        <Card onClick={onClick} className="rounded-3xl text-sm shadow-none">
            <CardContent className="-mx-[20px] pb-0 pt-1">
                <Color
                    format="hex"
                    crossOrigin="anonymous"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/WorldQuant_Text_Logo_2022.jpg/640px-WorldQuant_Text_Logo_2022.jpg"
                >
                    {({ data, loading, error }) => {
                        console.log('data', data);
                        console.log('loading', loading);
                        console.log('error', error);
                        return (
                            <div
                                className="flex flex-col rounded-[22px] px-4 pb-6 pt-3"
                                style={{
                                    background: data ? `${data}33` : '#fff',
                                }}
                            >
                                <p className="mb-3 mt-1 text-[13px] text-gray-500">
                                    Tan Binh District, Ho Chi Minh City
                                </p>
                                <Avatar
                                    className="h-16 w-16 bg-white"
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/WorldQuant_Text_Logo_2022.jpg/640px-WorldQuant_Text_Logo_2022.jpg"
                                />
                                <p className="mt-4 text-lg font-medium">WorldQuant</p>
                                <p className="lines-ellipsis mt-2 text-gray-600">
                                    WorldQuant is a global quantitative asset management firm with over $7 billion in
                                    assets under management. Founded in 2007 by Igor Tulchinsky with the belief that
                                    talent is global, but opportunit
                                </p>
                            </div>
                        );
                    }}
                </Color>
            </CardContent>
            <CardFooter className="flex-col gap-2 px-4 py-4">
                <div className="flex w-full items-center justify-between gap-2">
                    <p className="text-gray-500">95k followers</p>
                    <Button onClick={onClick} size="sm" variant="outline" className="ml-auto text-sm">
                        Details
                    </Button>
                </div>
            </CardFooter>
        </Card>
    );
};

export default CompanyCard;
