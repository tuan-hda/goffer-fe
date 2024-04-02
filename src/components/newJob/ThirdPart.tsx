import { useEditorRef } from '@udecode/plate-common';
import { PlateEditor } from '../editor/PlateEditor';
import { serializeHtml } from '@udecode/plate-serializer-html';

const ThirdPart = () => {
    const ref = useEditorRef();

    return (
        <div className="mt-8 h-fit w-full rounded-xl bg-white/80 p-8 text-sm shadow-small">
            <p className="mb-1">Description</p>
            <button type="button" onClick={() => console.log(ref.children)}>
                Click
            </button>
            <PlateEditor />
        </div>
    );
};

export default ThirdPart;
