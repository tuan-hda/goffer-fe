import { useEffect, useRef, useState } from 'react';
import { languageOptions as langData } from '@/configs/languageOptions';
import { isAxiosError } from 'axios';
import { Value } from 'classnames';
import toast from 'react-hot-toast';
import { SubmissionResponse } from '@/types/coding.type';

const useEditor = (persist = true, outerEditorDidMount?: (editor: any, monaco: any) => void) => {
    const [code, setCode] = useState('');
    const [processing, setProcessing] = useState(false);
    const [input, setInput] = useState('');
    const [results, setResults] = useState<SubmissionResponse[]>([]);
    const [currLan, setCurrLan] = useState<Set<string>>(new Set(['63']));
    const [tab, setTab] = useState('Console');

    const formatOnSave = useRef<boolean>(true);
    const editorRef = useRef<any>(null);
    const languageOptions = langData.reduce(
        (acc, curr) => {
            acc[curr.id] = curr;
            return acc;
        },
        {} as { [key: number]: (typeof langData)[0] },
    );

    const format = () => {
        editorRef.current?.getAction('editor.action.formatDocument').run();
    };

    function handleEditorDidMount(editor: any, monaco: any) {
        editorRef.current = editor;
        // Save
        editor.onKeyDown((e: any) => {
            if ((navigator.platform.match('Mac') ? e.metaKey : e.ctrlKey) && e.keyCode === 49) {
                if (formatOnSave.current) editor.getAction('editor.action.formatDocument').run();
                e.preventDefault();
            }
        });
        outerEditorDidMount && outerEditorDidMount(editor, monaco);
    }

    useEffect(() => {
        if (persist) {
            setCode(localStorage.getItem('code') || '');
        }
    }, [persist]);

    const handleCodeChange = (v: Value) => {
        setCode(v as string);
        if (persist) {
            localStorage.setItem('code', v as string);
        }
    };

    const submit = async () => {
        try {
            setProcessing(true);

            const formData = new FormData();
            formData.append('language_id', String(currLan.values().next().value));
            formData.append('source_code', code);
            formData.append('stdin', input);

            // await submitCode(data)
        } catch (error) {
            if (isAxiosError(error)) toast.error(error.response?.data?.message || error.message);
            else toast.error(String(error));
        }
    };

    // const checkResult = async (token: string) => {
    // try {
    //     const response = await fetch(configs.BACKEND_URL + `compiler/submissions/${token}?fields=*`, {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //     }).then((res) => res.json());
    //     const statusId = response.status?.id;
    //     if (statusId === 1 || statusId === 2) {
    //         setTimeout(() => {
    //             checkResult(token);
    //         }, 2000);
    //         return;
    //     } else {
    //         setTab('Console');
    //         setResults((prev) => [
    //             ...prev,
    //             {
    //                 ...response,
    //                 executed_time: moment(),
    //             },
    //         ]);
    //         setProcessing(false);
    //         return;
    //     }
    // } catch (error) {
    //     if (isAxiosError(error)) toast.error(error.response?.data?.message || error.message);
    //     else toast.error(String(error));
    //     setProcessing(false);
    // }
    // };

    return {
        code,
        setCode,
        processing,
        setProcessing,
        input,
        setInput,
        results,
        setResults,
        currLan,
        setCurrLan,
        tab,
        setTab,
        languageOptions,
        handleEditorDidMount,
        handleCodeChange,
        submit,
        editorRef,
        format,
    };
};

export default useEditor;
