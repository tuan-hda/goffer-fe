import { analytics } from '@/configs/firebase';
import { Button } from '@nextui-org/react';
import { logEvent } from 'firebase/analytics';
import { useEffect } from 'react';
import { TbChevronLeft } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    useEffect(() => {
        logEvent(analytics, 'page_view', {
            page_location: window.location.href,
            page_path: window.location.pathname,
        })
    },[])

    return (
        <div className="flex w-full p-14">
            <div className="m-auto max-w-[600px]">
                <Button as={Link} to="/" variant="light" className="relative flex w-fit items-center gap-2">
                    <TbChevronLeft />
                    Go Home
                </Button>
                <h1 className="mt-10 text-center font-serif text-5xl font-bold">Meet the members</h1>
                <img src="/trivia6.png" className="mt-14" alt="Trivia" />
                <p className="mt-10">
                    <span className="float-left w-10 font-serif text-5xl font-bold leading-[44px]">G</span>offer is the
                    platform where you can speed up your hiring process and boost your profile with ease. This website
                    was born as a graduate thesis product and has been developed by a team of 2 students from the
                    University of Information Technology - Vietnam National University. The ultimate purpose of Goffer
                    is to provide a platform for job seekers to showcase their unique skills and for employers to find
                    the right fit for their team.
                </p>
                <h2 className="mt-14 font-serif text-5xl font-bold">The gang</h2>

                <div className="mt-10 grid grid-cols-2 gap-10">
                    <img className="h-[280px] w-[280px] object-cover" src="/beings/eldenlord2.jpg" alt="Tuan" />
                    <div>
                        <p className="font-serif text-xl font-bold">Hoang Dinh Anh Tuan</p>
                        <p className="mt-4">
                            Student at UIT - VNU HCM. What I interest in? Computer science stuffs, tech trends as well
                            as entertainment: maybe a book, a movie, a manga or a game.
                        </p>
                    </div>
                </div>

                <div className="mt-10 grid grid-cols-2 gap-10">
                    <img className="h-[280px] w-[280px] object-cover" src="/beings/pigjy.jpeg" alt="Tu" />
                    <div>
                        <p className="font-serif text-xl font-bold">Phan Thanh Tu</p>
                        <p className="mt-4">Student at UIT - VNU HCM. Genshin Impact addict.</p>
                    </div>
                </div>

                <p className="mt-10">
                    The journey begins as we were finding and researching a topic for our graduate thesis. It was the
                    same time as we were looking for a job.
                </p>
                <p className="mt-4">
                    We realized that the job search process was not as easy as we thought. We had to spend a lot of time
                    to find a suitable job and to apply for it. Too much questions, too much words required, always took
                    us hours to submit an application. And guess what, when you hit the apply button, you have to wait
                    for a long time to get a response from the employer.
                </p>
                <p className="mt-4">
                    At that moment, we popped out an idea: &quot;Why don&apos;t we create a platform that can ditch all
                    the burdens of hiring process?&quot;
                </p>
                <p className="mt-4">
                    And here we are, <span className="font-bold">Goffer</span>. It was born.
                </p>
            </div>
        </div>
    );
};

export default AboutUs;
