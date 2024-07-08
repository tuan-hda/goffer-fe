import { useRef, useState } from 'react';
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
import Bowser from 'bowser';
import { toast } from 'sonner';
import { Input } from '../ui/input';
import catchAsync from '@/utils/catchAsync';

type ReportSubmitProps = {
    img: string;
    setImg: React.Dispatch<React.SetStateAction<string>>;
};

const ReportSubmitContent = ({ img, setImg }: ReportSubmitProps) => {
    const ref = useRef<HTMLButtonElement>(null);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({
        title: '',
        description: '',
    });

    const handleChange =
        (key: 'title' | 'description') => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            setData((prev) => ({
                ...prev,
                [key]: e.target.value,
            }));
        };

    const submit = () =>
        catchAsync(
            async () => {
                setLoading(true);
                console.log(window.location.href);
                console.log(ReportSubmitContent.name);
                const browser = Bowser.getParser(window.navigator.userAgent);
                console.log(browser.getBrowserName());
                console.log(browser.getBrowserVersion());
                console.log(browser.getOSVersion());
                console.log(window.innerHeight);
                console.log(window.innerWidth);
                // createReportService({
                // ...data,
                // image: img})
                // ref.current?.click();
                // toast.success('Report submitted successfully');
            },
            () => {
                setLoading(false);
            },
        );

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
                <Input
                    value={data.title}
                    onChange={handleChange('title')}
                    className="mt-1"
                    placeholder="Brief description your issue..."
                />
            </div>

            <div>
                <Label className="mt-2">Description</Label>
                <Textarea
                    value={data.description}
                    onChange={handleChange('description')}
                    className="mt-1 min-h-[100px]"
                    placeholder="Brief description your issue..."
                />
            </div>

            <AlertDialogFooter>
                <AlertDialogCancel ref={ref}>Cancel</AlertDialogCancel>
                <Button onClick={submit} variant="black">
                    Submit report
                </Button>
            </AlertDialogFooter>
        </AlertDialogContent>
    );
};

export default ReportSubmitContent;
