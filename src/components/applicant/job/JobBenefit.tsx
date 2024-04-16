import { Badge } from '@/components/ui/badge';
import useJobStore from '@/stores/jobStore';

const JobBenefit = () => {
    const { detail } = useJobStore();

    return (
        <>
            <p className="mb-2 mt-10 font-serif text-lg font-semibold text-default-700">Benefits</p>
            <div className="flex flex-row flex-wrap gap-2">
                {(detail?.benefits ?? []).map((benefit, index) => (
                    <Badge className="border-beige" variant="outline" key={index}>
                        {benefit}
                    </Badge>
                ))}
            </div>
        </>
    );
};

export default JobBenefit;
