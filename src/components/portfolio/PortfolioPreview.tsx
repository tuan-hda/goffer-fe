const PortfolioPreview = () => {
    return (
        <div className="pointer-events-none relative w-full rounded-3xl shadow-small">
            <video
                autoPlay
                width={1000}
                height={1000}
                muted
                loop
                className="aspect-[4/3] h-full w-full rounded-3xl object-cover"
            >
                <source
                    src="https://res.cloudinary.com/doxsstgkc/video/upload/v1716954338/goffer/b7yapx8jjhccxymrwlsj.mp4"
                    type="video/mp4"
                ></source>
            </video>
        </div>
    );
};

export default PortfolioPreview;
