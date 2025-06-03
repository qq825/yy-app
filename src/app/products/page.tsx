'use client';

import ProductCategories from '@/components/ProductCategories';


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