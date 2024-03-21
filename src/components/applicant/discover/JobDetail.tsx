import { Card } from '@nextui-org/react';
import classNames from 'classnames';
import useDiscoverStore from 'src/stores/discoverStore';

const JobDetail = () => {
    const text = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    const { jobDetailOpening, sideBarPinned } = useDiscoverStore();

    return (
        <Card
            className={classNames(
                'fixed right-0 top-16 h-[calc(100vh-64px)] overflow-hidden px-4 py-4 transition hover:overflow-y-scroll dark:bg-default-100/50 md:max-w-[752px] ',
                jobDetailOpening ? ' translate-x-0' : 'translate-x-[calc(50vw-40px)]',
                sideBarPinned
                    ? 'left-[calc(50vw+124px)] w-[calc(50vw-140px)] xl:left-[calc(50vw+120px)]'
                    : 'left-[calc(50vw+40px)] w-[calc(50vw-56px)] xl:left-[calc(50vw+36px)]',
            )}
        >
            {text.map((i, index) => (
                <p key={index} className="mb-8 bg-yellow-50">
                    {i}
                </p>
            ))}
        </Card>
    );
};

export default JobDetail;
