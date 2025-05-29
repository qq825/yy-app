'use client';

import Link from 'next/link';
import Image from 'next/image';

const categories = [
  {
    id: 1,
    name: "益智玩具",
    description: "促进智力发展的各类玩具",
    image: "/images/test001.jpg",
    href: "/products"
  },
  {
    id: 2,
    name: "拼装积木",
    description: "锻炼创造力和空间想象力",
    image: "/images/test002.jpg",
    href: "/products"
  },
  {
    id: 3,
    name: "户外玩具",
    description: "适合户外活动的各类玩具",
    image: "/images/test003.jpg",
    href: "/products"
  },
  {
    id: 4,
    name: "毛绒玩具",
    description: "柔软舒适的毛绒玩具",
    image: "/images/test004.jpg",
    href: "/products"
  },
  {
    id: 5,
    name: "遥控玩具",
    description: "丰富多彩的遥控玩具系列",
    image: "/images/test005.jpg",
    href: "/products"
  },
  {
    id: 6,
    name: "婴幼儿玩具",
    description: "专为0-3岁宝宝设计的玩具",
    image: "/images/test006.jpg",
    href: "/products"
  }
];

const ProductCategories = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((category) => (
        <Link 
          key={category.id} 
          href={category.href}
          className="group block overflow-hidden rounded-xl bg-white shadow-md transition-transform hover:scale-105 hover:shadow-lg"
        >
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={category.image}
              alt={category.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-1">{category.name}</h3>
            <p className="text-gray-600 text-sm">{category.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductCategories; 