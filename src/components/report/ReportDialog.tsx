import { TbLoader } from 'react-icons/tb';
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '../ui/alert-dialog';
import { Button } from '../ui/button';

type ReportSubmitProps = {
    children: React.ReactNode;
    img?: string | null;
    loading?: boolean;
};

const ReportDialog = ({ children, img, loading }: ReportSubmitProps) => {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
            <AlertDialogContent className="max-h-[90vh] w-full max-w-[80vw] overflow-y-auto p-7">
                <AlertDialogHeader>
                    <AlertDialogTitle>Report issue</AlertDialogTitle>
                    <AlertDialogDescription>
                        Please help us fill out the form below to report the issue.
                    </AlertDialogDescription>
                </AlertDialogHeader>

                {loading ? (
                    <div className="flex min-h-[50vh] w-full">
                        <TbLoader className="m-auto animate-spin text-2xl" />
                    </div>
                ) : img ? (
                    <img src={img} className="rounded-xl border" />
                ) : (
                    <span className="text-sm">There some error capturing the screenshot. Please try again.</span>
                )}

                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <Button variant="black">Submit</Button>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default ReportDialog;
