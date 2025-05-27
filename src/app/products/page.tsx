'use client';

import { useState } from 'react';
import Link from 'next/link';
// import Image from 'next/image';

// 模拟产品数据
const productsData = [
  {
    id: 1,
    name: "彩虹积木套装",
    description: "30块彩色积木，适合3岁以上儿童",
    price: 199,
    category: "积木",
    ageRange: "3-6岁",
    image: "/images/product-blocks.jpg"
  },
  {
    id: 2,
    name: "智能机器人",
    description: "可编程智能机器人，培养编程思维",
    price: 499,
    category: "电子玩具",
    ageRange: "6岁以上",
    image: "/images/product-robot.jpg"
  },
  {
    id: 3,
    name: "毛绒恐龙",
    description: "柔软舒适的毛绒恐龙玩具",
    price: 129,
    category: "毛绒玩具",
    ageRange: "0-3岁",
    image: "/images/product-dinosaur.jpg"
  },
  {
    id: 4,
    name: "遥控赛车",
    description: "高速遥控赛车，多种操控模式",
    price: 299,
    category: "遥控玩具",
    ageRange: "6岁以上",
    image: "/images/product-car.jpg"
  },
  {
    id: 5,
    name: "宝宝摇铃",
    description: "五彩缤纷的宝宝摇铃，刺激感官发展",
    price: 59,
    category: "婴幼儿玩具",
    ageRange: "0-1岁",
    image: "/images/product-rattle.jpg"
  },
  {
    id: 6,
    name: "水彩笔套装",
    description: "12色可水洗水彩笔，安全无毒",
    price: 39,
    category: "绘画玩具",
    ageRange: "3-6岁",
    image: "/images/product-markers.jpg"
  },
  {
    id: 7,
    name: "拼图游戏",
    description: "100片趣味拼图，锻炼观察力和专注力",
    price: 69,
    category: "益智玩具",
    ageRange: "3-6岁",
    image: "/images/product-puzzle.jpg"
  },
  {
    id: 8,
    name: "沙滩玩具套装",
    description: "沙滩桶、铲子、模具等10件套",
    price: 89,
    category: "户外玩具",
    ageRange: "3-6岁",
    image: "/images/product-beach.jpg"
  }
];

// 所有分类
const categories = [...new Set(productsData.map(product => product.category))];

// 所有年龄范围
const ageRanges = [...new Set(productsData.map(product => product.ageRange))];

// 分类卡片数据
const categoryCards = [
  {
    id: 1,
    name: "益智玩具",
    description: "促进智力发展的各类玩具",
    image: "/images/category-educational.jpg",
    category: "益智玩具"
  },
  {
    id: 2,
    name: "拼装积木",
    description: "锻炼创造力和空间想象力",
    image: "/images/category-blocks.jpg",
    category: "积木"
  },
  {
    id: 3,
    name: "户外玩具",
    description: "适合户外活动的各类玩具",
    image: "/images/category-outdoor.jpg",
    category: "户外玩具"
  },
  {
    id: 4,
    name: "毛绒玩具",
    description: "柔软舒适的毛绒玩具",
    image: "/images/category-plush.jpg",
    category: "毛绒玩具"
  }
];

