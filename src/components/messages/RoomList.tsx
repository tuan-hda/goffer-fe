import RoomReview from './RoomReview';
import type { ChannelFilters, ChannelSort, ChannelOptions } from 'stream-chat';
import { ChannelList } from 'stream-chat-react';
import SearchBar from './SearchBar';
import { User } from '@/types/user.type';

interface Props {
    user: User;
}

const RoomList = ({ user }: Props) => {
    const sort: ChannelSort = { last_message_at: -1 };
    const filters: ChannelFilters = {
        type: 'messaging',
        members: { $in: [user.id] },
    };
    const options: ChannelOptions = {
        limit: 10,
    };

    return (
        <div className="h-full overflow-y-auto pt-5">
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
        </div>
    );
};

export default RoomList;
