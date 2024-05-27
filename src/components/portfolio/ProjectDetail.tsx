import { Avatar, Image } from '@nextui-org/react';
import { useEffect } from 'react';
import { TbArrowLeft } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { Reveal } from '../common';

const ProjectDetail = () => {
    useEffect(() => {
        window.scrollTo({
            left: 0,
            top: 0,
            behavior: 'smooth',
        });
    }, []);

    return (
        <>
            <div className="mx-auto mt-[10vh] w-[90vw]">
                <Link to="/p" className="group flex items-center gap-4 text-[2vh] font-light uppercase">
                    <TbArrowLeft className="text-[3vh] text-gray-600 transition group-hover:text-black" />
                    Go back to portfolio
                </Link>
            </div>

            <div className="mx-auto mt-[12vh] max-w-[60vw]">
                <Reveal threshold={0.1}>
                    <p className="font-serif text-[10vh] font-bold leading-[100%]">
                        Website Redesign and Webflow Development - Mula.me
                    </p>
                </Reveal>
                <Reveal threshold={0.1} delay={0.2}>
                    <p className="mt-[5vh] text-[2vh] font-light">
                        TOOLS: <span className="text-gray-700">ADOBE AFTER EFFECTS • FIGMA • WEBFLOW</span>
                    </p>
                </Reveal>
                <Reveal threshold={0.1} delay={0.3}>
                    <p className="mt-[1vh] text-[2vh] font-light">
                        SKILLS: <span className="text-gray-700">ADOBE AFTER EFFECTS • FIGMA • WEBFLOW</span>
                    </p>
                </Reveal>
                <Reveal threshold={0.1} delay={0.4}>
                    <div className="mt-[5vh] flex items-center gap-[4vh] ">
                        <Avatar src="https://via.placeholder.com/150" className="h-[10vh] w-[10vh]" />
                        <p className="text-[3vh]">Tuan Hoang Dinh Anh</p>
                    </div>
                    <div className="my-[6vh] border-t border-black/50"></div>
                </Reveal>

                <Reveal threshold={0.2}>
                    <div className="space-y-[6vh] text-black">
                        <p className="text-[2vh] font-light leading-[150%]">
                            Explore the world of art and mesmerize your audience with its beauty with Galleria, the Art
                            Exhibition Website UI Design!
                        </p>
                        <Image
                            src="https://media.contra.com/image/upload/v1713432290/xdplzpalfuni27sao0zu.png"
                            className="w-full rounded-none"
                        />
                        <p className="text-[2vh] font-light leading-[150%]">
                            Inspired by monochromatic and minimalist concepts, this template delivers an exceptional
                            website design with a neat and well-organized layout. The harmonization of the black and
                            white background creates a classic and magnificent look that can absorb all attention. Even
                            so, its look doesn’t lessen the modern and professional atmosphere, making it completely fit
                            for your art museum or exhibition website.
                        </p>
                        <Image
                            src="https://media.contra.com/image/upload/v1713432419/ippskxzbs8uysfqcgld5.png"
                            className="w-full rounded-none"
                        />
                        <Image
                            src="https://media.contra.com/image/upload/v1713432428/xdesraecwqvtej0p6ubg.png"
                            className="w-full rounded-none"
                        />
                        <Image
                            src="https://media.contra.com/image/upload/v1713432493/j6gv0cf6eexfboi0hmwb.png"
                            className="w-full rounded-none"
                        />
                    </div>
                </Reveal>
            </div>
        </>
    );
};

export default ProjectDetail;
