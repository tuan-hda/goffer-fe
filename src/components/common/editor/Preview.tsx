import { useCurrentEditor } from '@tiptap/react';

const Preview = () => {
    const { editor } = useCurrentEditor();

    return <pre>{JSON.stringify(editor?.getJSON(), null, 2)}</pre>;
};
export default Preview;
