import RoomReview from './RoomReview';
import type { ChannelFilters, ChannelSort, ChannelOptions } from 'stream-chat';
import { ChannelList } from 'stream-chat-react';
import SearchBar from './SearchBar';

const userId = 'little-wood-9';

const sort: ChannelSort = { last_message_at: -1 };
const filters: ChannelFilters = {
    type: 'messaging',
    members: { $in: [userId] },
};
const options: ChannelOptions = {
    limit: 10,
};

const RoomList = () => {
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
