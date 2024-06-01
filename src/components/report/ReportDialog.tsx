import { AlertDialog, AlertDialogTrigger } from '../ui/alert-dialog';
import { useState } from 'react';
import ReportSubmitContent from './ReportSubmitContent';
import AreaSelectionContent from './AreaSelectionContent';

type ReportSubmitProps = {
    children: React.ReactNode;
    img?: string | null;
};

const ReportDialog = ({ children }: ReportSubmitProps) => {
    const [selecting, setSelecting] = useState(true);

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
            {selecting ? <AreaSelectionContent /> : <ReportSubmitContent img={''} />}
        </AlertDialog>
    );
};

export default ReportDialog;
