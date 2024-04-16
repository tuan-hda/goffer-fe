import { Avatar } from '@nextui-org/react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { TbChartBubble, TbDots } from 'react-icons/tb';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Button } from '../ui/button';

export const Feedback = () => {
    return (
        <Card className="relative shadow-none">
            <CardHeader>
                <CardTitle>Inefficient Project Board Creation</CardTitle>
                <CardDescription className="flex items-center gap-2">
                    <span className="text-text/80">Apr 24 by</span> <Avatar src="/trivia1.png" className="h-6 w-6" />{' '}
                    <span className="font-medium">Tuan Hoang Dinh Anh</span>
                </CardDescription>
            </CardHeader>
            <CardContent>
                Customization is a great lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec odio nec
                urna posuere lacinia. Donec auctor, nunc nec ultricies.
            </CardContent>
            <CardFooter className="flex items-center gap-4 text-text/80">
                <div className="flex items-center gap-1">
                    <TbChartBubble /> Open
                </div>
                /<div>😔 Negative</div>
            </CardFooter>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="absolute right-3 top-3">
                        <TbDots className="text-base" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Mark as resolved</DropdownMenuItem>
                    <DropdownMenuItem>Delete</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </Card>
    );
};
