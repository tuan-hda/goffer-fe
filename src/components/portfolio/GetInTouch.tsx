import { Button } from '../ui/button';
import classNames from 'classnames';
import { User } from '@/types/user.type';
import useSelfProfileQuery from '@/hooks/useSelfProfileQuery';
import { useNavigate } from 'react-router-dom';
import { client } from '@/utils/streamchat';
import { useState } from 'react';
import { TbLoader } from 'react-icons/tb';

type GetInTouchProps = {
    className?: string;
    type?: 'internal' | 'external';
    user?: User;
};

const GetInTouch = ({ className, type = 'internal', user: data }: GetInTouchProps) => {
    const { data: self } = useSelfProfileQuery();
    const navigate = useNavigate();
    const [chatLoading, setChatLoading] = useState(false);
    const getInTouch = async () => {
        if (client.userID && data && data.id != self?.id) {
            setChatLoading(true);
            await client.upsertUser({ id: data.id, name: data.name, image: data.avatar });

            const channel = client.channel('messaging', {
                members: [client.userID, data.id],
            });
            await channel.create();
            navigate('/app/messages');
            setChatLoading(false);
        }
    };
    const handleConnect = () => {
        if (!self) {
            navigate(`/auth/login?redirect=${window.location.pathname}`);
        } else {
            getInTouch();
        }
    };

    return (
        <Button
            onClick={handleConnect}
            className={classNames(
                className,
                'portfolio-button-bg h-[7.5vh] rounded-full px-[4vh] py-[3vh] !text-[2vh] text-base uppercase tracking-widest text-white',
            )}
        >
            {chatLoading && <TbLoader className="mr-4 animate-spin text-xl" />}
            Get in touch
        </Button>
    );
};

export default GetInTouch;
