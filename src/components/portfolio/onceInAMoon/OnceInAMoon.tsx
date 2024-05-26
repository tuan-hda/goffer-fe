import { Button } from '../../ui/button';
import Header from '../Header';
import Experiences from './Experiences';
import ImagesShowcase from './ImagesShowcase';
import ProjectList from './ProjectList';
import Recommendations from './Recommendations';

const OnceInAMoon = () => {
    const words = Array(30)
        .fill(0)
        .map((_) => 'MARIE CURIE');

    return (
        <div className="bg-dots flex min-h-screen flex-col overflow-x-clip tracking-wider text-black md:text-base lg:text-lg xl:text-xl">
            <Header logo="Marie" />
            <p className="mb-[2vh] mt-[calc(48vh-200px)] text-center uppercase">
                Magician, specialize in Website magic ✨
            </p>
            <div className="infinite-words-slide relative h-[200px] w-full overflow-hidden">
                <div className="words-loop relative z-[1] mt-20 flex items-center gap-24 font-serif text-[20vh] font-black text-black">
                    {words.map((word, index) => (
                        <span key={index}>{word}</span>
                    ))}
                </div>
                <div className="absolute top-1/2 h-4 w-full -translate-y-1/2 bg-gray-500"></div>
            </div>

            {/* Showcase images part */}
            <ImagesShowcase />

            <Button
                variant="black"
                className="mx-auto mt-[24vh] h-16 w-fit rounded-full bg-black px-10 py-6 text-base uppercase tracking-widest text-white"
            >
                Get in touch
            </Button>

            {/* Projects */}
            <ProjectList />

            <Experiences />

            <Recommendations />

            <div className="h-[200px]"></div>
        </div>
    );
};

export default OnceInAMoon;
