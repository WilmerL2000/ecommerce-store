'use client';

import Image from 'next/image';
import { MouseEventHandler } from 'react';
import { Expand, ShoppingCart } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { Product } from '@/types';

type Props = {
  data: Product;
};

export default function ProductCard({ data }: Props) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${data?.id}`);
  };

  return <div>ProductCard</div>;
}
