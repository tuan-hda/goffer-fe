import { Image } from '@nextui-org/react';
import { TbCheck } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const TemplateList = () => {
    return (
        <div className="grid grid-cols-3 gap-8">
            <Link to="#" className="group relative">
                <Image
                    src="https://cdn.dribbble.com/userupload/13330459/file/original-3e21026bbd113b2e9cca35670de77116.jpg"
                    className="h-72 rounded-3xl"
                    classNames={{
                        img: 'object-cover',
                    }}
                />
                <div className="absolute bottom-5 right-7 z-[11] rounded-full bg-white/50 p-4 opacity-0 shadow-small backdrop-blur-sm transition group-hover:opacity-100">
                    <TbCheck className="text-xl text-black" />
                </div>
            </Link>
            <Link to="#" className="group relative">
                <Image
                    src="https://cdn.dribbble.com/userupload/12506395/file/original-10f735ebf9f7319d5c6b3dac06167475.jpg"
                    className="h-72 rounded-3xl"
                    classNames={{
                        img: 'object-cover',
                    }}
                />
                <div className="absolute bottom-5 right-7 z-[11] rounded-full bg-white/50 p-4 opacity-0 shadow-small backdrop-blur-sm transition group-hover:opacity-100">
                    <TbCheck className="text-xl text-black" />
                </div>
            </Link>
            <Link to="#" className="group relative">
                <Image
                    src="https://cdn.dribbble.com/userupload/3237988/file/original-9beac786efbf93c18b74da6def2f87fe.png"
                    className="h-72 rounded-3xl"
                    classNames={{
                        img: 'object-cover',
                    }}
                />
                <div className="absolute bottom-5 right-7 z-[11] rounded-full bg-white/50 p-4 opacity-0 shadow-small backdrop-blur-sm transition group-hover:opacity-100">
                    <TbCheck className="text-xl text-black" />
                </div>
            </Link>
            <Link to="#" className="group relative">
                <Image
                    src="https://cdn.dribbble.com/users/5084254/screenshots/19615005/media/ae4d4592c55fd7c6f738e6db73934ed8.jpg"
                    className="h-72 rounded-3xl"
                    classNames={{
                        img: 'object-cover',
                    }}
                />
                <div className="absolute bottom-5 right-7 z-[11] rounded-full bg-white/50 p-4 opacity-0 shadow-small backdrop-blur-sm transition group-hover:opacity-100">
                    <TbCheck className="text-xl text-black" />
                </div>
            </Link>
            <Link to="#" className="group relative">
                <Image
                    src="https://cdn.dribbble.com/users/1720295/screenshots/16491670/media/ca92e6ca16cd112af892d08bd1ff773c.png"
                    className="h-72 rounded-3xl"
                    classNames={{
                        img: 'object-cover',
                    }}
                />
                <div className="absolute bottom-5 right-7 z-[11] rounded-full bg-white/50 p-4 opacity-0 shadow-small backdrop-blur-sm transition group-hover:opacity-100">
                    <TbCheck className="text-xl text-black" />
                </div>
            </Link>
            <Link to="#" className="group relative">
                <Image
                    src="https://cdn.dribbble.com/userupload/3989863/file/original-87029f4a232a3377371a49a1daed0de0.png"
                    className="h-72 rounded-3xl"
                    classNames={{
                        img: 'object-cover',
                    }}
                />
                <div className="absolute bottom-5 right-7 z-[11] rounded-full bg-white/50 p-4 opacity-0 shadow-small backdrop-blur-sm transition group-hover:opacity-100">
                    <TbCheck className="text-xl text-black" />
                </div>
            </Link>
            <Link to="#" className="group relative">
                <Image
                    src="https://cdn.dribbble.com/users/428659/screenshots/16786709/media/c2315e9e0fc80b36684436bdb6105bb1.jpg"
                    className="h-72 rounded-3xl"
                    classNames={{
                        img: 'object-cover',
                    }}
                />
                <div className="absolute bottom-5 right-7 z-[11] rounded-full bg-white/50 p-4 opacity-0 shadow-small backdrop-blur-sm transition group-hover:opacity-100">
                    <TbCheck className="text-xl text-black" />
                </div>
            </Link>
        </div>
    );
};

export default TemplateList;
