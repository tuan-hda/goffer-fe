import { isAxiosError } from 'axios';
import { toast } from 'sonner';

const catchAsync = async <T extends unknown>(fn: () => Promise<T>, finalFn?: () => void) => {
    try {
        await fn();
    } catch (error) {
        if (isAxiosError(error)) {
            toast.error(error.response?.data.message || error.message || 'An error occurred. Please try again later.');
            return;
        }
        toast.error((error as Error)?.message || 'An error occurred. Please try again later.');
        console.log(error);
    } finally {
        finalFn && finalFn();
    }
};

export default catchAsync;
