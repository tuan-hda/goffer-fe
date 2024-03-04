import React, { useState } from 'react';
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
    Button,
    DropdownTrigger,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    Input,
} from '@nextui-org/react';
import { RiSearchLine } from 'react-icons/ri';
import { BsBell } from 'react-icons/bs';
import { IoChatbubbleEllipsesOutline, IoChevronDownOutline } from 'react-icons/io5';

interface NavbarProps {
    content: string;
    href: string;
    children?:
        | {
              desc?: string | undefined;
              startContent?: React.ReactNode;
              content: string;
              href: string;
          }[]
        | undefined;
}

const items: NavbarProps[] = [
    {
        content: 'Find Work',
        href: '#',
        children: [
            {
                content: 'Saved Jobs',
                href: '#',
            },
            {
                content: 'My Project Dashboard',
                href: '#',
            },
        ],
    },
    {
        content: 'Portfolio',
        href: '#',
        children: [
            {
                content: 'My Portfolio',
                href: '#',
            },
            {
                content: 'Templates',
                href: '#',
            },
        ],
    },
    {
        content: 'Profile market',
        href: '#',
    },
];

const renderFeatures = () =>
    items.map((item, index) => {
        if (!item.children)
            return (
                <NavbarItem key={index}>
                    <Link href={item.href} className="text-sm font-bold" color="foreground" aria-current="page">
                        {item.content}
                    </Link>
                </NavbarItem>
            );
        else
            return (
                <Dropdown key={index}>
                    <NavbarItem>
                        <DropdownTrigger>
                            <Button
                                disableRipple
                                className="p-0 bg-transparent text-small font-bold data-[hover=true]:bg-transparent"
                                radius="sm"
                                variant="light"
                                endContent={<IoChevronDownOutline />}
                            >
                                {item.content}
                            </Button>
                        </DropdownTrigger>
                    </NavbarItem>
                    <DropdownMenu
                        aria-label="features"
                        itemClasses={{
                            base: 'gap-4',
                        }}
                    >
                        {item.children.map((child, index) => (
                            <DropdownItem
                                key={index}
                                href={item.href}
                                description={child.desc}
                                startContent={child.startContent}
                            >
                                {child.content}
                            </DropdownItem>
                        ))}
                    </DropdownMenu>
                </Dropdown>
            );
    });

export default function Header() {
    const [searchValue, setSearchValue] = useState('');

    return (
        <Navbar shouldHideOnScroll maxWidth="2xl">
            <NavbarBrand className="gap-4">
                <Link color="foreground" href="/applicant">
                    <img src="/logo.svg" alt="logo" className="w-10 h-10 mr-2" />
                    <p className="font-bold text-inherit">GOFFER</p>
                </Link>
                <NavbarContent className="ml-4 hidden xl:flex gap-4" justify="start">
                    {renderFeatures()}
                </NavbarContent>
            </NavbarBrand>
            <NavbarContent justify="center">
                <Input
                    classNames={{
                        base: 'w-full hidden sm:flex h-10 bg-beige/60 focus-within:bg-beige p-0.5 rounded-full',
                        mainWrapper: 'h-full',
                        input: 'text-small',
                        inputWrapper:
                            'h-full font-normal bg-white text-default-300 border border-beige border-0.5 shadow-none',
                    }}
                    radius="full"
                    placeholder="Search"
                    size="sm"
                    variant="bordered"
                    startContent={<RiSearchLine size={24} />}
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onClear={() => setSearchValue('')}
                    isClearable
                />
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Button variant="light" isIconOnly radius="full" color="primary">
                        <BsBell size={20} />
                    </Button>
                </NavbarItem>
                <NavbarItem className="hidden lg:flex">
                    <Button variant="light" isIconOnly radius="full" color="primary">
                        <IoChatbubbleEllipsesOutline size={20} />
                    </Button>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} size="md" radius="full" color="primary" href="#" variant="ghost">
                        Login
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
