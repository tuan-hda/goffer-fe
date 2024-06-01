import {
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from '../ui/alert-dialog';
import { Button } from '../ui/button';

type ReportSubmitProps = {
    img: string;
};

const ReportSubmitContent = ({ img }: ReportSubmitProps) => {
    return (
        <AlertDialogContent className="max-h-[90vh] w-full max-w-[80vw] overflow-y-auto p-7">
            <AlertDialogHeader>
                <AlertDialogTitle>Report issue</AlertDialogTitle>
                <AlertDialogDescription>
                    Please help us fill out the form below to report the issue.
                </AlertDialogDescription>
            </AlertDialogHeader>

            <img src={img} className="rounded-xl border" />

            <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <Button variant="black">Submit</Button>
            </AlertDialogFooter>
        </AlertDialogContent>
    );
};

export default ReportSubmitContent;
