'use client';

import { FC, useState } from 'react';
import { Button } from '@/components/ui/button';
import { PRODUCT_CHOICES } from '@/const';
import { cn } from '@/lib/utils';

interface ProductFilterTabsProps {
  onSelect?: (value: string) => void;
  defaultValue?: string;
}

const ProductFilterTabs: FC<ProductFilterTabsProps> = ({
  onSelect,
  defaultValue = PRODUCT_CHOICES[0].value,
}: ProductFilterTabsProps) => {
  const [selected, setSelected] = useState<string>(defaultValue);

  const handleSelect = (value: string) => {
    setSelected(value);
    onSelect?.(value);
  };

  return (
    <ul className='flex flex-row items-center gap-2'>
      {PRODUCT_CHOICES.map(({ label, value }) => {
        const isActive = selected === value;

        return (
          <li key={value}>
            <Button
              variant='ghost'
              shape='square'
              onClick={() => handleSelect(value)}
              className={cn(
                'text-sm font-extralight transition-colors',
                isActive && 'border-b-2 border-b-foreground',
              )}
            >
              {label}
            </Button>
          </li>
        );
      })}
    </ul>
  );
};

export default ProductFilterTabs;
