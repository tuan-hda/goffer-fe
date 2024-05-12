import classNames from 'classnames';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { TbArrowUp, TbClock, TbDots, TbSparkles, TbX } from 'react-icons/tb';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';

type AskAIProps = {
    isOpen: boolean;
    onClose: () => void;
};

const AskAI = ({ isOpen, onClose }: AskAIProps) => {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return createPortal(
        <div
            className={classNames(
                'pointer-events-none fixed bottom-0 left-0 right-0 top-0 z-50 flex bg-black/70 text-sm opacity-0 backdrop-blur-sm transition',
                isOpen && 'pointer-events-auto opacity-100',
            )}
        >
            <div className="relative m-auto w-full max-w-[500px] rounded-xl bg-white p-6">
                <h1 className="-mt-1 flex w-fit items-center gap-1 rounded-md font-serif text-xl font-black text-primary">
                    Goffer Copilot <TbSparkles />
                </h1>
                <div className="absolute right-5 top-5 flex items-center gap-2">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <div>
                                    <TbClock className="text-base" />
                                </div>
                            </TooltipTrigger>
                            <TooltipContent>History</TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <button className="p-1">
                                <TbDots className="text-base" />
                            </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem>History</DropdownMenuItem>
                            <DropdownMenuItem>Get help</DropdownMenuItem>
                            <DropdownMenuItem>Feedback</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <div onClick={onClose} className="cursor-pointer rounded-full bg-gray-100 p-1">
                        <TbX />
                    </div>
                </div>
                <p className="mt-5 text-gray-500">
                    Hi Tuan Hoang Dinh Anh! Ask me about anything. I'll find an answer in contents you have access to.
                </p>
                <div className="relative mt-4">
                    <Textarea className="h-auto flex-1 pr-10 text-black" rows={1} placeholder="Ask for anything..." />
                    <Button size="icon" variant="black" className="absolute bottom-[10px] right-2 h-5 w-5 rounded-full">
                        <TbArrowUp className="text-white" />
                    </Button>
                </div>
            </div>
        </div>,
        document.body,
    );
};

export default AskAI;
