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
import toast from 'react-hot-toast';

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
        setImg('');
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

            <Label className="my-2">
                Description
                <Textarea className="mt-2 min-h-[100px]" placeholder="Brief description your issue..." />
            </Label>

            <AlertDialogFooter>
                <AlertDialogCancel onClick={() => setImg('')} ref={ref}>
                    Cancel
                </AlertDialogCancel>
                <Button onClick={handleSubmit} variant="black">
                    Submit
                </Button>
            </AlertDialogFooter>
        </AlertDialogContent>
    );
};

export default ReportSubmitContent;
