import classNames from 'classnames';
import useDiscoverStore from 'src/stores/discoverStore';

const JobDetail = () => {
    const text = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    const { jobDetailOpening } = useDiscoverStore();

    return (
        <div
            className={classNames(
                'fixed right-0 top-16 h-[calc(100vh-64px)] w-[calc(50vw-80px)] overflow-hidden hover:overflow-y-scroll md:max-w-screen-sm xl:left-[calc(50vw+56px)]',
                !jobDetailOpening && 'hidden',
            )}
        >
            {text.map((i, index) => (
                <p key={index} className="mb-8 bg-yellow-50">
                    {i}
                </p>
            ))}
        </div>
    );
};

export default JobDetail;
