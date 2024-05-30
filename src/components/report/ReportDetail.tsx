import { Image } from '@nextui-org/react';
import moment from 'moment';
import Information from './Information';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Button } from '../ui/button';
import Status from './Status';

const ReportDetail = () => {
    return (
        <div className="h-full overflow-y-auto px-7 pb-10 pt-5">
            <div className="flex items-center justify-between gap-6">
                <p className="min-w-0 flex-1 text-base font-medium">Hello your report</p>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="gap-1">
                            <span>Status:</span> <Status status="opened" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>Change status</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <Status status="opened" />
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-yellow-600 hover:text-yellow-600">
                            <Status status="working" />
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Status status="closed" />
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <p className="mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc ultricies ultricies.
            </p>
            <div className="mt-5">
                <Image
                    classNames={{
                        wrapper: 'h-full max-h-[400px] border !max-w-full overflow-hidden !w-full object-contain',
                        img: 'h-full max-h-[400px] w-full object-contain',
                    }}
                    src="http://localhost:5173/chad.webp"
                />
            </div>
            <div className="mt-6 grid grid-cols-2 gap-6 text-black">
                <div className="space-y-2">
                    <p className="text-base font-medium">Context</p>
                    <Information title="Related Path" content="/admin/dashboard" />
                    <Information title="Related Component" content="Admin Dashboard" />
                </div>
                <div className="space-y-2">
                    <p className="text-base font-medium">Environment</p>
                    <Information title="Operating System" content="Windows" />
                    <Information title="Browser" content="Chrome" />
                    <Information title="Browser Version" content="123.0.0" />
                    <Information title="Canvas size" content="1280x720" />
                </div>
            </div>
            <div className="my-5 border-t"></div>
            <div className="mt-6 grid grid-cols-2 gap-6 text-black">
                <div className="space-y-2">
                    <p className="text-base font-medium">PIC</p>
                    <Information title="Reporter" content="hdatdragon2@gmail.com" />
                    <Information title="Resolved by" content="hdatdragon2@gmail.com" />
                </div>
                <div className="space-y-2">
                    <p className="text-base font-medium">Timestamp</p>
                    <Information title="Created At" content={moment().format('DD-MM-YYYY hh:mm')} />
                    <Information title="Updated At" content={moment().format('DD-MM-YYYY hh:mm')} />
                    <Information title="Resolved At" content={moment().format('DD-MM-YYYY hh:mm')} />
                </div>
            </div>
        </div>
    );
};

export default ReportDetail;
