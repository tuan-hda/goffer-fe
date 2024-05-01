import { Input } from '../ui/input';

type LinkProps = {
    link: {
        label: string;
        url: string;
    };
    setLink: (link: { label: string; url: string }) => void;
};

const SocialLink = ({ link, setLink }: LinkProps) => {
    return (
        <div className="mb-2 flex items-center gap-2">
            <div>
                <p className="mb-1">Label</p>
                <Input
                    onChange={(e) =>
                        setLink({
                            ...link,
                            label: e.target.value,
                        })
                    }
                    value={link.label}
                />
            </div>
            <div>
                <p className="mb-1">Url</p>
                <Input
                    onChange={(e) =>
                        setLink({
                            ...link,
                            url: e.target.value,
                        })
                    }
                    value={link.label}
                />
            </div>
        </div>
    );
};

export default SocialLink;
