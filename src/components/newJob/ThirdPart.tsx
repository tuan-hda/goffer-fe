import { PlateEditor } from '../editor/PlateEditor';

const ThirdPart = () => {
    return (
        <div className="mt-8 h-fit w-full rounded-xl bg-white/70 p-8 text-sm shadow-small">
            <p className="mb-1">Description</p>
            <PlateEditor />
        </div>
    );
};

export default ThirdPart;
