import CodeMirror, { ReactCodeMirrorRef } from '@uiw/react-codemirror';
import { StreamLanguage } from '@codemirror/language';
import { go } from '@codemirror/legacy-modes/mode/go';
import { javascript } from '@codemirror/lang-javascript';
import { cpp } from '@codemirror/lang-cpp';
import { python } from '@codemirror/lang-python';
import createTheme from '@uiw/codemirror-themes';
import { tags as t } from '@lezer/highlight';
import { java } from '@codemirror/lang-java';
import { useEffect, useRef, useState } from 'react';

const goLang = `package main
import "fmt"

func main() {
  fmt.Println("Hello, 世界")
}`;

type Props = {
    height: string;
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
        lineHighlight: '#2b2b2b', // Slightly lighter line highlight
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
    const ref = useRef<ReactCodeMirrorRef>(null);
    const [cursorPosition, setCursorPosition] = useState({ line: 0, ch: 0 });

    useEffect(() => {
        const inteval = setInterval(() => {
            console.log('cursor', ref.current?.state?.selection.main.head);
        }, 1000);
        return () => clearInterval(inteval);
    }, []);

    return (
        <CodeMirror
            ref={ref}
            theme={myTheme}
            value={goLang}
            height={height}
            extensions={[StreamLanguage.define(go), javascript({ jsx: true }), cpp(), java(), python()]}
        />
    );
}
