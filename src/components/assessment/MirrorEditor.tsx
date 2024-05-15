import CodeMirror, { ReactCodeMirrorRef } from '@uiw/react-codemirror';
import { StreamLanguage } from '@codemirror/language';
import { go } from '@codemirror/legacy-modes/mode/go';
import { javascript } from '@codemirror/lang-javascript';
import { cpp } from '@codemirror/lang-cpp';
import { python } from '@codemirror/lang-python';
import createTheme from '@uiw/codemirror-themes';
import { tags as t } from '@lezer/highlight';
import { java } from '@codemirror/lang-java';
import { useMemo, useRef, useState } from 'react';
import { EditorView } from '@codemirror/view';
import { TbBrandPython, TbCircleFilled, TbRestore } from 'react-icons/tb';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import { SiCodefactor } from 'react-icons/si';
import prettier from 'prettier/standalone';
import { parsers as goTemplate } from 'prettier-plugin-go-template';

const goLang = `package main
import "fmt"

func main() {
    fmt.Println("Hello, 世界")
}`;

type Props = {
    height: number;
};

const myTheme = createTheme({
    theme: 'dark',
    settings: {
        background: '#262626', // Dark background
        backgroundImage: '',
        foreground: '#dcdcdc', // Light foreground for better contrast
        caret: '#9cdcfe', // Light blue caret
        selection: '#003E81', // Dark blue selection color
        selectionMatch: '#000',
        fontFamily: 'Geist Mono Variable',
        fontSize: '13px',
        lineHighlight: '#ffffff11', // Slightly lighter line highlight
        gutterBackground: '#262626', // Matches the main background
        gutterForeground: '#858585', // Lighter gutter for visibility
    },
    styles: [
        { tag: t.comment, color: '#6a9955' }, // Green comments
        { tag: t.variableName, color: '#9cdcfe' }, // Light blue variables
        { tag: [t.string, t.special(t.brace)], color: '#ce9178' }, // Light orange strings
        { tag: t.number, color: '#b5cea8' }, // Light green numbers
        { tag: t.bool, color: '#569cd6' }, // Blue booleans
        { tag: t.null, color: '#569cd6' }, // Same as booleans
        { tag: t.keyword, color: '#c586c0' }, // Purple keywords
        { tag: t.operator, color: '#dcdcdc' }, // Lighter foreground for operators
        { tag: t.className, color: '#4ec9b0' }, // Teal class names
        { tag: t.definition(t.typeName), color: '#4ec9b0' }, // Teal type definitions
        { tag: t.typeName, color: '#4ec9b0' }, // Teal type names
        { tag: t.angleBracket, color: '#dcdcdc' }, // Same as foreground
        { tag: t.tagName, color: '#569cd6' }, // Blue tag names
        { tag: t.attributeName, color: '#9cdcfe' }, // Light blue attributes
    ],
});

export default function MirrorEditor({ height }: Props) {
    const [pos, setPos] = useState({ line: 0, col: 0 });
    const [tabSize, setTabSize] = useState(4);
    const ref = useRef<ReactCodeMirrorRef>(null);
    const editorHeight = useMemo(() => height - 57, [height]);
    const [value, setValue] = useState(goLang);

    const mirror = useMemo(() => {
        return (
            <CodeMirror
                ref={ref}
                theme={myTheme}
                value={value}
                onChange={(value) => {
                    setValue(value);
                }}
                basicSetup={{
                    tabSize,
                }}
                height={`${editorHeight}px`}
                extensions={[
                    StreamLanguage.define(go),
                    javascript({ jsx: true }),
                    cpp(),
                    java(),
                    python(),
                    EditorView.lineWrapping,
                ]}
                onStatistics={(data) => {
                    setPos({
                        line: data.line.number,
                        col: data.selectionAsSingle.from - data.line.from + 1,
                    });
                }}
            />
        );
    }, [editorHeight, tabSize, value]);

    const format = async () => {
        const newValue = await prettier.format(value, { parser: 'go-template', plugins: [goTemplate] });
        console.log('newValue', newValue);
    };

    return (
        <div className="relative" style={{ height: `${height}px` }}>
            <div className="flex h-8 w-full items-center gap-2 border-b border-white/10 px-4">
                <TbBrandPython /> <span>main.py</span>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <button
                                onClick={() => setValue(goLang)}
                                className="ml-auto rounded-md p-[6px] hover:bg-white/10"
                            >
                                <TbRestore />
                            </button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <div>Reset code to initial state</div>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <button onClick={format} className="-ml-1 rounded-md p-[6px] hover:bg-white/10">
                                <SiCodefactor className="text-xs" />
                            </button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <div>Format code</div>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
            {mirror}
            <div className="absolute bottom-0 right-0 flex h-[25px] w-full items-center rounded-b-xl border-t border-t-white/10 text-xs text-gray-300">
                <p className="ml-auto px-1">
                    Ln {pos.line}, Col {pos.col}
                </p>

                <button
                    onClick={() => setTabSize(tabSize === 4 ? 2 : 4)}
                    className="flex h-full items-center gap-[4px] rounded-br-xl px-2 transition hover:bg-white/10"
                >
                    <TbCircleFilled className="text-[8px] text-white" />
                    Spaces: {tabSize}
                </button>
            </div>
        </div>
    );
}
