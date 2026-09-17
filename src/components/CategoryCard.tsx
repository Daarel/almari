import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';

interface CategoryCardProps {
  title: string;
  imageSrc: string;
  imageAlt?: string;
  href?: string;
}

const CategoryCard: FC<CategoryCardProps> = ({
  title,
  imageSrc,
  imageAlt,
  href = '#',
}) => {
  return (
    <Link
      href={href}
      className='group relative block h-125 w-75 sm:h-135 sm:w-82.5 lg:h-145 lg:w-90 overflow-hidden bg-neutral-200 shadow-2xl'
    >
      <Image
        src={imageSrc}
        alt={imageAlt || title}
        fill
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 360px'
        className='object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105'
      />

      <div className='absolute bottom-6 left-6 z-10 bg-background px-5 py-2.5 shadow-md'>
        <span className='text-sm font-medium tracking-wide'>{title}</span>
      </div>
    </Link>
  );
};

export default CategoryCard;

