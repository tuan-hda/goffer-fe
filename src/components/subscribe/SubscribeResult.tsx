import { useSearchParams } from 'react-router-dom';
import Cancel from './Cancel';
import Success from './Success';

const SubscribeResult = () => {
    const [searchParams] = useSearchParams();

    return <div className="flex h-screen">{searchParams.get('result') === 'success' ? <Success /> : <Cancel />}</div>;
};

export default SubscribeResult;
