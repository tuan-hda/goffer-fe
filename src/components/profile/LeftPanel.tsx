import { Avatar } from '@nextui-org/react';
import useSelfProfileQuery from '@/hooks/useSelfProfileQuery';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { TbExternalLink } from 'react-icons/tb';
import { Editable } from '../common';
import SocialLink from './SocialLink';
import { useEffect, useState } from 'react';
import { updateSelfService } from '@/services/users.service';
import { User } from '@/types/user.type';
import toast from 'react-hot-toast';
import { isAxiosError } from 'axios';

const LeftPanel = () => {
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
            await new Promise((resolve) => {
                setTimeout(resolve, 1000);
            });
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

    const cancelUpdateLinks = (index: number) => () => {
        setProfile((prev) => {
            if (!prev) {
                return prev;
            }
            const links = prev.links || [];
            links[index] = data?.links?.at(index) || { label: '', url: '' };
            return {
                ...prev,
                links,
            };
        });
    };

    const setLink = (index: number) => (link: { label: string; url: string }) => {
        setProfile((prev) => {
            if (!prev) {
                return prev;
            }
            const links = prev.links || [];
            links[index] = link;
            return {
                ...prev,
                links,
            };
        });
    };

    if (!profile) {
        return null;
    }

    const lastIndex = (profile.links?.length || 0) - 1;

    return (
        <div className="h-[320px] w-[320px]">
            <Avatar src={profile?.avatar} className="h-[320px] w-[320px] rounded-3xl object-cover" />
            <Button variant="black" className="mt-6 w-full rounded-2xl text-base" size="lg">
                Get in touch
            </Button>
            <p className="mb-3 mt-8 text-xs font-light text-gray-500">LOCATION</p>
            <Editable
                saving={loading}
                onSave={async (v) =>
                    updateProfile({
                        location: v,
                    })
                }
                onCancel={cancelUpdate('location')}
                mode={profile.location ? 'active' : 'new'}
                value={profile.location}
                setValue={(v) => {
                    setProfile(
                        (prev) =>
                            ({
                                ...prev,
                                location: v,
                            }) as User,
                    );
                }}
            />
            <p className="mb-5 mt-8 text-xs font-light text-gray-500">BADGES</p>
            <div className="flex flex-wrap gap-4">
                <Badge variant="outline" className="rounded-xl px-3 py-2 text-sm font-normal">
                    💰 Pull Shark
                </Badge>
                <Badge variant="outline" className="rounded-xl px-3 py-2 text-sm font-normal">
                    🐰 New Me Super Shy
                </Badge>
            </div>
            <p className="mb-3 mt-11 text-xs font-light text-gray-500">LINKS</p>
            <div>
                {profile.links?.slice(0, lastIndex).map((link, index) => (
                    <Editable
                        onCancel={cancelUpdateLinks(index)}
                        key={index}
                        custom={<SocialLink link={link} setLink={setLink(index)} />}
                        deletable
                        className="!py-2"
                        type="custom"
                    >
                        <div className="flex items-center gap-2">
                            LinkedIn
                            <TbExternalLink className="text-base" />
                        </div>
                    </Editable>
                ))}
            </div>
            {profile.links && (
                <Editable
                    onCancel={cancelUpdateLinks(lastIndex)}
                    custom={<SocialLink link={profile.links[lastIndex]} setLink={setLink(lastIndex)} />}
                    className="!py-2"
                    type="custom"
                    mode="new"
                />
            )}
        </div>
    );
};

export default LeftPanel;
