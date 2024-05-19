import { Avatar } from '@nextui-org/react';
import { Tabs, TabsList, TabsTrigger } from '../ui/tabs';
import { useState } from 'react';
import classNames from 'classnames';
import { TbDownload, TbPdf } from 'react-icons/tb';
import { RiFileWordFill } from 'react-icons/ri';

const DetailsPanel = () => {
    const [selected, setSelected] = useState('details');

    const handleClick = (value: string) => () => {
        setSelected(value);
    };

    return (
        <div className="flex-1 overflow-y-scroll pb-8">
            <div className="mt-8 flex h-[300px] flex-col items-center justify-center">
                <Avatar src="https://cirsova.files.wordpress.com/2023/11/image-3.png" className="h-36 w-36" />
                <p className="mt-3 font-serif text-2xl font-bold">Frieren</p>
                <p className="mt-2">hdatdragon2@gmail.com</p>
            </div>
            <div className="mt-0">
                <Tabs defaultValue="details">
                    <TabsList className="ml-5 bg-transparent">
                        <TabsTrigger
                            onClick={handleClick('details')}
                            value="details"
                            className="bg-transparent data-[state=active]:!shadow-none"
                        >
                            <div>
                                Details
                                <div
                                    className={classNames(
                                        'mt-2 border-b-2',
                                        selected === 'details' ? 'border-b-black' : ' border-b-transparent',
                                    )}
                                />
                            </div>
                        </TabsTrigger>
                        <TabsTrigger
                            onClick={handleClick('shared-files')}
                            value="shared-files"
                            className="bg-transparent data-[state=active]:!shadow-none"
                        >
                            <div>
                                Shared files
                                <div
                                    className={classNames(
                                        'mt-2 border-b-2',
                                        selected === 'shared-files' ? 'border-b-black' : ' border-b-transparent',
                                    )}
                                />
                            </div>
                        </TabsTrigger>
                    </TabsList>
                </Tabs>
                <div className="relative z-[10] -mt-[3px] w-full border-b" />
            </div>
            <div className="relative mx-8 my-6 overflow-hidden rounded-xl bg-[#FFF7D9] p-4">
                <img src="/diamond.png" className="absolute -bottom-10 -right-5 h-32 w-32" />
                <p className="w-[80%] font-medium">
                    Frieren is waiting for an interview <span className="text-[#E05B4E]">🎥</span>
                </p>
                <p className="mt-1 w-fit cursor-pointer text-[13px] font-medium text-blue-500">
                    Set up an interview now
                </p>
            </div>
            <div className="px-8">
                {selected === 'details' ? (
                    <>
                        <p className="font-medium">Title</p>
                        <p className="mt-1 text-text/70">Software Engineer</p>

                        <p className="mt-4 font-medium">Phone</p>
                        <p className="mt-1 text-text/70">0123456789</p>

                        <p className="mt-4 font-medium">Resume</p>
                        <p className="mt-1 text-text/70">https://abc.com/af.pdf</p>

                        <p className="mt-4 font-medium">LinkedIn</p>
                        <p className="mt-1 text-text/70">https://linkedin.com</p>

                        <p className="mt-4 font-medium">Location</p>
                        <p className="mt-1 text-text/70">LA, San Francisco</p>

                        <p className="mt-4 font-medium">Experience</p>
                        <p className="mt-1 text-text/70">7 yoe: Acme Corp, Innovative Solutions, Tech Pioneers</p>

                        <p className="mt-4 font-medium">Skills</p>
                        <p className="mt-1 text-text/70">
                            Tools: ReactJS, Redux, TypeScript, NodeJS, Express, MongoDB, Docker, AWS
                        </p>
                    </>
                ) : (
                    <>
                        <button className="-mx-8 -mt-2 flex w-[calc(100%+64px)] items-center gap-4 px-8 py-3 text-left">
                            <div className="rounded-xl border p-3">
                                <TbPdf className="text-xl" />
                            </div>
                            <div className="flex-1 space-y-1">
                                <p className="font-medium">Workschedule.pdf</p>
                                <p className="text-xs text-text/80">12 Aug 2021 • 200,00 KB</p>
                            </div>
                            <TbDownload className="text-xl text-text/80" />
                        </button>

                        <button className="-mx-8 flex w-[calc(100%+64px)] items-center gap-4 px-8 py-3 text-left">
                            <div className="rounded-xl border p-3">
                                <RiFileWordFill className="text-xl" />
                            </div>
                            <div className="flex-1 space-y-1">
                                <p className="font-medium">Workschedule.doc</p>
                                <p className="text-xs text-text/80">12 Aug 2021 • 200,00 KB</p>
                            </div>
                            <TbDownload className="text-xl text-text/80" />
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default DetailsPanel;
