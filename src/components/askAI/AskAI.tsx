import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
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
            <div
                className="relative m-auto max-h-[90vh] w-[720px] overflow-y-auto rounded-3xl bg-white p-5"
                onClick={(e) => e.stopPropagation()}
            >
                <div>
                    <Thread
                        extensions={{
                            suggestions: true,
                        }}
                    />
                </div>
            </div>
        </div>,
        document.body,
    );
};

export default AskAI;
