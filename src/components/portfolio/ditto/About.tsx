import { Image } from '@nextui-org/react';

const About = () => {
    return (
        <div
            className="relative mx-auto w-[84vw] rounded-[4vh] px-[16vh] py-[12vh]"
            style={{
                color: 'var(--p-bg-color)',
            }}
        >
            <div
                className="absolute left-0 top-0 h-full w-full rounded-[4vh] opacity-90"
                style={{ backgroundColor: 'var(--text-color)' }}
            ></div>
            <div className="relative z-[1] flex flex-col items-center gap-[6vh]">
                <div className="flex items-center gap-[3vh]">
                    <Image
                        src="http://res.cloudinary.com/doxsstgkc/image/upload/v1716520511/goffer/tikvideo_app_7289049866494364974_11_jpeg_1716520507717.jpg"
                        className="aspect-square h-[10vh] rounded-full"
                    />
                    <div className="text-[3vh] font-medium">
                        <p>TUAN HOANG DINH ANH</p>
                        <p className="mt-[1vh] text-[2vh] font-medium">HCM CITY, VIETNAM</p>
                    </div>
                </div>
                <p className="mt-[3vh] text-[4vh] leading-[150%]">
                    👋 Lead product designer by day and no-code web developer by night. Over a decade of experience
                    designing for the web. Certified Framer expert. If you need a flawless Framer site developed FAST,
                    hit me up! Let's make magic together! 🪄
                </p>
            </div>
        </div>
    );
};

export default About;
