import { Badge } from '@/components/ui/badge';

const benefits = [
    'Competitive pay',
    'Learning Stipend',
    'Desk setup',
    'Unlimited PTO',
    'Paid Parental Leave',
    '401K match',
    'Gym Stipend',
    'MacBook Pro + Accessories',
];

const JobBenefit = () => {
    return (
        <>
            <p className="mb-2 mt-10 font-serif text-lg font-semibold text-default-700">Benefits</p>
            <div className="flex flex-row flex-wrap gap-2">
                {benefits.map((benefit, index) => (
                    <Badge className="border-beige" variant="outline" key={index}>
                        {benefit}
                    </Badge>
                ))}
            </div>
        </>
    );
};

export default JobBenefit;
