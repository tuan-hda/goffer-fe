import { Avatar } from '@nextui-org/react';
import classNames from 'classnames';

type MessageProps = {
    isOwner?: boolean;
};

const Message = ({ isOwner = false }: MessageProps) => {
    return (
        <div className={classNames('flex w-full px-8 py-4', isOwner && 'justify-end')}>
            <div className={classNames('flex max-w-[70%] flex-col', isOwner && 'items-end')}>
                <div className="flex items-start gap-2">
                    {!isOwner && (
                        <Avatar
                            size="sm"
                            classNames={{
                                base: 'rounded-[12px] flex-shrink-0',
                            }}
                            src="https://cirsova.files.wordpress.com/2023/11/image-3.png"
                        />
                    )}
                    <div className={classNames('rounded-[14px] border bg-white p-5', isOwner ? 'bg-[#FFF4E4]' : '')}>
                        <p>I am available on Mon day 10am - 12pm.</p>
                        <p>Tuesday 10am - 12pm</p>
                    </div>
                </div>
                <p className="ml-[60px] mt-2 text-xs text-text/70">10:00 AM • 2 days ago</p>
            </div>
        </div>
    );
};

export default Message;
