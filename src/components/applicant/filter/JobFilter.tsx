import { useState, useEffect, Key } from 'react';
import { Input, Tabs, Tab, Button , Select, SelectItem, Selection } from '@nextui-org/react';
import { RiSearchLine } from 'react-icons/ri';
import useJobStore from '@/stores/jobStore';
import { MdOutlineCleaningServices } from 'react-icons/md';

const sorts = ['Most relevant', 'Newest'];

export const JobTab = () => {
    const { tabKey, updateTabKey } = useJobStore();

    const handleTabChange = (key: Key) => {
        const newTabKey = key.toString();
        updateTabKey(newTabKey);
    };
    return (
        <Tabs
            radius="full"
            size="lg"
            aria-label="Job Tab"
            classNames={{
                base: 'h-12 w-full mx-auto',
                tabList: 'h-full px-2 bg-beige/60 w-full',
                tab: 'min-w-max',
            }}
            selectedKey={tabKey}
            onSelectionChange={(key) => handleTabChange(key)}
        >
            <Tab key="all" title="All jobs" />
            <Tab key="applied" title="Applied" />
        </Tabs>
    );
};

export const SearchBar = () => {
    const [searchValue, setSearchValue] = useState('');
    const [values, setValues] = useState<Selection>();

    return (
        <div className="flex flex-col items-center gap-4 md:flex-row">
            <div className="w-full md:hidden">
                <JobTab />
            </div>

            <Input
                classNames={{
                    base: 'w-full mx-auto min-w-60 md:max-w-xl hidden sm:flex bg-beige/60 focus-within:bg-beige p-0.5 rounded-full',
                    input: 'text-medium text-default-700',
                    inputWrapper: 'font-normal bg-white text-default-700 border-none shadow-none',
                }}
                radius="full"
                placeholder="Search"
                size="sm"
                variant="bordered"
                startContent={<RiSearchLine size={24} className="text-beige" />}
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onClear={() => setSearchValue('')}
                isClearable
            />

            <Select
                placeholder="Sort by"
                size="sm"
                radius="full"
                variant="bordered"
                selectedKeys={values}
                classNames={{
                    base: 'md:max-w-40',
                    trigger: 'data-[open=true]:border-default-400 data-[focus=true]:border-default-400',
                }}
                onSelectionChange={setValues}
            >
                {sorts.map((value) => (
                    <SelectItem key={value} value={value}>
                        {value}
                    </SelectItem>
                ))}
            </Select>
        </div>
    );
};

interface SelectProps {
    items: string[];
    label?: string;
    placeholder?: string;
    onChange?: (_: Selection | undefined) => void;
}

export const AppSelect = ({ items, label, placeholder, onChange }: SelectProps) => {
    const [values, setValues] = useState<Selection>();
    const handleValuesChange = (newValues: Selection | undefined) => {
        setValues(newValues);
        onChange && onChange(newValues);
    };

    return (
        <div>
            <p className="mb-2 text-sm text-text">{label}</p>

            <div className="flex items-center gap-x-4">
                <Select
                    // selectionMode="multiple"
                    placeholder={placeholder}
                    selectedKeys={values}
                    onSelectionChange={handleValuesChange}
                    size="sm"
                    radius="sm"
                    variant="bordered"
                    classNames={{
                        trigger: 'data-[open=true]:border-default-400 data-[focus=true]:border-default-400 border',
                    }}
                >
                    {items.map((item) => (
                        <SelectItem key={item} value={item}>
                            {item}
                        </SelectItem>
                    ))}
                </Select>

                <Button variant="flat" onPress={() => setValues(new Set([]))} isIconOnly radius="full">
                    <MdOutlineCleaningServices />
                </Button>
            </div>
        </div>
    );
};

const JobFilter = () => {
    const skills = ['Front-end', 'Back-end', 'Bridge Software Engineer'];
    const locations = ['HCM City', 'Thu Duc', 'Tan Phu'];

    return (
        <div className="space-y-8">
            <JobTab />

            <AppSelect items={skills} label="Title" placeholder="Search for title" />

            <AppSelect items={locations} label="Location" placeholder="e.g. San Francisco" />
        </div>
    );
};

export default JobFilter;
