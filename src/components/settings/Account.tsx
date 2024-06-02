import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import classNames from 'classnames';
import { TbCalendar } from 'react-icons/tb';
import { Calendar } from '../ui/calendar';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../ui/select';
import { Spinner } from '@nextui-org/react';
import useSelfProfileQuery from '@/hooks/useSelfProfileQuery';
import { useEffect, useRef, useState } from 'react';
import { User } from '@/types/user.type';
import moment from 'moment';
import _ from 'lodash';
import { isAxiosError } from 'axios';
import { toast } from 'sonner';
import { updateUserService } from '@/services/users.service';
import { ImageEdit } from '../common';

const Account = () => {
    const [loading, setLoading] = useState(false);
    const [uploading, setUploading] = useState(false);

    const { data: user, refetch } = useSelfProfileQuery();
    const [curr, setCurr] = useState<User>();
    const old = useRef<User>();

    useEffect(() => {
        setCurr(user);
        old.current = user;
    }, [user]);

    const handleDobChange = (date?: Date) => {
        setCurr((prev) => ({ ...prev, dob: date }) as User);
    };

    const handleChange = (name: 'name' | 'gender') => (value: string) => {
        setCurr((prev) => ({ ...prev, [name]: value }) as User);
    };

    const isInvalid = _.isEqual(curr, old.current);

    const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            setLoading(true);
            if (curr) {
                await updateUserService({
                    name: curr.name,
                    avatar: curr.avatar,
                    dob: curr.dob,
                    gender: curr.gender,
                });
                await refetch();
            }
        } catch (error) {
            if (isAxiosError(error)) {
                return toast.error(error.response?.data.message || 'Something went wrong. Please try again later.');
            }
            toast.error('Something went wrong. Please try again later.');
            console.log('Save error:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSave} className="w-full rounded-xl p-6 text-sm shadow-medium">
            <h1 className="text-2xl">Account</h1>
            <div className="group relative mt-6 w-fit">
                <ImageEdit
                    image={curr?.avatar}
                    loading={uploading}
                    setLoading={setUploading}
                    setImage={(url) => setCurr((prev) => ({ ...prev, avatar: url }) as User)}
                />
            </div>
            <div className="mt-5">
                <label htmlFor="email">Email</label>
                <Input disabled className="mt-1" id="email" value={curr?.email} />
            </div>
            <div className="mt-5">
                <label htmlFor="name">Name</label>
                <Input
                    className="mt-1 bg-white"
                    onChange={(e) => handleChange('name')(e.target.value)}
                    id="name"
                    placeholder="Your name here"
                    value={curr?.name}
                />
            </div>
            <div className="mt-5">
                <p>Date of birth</p>
                <Popover>
                    <PopoverTrigger asChild>
                        <Button
                            type="button"
                            variant="outline"
                            className={classNames(
                                'mt-1 flex w-[240px] justify-start text-left font-normal',
                                !curr?.dob && 'text-muted-foreground',
                            )}
                        >
                            <TbCalendar className="mr-2 h-4 w-4" />
                            {curr?.dob ? moment(curr.dob).format('MMMM Do, YYYY') : <span>Pick a date</span>}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                        <Calendar mode="single" selected={curr?.dob} onSelect={handleDobChange} initialFocus />
                    </PopoverContent>
                </Popover>
            </div>
            <div className="mt-5">
                <p>Gender</p>
                <Select value={curr?.gender} onValueChange={(value) => handleChange('gender')(value)}>
                    <SelectTrigger id="gender" className="mt-1 w-[180px] bg-white">
                        <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Gender</SelectLabel>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
            <Button type="submit" disabled={loading || isInvalid} className="mt-6 w-full" variant="secondary">
                {loading && <Spinner size="sm" className="scale-50" />} Save
            </Button>
        </form>
    );
};

export default Account;
