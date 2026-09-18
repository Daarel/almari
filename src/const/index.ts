import type { CarouselSlide } from '@/components/Carousel';
import type {
  NavMenuType,
  CategoryItemType,
  ProductChoicesType,
} from '@/types/content.types';

const NAVMENU: NavMenuType[] = [
  {
    title: 'ATASAN',
    link: '/atasan',
    keywords: [
      'Kaos Polos',
      'Kemeja Formal',
      'Kemeja Kasual',
      'Blouse & Tunik',
      'Jaket & Hoodie',
      'Knitwear & Sweater',
    ],
  },
  {
    title: 'CELANA',
    link: '/celana',
    keywords: [
      'Celana Panjang',
      'Celana Pendek',
      'Celana Jeans',
      'Celana Chino',
      'Celana Kulot',
      'Cargo Pants',
    ],
  },
  {
    title: 'GAUN',
    link: '/gaun',
    keywords: [
      'Gaun Kasual',
      'Gaun Pesta',
      'Maxi Dress',
      'Midi Dress',
      'Dress Floral',
      'Dress Brokat',
    ],
  },
  {
    title: 'DISKON',
    link: '/diskon',
    keywords: [
      'Flash Sale',
      'Di Bawah 100 Ribu',
      'Cuci Gudang',
      'Beli 1 Gratis 1',
      'Diskon s/d 70%',
    ],
  },
] as const;

const CATEGORIES: CategoryItemType[] = [
  {
    title: 'Atasan & Sweater Tailored',
    imageSrc: '/clothes.jpg',
    imageAlt: 'Koleksi atasan dan sweater tailored Almari',
    href: '#',
  },
  {
    title: 'Celana Jeans',
    imageSrc: '/pants.jpg',
    imageAlt: 'Koleksi celana jeans modern Almari',
    href: '#',
  },
  {
    title: 'Gaun & Dress Minimalis',
    imageSrc: '/dresses.jpg',
    imageAlt: 'Koleksi gaun dan dress minimalis Almari',
    href: '#',
  },
] as const;

const STORE_SLIDES: CarouselSlide[] = [
  {
    src: '/store-image-1.jpg',
    alt: 'Suasana Toko Almari 1',
  },
  {
    src: '/store-image-2.jpg',
    alt: 'Suasana Toko Almari 2',
  },
  {
    src: '/store-image-3.jpg',
    alt: 'Suasana Toko Almari 3',
  },
] as const;

const PRODUCT_CHOICES: ProductChoicesType[] = [
  {
    label: 'SEMUA',
    value: 'semua',
  },
  { label: 'ATASAN', value: 'atasan' },
  { label: 'BAWAHAN', value: 'bawahan' },
  { label: 'GAUN', value: 'gaun' },
] as const;

export { NAVMENU, CATEGORIES, STORE_SLIDES, PRODUCT_CHOICES };
