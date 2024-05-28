import { Image } from '@nextui-org/react';

const About = () => {
    return (
        <div className="mx-auto flex w-full items-center gap-[10vh] px-[10vh]">
            <Image
                src="http://res.cloudinary.com/doxsstgkc/image/upload/v1716520511/goffer/tikvideo_app_7289049866494364974_11_jpeg_1716520507717.jpg"
                className="aspect-square h-[52vh] rounded-none"
            />
            <div className="min-w-0 flex-1">
                <p className="text-left text-[6.5vh] leading-[150%]">Meet Tuan</p>
                <p className="mt-[4vh] text-[2vh] font-medium">PRODUCT DESIGNER; SOFTWARE ENGINEER; WEBSITE MAGICIAN</p>
                <p className="mt-[3vh] text-[3vh] leading-[150%]">
                    👋 Lead product designer by day and no-code web developer by night. Over a decade of experience
                    designing for the web. Certified Framer expert. If you need a flawless Framer site developed FAST,
                    hit me up! Let's make magic together! 🪄
                </p>
                <p className="mt-[3vh] text-[2vh] font-medium">HCM CITY, VIETNAM</p>
            </div>
        </div>
    );
};

export default About;
