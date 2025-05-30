'use client';

import Link from 'next/link';
import Image from 'next/image';

// 分类数据
const categories = [
  {
    id: "env-design",
    name: "环境设计",
    description: "专业的儿童活动场所整体环境设计",
    image: "/images/test001.jpg"
  },
  {
    id: "indoor",
    name: "室内装备",
    description: "优质的室内活动器材与设施",
    image: "/images/test002.jpg"
  },
  {
    id: "outdoor",
    name: "户外游戏",
    description: "丰富的户外游戏设施设备",
    image: "/images/test003.jpg"
  },
  {
    id: "sports",
    name: "运动材料",
    description: "专业的儿童运动训练器材",
    image: "/images/test004.jpg"
  },
  {
    id: "baby",
    name: "0-3托育",
    description: "婴幼儿托育服务场所设备",
    image: "/images/test005.jpg"
  },
  {
    id: "custom",
    name: "非标定制",
    description: "个性化定制游戏场地设施",
    image: "/images/test006.jpg"
  }
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* 页面标题 */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            产品中心
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            优优玩具提供专业的儿童活动场所整体解决方案，满足多样化场景需求。
          </p>
          <div className="w-24 h-1 bg-green-800 mx-auto rounded-full mt-8"></div>
        </div>

        {/* 分类网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              href="/products/list"
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
            >
              {/* 图片容器 */}
              <div className="relative h-72 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transform transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              
              {/* 内容 */}
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 text-white">
                <h3 className="text-2xl font-bold mb-2 transform transition-transform duration-300 group-hover:translate-x-2">
                  {category.name}
                </h3>
                <p className="text-white/90 transform transition-transform duration-300 group-hover:translate-x-2">
                  {category.description}
                </p>
                <div className="flex items-center mt-4 text-white/90 transform transition-transform duration-300 group-hover:translate-x-2">
                  <span className="text-sm font-medium">查看产品系列</span>
                  <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}