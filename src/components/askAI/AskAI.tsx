import classNames from 'classnames';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { TbArrowUp, TbClock, TbDots, TbSparkles, TbX } from 'react-icons/tb';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import { Thread } from '../ui/assistant-ui/thread';

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
            onClick={onClose}
            className={classNames(
                'pointer-events-none fixed bottom-0 left-0 right-0 top-0 z-50 flex bg-black/70 opacity-0 backdrop-blur-sm transition',
                isOpen && 'pointer-events-auto opacity-100',
            )}
        >
            <div className="relative m-auto w-[720px] rounded-3xl bg-white p-5" onClick={(e) => e.stopPropagation()}>
                <div className="absolute left-0 right-0 top-0 z-[1] flex items-center gap-2 rounded-t-3xl bg-white/30 px-8 pb-5 pt-6 font-serif text-[26px] font-black backdrop-blur-md">
                    Goffer Copilot
                    <TbSparkles className="text-3xl" />
                </div>
                <div className="max-h-[600px] pt-6">
                    <Thread />
                </div>
            </div>
        </div>,
        document.body,
    );
};

export default AskAI;
