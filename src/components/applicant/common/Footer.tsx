import { Button } from '@nextui-org/react';
import { IconType } from 'react-icons';
import {
    RiFacebookCircleLine,
    RiLinkedinBoxLine,
    RiTwitterXLine,
    RiYoutubeLine,
    RiInstagramLine,
    RiAppleLine,
    RiAndroidLine,
} from 'react-icons/ri';
interface Props {
    array: {
        text: string;
        href: string;
    }[];
    columns: number[];
}

interface IconProps {
    Icon: IconType;
    href: string;
}

const array = [
    {
        text: 'About us',
        href: '#',
    },
    {
        text: 'Feedback',
        href: '#',
    },
    {
        text: 'Community',
        href: '#',
    },
    {
        text: 'Trust, Safety & Security',
        href: '#',
    },
    {
        text: 'Help & Support',
        href: '#',
    },
    {
        text: 'Upwork Foundation',
        href: '#',
    },
    {
        text: 'Term of Service',
        href: '#',
    },
    {
        text: 'Privacy Policy',
        href: '#',
    },
    {
        text: 'CA Notice at Collection',
        href: '#',
    },
    {
        text: 'Cookie Settings',
        href: '#',
    },
    {
        text: 'Accessibility',
        href: '#',
    },
    {
        text: 'Desktop App',
        href: '#',
    },
    {
        text: 'Cookie Policy',
        href: '#',
    },
    {
        text: 'Enterprise Solutions',
        href: '#',
    },
];
const columns = [3, 3, 4, 4];

const follows: IconProps[] = [
    {
        Icon: RiFacebookCircleLine,
        href: '#',
    },
    {
        Icon: RiLinkedinBoxLine,
        href: '#',
    },
    {
        Icon: RiTwitterXLine,
        href: '#',
    },
    {
        Icon: RiYoutubeLine,
        href: '#',
    },
    {
        Icon: RiInstagramLine,
        href: '#',
    },
];

const mobiles: IconProps[] = [
    {
        Icon: RiAppleLine,
        href: '#',
    },
    {
        Icon: RiAndroidLine,
        href: '#',
    },
];

function chunkArray({ array, columns }: Props) {
    const chunkedArray = [];
    const chunkSize = Math.max(...columns);

    for (let i = 0; i < columns.length; i++) {
        chunkedArray.push(array.slice(0, columns[i]));
        array = array.slice(columns[i]);
    }

    return { chunkedArray, chunkSize };
}

const list = chunkArray({ array, columns });

const Footer = () => {
    return (
        <div className="hidden sm:block max-w-screen-2xl bg-beige py-16 justify-between rounded-2xl mb-6 mx-4 md:mx-6 2xl:mx-auto">
            <div className="px-4 xl:mx-14 md:px-8 xl:px-20">
                <div>
                    <div className="grid grid-rows-4 md:grid-rows-1 md:grid-cols-4 gap-8">
                        {list.chunkedArray.map((col, index) => (
                            <div key={index}>
                                <ul className="grid grid-rows-4">
                                    {col.map((item, index) => (
                                        <a key={index} href={item.href} className="text-sm hover:underline">
                                            {item.text}
                                        </a>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className="my-6 py-4 md:flex md:flex-row border-b-[0.5px] border-text">
                        <div className="md:flex flex-row gap-4 flex-1 items-center">
                            <p className="py-3 md:py-0 text-sm uppercase md:capitalize">{'Follow Us'}</p>
                            <ul className="flex flex-row gap-2">
                                {follows.map(({ Icon }, index) => (
                                    <Button
                                        key={index}
                                        isIconOnly
                                        radius="full"
                                        variant="bordered"
                                        color="primary"
                                        className="h-10 w-10"
                                    >
                                        <Icon className="text-2xl self-center m-auto" />
                                    </Button>
                                ))}
                            </ul>
                        </div>
                        <div className="md:flex flex-row gap-4 flex-1 items-center md:justify-end">
                            <p className="py-3 md:py-0 text-sm uppercase md:capitalize">{'Mobiles app'}</p>
                            <ul className="flex flex-row gap-2">
                                {mobiles.map(({ Icon }, index) => (
                                    <Button
                                        key={index}
                                        isIconOnly
                                        radius="full"
                                        variant="bordered"
                                        color="primary"
                                        className="h-10 w-10"
                                    >
                                        <Icon className="text-2xl self-center m-auto" />
                                    </Button>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <p className="flex-1 text-center text-xs">&copy; 2015-2024 Goffer Global Inc.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
