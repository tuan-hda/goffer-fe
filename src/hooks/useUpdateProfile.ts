import { useEffect, useState } from 'react';
import useSelfProfileQuery from './useSelfProfileQuery';
import { User } from '@/types/user.type';
import { updateSelfService } from '@/services/users.service';
import { isAxiosError } from 'axios';
import toast from 'react-hot-toast';

const useUpdateProfile = () => {
    const { data, refetch } = useSelfProfileQuery();

    const [profile, setProfile] = useState<User>();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (data) {
            setProfile({
                ...data,
                links: (data.links || []).concat({ label: '', url: '' }),
            });
        }
    }, [data]);

    const updateProfile = async (data: Partial<User>) => {
        try {
            setLoading(true);
            // await new Promise((resolve) => {
            //     setTimeout(resolve, 1000);
            // });
            await updateSelfService(data);
            await refetch();
        } catch (error) {
            if (isAxiosError(error)) {
                toast.error(error.response?.data?.message || 'Failed to update profile');
                return;
            }
            toast.error('Failed to update profile');
            console.log('Update profile error:', error);
        } finally {
            setLoading(false);
        }
    };

    const cancelUpdate = (field: keyof User) => () => {
        setProfile((prev) => {
            if (!prev) {
                return prev;
            }
            return {
                ...prev,
                [field]: data?.[field],
            };
        });
    };
    return { updateProfile, loading, profile, setProfile, setLoading, data, refetch, cancelUpdate };
};

export default useUpdateProfile;
