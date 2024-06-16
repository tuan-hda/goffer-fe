import { Avatar } from '@nextui-org/react';
import { Button } from '../ui/button';
import { TbExternalLink } from 'react-icons/tb';
import { Editable } from '../common';
import SocialLink from './SocialLink';
import { User } from '@/types/user.type';
import useUpdateProfile from '@/hooks/useUpdateProfile';

const LeftPanel = () => {
    const { loading, profile, setProfile, updateProfile, data, cancelUpdate } = useUpdateProfile();

    const calcUpdatedLinks = (index: number, link: { label: string; url: string }) => {
        const links = (data?.links || []).map((l) => ({ label: l.label, url: l.url }));
        if (index >= links.length) {
            links.push(link);
        } else {
            links[index] = {
                label: link.label,
                url: link.url,
            };
        }

        console.log({
            links,
        });

        return {
            links,
        };
    };

    const calcDeletedLinks = (index: number) => {
        const links = (data?.links || []).filter((_, i) => i !== index).map((l) => ({ label: l.label, url: l.url }));
        return {
            links,
        };
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
            <p className="mb-3 mt-8 text-xs font-light text-gray-500">LINKS</p>
            <div>
                {profile.links &&
                    profile.links.slice(0, lastIndex).map((link, index) => (
                        <Editable
                            saving={loading}
                            onRemove={() => updateProfile(calcDeletedLinks(index))}
                            onCancel={cancelUpdateLinks(index)}
                            onSave={() => updateProfile(calcUpdatedLinks(index, profile.links![index]))}
                            key={index}
                            custom={<SocialLink link={link} setLink={setLink(index)} />}
                            deletable
                            className="!py-2"
                            type="custom"
                        >
                            <div className="flex items-center gap-2">
                                {link.label}
                                <TbExternalLink className="text-base" />
                            </div>
                        </Editable>
                    ))}
            </div>
            {profile.links && (
                <Editable
                    saving={loading}
                    onCancel={cancelUpdateLinks(lastIndex)}
                    onSave={() => updateProfile(calcUpdatedLinks(lastIndex, profile.links![lastIndex]))}
                    custom={<SocialLink link={profile.links[lastIndex]} setLink={setLink(lastIndex)} />}
                    className="mt-2 !py-2"
                    type="custom"
                    mode="new"
                />
            )}
        </div>
    );
};

export default LeftPanel;
