import type { FC } from 'react';

import { Button } from '@/components/ui/button';
import EmblaCarousel from '@/components/Carousel';
import { STORE_SLIDES } from '@/const';

const Hero: FC = () => {
  return (
    <section className='relative flex h-dvh w-full items-center overflow-hidden px-8 sm:px-16 -mt-18 pt-18'>
      <div className='absolute inset-0 -z-10 h-full w-full'>
        <EmblaCarousel
          slides={STORE_SLIDES}
          slideHeight='h-full'
          className='h-full w-full'
          quality={60}
          autoplayDelay={4000}
        />
        <div className='absolute inset-0 bg-linear-to-r from-background/95 via-background/60 to-background/25 dark:from-background/95 dark:via-background/80 dark:to-background/35' />
      </div>

      <div className='relative z-10 flex max-w-3xl flex-col items-start justify-start gap-8'>
        <h1 className='text-7xl font-extralight tracking-tight sm:text-8xl'>
          Siluet Presisi
          <br />
          Tanpa Keraguan.
        </h1>
        <p className='text-base font-extralight sm:text-lg'>
          Koleksi esensial modern yang dirancang dengan teknologi
          <br />
          Virtual Try-On cerdas agar Anda tidak perlu lagi ragu memilih ukuran.
        </p>
        <div className='flex flex-row items-start justify-start gap-4 mt-10'>
          <Button shape='square' className='h-12 w-50' variant='default'>
            Belanja Koleksi
          </Button>
          <Button shape='square' className='h-12 w-50' variant='outline'>
            Coba Fitting Virtual
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
