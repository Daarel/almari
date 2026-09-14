import { Button } from '@/components/ui/button';
import Image from 'next/image';
import type { FC } from 'react';

const Hero: FC = () => {
  return (
    <section className='flex flex-row justify-center items-center h-[calc(100dvh-4.5rem)] w-full gap-24'>
      <div className='flex flex-col justify-start items-start gap-10'>
        <h1 className='font-extralight text-7xl'>
          Siluet Presisi,
          <br /> Tanpa
          <br /> Keraguan.
        </h1>
        <p className='font-extralight text-base'>
          Koleksi esensial modern yang dirancang dengan
          <br />
          teknologi Virtual Try-On cerdas agar Anda tidak
          <br />
          perlu lagi ragu memilih ukuran.
        </p>
        <div className='flex flex-row justify-start items-start gap-4'>
          <Button shape="square" className='w-50 h-12' variant='default'>Belanja Koleksi</Button>
          <Button shape="square" className='w-50 h-12' variant='outline'>Coba Fitting Virtual</Button>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center shadow-xl'>
        <Image
          src='/hero-imagez.webp'
          alt='A beautiful woman with an elegant outfit on a park'
          height={450}
          width={450}
          className='h-auto'
          priority
        />
      </div>
    </section>
  );
};

export default Hero;
