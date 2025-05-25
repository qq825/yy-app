'use client';

import Link from 'next/link';
import Image from 'next/image';

const products = [
  {
    id: 1,
    name: "彩虹积木套装",
    description: "30块彩色积木，适合3岁以上儿童",
    price: 199,
    image: "/images/product-blocks.jpg",
    href: "/products/rainbow-blocks"
  },
  {
    id: 2,
    name: "智能机器人",
    description: "可编程智能机器人，培养编程思维",
    price: 499,
    image: "/images/product-robot.jpg",
    href: "/products/smart-robot"
  },
  {
    id: 3,
    name: "毛绒恐龙",
    description: "柔软舒适的毛绒恐龙玩具",
    price: 129,
    image: "/images/product-dinosaur.jpg",
    href: "/products/plush-dinosaur"
  },
  {
    id: 4,
    name: "遥控赛车",
    description: "高速遥控赛车，多种操控模式",
    price: 299,
    image: "/images/product-car.jpg",
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
            {/* 使用占位图片，实际项目中应替换为真实图片 */}
            <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
              <span className="text-gray-500 font-medium">{product.name} 图片</span>
            </div>
            {/* 注释掉 Image 组件，因为当前没有实际图片 */}
            {/* <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transition-transform group-hover:scale-110"
            /> */}
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-1">{product.name}</h3>
            <p className="text-gray-600 text-sm mb-2">{product.description}</p>
            <p className="text-green-800 font-medium">¥{product.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default FeaturedProducts; 