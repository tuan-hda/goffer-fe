import { useCallback, useEffect, useState } from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Image } from '@nextui-org/react';
// import { OptionsType } from 'embla-carousel/components/Options';

type PropType = {
    slides: string[];
    options?: EmblaOptionsType;
};

const EmblaCarousel = (props: PropType) => {
    const { slides, options } = props;
    const [emblaRef, emblaApi] = useEmblaCarousel(options as any, [Autoplay({ playOnInit: true, delay: 3000 })] as any);
    const [, /*isPlaying */ setIsPlaying] = useState(false);

    const toggleAutoplay = useCallback(() => {
        const autoplay = emblaApi?.plugins()?.autoplay as any;
        if (!autoplay) return;

        const playOrStop = autoplay.isPlaying() ? autoplay.stop : autoplay.play;
        playOrStop();
    }, [emblaApi]);

    useEffect(() => {
        const autoplay = emblaApi?.plugins()?.autoplay as any;
        if (!autoplay) return;

        setIsPlaying(autoplay.isPlaying());
        emblaApi
            ?.on('autoplay:play' as any, () => setIsPlaying(true))
            .on('autoplay:stop' as any, () => setIsPlaying(false))
            .on('reInit', () => setIsPlaying(false));
    }, [emblaApi]);

    return (
        <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((image_url, index) => (
                        <div className="embla__slide" key={index}>
                            <Image
                                isZoomed
                                alt="Card background"
                                className="aspect-square w-full rounded-xl object-cover"
                                src={image_url}
                                onMouseEnter={toggleAutoplay}
                                onMouseLeave={toggleAutoplay}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EmblaCarousel;
