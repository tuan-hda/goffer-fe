const MessagePanel = () => {
    return (
        <div className="relative h-full">
            <img src="/gradient.png" className="absolute h-full w-full object-cover" />
            <div className="relative z-[1] h-full w-full bg-white/90 backdrop-blur-3xl"></div>
        </div>
    );
};

export default MessagePanel;
