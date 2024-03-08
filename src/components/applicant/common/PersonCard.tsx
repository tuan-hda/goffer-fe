/* eslint-disable import/named */
import { Card, CardHeader, Avatar, Button, CardBody, CardFooter } from '@nextui-org/react';
import { useState } from 'react';
import { TbHearts, TbSend } from 'react-icons/tb';
import EmblaCarousel from './slide/EmblaCarousel';
import { EmblaOptionsType } from 'embla-carousel';

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const PersonCard = () => {
    const [isFollowed, setIsFollowed] = useState(false);
    return (
        <Card isPressable isBlurred className="bg-background/60 dark:bg-default-100/50 max-w-sm">
            <CardHeader className="justify-between">
                <div className="flex gap-5">
                    <Avatar isBordered radius="full" size="md" src="/avatars/avatar-1.png" />
                    <div className="flex flex-col gap-1 items-start justify-center">
                        <h4 className="text-small font-semibold leading-none text-default-600">Zoey Lang</h4>
                        <h5 className="text-small tracking-tight text-default-400">@zoeylang</h5>
                    </div>
                </div>
            </CardHeader>
            <CardBody className="px-3 py-0 text-small text-default-400">
                <p>Frontend developer and UI/UX enthusiast. Join me on this coding adventure!</p>
                <EmblaCarousel slides={SLIDES} options={OPTIONS} />
            </CardBody>
            <CardFooter className="justify-between border-t-1 py-4 w-[calc(100%_-_8px)]">
                <Button size="md" radius="full" className="w-4/5" startContent={<TbSend size={20} />}>
                    Get in touch
                </Button>
                <Button
                    className={isFollowed ? 'bg-transparent text-default-500 border-default-200' : ''}
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
