import { AlertDialog, AlertDialogContent, AlertDialogTrigger } from '../ui/alert-dialog';
import { useState } from 'react';
import ReportSubmitContent from './ReportSubmitContent';
import AreaSelectionContent from './AreaSelectionContent';
import { TbLoader } from 'react-icons/tb';

type ReportSubmitProps = {
    children: React.ReactNode;
    img?: string | null;
    loading?: boolean;
};

const ReportDialog = ({ children, img, loading }: ReportSubmitProps) => {
    const [finalImage, setFinalImage] = useState<string>('');

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
            {loading ? (
                <AlertDialogContent className="flex h-[50vh] w-full max-w-[50vw] items-center justify-center gap-2">
                    <TbLoader className="animate-spin" />
                    <p>Generating screenshot...</p>
                </AlertDialogContent>
            ) : !img ? (
                <AlertDialogContent className="h-[50vh] w-full max-w-[50vw]">
                    <div className="flex">
                        <p>Error while generating screenshot. Please try again.</p>
                    </div>
                </AlertDialogContent>
            ) : !finalImage ? (
                <AreaSelectionContent setFinalImage={setFinalImage} img={img} />
            ) : (
                <ReportSubmitContent setImg={setFinalImage} img={finalImage} />
            )}
        </AlertDialog>
    );
};

export default ReportDialog;
