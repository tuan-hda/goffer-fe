import RoomReview from './RoomReview';
import type { ChannelFilters, ChannelSort, ChannelOptions } from 'stream-chat';
import { ChannelList, useChatContext } from 'stream-chat-react';
import SearchBar from './SearchBar';
import { Spinner } from '@nextui-org/react';
import { useEffect, useState } from 'react';

const RoomList = () => {
    const { client } = useChatContext();

    const [querying, setQuerying] = useState(true);

    const sort: ChannelSort = { last_message_at: -1 };
    const filters: ChannelFilters = {
        type: 'messaging',
        members: { $in: [client.userID ?? ''] },
    };
    const options: ChannelOptions = {
        limit: 10,
        watch: true,
    };

    useEffect(() => {
        (async () => {
            if (client) {
                await client.queryChannels(filters, sort, options).then(() => {
                    setQuerying(false);
                });
            }
        })();
    }, [client]);

    return (
        <div className="h-full overflow-y-auto pt-5">
            {!client || querying ? (
                <div className="flex h-screen w-full">
                    <Spinner className="m-auto" />
                </div>
            ) : (
                <ChannelList
                    Preview={RoomReview}
                    filters={filters}
                    sort={sort}
                    options={options}
                    showChannelSearch
                    additionalChannelSearchProps={{
                        SearchBar: SearchBar,
                    }}
                />
            )}
        </div>
    );
};

export default RoomList;
