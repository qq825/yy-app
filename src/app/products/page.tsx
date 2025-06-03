'use client';

import ProductCategories from '@/components/ProductCategories';

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
            服务中心
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            优优玩具提供专业的儿童活动场所整体解决方案，满足多样化场景需求。
          </p>
          <div className="w-24 h-1 bg-green-800 mx-auto rounded-full mt-8"></div>
        </div>
          <ProductCategories />
      </div>
    </div>
  );
}