/* eslint-disable import/named */
import { Card, CardHeader, Avatar, Button, CardBody, CardFooter, Skeleton } from '@nextui-org/react';
import { useState } from 'react';
import { TbHearts, TbSend } from 'react-icons/tb';
import EmblaCarousel from './slide/EmblaCarousel';
import { EmblaOptionsType } from 'embla-carousel';

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDES = [
    'https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1213447/pexels-photo-1213447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
];

const PersonCard = () => {
    const [isFollowed, setIsFollowed] = useState(false);
    const [isLoaded, setIsLoaded] = useState(true);

    const toggleLoad = () => setIsLoaded(!isLoaded);

    return (
        <Card isBlurred className="max-w-sm bg-background/60 dark:bg-default-100/50">
            <CardHeader className="justify-between">
                <div className="flex gap-5">
                    <Avatar isBordered radius="full" size="md" src="/avatars/avatar-1.png" />
                    <div className="flex flex-col items-start justify-center gap-1">
                        <h4 className="text-small font-semibold leading-none text-default-600">Zoey Lang</h4>
                        <h5 className="text-small tracking-tight text-default-400">@zoeylang</h5>
                    </div>
                </div>
            </CardHeader>
            <CardBody className="gap-y-4 px-3 py-0 text-small text-default-400">
                <p>Frontend developer and UI/UX enthusiast. Join me on this coding adventure!</p>
                <Skeleton className="rounded-xl" isLoaded={isLoaded}>
                    <EmblaCarousel slides={SLIDES} options={OPTIONS} />
                </Skeleton>
            </CardBody>
            <CardFooter className="w-full] mt-4 justify-between border-t-1 py-4">
                <Button
                    size="md"
                    radius="full"
                    className="w-4/5"
                    startContent={<TbSend size={20} />}
                    onPress={toggleLoad}
                >
                    Get in touch
                </Button>
                <Button
                    className={isFollowed ? 'border-default-200 bg-transparent text-default-500' : ''}
                    color="primary"
                    radius="full"
                    size="md"
                    isIconOnly
                    variant={isFollowed ? 'bordered' : 'solid'}
                    onPress={() => setIsFollowed(!isFollowed)}
                >
                    <TbHearts size={20} />
                </Button>
            </CardFooter>
        </Card>
    );
};

export default PersonCard;
