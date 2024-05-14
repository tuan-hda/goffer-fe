import { TbTriangleFilled, TbUpload } from 'react-icons/tb';
import { Button } from '../ui/button';

const Header = () => {
    return (
        <div className="ml-14 flex h-12 items-center gap-2 px-2">
            <h1 className="max-w-[400px] flex-1 text-xl text-white">Coding Assessment - Spotify #1</h1>
            <div className="ml-auto flex items-center gap-2 rounded-xl pl-5">
                <Button className="gap-2" variant="black">
                    <TbTriangleFilled className="rotate-90" />
                    Run
                </Button>
                <Button className="gap-2 text-black" variant="outline">
                    <TbUpload className="text-[15px]" />
                    Submit
                </Button>
            </div>
            <div className="ml-auto flex max-w-[400px] flex-1 justify-end"></div>
        </div>
    );
};

export default Header;
