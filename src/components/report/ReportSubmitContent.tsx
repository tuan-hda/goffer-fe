import { useRef } from 'react';
import {
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from '../ui/alert-dialog';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { toast } from 'sonner';
import { Input } from '../ui/input';

type ReportSubmitProps = {
    img: string;
    setImg: React.Dispatch<React.SetStateAction<string>>;
};

const ReportSubmitContent = ({ img, setImg }: ReportSubmitProps) => {
    const ref = useRef<HTMLButtonElement>(null);

    const handleSubmit = async () => {
        ref.current?.click();
        toast.success('Issue reported successfully! Thank you for your help.', {
            duration: 3000,
        });
    };

    return (
        <AlertDialogContent className="max-h-[90vh] w-full max-w-[80vw] overflow-y-auto p-7">
            <AlertDialogHeader>
                <AlertDialogTitle>Report issue</AlertDialogTitle>
                <AlertDialogDescription>
                    Please help us fill out the form below to report the issue.
                </AlertDialogDescription>
            </AlertDialogHeader>

            <Label>
                Your image
                <img src={img} className="mt-2 rounded-xl border" />
            </Label>

            <div>
                <Label>Title</Label>
                <Input className="mt-1" placeholder="Brief description your issue..." />
            </div>

            <div>
                <Label className="mt-2">Description</Label>
                <Textarea className="mt-1 min-h-[100px]" placeholder="Brief description your issue..." />
            </div>

            <AlertDialogFooter>
                <AlertDialogCancel ref={ref}>Cancel</AlertDialogCancel>
                <Button onClick={handleSubmit} variant="black">
                    Submit report
                </Button>
            </AlertDialogFooter>
        </AlertDialogContent>
    );
};

export default ReportSubmitContent;
