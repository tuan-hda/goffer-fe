import classNames from 'classnames';
import { Button } from '../ui/button';
import { TbCirclePlus, TbPencil } from 'react-icons/tb';
import React, { useState } from 'react';
import { Textarea } from '../ui/textarea';
import MultipleSelector, { MultipleSelectorProps, Option } from '../ui/mutli-selector';

type EditableProps = JSX.IntrinsicElements['div'] & {
    mode?: 'view' | 'active' | 'new';
    type?: 'default' | 'custom' | 'multi-selector';
    name?: string;
    value?: string;
    setValue?: (value: string) => void;
    values?: string[];
    setValues?: (values: Option[]) => void;
    limit?: number;
} & Partial<Omit<MultipleSelectorProps, 'value' | 'onChange'>>;

const Editable = ({
    children,
    name,
    className,
    mode = 'active',
    type = 'default',
    value,
    limit,
    options,
    setValue: outerSetValue,
    values,
    setValues,
    partialDelete,
    placeholder,
    ...props
}: EditableProps) => {
    const [edit, setEdit] = useState(false);
    const setValue = outerSetValue ?? ((_: string) => {});

    return (
        <div>
            <div
                {...props}
                onClick={!edit ? () => setEdit(true) : () => {}}
                className={classNames(
                    'group relative -mx-4 items-center justify-between rounded-xl px-4 py-3 text-sm transition',
                    className,
                    mode === 'active' ? 'flex cursor-pointer' : 'block',
                    !edit && mode === 'active' && 'hover:bg-[#F5F6F9]',
                )}
            >
                {edit && (
                    <div className="flex-1">
                        {type === 'multi-selector' && values && setValues ? (
                            <EditableMultiSelector
                                options={options}
                                partialDelete={partialDelete}
                                onChange={setValues}
                                placeholder={placeholder}
                                value={values.map((value) => ({
                                    label: value,
                                    value: value,
                                }))}
                            />
                        ) : (
                            <EditableTextarea setEdit={setEdit} limit={limit} value={value} setValue={setValue} />
                        )}
                        {limit && (
                            <p
                                className={classNames(
                                    'text-right text-xs text-gray-500',
                                    type === 'multi-selector' ? '-mt-1' : 'mt-1',
                                )}
                            >
                                {value?.length || values?.length}/{limit}
                            </p>
                        )}
                    </div>
                )}
                {mode !== 'new' && !edit && <>{type === 'default' ? <p>{value}</p> : children}</>}
                {mode === 'new' && !edit && (
                    <Button variant="outline" className="flex w-full items-center gap-3" size="lg">
                        <TbCirclePlus className="text-lg" /> Add {name}
                    </Button>
                )}
                {mode === 'active' && !edit && (
                    <Button
                        size="icon"
                        variant="ghost"
                        className={classNames(
                            'pointer-events-none -mb-1 -mt-2 ml-2 opacity-0 transition group-hover:pointer-events-auto group-hover:opacity-100',
                        )}
                    >
                        <TbPencil className="text-lg" />
                    </Button>
                )}
            </div>
            {edit && (
                <div className="flex items-center justify-end gap-2">
                    <Button onClick={() => setEdit(false)} size="sm" className="text-sm" variant="outline">
                        Cancel
                    </Button>
                    <Button onClick={() => setEdit(false)} size="sm" className="text-sm" variant="black">
                        Save
                    </Button>
                </div>
            )}
        </div>
    );
};

const EditableTextarea = ({
    value,
    setValue,
    limit,
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
        </div>
    );
};

type EditableMultiSelectorProps = MultipleSelectorProps;

const EditableMultiSelector = (props: EditableMultiSelectorProps) => {
    return (
        <MultipleSelector
            {...props}
            placeholder={props.placeholder}
            emptyIndicator={
                <p className="text-center text-sm leading-10 text-gray-600 dark:text-gray-400">no results found.</p>
            }
            className="mt-1"
        />
    );
};

export default Editable;