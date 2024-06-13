import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { useRef, useState } from 'react';
import FounderCard from '../overview/FounderCard';
import { getLatestExperience } from '@/utils/profile';
import { User } from '@/types/user.type';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { UserDetail } from '@/components/userDetail';
import PersonCard from './PersonCard';
import useCurrOrganization from '@/hooks/useCurrOrganization';
import classNames from 'classnames';

const People = () => {
    const { data: org } = useCurrOrganization();
    if (!org) return;

    const plugin = useRef(Autoplay({ delay: 2000 }));
    const [selected, setSelected] = useState<User | undefined>();
    const [api, setApi] = useState<CarouselApi>();

    const onSelect = (user: User, index: number) => {
        setSelected(user);
        api?.scrollTo(index);
    };

    return (
        <div className="ml-10 mt-24 flex gap-10">
            <Carousel
                setApi={setApi}
                opts={{
                    align: 'center',
                    loop: true,
                }}
                orientation="vertical"
                className="m-auto w-full max-w-xl"
                // @ts-expect-error
                plugins={[plugin.current]}
                onMouseEnter={plugin.current.stop}
                // @ts-expect-error
                onMouseLeave={plugin.current.play}
            >
                <CarouselContent className="-mt-1 h-[640px]">
                    {org.members.map((person, index) => (
                        <CarouselItem key={index} className="pb-4 md:basis-1/2">
                            <Sheet key={person.id}>
                                <SheetTrigger>
                                    <PersonCard data={person} />
                                </SheetTrigger>

                                <SheetContent className="!max-w-screen-lg overflow-y-auto p-8 pr-0">
                                    <UserDetail id={person.id} />
                                </SheetContent>
                            </Sheet>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>

            {org.members && org.members.length > 0 && (
                <div className="h-[584px]">
                    <p className="mb-6 text-2xl font-semibold text-text">All member</p>
                    <div className="h-full space-y-8 overflow-y-scroll  pr-10">
                        {org.members.map((member, index) => (
                            <div
                                className={classNames(
                                    'h-[72px] rounded-3xl p-1 px-2',
                                    selected?.id === member.id && 'bg-beige/30',
                                )}
                            >
                                <FounderCard
                                    key={member.id}
                                    data={member}
                                    role={getLatestExperience(member.experiences || []).title}
                                    onClick={() => onSelect(member, index)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default People;
