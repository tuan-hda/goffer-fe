import { Avatar } from '@nextui-org/react';
import { Tabs, TabsList, TabsTrigger } from '../ui/tabs';
import { useState } from 'react';
import classNames from 'classnames';
import { TbDownload, TbPdf } from 'react-icons/tb';
import { RiFileWordFill } from 'react-icons/ri';
import { User } from '@/types/user.type';
import { getExperienceYear, getLatestExperience } from '@/utils/profile';

interface Props {
    user: User;
}

const DetailsPanel = ({ user }: Props) => {
    const [selected, setSelected] = useState('details');

    const handleClick = (value: string) => () => {
        setSelected(value);
    };

    return null;
    // return (
    //     <div className="flex flex-1 flex-col justify-center overflow-y-scroll">
    //         <div className="mt-8 flex h-[300px] flex-col items-center justify-center">
    //             <Avatar src={user.avatar} className="h-36 w-36" />
    //             <p className="mt-3 font-serif text-2xl font-bold">{user.name}</p>
    //             <p className="mt-2">{user.email}</p>
    //         </div>
    //         <div className="mt-0">
    //             {/* <Tabs defaultValue="details">
    //                 <TabsList className="ml-5 bg-transparent">
    //                     <TabsTrigger
    //                         onClick={handleClick('details')}
    //                         value="details"
    //                         className="bg-transparent data-[state=active]:!shadow-none"
    //                     >
    //                         <div>
    //                             Details
    //                             <div
    //                                 className={classNames(
    //                                     'mt-2 border-b-2',
    //                                     selected === 'details' ? 'border-b-black' : ' border-b-transparent',
    //                                 )}
    //                             />
    //                         </div>
    //                     </TabsTrigger>
    //                     <TabsTrigger
    //                         onClick={handleClick('shared-files')}
    //                         value="shared-files"
    //                         className="bg-transparent data-[state=active]:!shadow-none"
    //                     >
    //                         <div>
    //                             Shared files
    //                             <div
    //                                 className={classNames(
    //                                     'mt-2 border-b-2',
    //                                     selected === 'shared-files' ? 'border-b-black' : ' border-b-transparent',
    //                                 )}
    //                             />
    //                         </div>
    //                     </TabsTrigger>
    //                 </TabsList>
    //             </Tabs> */}
    //             <div className="relative z-[10] -mt-[3px] w-full" />
    //         </div>
    //         {/* <div className="bg-image-doodles flex-1 opacity-30"></div> */}
    //         {/* <div className="relative mx-8 my-6 overflow-hidden rounded-xl bg-[#FFF7D9] p-4">
    //             <img src="/diamond.png" className="absolute -bottom-10 -right-5 h-32 w-32" />
    //             <p className="w-[80%] font-medium">
    //                 {user.name} is waiting for an interview <span className="text-[#E05B4E]">🎥</span>
    //             </p>
    //             <p className="mt-1 w-fit cursor-pointer text-[13px] font-medium text-blue-500">
    //                 Set up an interview now
    //             </p>
    //         </div>
    //         <div className="px-8">
    //             {selected === 'details' ? (
    //                 <>
    //                     {user.experiences && user.experiences.length > 0 && (
    //                         <>
    //                             <p className="font-medium">Title</p>
    //                             <p className="mt-1 text-text/70">{getLatestExperience(user.experiences).title}</p>
    //                         </>
    //                     )}

    //                     {user.resume && (
    //                         <>
    //                             <p className="mt-4 font-medium">Resume</p>
    //                             <p className="mt-1 truncate text-text/70">{user.resume}</p>
    //                         </>
    //                     )}

    //                     {user.refDoc && (
    //                         <>
    //                             <p className="mt-4 font-medium">LinkedIn</p>
    //                             <p className="max-w-fu mt-1 truncate text-text/70">{user.refDoc}</p>
    //                         </>
    //                     )}

    //                     {user.location && (
    //                         <>
    //                             <p className="mt-4 font-medium">Location</p>
    //                             <p className="mt-1 text-text/70">{user.location}</p>
    //                         </>
    //                     )}

    //                     {user.experiences && user.experiences.length > 0 && (
    //                         <>
    //                             <p className="mt-4 font-medium">Experience</p>
    //                             <p className="mt-1 text-text/70">
    //                                 {getExperienceYear(user.experiences)} yoe:{' '}
    //                                 {user.experiences.map((item) => item.company).join(', ')}
    //                             </p>
    //                         </>
    //                     )}

    //                     {user.skills && user.skills.length > 0 && (
    //                         <>
    //                             <p className="mt-4 font-medium">Skills</p>
    //                             <p className="mt-1 text-text/70">Tools: {user.skills.join(', ')}</p>
    //                         </>
    //                     )}
    //                 </>
    //             ) : (
    //                 <>
    //                     <button className="-mx-8 -mt-2 flex w-[calc(100%+64px)] items-center gap-4 px-8 py-3 text-left">
    //                         <div className="rounded-xl border p-3">
    //                             <TbPdf className="text-xl" />
    //                         </div>
    //                         <div className="flex-1 space-y-1">
    //                             <p className="font-medium">Workschedule.pdf</p>
    //                             <p className="text-xs text-text/80">12 Aug 2021 • 200,00 KB</p>
    //                         </div>
    //                         <TbDownload className="text-xl text-text/80" />
    //                     </button>

    //                     <button className="-mx-8 flex w-[calc(100%+64px)] items-center gap-4 px-8 py-3 text-left">
    //                         <div className="rounded-xl border p-3">
    //                             <RiFileWordFill className="text-xl" />
    //                         </div>
    //                         <div className="flex-1 space-y-1">
    //                             <p className="font-medium">Workschedule.doc</p>
    //                             <p className="text-xs text-text/80">12 Aug 2021 • 200,00 KB</p>
    //                         </div>
    //                         <TbDownload className="text-xl text-text/80" />
    //                     </button>
    //                 </>
    //             )} */}
    //         {/* </div> */}
    //     </div>
    // );
};

export default DetailsPanel;
