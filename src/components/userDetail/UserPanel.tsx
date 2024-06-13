import { Avatar } from '@nextui-org/react';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { TbBookmarks, TbExternalLink, TbLoaderQuarter, TbPlanet } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import { toggleSavedUser } from '@/services/interaction.service';
import useUserInfo from '@/hooks/useUserInfo';
import { useState } from 'react';
import { useChatContext } from 'stream-chat-react';

interface Props {
    id: string;
}
const UserPanel = ({ id }: Props) => {
    const navigate = useNavigate();
    const { data, refetch } = useUserInfo(id);
    if (!data) return;

    const { client, setActiveChannel } = useChatContext();

    const [chatLoading, setChatLoading] = useState(false);

    const onSaved = async () => {
        await toggleSavedUser(data.id);
        await refetch();
    };

    const getInTouch = async () => {
        if (client.userID) {
            setChatLoading(true);
            await client.upsertUser({ id: data.id, name: data.name, image: data.avatar });

            const channel = client.channel('messaging', {
                members: [client.userID, data.id],
            });
            await channel.create();
            setActiveChannel?.(channel);
            navigate('/app/messages');
            setChatLoading(false);
        }
    };

    return (
        <div>
            <div className="mb-8 flex flex-col items-center">
                <Avatar src={data.avatar} className="h-40 w-40 rounded-full object-cover" />
                <Badge className="z-20 -mt-4">{data.status}</Badge>
                <p className="mt-4 text-2xl font-semibold">{data.name}</p>
                <div className="mt-4 flex gap-2">
                    <Button
                        onClick={getInTouch}
                        variant="black"
                        className="w-full max-w-fit gap-2 rounded-2xl text-base"
                        size="lg"
                    >
                        {chatLoading ? (
                            <TbLoaderQuarter className="animate-spin text-base" size={20} />
                        ) : (
                            <TbPlanet className="text-base" size={20} />
                        )}
                        Get in touch
                    </Button>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    onClick={onSaved}
                                    variant={data.saved ? 'black' : 'outline'}
                                    className="h-10 w-10 rounded-2xl"
                                    size="icon"
                                >
                                    <TbBookmarks className="text-base" size={20} />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Save</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
            </div>

            {data.location && (
                <>
                    <p className="mb-2 mt-8 self-start text-xs font-light text-gray-500">LOCATION</p>
                    <p className="text-text">{data.location}</p>
                </>
            )}

            {data.bio && (
                <>
                    <p className="mb-2 mt-8 self-start text-xs font-light text-gray-500">BIO</p>
                    <p className="text-text">{data.bio}</p>
                </>
            )}

            {data.badges && data.badges.length > 0 && (
                <>
                    <p className="mb-5 mt-8 self-start text-xs font-light text-gray-500">BADGES</p>
                    <div className="flex flex-wrap items-start gap-4">
                        {data.badges.map((badge) => (
                            <Badge variant="outline" className="rounded-xl px-3 py-2 text-sm font-normal">
                                {badge}
                            </Badge>
                        ))}
                    </div>
                </>
            )}

            {data.links && data.links.length > 0 && (
                <>
                    <p className="mb-5 mt-8 self-start text-xs font-light text-gray-500">LINKS</p>
                    <div className="flex flex-wrap items-start gap-4">
                        {data.links.map(({ url, label }) => (
                            <Button
                                onClick={() => window.open(url, '_blank')}
                                variant="outline"
                                className="flex items-center gap-2"
                            >
                                {label}
                                <TbExternalLink className="text-base" />
                            </Button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default UserPanel;
