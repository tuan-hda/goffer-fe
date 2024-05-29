import { TbCheck } from 'react-icons/tb';
import { Link } from 'react-router-dom';

type TemplateListProps = {
    setPortfolio: React.Dispatch<React.SetStateAction<boolean>>;
};

const TemplateList = ({ setPortfolio }: TemplateListProps) => {
    return (
        <div>
            <div className="col-span-3 mb-7 flex items-center">
                <h1 className="text-3xl">Choose a template</h1>
            </div>
            <div className="grid grid-cols-3 gap-8">
                <Link onClick={() => setPortfolio(true)} to="#" className="group relative rounded-3xl shadow-small">
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
                    <div className="absolute bottom-5 right-7 z-[11] rounded-full bg-white/50 p-4 opacity-0 shadow-small backdrop-blur-sm transition group-hover:opacity-100">
                        <TbCheck className="text-xl text-black" />
                    </div>
                </Link>
                <Link to="#" className="group relative rounded-3xl shadow-small">
                    <video loop autoPlay muted className="aspect-[4/3] rounded-3xl object-cover">
                        <source
                            src="https://res.cloudinary.com/doxsstgkc/video/upload/v1716954333/goffer/dtrznrewiou2lsycsegh.mp4"
                            type="video/webm"
                        ></source>
                    </video>
                    <div className="absolute bottom-5 right-7 z-[11] rounded-full bg-white/50 p-4 opacity-0 shadow-small backdrop-blur-sm transition group-hover:opacity-100">
                        <TbCheck className="text-xl text-black" />
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default TemplateList;
