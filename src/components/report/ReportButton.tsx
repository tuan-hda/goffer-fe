import { createPortal } from 'react-dom';
import { Button } from '../ui/button';
import { TbFlag } from 'react-icons/tb';
import ReportDialog from './ReportDialog';

const ReportButton = () => {
    return createPortal(
        <ReportDialog>
            <Button variant="outline" className="fixed bottom-2 right-2 z-[100000]">
                <TbFlag className="mr-2" /> Report
            </Button>
        </ReportDialog>,
        document.body,
    );
};

export default ReportButton;
