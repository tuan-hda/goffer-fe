import useSelfProfileQuery from '@/hooks/useSelfProfileQuery';
import { Button } from '@nextui-org/react';
import { TbArrowRight } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';

const ApplySuccess = () => {
    const navigate = useNavigate();
    const { data } = useSelfProfileQuery();
    return (
        <div className="space-y-8 text-2xl font-normal text-text">
            <p className="font-serif">Hi {data?.name} 👋,</p>
            <p className="font-serif">
                We received your application, our hiring team is excited to listen 👂 to your answers and learning more
                about you.
            </p>
            <p className="font-serif">You should be hearing back from us shortly!</p>
            <Button
                size="lg"
                endContent={<TbArrowRight size={24} />}
                onPress={() => navigate('/app/individual/jobs')}
                variant="flat"
                color="primary"
            >
                View more jobs
            </Button>
        </div>
    );
};

export default ApplySuccess;
