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
import { createReportService } from '@/services/reports.service';
import { TbLoader } from 'react-icons/tb';
import { uploadFileService } from '@/services/file.service';

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

                const browser = Bowser.getParser(window.navigator.userAgent);
                const response = await fetch(img);
                const blob = await response.blob();
                const file = new File([blob], img.split('/').pop() || '');
                const uploadedImg = (await uploadFileService(file)).data;
                await createReportService({
                    ...data,
                    image: uploadedImg.file.url,
                    relatedPath: window.location.href,
                    environment: {
                        os: browser.getOSName(),
                        browserName: browser.getBrowserName(),
                        browserVersion: browser.getBrowserVersion(),
                        canvasSize: `${window.innerWidth}x${window.innerHeight}`,
                    },
                });
                ref.current?.click();
                toast.success('Report submitted successfully');
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
                <Button disabled={loading} onClick={submit} variant="black">
                    {loading && <TbLoader className="mr-2 animate-spin text-xl" />}
                    Submit report
                </Button>
            </AlertDialogFooter>
        </AlertDialogContent>
    );
};

export default ReportSubmitContent;