// 年龄分组卡片
const ageGroupCards = [
  {
    id: 1,
    name: "0-1岁",
    description: "婴儿早期发展玩具",
    image: "/images/age-0-1.jpg",
    ageRange: "0-1岁"
  },
  {
    id: 2,
    name: "0-3岁",
    description: "幼儿成长探索玩具",
    image: "/images/age-0-3.jpg",
    ageRange: "0-3岁"
  },
  {
    id: 3,
    name: "3-6岁",
    description: "学前儿童益智玩具",
    image: "/images/age-3-6.jpg",
    ageRange: "3-6岁"
  },
  {
    id: 4,
    name: "6岁以上",
    description: "学龄儿童创意玩具",
    image: "/images/age-6-plus.jpg",
    ageRange: "6岁以上"
  }
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedAgeRange, setSelectedAgeRange] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('default');
  const [viewMode, setViewMode] = useState('products'); // 'products', 'categories', 'ageGroups'

  // 过滤产品
  const filteredProducts = productsData.filter(product => {
    return (
      (selectedCategory === '' || product.category === selectedCategory) &&
      (selectedAgeRange === '' || product.ageRange === selectedAgeRange) &&
      (searchTerm === '' || product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
       product.description.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  // 排序产品
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'priceAsc') {
      return a.price - b.price;
    } else if (sortBy === 'priceDesc') {
      return b.price - a.price;
    }
    return 0; // 默认排序
  });

  // 处理分类卡片点击
  const handleCategoryCardClick = (category: string) => {
    setSelectedCategory(category);
    setViewMode('products');
  };

  // 处理年龄分组卡片点击
  const handleAgeGroupCardClick = (ageRange: string) => {
    setSelectedAgeRange(ageRange);
    setViewMode('products');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
      {/* 装饰性玩具元素 - 左上方 */}
      <div className="absolute -top-6 -left-6 w-24 h-24 opacity-20 hidden lg:block">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="text-green-800 rotate-12">
          <path d="M392 304h32c13.3 0 24 10.7 24 24v64c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24v-64c0-13.3 10.7-24 24-24zm-280-48h32c13.3 0 24 10.7 24 24v112c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24v-112c0-13.3 10.7-24 24-24zm392-144H384V40c0-22.1-17.9-40-40-40H168c-22.1 0-40 17.9-40 40v72H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h120v32c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24v-32h80v32c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24v-32h120c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zm-152 88h-32c-13.3 0-24-10.7-24-24v-64c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v64c0 13.3-10.7 24-24 24z"/>
        </svg>
      </div>

      {/* 装饰性玩具元素 - 右上方 */}
      <div className="absolute top-10 right-10 w-20 h-20 opacity-10 hidden lg:block">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor" className="text-red-500 -rotate-12">
          <path d="M463.8 32c-34.2 0-65.9 13.1-89.9 34.7L324.6 5.4c-7.1-7.1-18.6-7.1-25.7 0L238.3 66.7c-7.1 7.1-7.1 18.6 0 25.7l33.5 33.5c-21.6 23.9-34.7 55.7-34.7 89.9 0 34.2 13.1 65.9 34.7 89.9L221.3 356c-7.1 7.1-7.1 18.6 0 25.7l60.5 60.5c7.1 7.1 18.6 7.1 25.7 0l33.5-33.5c23.9 21.6 55.7 34.7 89.9 34.7 34.2 0 65.9-13.1 89.9-34.7l33.5 33.5c7.1 7.1 18.6 7.1 25.7 0l60.5-60.5c7.1-7.1 7.1-18.6 0-25.7l-33.5-33.5c21.6-23.9 34.7-55.7 34.7-89.9 0-34.2-13.1-65.9-34.7-89.9l33.5-33.5c7.1-7.1 7.1-18.6 0-25.7L559.3 72.3c-7.1-7.1-18.6-7.1-25.7 0l-33.5 33.5C476.9 45.1 445.1 32 410.9 32c-34.2 0-65.9 13.1-89.9 34.7L287.5 33.2c-7.1-7.1-18.6-7.1-25.7 0L201.3 93.8c-7.1 7.1-7.1 18.6 0 25.7l33.5 33.5c-21.6 23.9-34.7 55.7-34.7 89.9 0 34.2 13.1 65.9 34.7 89.9L184.3 383c-7.1 7.1-7.1 18.6 0 25.7l60.5 60.5c7.1 7.1 18.6 7.1 25.7 0l33.5-33.5c23.9 21.6 55.7 34.7 89.9 34.7 75.5 0 136.8-61.3 136.8-136.8 0-75.5-61.3-136.8-136.8-136.8z"/>
        </svg>
      </div>

      {/* 页面标题 */}
      <div className="text-center mb-12 relative">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">产品中心</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          优优玩具提供各类高品质玩具产品，满足不同年龄段孩子的需求。
        </p>
        
        {/* 装饰性玩具元素 - 标题装饰 */}
        <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-24 h-6 opacity-20">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor" className="text-green-800">
            <path d="M352 352H192c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64zM226.5 24.9c.2-.1.5-.2.8-.3-1.2.1-2.4.3-3.5.5 1 0 1.8-.1 2.7-.2zM288 0c37.3 0 67.5 30.2 67.5 67.5 0 19.8-8.6 37.6-22.2 49.9-4.9 4.4-9.8 8.9-14.8 13.2-.9.8-1.8 1.5-2.6 2.3-25.7 22.6-54.9 48.1-75.9 96.5-21-48.4-50.3-73.9-76-96.5-.8-.7-1.7-1.5-2.6-2.3-5-4.3-9.9-8.8-14.8-13.2-13.6-12.3-22.2-30.1-22.2-49.9C124.5 30.2 154.7 0 192 0c15.7 0 30.1 5.4 41.6 14.4L256 32l22.4-17.6C289.9 5.4 304.3 0 320 0h-32zm-85.5 24.9c.9.1 1.7.1 2.6.2-1.2-.1-2.3-.3-3.5-.5.2.1.5.2.9.3z"/>
          </svg>
        </div>
      </div>
      
      {/* 视图切换按钮 */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-md shadow-sm">
          <button
            onClick={() => setViewMode('products')}
            className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
              viewMode === 'products'
                ? 'bg-[#005550] text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            全部产品
          </button>
          <button
            onClick={() => setViewMode('categories')}
            className={`px-4 py-2 text-sm font-medium ${
              viewMode === 'categories'
                ? 'bg-[#005550] text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            按分类浏览
          </button>
          <button
            onClick={() => setViewMode('ageGroups')}
            className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
              viewMode === 'ageGroups'
                ? 'bg-[#005550] text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            按年龄浏览
          </button>
        </div>
      </div>
      
      {viewMode === 'products' && (
        <>
          {/* 过滤器和搜索栏 */}
          <div className="bg-white p-6 rounded-xl shadow-md mb-8 relative">
            {/* 装饰性玩具元素 - 左侧 */}
            <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-12 h-12 opacity-20 hidden lg:block">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="text-yellow-500">
                <path d="M440 128c-4.4 0-8 3.6-8 8v48H80v-48c0-4.4-3.6-8-8-8H40c-4.4 0-8 3.6-8 8v336c0 4.4 3.6 8 8 8h32c4.4 0 8-3.6 8-8v-48h352v48c0 4.4 3.6 8 8 8h32c4.4 0 8-3.6 8-8V136c0-4.4-3.6-8-8-8h-32zM80 384v-96h352v96H80zM472 32H40c-22.1 0-40 17.9-40 40v64c0 22.1 17.9 40 40 40h432c22.1 0 40-17.9 40-40V72c0-22.1-17.9-40-40-40zm-40 88c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24z"/>
              </svg>
            </div>
            
            {/* 装饰性玩具元素 - 右侧 */}
            <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 w-12 h-12 opacity-20 hidden lg:block">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor" className="text-blue-500">
                <path d="M528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-352 96c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zm112 236.8c0 10.6-10 19.2-22.4 19.2H86.4C74 384 64 375.4 64 364.8v-19.2c0-31.8 30.1-57.6 67.2-57.6h5c12.3 5.1 25.7 8 39.8 8s27.6-2.9 39.8-8h5c37.1 0 67.2 25.8 67.2 57.6v19.2zM512 312c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16z"/>
              </svg>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* 搜索 */}
              <div>
                <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">搜索</label>
                <div className="relative">
                  <input
                    type="text"
                    id="search"
                    className="w-full border border-gray-300 rounded-md py-2 pl-9 pr-3 focus:ring-green-500 focus:border-green-500"
                    placeholder="搜索产品..."
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-800" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* 分类筛选 */}
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">分类</label>
                <div className="relative">
                  <select
                    id="category"
                    className="w-full border border-gray-300 rounded-md py-2 pl-9 pr-3 focus:ring-green-500 focus:border-green-500 appearance-none"
                    value={selectedCategory}
                    onChange={e => setSelectedCategory(e.target.value)}
                  >
                    <option value="">所有分类</option>
                    {categories.map((category, index) => (
                      <option key={index} value={category}>{category}</option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-800" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                    </svg>
                  </div>
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* 年龄范围筛选 */}
              <div>
                <label htmlFor="ageRange" className="block text-sm font-medium text-gray-700 mb-1">适用年龄</label>
                <div className="relative">
                  <select
                    id="ageRange"
                    className="w-full border border-gray-300 rounded-md py-2 pl-9 pr-3 focus:ring-green-500 focus:border-green-500 appearance-none"
                    value={selectedAgeRange}
                    onChange={e => setSelectedAgeRange(e.target.value)}
                  >
                    <option value="">所有年龄</option>
                    {ageRanges.map((ageRange, index) => (
                      <option key={index} value={ageRange}>{ageRange}</option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-800" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* 排序 */}
              <div>
                <label htmlFor="sortBy" className="block text-sm font-medium text-gray-700 mb-1">排序方式</label>
                <div className="relative">
                  <select
                    id="sortBy"
                    className="w-full border border-gray-300 rounded-md py-2 pl-9 pr-3 focus:ring-green-500 focus:border-green-500 appearance-none"
                    value={sortBy}
                    onChange={e => setSortBy(e.target.value)}
                  >
                    <option value="default">默认排序</option>
                    <option value="priceAsc">价格从低到高</option>
                    <option value="priceDesc">价格从高到低</option>
                  </select>
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-800" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h7a1 1 0 100-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z" />
                    </svg>
                  </div>
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* 选中的筛选条件提示 */}
          {(selectedCategory || selectedAgeRange) && (
            <div className="mb-6 flex flex-wrap gap-2 items-center relative">
              <span className="text-gray-700">当前筛选：</span>
              {selectedCategory && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  分类: {selectedCategory}
                  <button
                    type="button"
                    className="ml-1 text-green-700 hover:text-green-900"
                    onClick={() => setSelectedCategory('')}
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </button>
                </span>
              )}
              {selectedAgeRange && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  年龄: {selectedAgeRange}
                  <button
                    type="button"
                    className="ml-1 text-green-700 hover:text-green-900"
                    onClick={() => setSelectedAgeRange('')}
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </button>
                </span>
              )}
              <button
                className="text-sm text-gray-500 hover:text-green-800"
                onClick={() => {
                  setSelectedCategory('');
                  setSelectedAgeRange('');
                  setSearchTerm('');
                }}
              >
                清除所有筛选
              </button>
              
              {/* 装饰性玩具元素 */}
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-12 h-12 opacity-10 hidden lg:block">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="text-green-800">
                  <path d="M488 128H192V96c0-17.7-14.3-32-32-32H80c-8.8 0-16 7.2-16 16v64H24c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c0 80.8 50.8 149.6 122 177.2V448h-56c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h272c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8h-56v-30.8c71.2-27.6 122-96.5 122-177.2h8c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24zM192 192H64v-64h128v64zm224 176c0 88.4-71.6 160-160 160S96 456.4 96 368v-48h320v48z"/>
                </svg>
              </div>
            </div>
          )}
          
          {/* 产品列表 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* 装饰性玩具元素 - 左下角 */}
            <div className="absolute -bottom-8 -left-8 w-24 h-24 opacity-10 hidden lg:block">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor" className="text-purple-500 rotate-12">
                <path d="M240 224h96c8.8 0 16-7.2 16-16v-96c0-8.8-7.2-16-16-16h-96c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16zm240 32c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16v-96c0-8.8-7.2-16-16-16h-96zM208 32C94.8 32 16 132.2 16 256s78.8 224 192 224 192-100.2 192-224S321.2 32 208 32zm0 384c-75.6 0-150.7-92.3-150.7-160S132.4 96 208 96s150.7 92.3 150.7 160S283.6 416 208 416z"/>
              </svg>
            </div>
            
            {/* 装饰性玩具元素 - 右下角 */}
            <div className="absolute -bottom-4 -right-4 w-20 h-20 opacity-10 hidden lg:block">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor" className="text-green-800 -rotate-12">
                <path d="M519.442 288.651c-41.519 0-59.5 31.593-82.058 31.593C377.409 320.244 432 144 432 144s-196.288 80-196.288-3.297c0-35.024 36.238-46.781 36.238-46.781-51.262 0-67.626 36.782-91.8 36.782-39.357 0-93.9-36.782-93.9-36.782-42.666 0-56.989 46.781-56.989 46.781 205.904 0 153.995 384 308.695 384 144.172 0 167.929-166.912 167.929-166.912-1.541 0-5.633-17.842-5.633-38.143 0-36.782 15.158-30.999 15.158-30.999-5.264 0-9.079 0-9.968-.001z"/>
              </svg>
            </div>
            
            {sortedProducts.length > 0 ? (
              sortedProducts.map(product => (
                <Link 
                  key={product.id} 
                  href={`/products/${product.id}`}
                  className="group block overflow-hidden rounded-xl bg-white shadow-md transition-transform hover:scale-105 hover:shadow-lg"
                >
                  <div className="relative h-56 w-full overflow-hidden">
                    {/* 使用占位图片 */}
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
                    <div className="mb-1">
                      <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mr-1">
                        {product.category}
                      </span>
                      <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                        {product.ageRange}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                  </div>
                </Link>
              ))
            ) : (
              <div className="col-span-full text-center py-8">
                <p className="text-gray-500">没有找到符合条件的产品，请尝试其他筛选条件。</p>
                {/* 装饰性玩具元素 - 空结果时的装饰 */}
                <div className="mx-auto mt-4 w-16 h-16 opacity-30">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="text-green-800">
                    <path d="M500.2 387.2c-1.1-2.1-2.2-4-3.5-5.8l-91.9-114.1c-6-7.5-15.3-11.2-24.5-11.2H256V128h120c4.4 0 8-3.6 8-8v16c0 4.4 3.6 8 8 8h272c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8h-56v-30.8c71.2-27.6 122-96.5 122-177.2h8c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24zM232 48c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16zm-96 304h-63.3l47.9-61.6c1.1-1.4 2.8-2.4 4.6-2.4H184l-48 64zm172.9-64c1.8 0 3.5.9 4.6 2.4l47.9 61.6H304l-48-64h52.9z"/>
                  </svg>
                </div>
              </div>
            )}
          </div>
        </>
      )}
      
      {viewMode === 'categories' && (
        <div className="relative">
          {/* 装饰性玩具元素 - 左侧 */}
          <div className="absolute -left-8 top-10 w-16 h-16 opacity-10 hidden lg:block">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="text-orange-500 rotate-12">
              <path d="M480 128c-8.8 0-16 7.2-16 16v80H48v-80c0-8.8-7.2-16-16-16S16 135.2 16 144v224c0 8.8 7.2 16 16 16s16-7.2 16-16v-80h416v80c0 8.8 7.2 16 16 16s16-7.2 16-16V144c0-8.8-7.2-16-16-16zM48 272V224h416v48H48zm448-176H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16z"/>
            </svg>
          </div>
          
          {/* 装饰性玩具元素 - 右侧 */}
          <div className="absolute -right-8 top-1/2 w-16 h-16 opacity-10 hidden lg:block">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="text-green-800 -rotate-12">
              <path d="M459.4 151.7c13.7-13.7 35.8-13.7 49.5 0 13.7 13.7 13.7 35.8 0 49.5l-77.5 77.5c-13.7 13.7-35.8 13.7-49.5 0-5-5-8.3-11.2-9.8-17.8-4.2 1-8.5 1.5-12.9 1.5-3.2 0-6.3-.4-9.3-1-3.8 9.1-9.8 17.2-17.9 23-8.8 6.3-19.6 10.1-31.3 10.1-11.7 0-22.5-3.8-31.3-10.1-8.1-5.8-14.1-14-17.9-23-3 .6-6.1 1-9.3 1-24.6 0-44.5-19.9-44.5-44.5 0-24.6 19.9-44.5 44.5-44.5 24.6 0 44.5 19.9 44.5 44.5 0 3.2-.4 6.3-1 9.3 9.1 3.8 17.2 9.8 23 17.9 6.3 8.8 10.1 19.6 10.1 31.3 0 11.7-3.8 22.5-10.1 31.3-5.8 8.1-14 14.1-23 17.9.6 3 1 6.1 1 9.3 0 24.6-19.9 44.5-44.5 44.5-24.6 0-44.5-19.9-44.5-44.5 0-24.6 19.9-44.5 44.5-44.5 3.2 0 6.3.4 9.3 1 3.8-9.1 9.8-17.2 17.9-23 8.8-6.3 19.6-10.1 31.3-10.1 11.7 0 22.5 3.8 31.3 10.1 8.1 5.8 14.1 14 17.9 23 3-.6 6.1-1 9.3-1 4.4 0 8.7.5 12.9 1.5 1.5-6.6 4.8-12.8 9.8-17.8 13.7-13.7 35.8-13.7 49.5 0l77.5-77.5zM80 299.6c0-6.3 1.7-12.3 4.5-17.5-1.4-.4-2.9-.7-4.5-.7-8.2 0-14.8 6.7-14.8 14.8 0 8.2 6.7 14.8 14.8 14.8 1.6 0 3.1-.2 4.5-.7-2.8-5-4.5-11-4.5-17.5 0 1.1 0 2.2.1 3.3-.1-1.1-.1-2.2-.1-3.3z"/>
            </svg>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-8 relative">
            按玩具类型浏览
            
            {/* 装饰性玩具元素 - 标题装饰 */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-6 opacity-20">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="text-green-800">
                <path d="M512 194.8c0 101.3-82.4 183.8-183.8 183.8-101.7 0-184.4-82.4-184.4-183.8 0-101.6 82.7-184.3 184.4-184.3C429.6 10.5 512 93.2 512 194.8zM0 501.5h90v-491H0v491z"/>
              </svg>
            </div>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categoryCards.map((category) => (
              <button 
                key={category.id} 
                onClick={() => handleCategoryCardClick(category.category)}
                className="block text-left overflow-hidden rounded-xl bg-white shadow-md transition-transform hover:scale-105 hover:shadow-lg relative"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  {/* 使用占位图片 */}
                  <div className="absolute inset-0 bg-green-100 flex items-center justify-center">
                    <span className="text-green-700 font-medium">{category.name} 图片</span>
                  </div>
                  
                  {/* 装饰性玩具元素 - 角落装饰 */}
                  <div className="absolute top-2 right-2 w-8 h-8 opacity-20">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="text-green-800">
                      <path d="M488 352h-48V109.25l59.31-59.31c6.25-6.25 6.25-16.38 0-22.63L487.67 4.69c-6.25-6.25-16.38-6.25-22.63 0L406.75 64H192v96h114.75l-22.31 22.31c-6.25 6.25-6.25 16.38 0 22.63L329.38 250c5.43 5.43 12.59 8.31 19.62 8.31 7.69 0 15.37-2.94 21.25-8.81l16.67-16.67c5.99-5.99 9.35-14.14 9.35-22.63s-3.36-16.64-9.35-22.63L380.9 182.4 384 179.31V128h82.75l-96 96 42.34 42.34L488 192h8c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16h-8v-80c0-8.84-7.16-16-16-16h-8V32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v448c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32zm-72 0H96V32h320v320z"/>
                    </svg>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{category.name}</h3>
                  <p className="text-gray-600 text-sm mb-1">{category.description}</p>
                  <p className="text-green-800 text-sm">
                    {productsData.filter(p => p.category === category.category).length} 个产品
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {viewMode === 'ageGroups' && (
        <div className="relative">
          {/* 装饰性玩具元素 - 左侧 */}
          <div className="absolute -left-8 top-10 w-16 h-16 opacity-10 hidden lg:block">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="text-pink-500 rotate-6">
              <path d="M160 224v-48c0-8.8-7.2-16-16-16h-16v-16c0-8.8-7.2-16-16-16h-16c-8.8 0-16 7.2-16 16v16h-16c-8.8 0-16 7.2-16 16v48H32c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V256c0-17.7-14.3-32-32-32h-16v-48c0-8.8-7.2-16-16-16h-16v-16c0-8.8-7.2-16-16-16h-16c-8.8 0-16 7.2-16 16v16h-16c-8.8 0-16 7.2-16 16v48h-96zm48-16h64v16h32v-80c0-26.5-21.5-48-48-48h-16c-26.5 0-48 21.5-48 48v16h16v48zm-80 0h64v-48h-80v-16c0-26.5-21.5-48-48-48h-16c-26.5 0-48 21.5-48 48v80h32v-16h96v0z"/>
            </svg>
          </div>
          
          {/* 装饰性玩具元素 - 右侧 */}
          <div className="absolute -right-8 top-1/2 w-16 h-16 opacity-10 hidden lg:block">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor" className="text-blue-500 -rotate-6">
              <path d="M497 360h-91.6l-6.5-18.2c-10.3-27.4-30.3-36.9-46-41.5-24.2-7-35.8-10.3-70.9-10.3s-46.7 3.3-70.9 10.3c-15.7 4.6-35.7 14.1-46 41.5L158.6 360H67c-17.7 0-32 14.3-32 32v48c0 17.7 14.3 32 32 32h30l16.5-28.2c6.6-11.3 18.8-18.2 32-18.2h285c13.2 0 25.4 6.9 32 18.2L479 472h18c17.7 0 32-14.3 32-32v-48c0-17.7-14.3-32-32-32zm-17.3-48l-19.6-98c-4.6-23.5-25.5-40-49.4-40H229.3c-23.9 0-44.8 16.5-49.4 40l-19.6 98c36.5-7.3 74.1-10 113.7-10s77.2 2.7 113.7 10zm-256-190.9c28.7 0 52-23.3 52-52s-23.3-52-52-52-52 23.3-52 52 23.3 52 52 52zm152-52c0 28.7 23.3 52 52 52s52-23.3 52-52-23.3-52-52-52-52 23.3-52 52z"/>
            </svg>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-8 relative">
            按年龄段浏览
            
            {/* 装饰性玩具元素 - 标题装饰 */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-6 opacity-20">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor" className="text-green-800">
                <path d="M384 64H192C86 64 0 150 0 256s86 192 192 192h192c106 0 192-86 192-192S490 64 384 64zM192 384c-70.7 0-128-57.3-128-128s57.3-128 128-128 128 57.3 128 128-57.3 128-128 128zm193.7-64H356.3c12.3-21.5 19.7-46.3 19.7-64 0-17.7-7.4-42.5-19.7-64h29.4c42.9 0 85.1 13.7 119.7 39-1.9 6.8-2.9 13.9-2.9 21s1 14.2 2.9 21c-34.6 25.3-76.8 39-119.7 39z"/>
              </svg>
            </div>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ageGroupCards.map((ageGroup) => (
              <button 
                key={ageGroup.id} 
                onClick={() => handleAgeGroupCardClick(ageGroup.ageRange)}
                className="block text-left overflow-hidden rounded-xl bg-white shadow-md transition-transform hover:scale-105 hover:shadow-lg relative"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  {/* 使用占位图片 */}
                  <div className="absolute inset-0 bg-green-100 flex items-center justify-center">
                    <span className="text-green-700 font-medium">{ageGroup.name} 图片</span>
                  </div>
                  
                  {/* 装饰性玩具元素 - 角落装饰 */}
                  <div className="absolute top-2 right-2 w-8 h-8 opacity-20">
                    {ageGroup.name === "0-1岁" && (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="text-green-800">
                        <path d="M464 144c-13.3 0-26.1 2.5-37.9 7.1C415.2 84.6 358.8 32 288 32c-70.8 0-127.2 52.6-138.1 119.1C138.1 146.5 125.3 144 112 144c-61.9 0-112 50.1-112 112s50.1 112 112 112h16v50.2c18.8 14.8 40.4 25.6 64 32V400h16c22.1 0 40-17.9 40-40v-24h128v24c0 22.1 17.9 40 40 40h16v50.2c23.6-6.4 45.2-17.3 64-32V368h16c61.9 0 112-50.1 112-112s-50.1-112-112-112z"/>
                      </svg>
                    )}
                    {ageGroup.name === "0-3岁" && (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor" className="text-green-800">
                        <path d="M352 352H192c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64zM226.5 24.9c.2-.1.5-.2.8-.3-1.2.1-2.4.3-3.5.5 1 0 1.8-.1 2.7-.2zM288 0c37.3 0 67.5 30.2 67.5 67.5 0 19.8-8.6 37.6-22.2 49.9-4.9 4.4-9.8 8.9-14.8 13.2-.9.8-1.8 1.5-2.6 2.3-25.7 22.6-54.9 48.1-75.9 96.5-21-48.4-50.3-73.9-76-96.5-.8-.7-1.7-1.5-2.6-2.3-5-4.3-9.9-8.8-14.8-13.2-13.6-12.3-22.2-30.1-22.2-49.9C124.5 30.2 154.7 0 192 0c15.7 0 30.1 5.4 41.6 14.4L256 32l22.4-17.6C289.9 5.4 304.3 0 320 0h-32z"/>
                      </svg>
                    )}
                    {ageGroup.name === "3-6岁" && (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor" className="text-green-800">
                        <path d="M344 288h-16c-26.5 0-48-21.5-48-48v-16h-32v16c0 26.5-21.5 48-48 48h-16c-26.5 0-48 21.5-48 48v176h256V336c0-26.5-21.5-48-48-48zm-64-64h-64v-48c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48zm272-48c0-79.5-64.5-144-144-144S264 96.5 264 176c0 15.7 2.6 30.7 7.2 44.8H256c-17.7 0-32 14.3-32 32v18.4c-13.8 10.6-24.3 25.4-28.6 42.8H144c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h16c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16v-32h51.2l-27 270c-.4 4.4 3.3 8 7.7 8H232c4.4 0 7.9-3.5 8-7.8l4-168.2h8V408c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-40h96v40c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8V264c0-30.8-25-55.8-55.8-56l-33.2-.1c34.5-16.5 58.2-51.7 58.2-92.3 0-8.8-1.2-17.3-3.3-25.5H408v-16c0-8.8-7.2-16-16-16h-55.6c-11.9-13.4-27.7-23.2-45.6-27.3-1.5-11.3-11.2-20-22.9-20h-44.8c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h44.8c11.7 0 21.4-8.7 22.9-20 3.3.7 6.5 1.8 9.6 3 3.2 1.2 6.2 2.6 9.2 4.1V160h64v16c0 8.8 7.2 16 16 16h16.3c.4 3.3.7 6.7.7 10.1 0 37.3-29.9 67.7-67 67.9h-16z"/>
                      </svg>
                    )}
                    {ageGroup.name === "6岁以上" && (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor" className="text-green-800">
                        <path d="M172.5 131.1c55.6-11.2 113.5 11.5 142.4 60.3l3.4 5.5c15.5 25.1 31.7 43.9 51.1 57 19.5 13.1 41.9 20.1 68.1 20.1 26.2 0 48.6-7 68.1-20.1 19.4-13.1 35.6-31.9 51.1-57l3.4-5.5c28.9-48.8 86.8-71.5 142.4-60.3 83.7 16.9 144.7 96.1 136 181.2-7.2 71.2-56.7 130.1-123.9 148.6-27.9 7.7-64.6.6-79.8-16.5L636 472H351L471.6 329c-15.2 17-52 24.2-79.8 16.5-67.2-18.5-116.7-77.4-123.9-148.6-8.7-85.1 52.3-164.3 136-181.2-13.9-2.9-26.2-5.9-31.4-7.6zm58.3-28c-22.2 4.5-40.9 13.3-55.4 18.2 28-10.8 66.9-18.2 94.9-14.5 10.3 1.3 20.1 3.9 29.2 7.6-7.3-6.6-17.7-12.2-31.1-16-19-5.3-38.9-1.6-77.8 8.2-39.5 10-86.8 10-109.5-12.5-57.4 14.7-107.6 70.1-107.6 140 0 94.3 87.3 165.6 175 155.3 19.5-2.3 35.9-9.4 48.8-19.8l28.9-22.7c33.3 40.5 101.5 40.5 134.9 0l28.9 22.7c12.9 10.4 29.3 17.5 48.8 19.8 87.7 10.3 175-61 175-155.3 0-69.9-50.2-125.3-107.6-140-22.7 22.5-70 22.5-109.5 12.5-39-9.8-58.9-13.5-77.8-8.2-12.3 3.8-23.3 9.4-31.1 16 9.1-3.7 18.9-6.3 29.2-7.6 28-3.7 66.9 3.7 94.9 14.5-14.5-4.9-33.2-13.7-55.4-18.2zM128 64c0-17.7-14.3-32-32-32S64 46.3 64 64s14.3 32 32 32 32-14.3 32-32zm512 0c0-17.7-14.3-32-32-32s-32 14.3-32 32 14.3 32 32 32 32-14.3 32-32z"/>
                      </svg>
                    )}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{ageGroup.name}</h3>
                  <p className="text-gray-600 text-sm mb-1">{ageGroup.description}</p>
                  <p className="text-green-800 text-sm">
                    {productsData.filter(p => p.ageRange === ageGroup.ageRange).length} 个产品
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}