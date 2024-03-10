import { motion } from 'framer-motion';
import TrustedByLayout from './TrustedByLayout';
import { useState } from 'react';

const individualList = [
    {
        img: '/beings/maliketh.jpeg',
        content: "SO SO SO HAPPY WE FOUND YOU GUYS!!!! I'd bet you've saved me 100 hours so far.",
        specs: [-3, 0],
        author: 'Maliketh, The Black Blade',
    },
    {
        img: '/beings/malenia.webp',
        content: "If I could give 11 stars, I'd give 12.",
        specs: [6, 10],
        author: 'Malenia, Blade of Miquella',
    },
    {
        img: '/beings/radagon.jpeg',
        content: "It's so simple and intuitive, we got the team up to speed in 10 minutes.",
        specs: [-6, -5],
        author: 'Radagon of the Golden Order',
    },
    {
        img: '/beings/rennala.jpeg',
        content: "It's just the best. Period.",
        specs: [4, 10],
        author: 'Rennala, Queen of the Full Moon',
    },
    {
        img: '/beings/marika.jpeg',
        content: 'I switched 5 years ago and never looked back.',
        specs: [-7, -1],
        author: 'Marika, Queen of the Golden Order',
    },
];

const Individual = () => {
    const [parentWidth, setParentWidth] = useState(0);

    return (
        <TrustedByLayout title="Individual" blendTitleOnly className="max-w-[1200px]">
            <div
                ref={(node) => setParentWidth(node?.getBoundingClientRect().width || 0)}
                className="h-full w-full relative invert"
            >
                {parentWidth !== 0 &&
                    individualList.map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{
                                scale: 1.2,
                                backgroundColor: '#fff0dd',
                                rotate: 0,
                                zIndex: 4,
                                transition: { duration: 0.3 },
                            }}
                            initial={{
                                rotate: item.specs[0],
                                left:
                                    (Math.min(256 * individualList.length, parentWidth) / individualList.length) *
                                        index -
                                    index * 30,
                                top: `calc(50% + ${item.specs[1] + (index + 1) * 110 - index * 100}px)`,
                                translateY: '-50%',
                            }}
                            animate={{
                                rotate: item.specs[0],
                                backgroundColor: '#fffbf6',
                                zIndex: 3 - index,
                                top: `calc(50% + ${item.specs[1]}px)`,
                                left:
                                    (Math.min(256 * individualList.length, parentWidth) / individualList.length) *
                                    index,
                                translateY: '-50%',
                                transition: {
                                    type: 'spring',
                                    duration: 1 - index * 0.05,
                                    delay: index * 0.1,
                                },
                            }}
                            className="absolute p-6 flex flex-col invert group rounded-2xl h-[360px] w-64 shadow-2xl"
                        >
                            <img src={item.img} alt="author" className="object-cover rounded-full h-16 w-16" />
                            <p className="mt-4 text-text">&quot;{item.content}&quot;</p>
                            <p className="mt-auto font-semibold">- {item.author}</p>
                        </motion.div>
                    ))}
            </div>
        </TrustedByLayout>
    );
};

export default Individual;
