import React, { Dispatch, SetStateAction } from 'react';
import Editor from '@monaco-editor/react';
import { Selection } from '@nextui-org/react';

import { Value } from 'classnames';

type Props = {
    children?: React.ReactNode;
    code: string;
    setCode: Dispatch<SetStateAction<string>>;
    processing: boolean;
    setProcessing: Dispatch<SetStateAction<boolean>>;
    input: string;
    setInput: Dispatch<SetStateAction<string>>;
    currLan: Set<string>;
    setCurrLan: Dispatch<SetStateAction<Set<string>>>;
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

const EditorWithChildren = ({
    children,
    code,
    setCurrLan,
    currLan,
    languageOptions,
    format,
    handleCodeChange,
    handleEditorDidMount,
    outerOnChangeLang,
}: Props) => {
    const onChangeLang = (keys: Selection) => {
        setCurrLan(keys as Set<string>);
        outerOnChangeLang && outerOnChangeLang(keys as Set<string>);
    };

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
            <div className="bg-dark-7 flex h-[calc(100%-40px)] grid-cols-2 gap-2 overflow-hidden px-2 pb-2 text-[13px]">
                <div className="dev bg-dark-6 rounded-xl p-2">
                    <div className="mx-2 mb-2 mt-1 flex justify-between">
                        {/* <Select
                            variant="underlined"
                            labelPlacement="outside"
                            size="sm"
                            onSelectionChange={onChangeLang}
                            defaultSelectedKeys={currLan}
                            selectedKeys={currLan}
                            className="max-w-[320px]"
                        >
                            {Object.values(languageOptions)
                                .sort((a, b) => a.name.localeCompare(b.name))
                                .map((lan) => (
                                    <SelectItem key={lan.id} value={lan.id}>
                                        {lan.name}
                                    </SelectItem>
                                ))}
                        </Select>
                        <Tooltip content="Format Code">
                            <Button onClick={format} size="sm" radius="full" variant="light" isIconOnly>
                                <SiPrettier />
                            </Button>
                        </Tooltip> */}
                    </div>
                    <Editor
                        value={code}
                        beforeMount={setEditorTheme}
                        onChange={handleCodeChange}
                        options={{ wordWrap: 'on' }}
                        onMount={handleEditorDidMount}
                        className="h-full"
                        language={languageOptions[currLan.values().next().value]?.value || 'javascript'}
                        defaultLanguage="javascript"
                        theme="onedark"
                    />
                </div>
                <div className="flex h-full flex-col gap-2">{children}</div>
            </div>
        </>
    );
};

export default EditorWithChildren;
