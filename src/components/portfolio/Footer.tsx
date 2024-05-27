import GetInTouch from './GetInTouch';

const links = [
    {
        name: 'Facebook',
        url: 'https://www.facebook.com/',
    },
    {
        name: 'Instagram',
        url: 'https://www.instagram.com/',
    },
    {
        name: 'Twitter',
        url: 'https://twitter.com/',
    },
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/',
    },
];

const Footer = () => {
    return (
        <div className="mt-[20vh] flex flex-col bg-white py-[calc(35vh-200px)] text-center">
            <p className="text-center text-[6.5vh] font-medium leading-[150%]">Work with me</p>
            <GetInTouch className="mx-auto mt-[8vh] w-fit" />
            <div className="mx-auto mt-[26vh] flex max-w-[64vw] flex-wrap items-center">
                {links.map((link, index) => (
                    <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="mx-4 font-mono text-[2vh] underline hover:text-black"
                    >
                        {link.name} ↑
                    </a>
                ))}
            </div>
            <p className="mt-[8vh] text-[2vh] font-medium">POWERED BY GOFFER</p>
        </div>
    );
};

export default Footer;
