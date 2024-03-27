import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { NewOrganization } from 'src/types/organization.type';

type SuccessProps = {
    data: NewOrganization;
};

const Success = ({ data }: SuccessProps) => {
    return (
        <div className="flex flex-col items-center">
            <img src="/success1.png" className="h-20 w-20" alt="success" />
            <div className="mt-4 text-center font-serif text-3xl font-semibold">
                {data.name} was created successfully 🎉
            </div>
            <Button asChild variant="outline" className="mt-7 rounded-xl">
                <Link to="/app/organization">Go to organization</Link>
            </Button>
        </div>
    );
};

export default Success;
