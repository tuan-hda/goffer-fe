import classNames from 'classnames';
import { Button } from '../ui/button';
import { TbCirclePlus, TbPencil } from 'react-icons/tb';
import React, { useState } from 'react';
import { Textarea } from '../ui/textarea';

type EditableProps = JSX.IntrinsicElements['div'] & {
    mode?: 'view' | 'active' | 'new';
    type?: 'default' | 'custom';
    name?: string;
    value?: string;
    setValue?: (value: string) => void;
    limit?: number;
};

const Editable = ({
    children,
    name,
    className,
    mode = 'active',
    type = 'default',
    value,
    limit,
    setValue: outerSetValue,
    ...props
}: EditableProps) => {
    const [edit, setEdit] = useState(false);
    const setValue = outerSetValue ?? ((_: string) => {});

    return (
        <div
            {...props}
            onClick={!edit ? () => setEdit(true) : () => {}}
            className={classNames(
                'group relative -mx-4 items-start justify-between rounded-xl px-4 py-3 text-sm transition',
                className,
                mode === 'active' ? 'cursor-pointer hover:bg-[#F5F6F9]' : '',
                mode === 'new' ? 'block' : 'flex',
            )}
        >
            {edit && <EditableTextarea setEdit={setEdit} limit={limit} value={value} setValue={setValue} />}
            {mode !== 'new' && !edit && <>{type === 'default' ? <p>{value}</p> : children}</>}
            {mode === 'new' && (
                <Button variant="outline" className="flex w-full items-center gap-3" size="lg">
                    <TbCirclePlus className="text-lg" /> Add {name}
                </Button>
            )}
            {mode === 'active' && !edit && (
                <Button
                    size="icon"
                    variant="ghost"
                    className={classNames(
                        'pointer-events-none -mt-2 ml-2 opacity-0 transition group-hover:pointer-events-auto group-hover:opacity-100',
                    )}
                >
                    <TbPencil className="text-lg" />
                </Button>
            )}
        </div>
    );
};

const EditableTextarea = ({
    value,
    setValue,
    limit,
    setEdit,
}: Partial<EditableProps> & {
    setValue: (_: string) => void;
    setEdit: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    return (
        <div className="flex-1">
            <Textarea
                className="text-left"
                value={value}
                onChange={(e) => {
                    if (limit) {
                        if (e.target.value.length <= limit) {
                            setValue(e.target.value);
                        }
                    } else {
                        setValue(e.target.value);
                    }
                }}
            />
            {limit && (
                <p className="mt-1 text-right text-xs text-gray-500">
                    {value?.length || 0}/{limit}
                </p>
            )}
            <div className="mt-2 flex items-center justify-end gap-2">
                <Button onClick={() => setEdit(false)} size="sm" className="text-sm" variant="outline">
                    Cancel
                </Button>
                <Button onClick={() => setEdit(false)} size="sm" className="text-sm" variant="black">
                    Save
                </Button>
            </div>
        </div>
    );
};

export default Editable;
