import { TbChevronLeft } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';
import { FirstStep } from 'src/components/newJob';
import { Progress } from 'src/components/ui/progress';
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
            <button
                onClick={() => navigate(`/app/organization/${curr?.domain}`)}
                className="group fixed left-4 top-4 z-[1] flex gap-2 text-sm"
            >
                <TbChevronLeft className="text-xl" /> Go home
                <div className="absolute -bottom-1 ml-1 w-full border-t opacity-0 transition group-hover:opacity-100" />
            </button>
            <div className="scroll-hidden relative flex h-screen w-full overflow-y-auto bg-pale/30 py-6 text-base backdrop-blur-xl">
                <div className="m-auto h-[520px] w-[680px] overflow-hidden rounded-xl shadow-medium">
                    <Progress value={20} color="primary" className="h-1" />
                    <div className="h-[calc(100%-52px)]">
                        <FirstStep />
                    </div>
                    <div className="flex h-[48px] w-full items-center justify-between border-t px-5">
                        <button className="flex items-center justify-center gap-2 text-sm">
                            <TbChevronLeft className="text-base" /> Back
                        </button>

                        <button className="flex items-center justify-center gap-2 text-sm">
                            Next
                            <TbChevronLeft className="rotate-180 text-base" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewJob;
