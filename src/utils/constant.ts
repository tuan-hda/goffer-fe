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

interface IconProps {
    Icon: IconType;
    href: string;
}

export const follows: IconProps[] = [
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

export const mobiles: IconProps[] = [
    {
        Icon: RiAppleLine,
        href: '#',
    },
    {
        Icon: RiAndroidLine,
        href: '#',
    },
];
