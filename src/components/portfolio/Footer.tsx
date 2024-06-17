import { Reveal } from '../common';
import GetInTouch from './GetInTouch';

type FooterProps = {
    links: { label: string; url: string }[];
};

const Footer = ({ links }: FooterProps) => {
    return (
        <div className="mt-[20vh] flex flex-col py-[calc(35vh-200px)] text-center">
            <Reveal>
                <p className="text-center text-[6.5vh] font-medium leading-[150%]">Work with me</p>
                <GetInTouch className="mx-auto mt-[8vh] w-fit" />
                <div className="mx-auto mt-[26vh] flex w-fit max-w-[64vw] flex-wrap items-center">
                    {links.map((link, index) => (
                        <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noreferrer"
                            className="mx-4 font-mono text-[2vh] underline hover:text-black"
                        >
                            {link.label} ↑
                        </a>
                    ))}
                </div>
                <p className="mt-[8vh] text-[2vh] font-medium">POWERED BY GOFFER</p>
            </Reveal>
        </div>
    );
};

export default Footer;
