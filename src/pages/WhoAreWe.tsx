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
            right="/trivia1.png"
            rightAlt="Trivia-1"
        />
    );
};

export default WhoAreWe;
