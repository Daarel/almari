import CategoryCard from '@/components/CategoryCard';
import { CATEGORIES } from '@/const';

import type { FC } from 'react';

const ShopByCategory: FC = () => {
  return (
    <section className='flex min-h-screen w-full items-center justify-center overflow-hidden px-6 py-20'>
      <div className='flex flex-col items-center justify-center gap-6 sm:gap-16 md:flex-row'>
        {CATEGORIES.map((category) => (
          <CategoryCard
            key={category.title}
            title={category.title}
            imageSrc={category.imageSrc}
            imageAlt={category.imageAlt}
            href={category.href}
          />
        ))}
      </div>
    </section>
  );
};

export default ShopByCategory;
