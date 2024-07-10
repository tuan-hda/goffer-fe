import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';

const Cancel = () => {
    const navigate = useNavigate();

    return (
        <div className="m-auto flex flex-col items-center justify-center">
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
                    navigate('/app');
                }}
                className="mt-4 rounded-xl"
                variant="outline"
            >
                Go home
            </Button>
        </div>
    );
};

export default Cancel;
