import { useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import FancyTabContent from '../components/common/FancyTabContent';
import classNames from 'classnames';

const trustedList = [
    {
        key: 'figma',
        img: '/logos/figma.png',
        alt: 'figma-logo',
    },
    {
        key: 'open-ai',
        img: '/logos/open-ai.png',
        alt: 'open-ai-logo',
        className: 'p-[10px]',
    },
    {
        key: 'notion',
        img: '/logos/notion.png',
        alt: 'notion-logo',
        className: 'scale-[1.65]',
    },
    {
        key: 'heavy',
        img: '/logos/heavy.png',
        alt: 'heavy-logo',
        className: 'p-2',
    },
    {
        key: 'galxe',
        img: '/logos/galxe.png',
        alt: 'galxe-logo',
        className: 'p-3 invert-0',
    },
];

const TrustedBy = () => {
    const [selected, setSelected] = useState<string>('figma');
    const ctrls = useAnimation();
    const lastCtrls = useAnimation();

    useEffect(() => {
        ctrls.start('visible');
    }, [ctrls, selected]);

    const handleClick = (key: string) => () => {
        if (key === selected) return;
        ctrls.start('hidden');
        setSelected(key);
    };

    return (
        <div className="h-[84vh] w-full flex">
            <div className="m-auto h-full p-6 max-h-[610px]">
                <div className="invert mix-blend-difference relative z-[4] bg-gray-400 h-20 px-3 rounded-full bg-opacity-20 flex gap-3 items-center">
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
            </div>
        </div>
    );
};

export default TrustedBy;
