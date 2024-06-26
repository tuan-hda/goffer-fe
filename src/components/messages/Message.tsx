import { Avatar } from '@nextui-org/react';
import classNames from 'classnames';
import { useMessageContext } from 'stream-chat-react';

const Message = () => {
    const { message, isMyMessage } = useMessageContext();
    const isOwner = isMyMessage();

    return (
        <div data-message-id={message.id} className={classNames('flex w-full px-8 py-4', isOwner && 'justify-end')}>
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
                    <div className={classNames('rounded-[14px] border p-5', isOwner ? 'bg-[#FFF4E4]' : 'bg-white')}>
                        <p>{message.text}</p>
                        {/* <p>{message.created_at?.toLocaleString()}</p> */}
                    </div>
                </div>
                <p className="ml-[60px] mt-2 text-xs text-text/70">{message.created_at?.toLocaleString()}</p>
            </div>
        </div>
    );
};

export default Message;
