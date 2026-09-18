import Hero from '@/components/features/home/Hero';
import ProductChoices from '@/components/features/home/ProductChoices';
import ShopByCategory from '@/components/features/home/ShopbyCategory';

export default function Home() {
  return (
    <>
      <Hero />
      <ShopByCategory />
      <ProductChoices />
    </>
  );
}
