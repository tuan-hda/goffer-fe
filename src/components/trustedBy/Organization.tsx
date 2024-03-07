import { useAnimation, motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import FancyTabContent from '../common/FancyTabContent';
import classNames from 'classnames';
import { fadeInPropsFn, zoomInPropsFn } from '../../utils/animation';
import TrustedByLayout from './TrustedByLayout';

const trustedList = [
    {
        key: 'figma',
        img: '/logos/figma.png',
        alt: 'figma-logo',
        title: "How Figma scaled their team's power",
        content:
            "Goffer has been transformative for our team; its 'Media-powered response' feature brought a personal touch to our recruitment, making it easier to connect with the right talent. The 'AI-powered evaluation' further streamlined the process, allowing us to scale our team efficiently while maintaining quality.",
        author: 'Tu Thanh Phan, Head of Gacha at G- Impact (Figma)',
        authorImg: '/beings/pigjy.jpeg',
    },
    {
        key: 'open-ai',
        img: '/logos/open-ai.png',
        alt: 'open-ai-logo',
        className: 'p-[10px]',
        title: 'How Open AI became a global force',
        content:
            "Goffer's 'Expand Your Networks' and 'Upgrade Your Profile' features have revolutionized how we connect and present ourselves, enhancing our team's capabilities and fostering innovation.",
        author: 'Tuan Hoang, Elden Lord (Open AI)',
        authorImg: '/beings/eldenlord.jpeg',
    },
    {
        key: 'notion',
        img: '/logos/notion.png',
        alt: 'notion-logo',
        className: 'scale-[1.65]',
        title: 'Notion and the power of remote hiring',
        content:
            "Goffer's 'Media-powered response' and 'AI-powered evaluation' have been instrumental in transforming our remote hiring, enabling us to understand candidates more deeply and streamline our selection process, thus empowering our global team expansion.",
        author: "Paul Muad'dib Usul, Kwisatz Haderach at Notion",
        authorImg: '/beings/mauldib.webp',
    },
    {
        key: 'heavy',
        img: '/logos/heavy.png',
        alt: 'heavy-logo',
        className: 'p-2',
        title: 'How Heavy scaled their team with Goffer',
        content:
            'This have significantly amplified our outreach and internal talent development, making it a cornerstone of our growth strategy in the competitive landscape.',
        author: 'Chipi Chapa, Lord of Chaos',
        authorImg: '/beings/chipichapa.jpeg',
    },
    {
        key: 'galxe',
        img: '/logos/galxe.png',
        alt: 'galxe-logo',
        className: 'p-3 invert-0',
        title: 'Gun',
        content: 'Gun',
        author: 'Gun',
        authorImg: '/beings/gun.jpeg',
    },
];

const Organization = () => {
    const [selected, setSelected] = useState<string>('figma');
    const ctrls = useAnimation();
    const lastCtrls = useAnimation();
    const sectionCtrls = useAnimation();

    const currStory = useMemo(() => {
        return trustedList.find((item) => item.key === selected);
    }, [selected]);

    const getFadeInProps = useMemo(() => {
        return fadeInPropsFn(sectionCtrls);
    }, [sectionCtrls]);

    const getZoomInProps = useMemo(() => {
        return zoomInPropsFn(sectionCtrls);
    }, [sectionCtrls]);

    useEffect(() => {
        ctrls.start('visible');
    }, [ctrls, selected]);

    useEffect(() => {
        sectionCtrls.set('hidden');
        sectionCtrls.start('visible');
    }, [sectionCtrls, selected]);

    const handleClick = (key: string) => () => {
        if (key === selected) return;
        ctrls.start('hidden');
        setSelected(key);
    };

    return (
        <TrustedByLayout title="Organization">
            <div className="invert flex-shrink-0 bg-gray-400 h-20 px-3 rounded-full bg-opacity-20 flex gap-3 items-center">
                {trustedList.map((item) => (
                    <button
                        key={item.key}
                        className={classNames('h-14 cursor-pointer w-44 bg-white rounded-full')}
                        onClick={handleClick(item.key)}
                    >
                        <FancyTabContent
                            img={item.img}
                            imgAlt={item.alt}
                            imgClassName={item.className}
                            ctrls={item.key === selected ? ctrls : lastCtrls}
                        />
                    </button>
                ))}
            </div>

            <div className="flex-1 p-2 flex min-h-0 mt-6 rounded-3xl gap-8">
                <div className="min-w-0 flex-[3] space-y-6">
                    <motion.p {...getFadeInProps()} className="text-3xl text-gray-300 font-serif font-semibold">
                        {currStory?.title}
                    </motion.p>
                    <motion.p {...getFadeInProps(0.5)} className="text-base text-gray-300">
                        {currStory?.content}
                    </motion.p>
                    <motion.p {...getFadeInProps(1)} className="text-lg text-gray-300 font-bold">
                        – {currStory?.author}
                    </motion.p>
                </div>
                <motion.img
                    {...getZoomInProps()}
                    src={currStory?.authorImg}
                    alt={currStory?.author}
                    className="invert flex-[2] min-w-0 object-cover rounded-2xl"
                />
            </div>
        </TrustedByLayout>
    );
};

export default Organization;
