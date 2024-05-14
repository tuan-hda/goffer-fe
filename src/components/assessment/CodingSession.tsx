import useEditor from '@/hooks/useEditor';
import EditorWithChildren from './EditorWithChildren';
import Sidebar from './Sidebar';
import { Card, CardContent, CardHeader } from '../ui/card';
import { TbCode, TbFileDescription } from 'react-icons/tb';
import Header from './Header';

const CodingSession = () => {
    const editor = useEditor();

    return (
        <div className="flex h-screen flex-col bg-[#20221E] text-sm text-[#eee]">
            <Header />
            <Sidebar />
            <div className="ml-16 flex flex-1 gap-2">
                <Card className="mb-2 flex-[3] border-[#606060] bg-[#262626]">
                    <CardHeader className="rounded-t-xl bg-[#333] px-4 pb-2 pt-2 font-medium text-white">
                        <div className="flex items-center gap-2">
                            <TbFileDescription /> Description
                        </div>
                    </CardHeader>
                    <CardContent></CardContent>
                </Card>
                <Card className="mb-2 flex flex-[4] flex-col border-[#606060] bg-[#262626]">
                    <CardHeader className="rounded-t-xl bg-[#333] px-4 pb-2 pt-2 font-medium text-white">
                        <div className="flex items-center gap-2">
                            <TbCode /> Code
                        </div>
                    </CardHeader>
                    <CardContent className="max-h-[calc(100vh-50px)] flex-1 px-0">
                        <EditorWithChildren {...editor} />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default CodingSession;
