const JobDetail = () => {
    const text = [1, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

    return (
        <div className="job-detail-scrollbar fixed right-4 top-16 h-[calc(100vh-64px)] w-1/2 overflow-hidden bg-yellow-50 hover:overflow-y-scroll md:right-6 xl:left-1/2">
            {text.map((i, index) => (
                <p key={index} className="mb-8 bg-gray-50">
                    {i}
                </p>
            ))}
        </div>
    );
};

export default JobDetail;
