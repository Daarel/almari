import ProductFilterTabs from '@/components/ProductFilterTabs';
import type { FC } from 'react';

const ProductChoices: FC = () => {
  return (
    <section className='flex min-h-screen w-full items-start justify-center overflow-hidden px-6 py-20'>
      <div className='flex flex-row justify-between items-center w-10/12'>
        <h2 className='text-3xl font-extralight tracking-wider'>
          Pilihan Kami Minggu Ini
        </h2>
          <ProductFilterTabs />
      </div>
      <div></div>
    </section>
  );
};

export default ProductChoices;
