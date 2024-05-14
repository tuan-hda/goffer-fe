import React, { Dispatch, SetStateAction } from 'react';
import Editor from '@monaco-editor/react';

import { Value } from 'classnames';

type Props = {
    children?: React.ReactNode;
    code: string;
    setCode: Dispatch<SetStateAction<string>>;
    processing: boolean;
    setProcessing: Dispatch<SetStateAction<boolean>>;
    input: string;
    setInput: Dispatch<SetStateAction<string>>;
    currLan: string;
    tab: string;
    setTab: Dispatch<SetStateAction<string>>;
    languageOptions: {
        [key: number]: {
            id: number;
            name: string;
            label: string;
            value: string;
        };
    };
    handleEditorDidMount: (_: any, __: any) => void;
    handleCodeChange: (_: Value) => void;
    submit: () => Promise<void>;
    format: () => void;
    title?: string;
    outerOnChangeLang?: (_: Set<string>) => void;
};

const EditorWithChildren = ({ children, code, currLan, format, handleCodeChange, handleEditorDidMount }: Props) => {
    function setEditorTheme(monaco: any) {
        monaco.editor.defineTheme('onedark', {
            base: 'vs-dark',
            inherit: true,
            rules: [
                {
                    token: 'comment',
                    foreground: '#5d7988',
                    fontStyle: 'italic',
                },
            ],
            colors: {
                'editor.background': '#262626',
            },
        });
    }

    return (
        <>
            <div className="flex flex-1 grid-cols-2 gap-2 overflow-hidden px-2 pb-2 text-[13px]">
                <div className="flex-1 rounded-xl py-2">
                    <Editor
                        value={code}
                        beforeMount={setEditorTheme}
                        onChange={handleCodeChange}
                        options={{ wordWrap: 'on' }}
                        onMount={handleEditorDidMount}
                        className="h-full"
                        language={currLan}
                        theme="onedark"
                    />
                </div>
                <div className="flex h-full flex-col gap-2">{children}</div>
            </div>
        </>
    );
};

export default EditorWithChildren;
