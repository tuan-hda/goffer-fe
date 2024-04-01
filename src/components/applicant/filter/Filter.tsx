import { useState, useEffect, Key } from 'react';
import {
    Input,
    Tabs,
    Tab,
    Button,
    useDisclosure,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
} from '@nextui-org/react';
import classNames from 'classnames';
import { RiSearchLine } from 'react-icons/ri';
import { HiOutlineAdjustments } from 'react-icons/hi';
import { TbHearts } from 'react-icons/tb';
import useDiscoverStore from '@/stores/discoverStore';
import { useNavigate } from 'react-router-dom';

const Filter = () => {
    const navigate = useNavigate();
    const [scrollDirection, setScrollDirection] = useState('up');
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [searchValue, setSearchValue] = useState('');
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const { tabKey, updateTabKey } = useDiscoverStore();

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            setScrollDirection(prevScrollPos > currentScrollPos || currentScrollPos < 64 ? 'up' : 'down');
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos, scrollDirection]);

    const handleTabChange = (key: Key) => {
        updateTabKey(key.toString());
        navigate(`/app/individual/discover/${key}`);
    };

    return (
        <div
            className={classNames(
                'sticky top-16 z-30 hidden w-full max-w-screen-2xl self-center rounded-b-2xl bg-pale py-6 shadow-md transition md:flex',
                scrollDirection === 'down' ? '-translate-y-[164px]' : 'translate-y-0',
            )}
        >
            <div className="flex w-full flex-col gap-y-6">
                <div className="mx-auto flex h-12 w-fit gap-x-2 rounded-full bg-beige">
                    <Input
                        classNames={{
                            base: 'w-full min-w-96 md:max-w-xl hidden sm:flex h-full bg-beige/60 focus-within:bg-beige p-0.5 rounded-full',
                            mainWrapper: 'h-full',
                            input: 'text-medium text-default-700',
                            inputWrapper:
                                'h-full font-normal bg-white text-default-700 border border-beige border-0.5 shadow-none',
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
                    <Tabs
                        radius="full"
                        aria-label="Tabs radius"
                        classNames={{
                            tabList: 'bg-transparent h-full',
                            tab: 'h-10 min-w-16 w-fit',
                        }}
                        selectedKey={tabKey}
                        onSelectionChange={(key) => handleTabChange(key)}
                    >
                        <Tab key="people" title="People" />
                        <Tab key="companies" title="Companies" />
                    </Tabs>
                </div>
                <div className="flex items-center justify-around">
                    <>
                        <Button
                            onPress={onOpen}
                            radius="full"
                            variant="ghost"
                            startContent={<HiOutlineAdjustments size={20} className="text-default-700" />}
                        >
                            Filter
                        </Button>
                        <Modal isOpen={isOpen} size="4xl" onOpenChange={onOpenChange} placement="top-center">
                            <ModalContent>
                                {(onClose) => (
                                    <>
                                        <ModalHeader className="flex flex-col gap-1">All filters</ModalHeader>
                                        <ModalBody></ModalBody>
                                        <ModalFooter>
                                            <Button radius="full" variant="bordered" onPress={onClose}>
                                                Clear Filters
                                            </Button>
                                            <Button radius="full" color="primary" onPress={onClose}>
                                                View Results
                                            </Button>
                                        </ModalFooter>
                                    </>
                                )}
                            </ModalContent>
                        </Modal>
                    </>

                    <Button
                        radius="full"
                        variant="ghost"
                        startContent={<TbHearts size={20} className="text-default-700" />}
                    >
                        Saved
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Filter;
