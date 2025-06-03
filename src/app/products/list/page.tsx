'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import WishlistForm from '@/app/components/WishlistForm';

// 产品类型定义
interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
  image: string;
}

// 模拟产品数据
const productsData: Product[] = [
  {
    id: 1,
    name: "儿童活动区设计方案",
    description: "专业的儿童活动区整体环境设计解决方案",
    category: "环境设计",
    image: "/images/888.jpg"
  },
  {
    id: 2,
    name: "多功能游戏桌",
    description: "适合儿童游戏和学习的多功能活动桌",
    category: "室内装备",
    image: "/images/test002.jpg"
  },
  {
    id: 3,
    name: "户外攀爬架",
    description: "安全耐用的户外儿童攀爬设施",
    category: "户外游戏",
    image: "/images/test003.jpg"
  },
  {
    id: 4,
    name: "感统训练套装",
    description: "专业的儿童感统训练器材套装",
    category: "运动材料",
    image: "/images/test004.jpg"
  },
  {
    id: 5,
    name: "婴幼儿托育设备",
    description: "0-3岁婴幼儿托育专用设备",
    category: "0-3托育",
    image: "/images/test005.jpg"
  },
  {
    id: 6,
    name: "定制游戏区域",
    description: "根据场地定制的特色游戏区域",
    category: "非标定制",
    image: "/images/test006.jpg"
  }
];

// 所有分类
const categories = ["环境设计", "室内装备", "户外游戏", "运动材料", "0-3托育", "非标定制"] as const;

export default function ProductListPage() {
  const [selectedCategory, setSelectedCategory] = useState('');

  // 过滤产品
  const filteredProducts = productsData.filter(product => {
    return selectedCategory === '' || product.category === selectedCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 页面标题 */}
        <div className="mb-3">
          <div className="flex items-center gap-4 mb-6">
            <Link 
              href="/products" 
              className="text-green-800 hover:text-green-700 flex items-center group"
            >
              <svg className="w-6 h-6 mr-2 transition-transform duration-300 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="font-medium">返回服务中心</span>
            </Link>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            浏览我们的全部产品系列，为您的场景找到最适合的解决方案。
          </p>
        </div>

        {/* 分类筛选 */}
        <div className="bg-white rounded-2xl shadow-lg mb-6 overflow-hidden">
          <div className="p-6 md:p-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">按分类浏览</h2>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-green-800 text-white shadow-lg shadow-green-800/30 transform -translate-y-0.5'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 产品列表 */}
        <div className="text-center gap-4 grid grid-cols-1">
          {filteredProducts.map(product => (
            <div 
              key={product.id}              
              className="group bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  width="100%"
                />
                {/* 加入心愿单按钮 */}
                <button className="absolute top-2 right-2 bg-green-800 rounded-full p-2 shadow-lg hover:bg-green-700 transition-colors">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 空状态 */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl shadow-lg">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <p className="text-gray-500 text-lg">没有找到符合条件的产品</p>
            <button 
              onClick={() => setSelectedCategory('')}
              className="mt-4 text-green-800 hover:text-green-700 font-medium flex items-center mx-auto"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              重置筛选
            </button>
          </div>
        )}
      </div>

      {/* 固定定位的一个购物车 在页面右下角 */}
      <div className="fixed bottom-0 right-0 m-4">
        <WishlistForm />
      </div>

    
    </div>
  );
} 