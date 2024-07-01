type ViewPanelProps = {
    url: string;
};

const ViewPanel = ({ url }: ViewPanelProps) => {
    return (
        <div className="h-full flex-1 self-start overflow-hidden">
            <iframe src={url} className="h-[calc(100%)] w-[calc(100%)]"></iframe>
        </div>
    );
};

export default ViewPanel;
