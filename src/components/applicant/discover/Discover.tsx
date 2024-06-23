import Filter from './Filter';
import { Input } from '@/components/ui/input';
import { TbSearch } from 'react-icons/tb';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PeopleDiscover from './PeopleDiscover';
import CompaniesDiscover from './CompaniesDiscover';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Discover = () => {
    const navigate = useNavigate();
    const [value, setValue] = useState('');

    const search = async () => {
        navigate(`/app/discover?searchQuery=${value}`);
    };

    return (
        <div className="flex min-h-screen px-5 py-8 text-sm">
            <div className="relative mx-auto flex max-w-screen-xl flex-1 gap-10">
                <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                        <p className="font-serif text-4xl font-black">Discover</p>
                        <button>Clear result</button>
                    </div>
                    <Tabs defaultValue="people">
                        <div className="mb-8 mt-6 flex items-center gap-6">
                            <div className="relative flex min-w-0 flex-1 items-center">
                                <TbSearch className="absolute left-4 text-xl text-gray-400" />
                                <Input
                                    value={value}
                                    onChange={(e) => setValue(e.target.value)}
                                    placeholder="Search..."
                                    className="h-12 flex-1 rounded-2xl bg-white pl-12 pr-36"
                                />
                                <div className="absolute right-2 flex gap-4">
                                    <button onClick={() => navigate('/app/discover')}>Clear</button>
                                    <Button onClick={search} variant="black">
                                        Search
                                    </Button>
                                </div>
                            </div>
                            <TabsList className="h-12 gap-2 rounded-2xl bg-[#333] px-[6px]">
                                <TabsTrigger className="h-9 text-white" value="people">
                                    People
                                </TabsTrigger>
                                <TabsTrigger className="h-9 text-white" value="companies">
                                    Companies
                                </TabsTrigger>
                            </TabsList>
                        </div>
                        <TabsContent value="people">
                            <PeopleDiscover />
                        </TabsContent>
                        <TabsContent value="companies">
                            <CompaniesDiscover />
                        </TabsContent>
                        {/* <Outlet /> */}
                    </Tabs>
                </div>
                <div className="sticky top-10 h-[calc(100vh-80x)] w-[20px] border-r border-r-[#D1D1D1]" />
                <Filter />
            </div>
        </div>
    );
};

export default Discover;
