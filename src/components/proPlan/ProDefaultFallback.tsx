import { Image } from '@nextui-org/react';

const ProDefaultFallback = () => {
    return (
        <div className="relative flex h-[240px] w-full items-center justify-between overflow-hidden rounded-3xl px-20 py-4 font-serif text-3xl font-medium shadow-small">
            <p className="relative z-[11]">Subscribe to Pro plan to access this feature</p>
            <div className="absolute -bottom-4 -right-10 h-full">
                <Image
                    classNames={{
                        wrapper: 'h-[600px] w-[600px]',
                    }}
                    src="/flower.png"
                />
            </div>
        </div>
    );
};

export default ProDefaultFallback;
