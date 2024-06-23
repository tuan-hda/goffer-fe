import Filter from './Filter';
import { Input } from '@/components/ui/input';
import { TbSearch } from 'react-icons/tb';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PeopleDiscover from './PeopleDiscover';
import CompaniesDiscover from './CompaniesDiscover';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CompaniesFilter from './CompaniesFilter';

const Discover = () => {
    const navigate = useNavigate();
    const [value, setValue] = useState('');
    const [currTab, setCurrTab] = useState('people');

    const search = async () => {
        navigate(`/app/discover?searchQuery=${value}`);
    };

    useEffect(() => {
        navigate('/app/discover');
    }, []);

    return (
        <div className="flex min-h-screen px-5 py-8 text-sm">
            <div className="relative mx-auto flex max-w-screen-xl flex-1 gap-10">
                <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                        <p className="font-serif text-4xl font-black">Discover</p>
                    </div>
                    <Tabs value={currTab} onValueChange={setCurrTab} defaultValue="people">
                        <div className="mb-8 mt-6 flex items-center gap-6">
                            <TabsList className="h-12 w-full gap-2 rounded-2xl bg-[#333] px-[6px]">
                                <TabsTrigger className="h-9 flex-1 text-white" value="people">
                                    People
                                </TabsTrigger>
                                <TabsTrigger className="h-9 flex-1 text-white" value="companies">
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
                {currTab === 'people' ? <Filter /> : <CompaniesFilter />}
            </div>
        </div>
    );
};

export default Discover;
