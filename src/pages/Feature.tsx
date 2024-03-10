import { useEffect, useMemo, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import LandingTwoColumn, { LandingTwoColumnProps } from '../layouts/LandingTwoColumn';
import { useAnimation } from 'framer-motion';
import classNames from 'classnames';

const LOW_RANGE = 1;
const HIGH_RANGE = 4;

const FeatureFirst = () => {
    const ctrlsOne = useAnimation();
    const ctrlsTwo = useAnimation();
    const ctrlsThree = useAnimation();
    const ctrlsFour = useAnimation();
    const ctrls = useMemo(() => {
        return [ctrlsOne, ctrlsTwo, ctrlsThree, ctrlsFour];
    }, [ctrlsOne, ctrlsTwo, ctrlsThree, ctrlsFour]);

    const [step, setStep] = useState<number | null>();
    const lastStepRef = useRef<number | null>(null);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname + (location.search || '') === '/features') {
            return setStep(1);
        }
        setStep(Math.min(Math.max(Number(new URLSearchParams(location.search).get('step')), LOW_RANGE), HIGH_RANGE));
    }, [location]);

    useEffect(() => {
        if (lastStepRef.current) {
            ctrls[lastStepRef.current - 1].start('hidden');
        }
        if (!step) {
            ctrls[0].start('visible');
            lastStepRef.current = 1;
        } else {
            ctrls[step - 1].start('visible');
            lastStepRef.current = step;
        }
    }, [ctrls, step]);

    if (!step) return null;

    const steps: LandingTwoColumnProps[] = [
        {
            title: 'Media-powered Response',
            left: [
                {
                    animType: 'fadeIn',
                    el: (
                        <p className="text-base">
                            Simplifies job applications by replacing text answers with audio or video recordings,
                            offering a more personal and concise way for candidates to express themselves.
                        </p>
                    ),
                },
            ],
            right: '/trivia2.png',
            rightAlt: 'Trivia-2',
        },
        {
            title: 'Evaluate Candidate with AI Power',
            left: [
                {
                    animType: 'fadeIn',
                    el: (
                        <p className="text-base">
                            Utilizes AI to analyze and assess candidates&apos; profiles, CVs, and responses, providing a
                            succinct and insightful evaluation of their suitability for a role.
                        </p>
                    ),
                },
            ],
            right: '/trivia3.png',
            rightAlt: 'Trivia-3',
        },
        {
            title: 'Expand Your Networks',
            left: [
                {
                    animType: 'fadeIn',
                    el: (
                        <p className="text-base">
                            Enables users to discover and connect with peers and professionals of interest, facilitating
                            the growth and improvement of their networking circles. This tool uses smart algorithms to
                            suggest relevant connections, making it easier to build a supportive and beneficial
                            professional network.
                        </p>
                    ),
                },
            ],
            right: '/trivia4.png',
            rightAlt: 'Trivia-4',
        },
        {
            title: 'Upgrade Your Profile',
            left: [
                {
                    animType: 'fadeIn',
                    el: (
                        <p className="text-base">
                            With AI technology, we transform and enhance your professional profile, ensuring it stands
                            out in a competitive landscape. This tool provides personalized suggestions for
                            improvements, tailoring your profile to showcase your strengths and achievements more
                            effectively.
                        </p>
                    ),
                },
            ],
            right: '/trivia5.png',
            rightAlt: 'Trivia-5',
        },
    ];

    return steps.map((s, i) => (
        <LandingTwoColumn className={classNames(i !== step - 1 && 'hidden')} key={i} {...s} outerCtrls={ctrls[i]} />
    ));
};

export default FeatureFirst;
