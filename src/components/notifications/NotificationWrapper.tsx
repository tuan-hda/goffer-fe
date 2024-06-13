type NotificationWrapperProps = {
    children?: React.ReactNode;
    isEmpty?: boolean;
};
const NotificationWrapper = ({ isEmpty, children }: NotificationWrapperProps) => {
    if (isEmpty)
        return (
            <div className="flex h-full min-h-[200px] w-full items-center justify-center">
                There's no notifications here.
            </div>
        );
    return <div>{children}</div>;
};

export default NotificationWrapper;
