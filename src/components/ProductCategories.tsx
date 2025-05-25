'use client';

import Link from 'next/link';
import Image from 'next/image';

const categories = [
  {
    id: 1,
    name: "益智玩具",
    description: "促进智力发展的各类玩具",
    image: "/images/category-educational.jpg",
    href: "/products"
  },
  {
    id: 2,
    name: "拼装积木",
    description: "锻炼创造力和空间想象力",
    image: "/images/category-blocks.jpg",
    href: "/products"
  },
  {
    id: 3,
    name: "户外玩具",
    description: "适合户外活动的各类玩具",
    image: "/images/category-outdoor.jpg",
    href: "/products"
  },
  {
    id: 4,
    name: "毛绒玩具",
    description: "柔软舒适的毛绒玩具",
    image: "/images/category-plush.jpg",
    href: "/products"
  },
  {
    id: 5,
    name: "遥控玩具",
    description: "丰富多彩的遥控玩具系列",
    image: "/images/category-remote.jpg",
    href: "/products"
  },
  {
    id: 6,
    name: "婴幼儿玩具",
    description: "专为0-3岁宝宝设计的玩具",
    image: "/images/category-baby.jpg",
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
            {/* 使用占位图片，实际项目中应替换为真实图片 */}
            <div className="absolute inset-0 bg-green-100 flex items-center justify-center">
              <span className="text-green-700 font-medium">{category.name} 图片</span>
            </div>
            {/* 注释掉 Image 组件，因为当前没有实际图片 */}
            {/* <Image
              src={category.image}
              alt={category.name}
              fill
              className="object-cover transition-transform group-hover:scale-110"
            /> */}
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