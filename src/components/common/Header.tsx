import { Navbar, NavbarContent, NavbarItem, Link, Button, NavbarBrand } from '@nextui-org/react';
import { BsBell } from 'react-icons/bs';
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5';

export default function Header() {
    return (
        <Navbar isBordered isBlurred={false} maxWidth="full" className="child-bg top-0">
            <NavbarContent justify="start">
                <NavbarItem className="hidden lg:flex">
                    <p className="text-3xl font-bold text-default-700">Discover</p>
                </NavbarItem>
            </NavbarContent>
            <NavbarBrand className="justify-center gap-4 lg:hidden">
                <Link color="foreground" href="/individual">
                    <img src="/logo.svg" alt="logo" className="mr-2 h-10 w-10" />
                    <p className="text-4xl font-bold text-inherit">GOFFER</p>
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
