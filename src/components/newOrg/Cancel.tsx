import { NewOrganization } from 'src/types/organization.type';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';

type CancelProps = {
    setData: React.Dispatch<React.SetStateAction<NewOrganization>>;
    setStep: React.Dispatch<React.SetStateAction<number>>;
};

const Cancel = ({ setData, setStep }: CancelProps) => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center">
            <img
                src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Crying%20Cat.png"
                alt="Crying Cat"
                className="h-20 w-20"
            />
            <div className="mt-4 text-center font-serif text-3xl font-semibold">Payment failed</div>
            <p className="mt-4 w-80 text-center text-sm">
                Hey there. We cannot continue your purchase. Looks like some problems have occurred.
            </p>
            <Button
                onClick={() => {
                    setData({
                        description: '',
                        email: '',
                        field: '',
                        logo: '',
                        name: '',
                        visibility: '',
                        website: '',
                    });
                    setStep(1);
                    navigate('/organization/new');
                }}
                className="mt-4 rounded-xl"
                variant="outline"
            >
                Start over
            </Button>
        </div>
    );
};

export default Cancel;
