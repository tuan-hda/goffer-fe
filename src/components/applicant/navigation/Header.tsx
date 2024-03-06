import { Navbar, NavbarContent, NavbarItem, Link, Button, NavbarBrand } from '@nextui-org/react';
import { BsBell } from 'react-icons/bs';
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5';

export default function Header() {
    return (
        <Navbar isBordered isBlurred={false} maxWidth="2xl" className="t-0">
            <NavbarContent justify="start">
                <NavbarItem className="hidden lg:flex">
                    <p className="text-default-700 font-bold text-3xl">Discover</p>
                </NavbarItem>
            </NavbarContent>
            <NavbarBrand className="lg:hidden gap-4 justify-center">
                <Link color="foreground" href="/applicant">
                    <img src="/logo.svg" alt="logo" className="w-10 h-10 mr-2" />
                    <p className="font-bold text-inherit text-4xl">GOFFER</p>
                </Link>
            </NavbarBrand>
            <NavbarContent justify="end">
                <NavbarItem className="hidden md:flex">
                    <Button variant="light" isIconOnly radius="full">
                        <BsBell size={20} className=" text-default-700" />
                    </Button>
                </NavbarItem>
                <NavbarItem className="hidden md:flex">
                    <Button variant="light" isIconOnly radius="full">
                        <IoChatbubbleEllipsesOutline size={20} className=" text-default-700" />
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
