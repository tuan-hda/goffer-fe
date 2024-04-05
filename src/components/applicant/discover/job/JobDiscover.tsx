'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import useJobStore from '@/stores/jobStore';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Divider } from '@nextui-org/react';
import JobCard from '../../common/JobCard';

const jobs = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

const JobDiscover = () => {
    const navigate = useNavigate();
    const { jobDetailOpening, tabKey, updateTabKey } = useJobStore();

    useEffect(() => {
        const path = location.pathname;
        const appliedPath = '/app/individual/jobs-applied';
        if (path.startsWith(appliedPath)) {
            updateTabKey('applied');
        } else {
            updateTabKey('all');
        }
    }, [location, updateTabKey]);

    return (
        <div className="flex">
            <div className="flex flex-col gap-x-4">
                {jobs.map((job, index) => (
                    <Sheet>
                        <SheetTrigger asChild>
                            {/* <Button className="h-fit overflow-hidden bg-transparent p-0 hover:bg-pale/50"> */}
                            <JobCard />
                            {/* </Button> */}
                        </SheetTrigger>
                        <SheetContent side={'bottom'}>
                            <SheetHeader>
                                <SheetTitle>Edit profile</SheetTitle>
                                <SheetDescription>
                                    Make changes to your profile here. Click save when you're done.
                                </SheetDescription>
                            </SheetHeader>
                            <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="name" className="text-right">
                                        Name
                                    </Label>
                                    <Input id="name" value="Pedro Duarte" className="col-span-3" />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="username" className="text-right">
                                        Username
                                    </Label>
                                    <Input id="username" value="@peduarte" className="col-span-3" />
                                </div>
                            </div>
                            <SheetFooter>
                                <SheetClose asChild>
                                    <Button type="submit">Save changes</Button>
                                </SheetClose>
                            </SheetFooter>
                        </SheetContent>
                    </Sheet>
                ))}
            </div>
            <Divider orientation="vertical" />
        </div>
    );
};

export default JobDiscover;
