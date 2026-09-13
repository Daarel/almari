'use client';

import Link from 'next/link';
import type { FC } from 'react';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, Search, ShoppingCart, User } from 'lucide-react';

import { NAVMENU } from '@/const';

const Header: FC = () => {
  const handleSearch = () => {};

  return (
    <header className='sticky top-0 z-50 w-full bg-background/95 backdrop-blur-md border-b border-border flex justify-between items-center h-22 shadow-lg px-30 mx-auto'>
      <div>
        <Link href='/' className='text-4xl font-light'>
          almari.
        </Link>
      </div>
      <nav>
        <NavigationMenu viewport={false}>
          <NavigationMenuList className='gap-2 sm:gap-5'>
            {NAVMENU.map(({ title, keywords }) => (
              <NavigationMenuItem key={title}>
                <NavigationMenuTrigger className='tracking-widest text-sm font-light'>
                  {title}
                </NavigationMenuTrigger>

                <NavigationMenuContent>
                  <ul className='flex flex-col gap-1 p-2 w-48'>
                    {keywords.map((keyword) => (
                      <li key={keyword}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={`/search?q=${encodeURIComponent(keyword)}`}
                            className='block px-3 py-2 text-sm rounded-none hover:bg-muted transition-colors'
                          >
                            {keyword}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
      <div>
        <form
          role='search'
          onSubmit={handleSearch}
          className='relative flex items-center'
        >
          <Search className='absolute left-3.5 size-4 text-muted-foreground pointer-events-none' />
          <Input
            type='search'
            placeholder='Temukan gaya Anda...'
            className='rounded-full w-125 h-10 pl-10 pr-4 [&::-webkit-search-cancel-button]:grayscale [&::-webkit-search-cancel-button]:opacity-50 hover:[&::-webkit-search-cancel-button]:opacity-90 [&::-webkit-search-cancel-button]:cursor-pointer focus-visible:ring-0 focus-visible:border-transparent focus-visible:outline-none'
          />
        </form>
      </div>
      <div className='flex items-center gap-5'>
        <Button variant='ghost' size='icon' asChild className='size-10'>
          <Link href='/wishlist' aria-label='Favorit' className='relative'>
            <Heart className='size-6' strokeWidth={1.5} />
          </Link>
        </Button>

        <Button variant='ghost' size='icon' asChild className='size-10'>
          <Link
            href='/cart'
            aria-label='Keranjang Belanja'
            className='relative'
          >
            <ShoppingCart className='size-6' strokeWidth={1.5} />
            <Badge className='absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full p-0 text-[10px] font-bold '>
              1
            </Badge>
          </Link>
        </Button>

        <Button variant='ghost' size='icon' asChild className='size-10'>
          <Link href='/account' aria-label='Akun Saya' className='relative'>
            <User className='size-6' strokeWidth={1.5} />
          </Link>
        </Button>
      </div>
    </header>
  );
};

export default Header;
