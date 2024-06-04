import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react';
import { TbChartBubble, TbSearch } from 'react-icons/tb';
import { Input } from '../ui/input';
import { useRef } from 'react';
import RoomReview from './RoomReview';
import type { ChannelFilters, ChannelSort, ChannelOptions } from 'stream-chat';
import { ChannelList } from 'stream-chat-react';

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
    const ref = useRef<HTMLInputElement>(null);

    return (
        <div className="h-full overflow-y-auto py-5">
            <Breadcrumbs className="mt-[5px] px-4">
                <BreadcrumbItem>
                    <TbChartBubble className="text-lg" /> Messages
                </BreadcrumbItem>
            </Breadcrumbs>

            <div
                onClick={() => ref.current?.focus()}
                className="mt-5 flex h-16 items-center gap-0 border-y border-y-[#EEEEF0] bg-[#FAFAFA] px-4 text-text"
            >
                <TbSearch className="text-base" />
                <Input
                    ref={ref}
                    placeholder="Search contacts"
                    className="flex-1 border-0 px-1 shadow-none outline-0 focus-visible:ring-0"
                />
            </div>

            <ChannelList Preview={RoomReview} filters={filters} sort={sort} options={options} />
        </div>
    );
};

export default RoomList;
