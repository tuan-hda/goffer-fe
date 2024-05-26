import { Button } from '../ui/button';

type HeaderProps = {
    logo?: React.ReactNode;
};

const Header = ({ logo }: HeaderProps) => {
    return (
        <div className="sticky top-10 z-[10] mx-auto mt-10 flex w-[90vw] items-center gap-10 self-start">
            <p className="font-serif text-5xl font-semibold">{logo}</p>
            <p className="ml-auto uppercase">Projects</p>
            <p className="uppercase">Experiences</p>
            <p className="uppercase">Recommendations</p>
            <Button
                variant="black"
                className="h-16 rounded-full bg-black px-10 py-6 text-base uppercase tracking-widest text-white"
            >
                Get in touch
            </Button>
        </div>
    );
};

export default Header;
