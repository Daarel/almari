'use client';

import Image from 'next/image';
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { cn } from '@/lib/utils';

export type CarouselSlide = {
  src: string;
  alt?: string;
};

type PropType = {
  slides: (string | CarouselSlide)[];
  options?: EmblaOptionsType;
  className?: string;
  slideHeight?: string;
  imageClassName?: string;
  quality?: number;
  autoplayDelay?: number;
};

const EmblaCarousel = ({
  slides,
  options,
  className = '',
  slideHeight = 'h-[450px]',
  imageClassName = '',
  quality = 60,
  autoplayDelay = 4000,
}: PropType) => {
  const [emblaRef] = useEmblaCarousel({ loop: true, ...options }, [
    Autoplay({ delay: autoplayDelay, stopOnInteraction: false }),
  ]);

  return (
    <div
      className={cn('embla relative w-full overflow-hidden', className)}
      ref={emblaRef}
    >
      <div className='embla__container flex h-full touch-pan-y'>
        {slides.map((slide, index) => {
          const src = typeof slide === 'string' ? slide : slide.src;
          const alt =
            typeof slide === 'string'
              ? `Slide ${index + 1}`
              : slide.alt ?? `Slide ${index + 1}`;

          return (
            <div
              className='embla__slide relative h-full min-w-0 flex-[0_0_100%]'
              key={index}
            >
              <div className={cn('relative w-full overflow-hidden', slideHeight)}>
                <Image
                  src={src}
                  alt={alt}
                  fill
                  quality={quality}
                  sizes='100vw'
                  className={cn('object-cover object-center', imageClassName)}
                  priority={index === 0}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EmblaCarousel;


