import { Button } from '@nextui-org/react';
import { TbChevronLeft, TbMail, TbNumber, TbSocial } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const ContactUs = () => {
    return (
        <div className="flex w-full p-14">
            <div className="m-auto w-full max-w-[600px]">
                <Button as={Link} to="/" variant="light" className="relative flex w-fit items-center gap-2">
                    <TbChevronLeft />
                    Go Home
                </Button>
                <h1 className="mt-10 text-center font-serif text-5xl font-bold">
                    Get in <span className="font-serif underline">touch</span>
                </h1>

                <div className="mt-10 flex items-center gap-4">
                    <TbMail className="text-lg" />
                    <a href="mailto:hdatdragon2@gmail.com" className="font-semibold underline">
                        hdatdragon2@gmail.com
                    </a>
                    |
                    <a href="mailto:pttu2902@gmail.com" className="font-semibold underline">
                        pttu2902@gmail.com
                    </a>
                </div>
                <p className="mt-2 text-text/90">
                    Our Mail Support is available to chat Monday through Friday, 9:00AM - 11:00PM (UTC+07:00), excluding
                    holidays.
                </p>

                <div className="mt-10 flex items-center gap-4">
                    <TbSocial className="text-lg" />
                    <a
                        target="__blank"
                        href="https://www.facebook.com/hdatdragon2849"
                        className="font-semibold underline"
                    >
                        Tuan on Facebook
                    </a>
                    |
                    <a target="__blank" href="https://www.facebook.com/TuPhan.029" className="font-semibold underline">
                        Tu on Facebook
                    </a>
                </div>
                <p className="mt-2 text-text/90">
                    Our Social Chat Advisors are available to chat Monday through Friday, 9:00AM - 11:00PM (UTC+07:00),
                    excluding holidays. The option to chat will become active during these hours once an advisor is
                    available.
                </p>

                <div className="mt-10 flex items-center gap-4">
                    <TbNumber className="text-lg" />
                    <p>Or find us in person</p>
                </div>
                <p className="mt-2 text-text/90">
                    Dormitory of National University HCMC Area A, Quarter 6, Linh Trung Ward, Thu Duc City, Ho Chi Minh
                    City, Vietnam
                </p>
            </div>
        </div>
    );
};

export default ContactUs;
