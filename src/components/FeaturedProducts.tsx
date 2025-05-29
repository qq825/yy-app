'use client';

import Link from 'next/link';
import Image from 'next/image';

const products = [
  {
    id: 1,
    name: "彩虹积木套装",
    description: "30块彩色积木，适合3岁以上儿童",
    image: "/images/ts-01.jpg",
    href: "/products/rainbow-blocks"
  },
  {
    id: 2,
    name: "智能机器人",
    description: "可编程智能机器人，培养编程思维",
    image: "/images/ts-02.jpg",
    href: "/products/smart-robot"
  },
  {
    id: 3,
    name: "毛绒恐龙",
    description: "柔软舒适的毛绒恐龙玩具",
    image: "/images/ts-03.jpg",
    href: "/products/plush-dinosaur"
  },
  {
    id: 4,
    name: "遥控赛车",
    description: "高速遥控赛车，多种操控模式",
    image: "/images/ts-04.jpg",
    href: "/products/remote-car"
  }
];

const FeaturedProducts = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <Link 
          key={product.id} 
          href={product.href}
          className="group block overflow-hidden rounded-xl bg-white shadow-md transition-transform hover:scale-105 hover:shadow-lg"
        >
          <div className="relative h-56 w-full overflow-hidden">
            
            
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transition-transform group-hover:scale-110"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-1">{product.name}</h3>
            <p className="text-gray-600 text-sm mb-2">{product.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default FeaturedProducts; 