import Link from 'next/link';
import Image from 'next/image';

// 分类数据
const categories = [
  {
    id: 1,
    name: "益智玩具",
    description: "促进智力发展的各类玩具",
    image: "/images/category-educational.jpg",
    productCount: 15,
    href: "/categories/educational"
  },
  {
    id: 2,
    name: "拼装积木",
    description: "锻炼创造力和空间想象力",
    image: "/images/category-blocks.jpg",
    productCount: 12,
    href: "/categories/blocks"
  },
  {
    id: 3,
    name: "户外玩具",
    description: "适合户外活动的各类玩具",
    image: "/images/category-outdoor.jpg",
    productCount: 8,
    href: "/categories/outdoor"
  },
  {
    id: 4,
    name: "毛绒玩具",
    description: "柔软舒适的毛绒玩具",
    image: "/images/category-plush.jpg",
    productCount: 10,
    href: "/categories/plush"
  },
  {
    id: 5,
    name: "遥控玩具",
    description: "丰富多彩的遥控玩具系列",
    image: "/images/category-remote.jpg",
    productCount: 7,
    href: "/categories/remote"
  },
  {
    id: 6,
    name: "婴幼儿玩具",
    description: "专为0-3岁宝宝设计的玩具",
    image: "/images/category-baby.jpg",
    productCount: 14,
    href: "/categories/baby"
  },
  {
    id: 7,
    name: "电子玩具",
    description: "电子互动类玩具产品",
    image: "/images/category-electronic.jpg",
    productCount: 9,
    href: "/categories/electronic"
  },
  {
    id: 8,
    name: "绘画玩具",
    description: "激发艺术创造力的绘画类玩具",
    image: "/images/category-drawing.jpg",
    productCount: 6,
    href: "/categories/drawing"
  }
];

// 年龄分组
const ageGroups = [
  {
    id: 1,
    name: "0-1岁",
    description: "婴儿早期发展玩具",
    image: "/images/age-0-1.jpg",
    href: "/age-groups/0-1"
  },
  {
    id: 2,
    name: "1-3岁",
    description: "幼儿成长探索玩具",
    image: "/images/age-1-3.jpg",
    href: "/age-groups/1-3"
  },
  {
    id: 3,
    name: "3-6岁",
    description: "学前儿童益智玩具",
    image: "/images/age-3-6.jpg",
    href: "/age-groups/3-6"
  },
  {
    id: 4,
    name: "6岁以上",
    description: "学龄儿童创意玩具",
    image: "/images/age-6-plus.jpg",
    href: "/age-groups/6-plus"
  }
];

export default function CategoriesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* 页面标题 */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">产品分类</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          浏览我们丰富多样的产品分类，为您的孩子找到最合适的玩具。
        </p>
      </div>
      
      {/* 按分类浏览 */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">按玩具类型浏览</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.id} 
              href={category.href}
              className="group block overflow-hidden rounded-xl bg-white shadow-md transition-transform hover:scale-105 hover:shadow-lg"
            >
              <div className="relative h-48 w-full overflow-hidden">
                {/* 使用占位图片 */}
                <div className="absolute inset-0 bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-500 font-medium">{category.name} 图片</span>
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
                <p className="text-gray-600 text-sm mb-2">{category.description}</p>
                <p className="text-blue-600 text-sm">{category.productCount} 个产品</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      {/* 按年龄浏览 */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-8">按年龄段浏览</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ageGroups.map((ageGroup) => (
            <Link 
              key={ageGroup.id} 
              href={ageGroup.href}
              className="group block overflow-hidden rounded-xl bg-white shadow-md transition-transform hover:scale-105 hover:shadow-lg"
            >
              <div className="relative h-48 w-full overflow-hidden">
                {/* 使用占位图片 */}
                <div className="absolute inset-0 bg-green-100 flex items-center justify-center">
                  <span className="text-green-500 font-medium">{ageGroup.name} 图片</span>
                </div>
                {/* 注释掉 Image 组件，因为当前没有实际图片 */}
                {/* <Image
                  src={ageGroup.image}
                  alt={ageGroup.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-110"
                /> */}
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{ageGroup.name}</h3>
                <p className="text-gray-600 text-sm">{ageGroup.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 