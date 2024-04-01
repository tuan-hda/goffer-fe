import { TbChevronLeft } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';
import { FirstPart, SecondPart, ThirdPart } from 'src/components/newJob';
import { Button } from 'src/components/ui/button';
import useCurrOrganization from 'src/hooks/useCurrOrganization';

const NewJob = () => {
    const navigate = useNavigate();
    const { data: curr } = useCurrOrganization();

    return (
        <div>
            <img src="/diamond.png" alt="bloom" className="fixed left-[16vw] top-[4vh] w-[35vw] opacity-50" />
            <img
                src="/flower.png"
                alt="bloom"
                className="fixed bottom-[16vh] left-[65vw] w-[35vw] -translate-x-1/2 opacity-50"
            />
            <div className="fixed left-0 right-0 top-0 z-[1] mx-auto h-16 w-full bg-white/40 px-8 shadow-sm backdrop-blur-md">
                <div className="mx-auto flex h-full max-w-7xl items-center">
                    <button
                        onClick={() => navigate(`/app/organization/${curr?.domain}`)}
                        className="group relative flex flex-shrink-0 gap-2 text-sm"
                    >
                        <TbChevronLeft className="text-xl" /> Go home
                        <div className="absolute -bottom-1 ml-1 w-full border-t border-t-gray-700 opacity-0 transition group-hover:opacity-100" />
                    </button>
                    <Button className="ml-auto min-w-0 rounded-xl" variant="outline">
                        Preview
                    </Button>

                    <Button className="ml-2 min-w-0 rounded-xl">Publish</Button>
                </div>
            </div>
            <div className="scroll-hidden relative flex h-screen w-full overflow-y-auto bg-pale/30 py-6 text-base backdrop-blur-xl">
                <form className="mx-auto w-[620px]">
                    <div className="h-16" />
                    <h1 className="text-3xl">Let&apos;s set up your new job</h1>
                    <FirstPart />
                    <SecondPart />
                    <ThirdPart />
                    <div className="h-8" />
                </form>
            </div>
        </div>
    );
};

export default NewJob;
