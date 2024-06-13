type GenAIProviderProps = {
    children?: React.ReactNode;
    systemMessage: string;
};

const GenAIProvider = ({ children }: GenAIProviderProps) => {
    const handleClick = () => {};

    return <div onClick={handleClick}>{children}</div>;
};

export default GenAIProvider;
