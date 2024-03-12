import { Link } from '@nextui-org/react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

const SideBar = () => {
    return (
        <Sidebar>
            <Menu
                menuItemStyles={{
                    button: {
                        // the active class will be added automatically by react router
                        // so we can use it to style the active menu item
                        [`&.active`]: {
                            backgroundColor: '#13395e',
                            color: '#b6c8d9',
                        },
                    },
                }}
            >
                <MenuItem component={<Link href="/documentation" />}> Documentation</MenuItem>
                <MenuItem component={<Link href="/calendar" />}> Calendar</MenuItem>
                <MenuItem component={<Link className="rounded-xl bg-yellow-200" href="/e-commerce" />}>
                    {' '}
                    E-commerce
                </MenuItem>
            </Menu>
        </Sidebar>
    );
};

export default SideBar;
