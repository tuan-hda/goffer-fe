import LandingTwoColumn from '../layouts/LandingTwoColumn';

const WhoAreWe = () => {
    return (
        <LandingTwoColumn
            left={[
                {
                    animType: 'fadeIn',
                    el: (
                        <p className="mb-4 font-serif">
                            Welcome to <span className="font-bold font-serif">Goffer</span> - Your Gateway to Smarter
                            Hiring and Career Advancement.
                        </p>
                    ),
                },
                {
                    animType: 'fadeIn',
                    el: (
                        <div className="mb-8">
                            <h2 className="font-semibold mb-3 font-serif border-b border-gray-700">For Employers</h2>
                            <p className="mb-2 font-serif">
                                Our tools are crafted for HR professionals, enhancing the screening process with audio
                                and video responses and custom assessments to ensure the right fit for your team.
                            </p>
                        </div>
                    ),
                },
                {
                    animType: 'fadeIn',
                    el: (
                        <div className="mb-8">
                            <h2 className="font-semibold mb-3 font-serif border-b border-gray-700">For Job Seekers</h2>
                            <p className="mb-2 font-serif">
                                Goffer goes beyond job listings, offering a community for networking, career growth, and
                                showcasing your unique skills. Our assessments and AI-driven profile enhancements help
                                you stand out in the job market.
                            </p>
                        </div>
                    ),
                },
                {
                    animType: 'fadeIn',
                    el: (
                        <p className="font-serif">
                            Embark on a journey with Goffer and experience a new era of hiring and job search.
                            Togethaaa, we will devour the very gods.
                        </p>
                    ),
                },
            ]}
            title="Who Are We"
            right="/trivia1.jpeg"
            rightAlt="Trivia-1"
        />
    );
};

export default WhoAreWe;
// import { useAnimation, motion } from 'framer-motion';
// import { useEffect, useMemo } from 'react';
// import { fadeInPropsFn, zoomInPropsFn } from '../utils/animation';

// const WhoAreWe = () => {
//     const ctrls = useAnimation();

//     useEffect(() => {
//         ctrls.start('visible');
//     }, [ctrls]);

//     const getFadeInProps = useMemo(() => {
//         return fadeInPropsFn(ctrls);
//     }, [ctrls]);

//     const getZoomInProps = useMemo(() => {
//         return zoomInPropsFn(ctrls);
//     }, [ctrls]);

//     return (
//         <div className="h-[86vh] flex relative z-[4] mix-blend-difference text-white text-xl">
//             <div className="mx-auto p-8 max-w-6xl flex gap-8 xl:gap-16">
//                 <div className="max-w-[400px] m-auto flex-1 h-full max-h-[610px] overflow-y-auto scroll-hidden xl:max-w-lg flex-shrink-0">
//                     <motion.h1 {...getFadeInProps()} className="text-2xl font-bold mb-6 font-serif">
//                         Who Are We
//                     </motion.h1>

//                     <motion.p {...getFadeInProps(0.5)} className="mb-4 font-serif">
//                         Welcome to <span className="font-bold font-serif">Goffer</span> - Your Gateway to Smarter Hiring
//                         and Career Advancement.
//                     </motion.p>

// <motion.div {...getFadeInProps(1)} className="mb-8">
//     <h2 className="font-semibold mb-3 font-serif border-b border-gray-700">For Employers</h2>
//     <p className="mb-2 font-serif">
//         Our tools are crafted for HR professionals, enhancing the screening process with audio and
//         video responses and custom assessments to ensure the right fit for your team.
//     </p>
// </motion.div>

// <motion.div {...getFadeInProps(1.5)} className="mb-8">
//     <h2 className="font-semibold mb-3 font-serif border-b border-gray-700">For Job Seekers</h2>
//     <p className="mb-2 font-serif">
//         Goffer goes beyond job listings, offering a community for networking, career growth, and
//         showcasing your unique skills. Our assessments and AI-driven profile enhancements help you
//         stand out in the job market.
//     </p>
// </motion.div>

// <motion.p {...getFadeInProps(2)} className="font-serif">
//     Embark on a journey with Goffer and experience a new era of hiring and job search. Togethaaa, we
//     will devour the very gods.
// </motion.p>
//                     <motion.div
//                         {...getFadeInProps(3)}
//                         className="flex items-center gap-2 font-light text-sm text-black/40 mt-6 invert"
//                     >
//                         Press <img src="/space-button.svg" alt="space-bar" className="w-16 opacity-50" /> or use arrow
//                         keys
//                     </motion.div>
//                 </div>

//                 <motion.img
//                     src="/trivia1.jpeg"
//                     alt="Trivia-1"
//                     className="flex-1 m-auto h-full min-w-0 object-cover rounded-lg max-h-[610px] invert"
//                     {...getZoomInProps()}
//                 />
//             </div>
//         </div>
//     );
// };

// export default WhoAreWe;
