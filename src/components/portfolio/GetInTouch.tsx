import { AlertDialog } from '@radix-ui/react-alert-dialog';
import {
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTrigger,
} from '../ui/alert-dialog';
import { Button } from '../ui/button';
import classNames from 'classnames';
import { Avatar } from '@nextui-org/react';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Input } from '../ui/input';

type GetInTouchProps = {
    className?: string;
    type?: 'internal' | 'external';
};

const GetInTouch = ({ className, type = 'internal' }: GetInTouchProps) => {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button
                    variant="black"
                    className={classNames(
                        className,
                        'h-16 rounded-full bg-black px-10 py-6 text-base uppercase tracking-widest text-white',
                    )}
                >
                    Get in touch
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="max-w-[640px]">
                <AlertDialogHeader>
                    <div className="flex items-center gap-4">
                        <Avatar
                            size="lg"
                            src="http://res.cloudinary.com/doxsstgkc/image/upload/v1716520511/goffer/tikvideo_app_7289049866494364974_11_jpeg_1716520507717.jpg"
                        />
                        <div>
                            <p className="text-xl font-semibold">Connect to work with Tuan</p>
                            <p className="text-sm font-light text-gray-600">
                                {type === 'internal'
                                    ? 'Tuan will receive your message on Goffer'
                                    : 'Tuan will receive your message through email'}
                            </p>
                        </div>
                    </div>
                </AlertDialogHeader>

                {type === 'external' && (
                    <>
                        <div className="mt-4 flex w-full items-center gap-7">
                            <Label className="w-full">
                                Your name
                                <Input type="text" placeholder="Your name here..." className="mt-2 w-full" />
                            </Label>
                        </div>
                        <div className="flex w-full items-center gap-7">
                            <Label className="w-full">
                                Email
                                <Input type="text" placeholder="Your email address here..." className="mt-2 w-full" />
                            </Label>
                        </div>
                    </>
                )}

                <Label className="mt-3">
                    Your message
                    <Textarea className="mt-2 h-fit min-h-[160px]" placeholder="Start your conversation..." />
                </Label>
                <AlertDialogFooter className="mt-2">
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <Button variant="black">Send</Button>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default GetInTouch;
