'use client';

import { useState } from 'react';
import Link from 'next/link';
// import Image from 'next/image';
import { useParams } from 'next/navigation';

// 模拟产品数据
const productsData = [
  {
    id: 1,
    name: "彩虹积木套装",
    description: "30块彩色积木，适合3岁以上儿童",
    longDescription: "这套彩虹积木套装包含30块不同颜色和形状的积木，采用优质环保材料制作，安全无毒。通过拼搭积木，可以锻炼孩子的空间想象力、创造力和手眼协调能力。积木表面光滑，棱角圆润，专为幼儿设计，确保使用安全。",
    price: 199,
    category: "积木",
    ageRange: "3-6岁",
    material: "优质实木",
    size: "中号",
    features: ["环保材质", "安全圆角", "色彩鲜艳", "多种形状"],
    relatedProductIds: [7, 2, 6],
    inStock: true,
    image: "/images/product-blocks.jpg"
  },
  {
    id: 2,
    name: "智能机器人",
    description: "可编程智能机器人，培养编程思维",
    longDescription: "这款智能机器人采用先进的编程理念设计，支持图形化编程和简单的代码指令。孩子可以通过编程控制机器人完成各种任务，培养逻辑思维和问题解决能力。机器人具有语音交互、自动避障、跟随行走等多种功能，陪伴孩子学习成长。",
    price: 499,
    category: "电子玩具",
    ageRange: "6岁以上",
    material: "ABS塑料",
    size: "25cm高",
    features: ["图形化编程", "语音交互", "充电式", "APP控制"],
    relatedProductIds: [4, 7, 8],
    inStock: true,
    image: "/images/product-robot.jpg"
  },
  {
    id: 3,
    name: "毛绒恐龙",
    description: "柔软舒适的毛绒恐龙玩具",
    longDescription: "这款毛绒恐龙玩具采用优质超柔短毛绒面料，内部填充环保PP棉，手感柔软，触感舒适。恐龙形象生动可爱，是孩子睡前的好伙伴。产品经过严格的安全测试，适合所有年龄段的儿童。多种恐龙种类可选，收集起来更有趣。",
    price: 129,
    category: "毛绒玩具",
    ageRange: "0-3岁",
    material: "优质短毛绒",
    size: "30cm长",
    features: ["柔软舒适", "可手洗", "安全认证", "多色可选"],
    relatedProductIds: [5, 8, 1],
    inStock: true,
    image: "/images/product-dinosaur.jpg"
  },
  {
    id: 4,
    name: "遥控赛车",
    description: "高速遥控赛车，多种操控模式",
    longDescription: "这款遥控赛车采用高性能马达，动力强劲，最高时速可达25km/h。车身采用抗震耐摔材质，即使跌落也不易损坏。遥控器采用2.4G技术，控制距离远，反应灵敏。支持漂移、特技等多种操控模式，带来刺激的赛车体验。",
    price: 299,
    category: "遥控玩具",
    ageRange: "6岁以上",
    material: "工程塑料",
    size: "28cm长",
    features: ["高速马达", "防震底盘", "漂移功能", "长效电池"],
    relatedProductIds: [2, 8, 7],
    inStock: true,
    image: "/images/product-car.jpg"
  },
  {
    id: 5,
    name: "宝宝摇铃",
    description: "五彩缤纷的宝宝摇铃，刺激感官发展",
    longDescription: "这款宝宝摇铃设计精巧，造型可爱，摇晃时会发出悦耳的声音，能够吸引宝宝注意力。表面有多种纹理和凸起，可以锻炼宝宝的触觉能力。采用食品级材料制作，即使宝宝放入口中也安全无害。色彩鲜艳，有助于视觉发育。",
    price: 59,
    category: "婴幼儿玩具",
    ageRange: "0-1岁",
    material: "食品级塑料",
    size: "小巧便携",
    features: ["无毒材质", "多种纹理", "悦耳声音", "色彩鲜艳"],
    relatedProductIds: [3, 6, 1],
    inStock: true,
    image: "/images/product-rattle.jpg"
  },
  {
    id: 6,
    name: "水彩笔套装",
    description: "12色可水洗水彩笔，安全无毒",
    longDescription: "这套水彩笔含12种鲜艳颜色，采用水溶性颜料，容易清洗，不用担心弄脏衣物和家具。笔尖韧性好，不易变形，书写流畅。采用环保材料制作，通过安全认证，不含有害物质。适合儿童绘画和涂色，激发创造力和想象力。",
    price: 39,
    category: "绘画玩具",
    ageRange: "3-6岁",
    material: "环保塑料",
    size: "标准尺寸",
    features: ["可水洗", "不易干", "环保无毒", "色彩鲜艳"],
    relatedProductIds: [7, 1, 3],
    inStock: true,
    image: "/images/product-markers.jpg"
  },
  {
    id: 7,
    name: "拼图游戏",
    description: "100片趣味拼图，锻炼观察力和专注力",
    longDescription: "这款拼图游戏包含100片精美图案的拼图，画面生动有趣。通过拼图游戏，可以锻炼孩子的观察力、专注力和耐心。拼图边缘平滑，不伤手，采用优质硬纸板制作，不易变形。拼图尺寸适中，便于收纳和保存。",
    price: 69,
    category: "益智玩具",
    ageRange: "3-6岁",
    material: "硬纸板",
    size: "完成尺寸38x26cm",
    features: ["精美图案", "边缘平滑", "不易变形", "锻炼专注力"],
    relatedProductIds: [1, 6, 2],
    inStock: true,
    image: "/images/product-puzzle.jpg"
  },
  {
    id: 8,
    name: "沙滩玩具套装",
    description: "沙滩桶、铲子、模具等10件套",
    longDescription: "这套沙滩玩具包含沙滩桶、铲子、耙子、模具等10件工具，满足孩子在沙滩或沙池中的各种玩耍需求。采用环保塑料制作，色彩鲜艳，耐用防摔。工具手柄设计符合人体工学，适合儿童抓握。轻便易携带，是夏日户外玩耍的必备玩具。",
    price: 89,
    category: "户外玩具",
    ageRange: "3-6岁",
    material: "环保塑料",
    size: "便携套装",
    features: ["10件套", "便携收纳", "环保材质", "色彩鲜艳"],
    relatedProductIds: [4, 3, 7],
    inStock: true,
    image: "/images/product-beach.jpg"
  }
];

export default function ProductDetailPage() {
  const params = useParams();
  const productId = Number(params.id);
  
  const product = productsData.find(p => p.id === productId);
  const [quantity, setQuantity] = useState(1);
  
  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        {/* 装饰性玩具元素 - 404页面装饰 */}
        <div className="absolute -top-6 -left-6 w-24 h-24 opacity-15 hidden lg:block">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor" className="text-red-500 rotate-12">
            <path d="M544 192h-16L419.22 56.02A64.025 64.025 0 0 0 369.24 32H155.33c-26.17 0-49.7 15.93-59.42 40.23L48 194.26C20.44 201.4 0 226.21 0 256v112c0 8.84 7.16 16 16 16h48c0 53.02 42.98 96 96 96s96-42.98 96-96h128c0 53.02 42.98 96 96 96s96-42.98 96-96h48c8.84 0 16-7.16 16-16v-80c0-53.02-42.98-96-96-96zM160 432c-26.47 0-48-21.53-48-48s21.53-48 48-48 48 21.53 48 48-21.53 48-48 48zm72-240H116.93l38.4-96H232v96zm48 0V96h89.24l76.8 96H280zm200 240c-26.47 0-48-21.53-48-48s21.53-48 48-48 48 21.53 48 48-21.53 48-48 48z"/>
          </svg>
        </div>
        <div className="absolute top-10 right-10 w-20 h-20 opacity-10 hidden lg:block">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="text-green-800 -rotate-12">
            <path d="M256 256c52.805 0 96-43.201 96-96s-43.195-96-96-96-96 43.201-96 96 43.195 96 96 96zm0 48c-63.598 0-192 32.402-192 96v48h384v-48c0-63.598-128.402-96-192-96z"/>
          </svg>
        </div>
        
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">产品未找到</h1>
          <p className="text-lg text-gray-600 mb-8">
            抱歉，您查找的产品不存在或已被移除。
          </p>
          <Link
            href="/products"
            className="inline-block bg-green-800 hover:bg-green-900 text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            返回产品列表
          </Link>
          
          {/* 装饰性玩具元素 - 底部装饰 */}
          <div className="mt-12 flex justify-center">
            <div className="w-16 h-16 opacity-20">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor" className="text-yellow-500">
                <path d="M320 64c0-35.3 28.7-64 64-64s64 28.7 64 64-28.7 64-64 64-64-28.7-64-64zm308.8 235.6l-136.1-21.4-63.9 119.2c-3.2 6-9.5 9.6-16.1 9.6h-.1c-6.6 0-12.9-3.7-16.1-9.7L320 226.5l-80 53.4V416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V128c0-17.7 14.3-32 32-32h176c5.5 0 10.9 1.4 15.7 4.1l120.3 80.2 59.7-30.1c10.1-5.1 22.3-3.2 30.1 4.7s10.2 19.9 5.3 30.1l-59.7 118.2 85.8 13.5c21 3.3 35.7 23.1 32.4 44.1-3.3 21.1-23.1 35.8-44.1 32.4z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  // 获取相关产品
  const relatedProducts = product.relatedProductIds
    .map(id => productsData.find(p => p.id === id))
    .filter(Boolean);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
      {/* 装饰性玩具元素 - 左上角 */}
      <div className="absolute -top-6 -left-6 w-24 h-24 opacity-15 hidden lg:block">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="text-green-800 rotate-12">
          <path d="M480 128c-8.8 0-16 7.2-16 16v80H48v-80c0-8.8-7.2-16-16-16S16 135.2 16 144v224c0 8.8 7.2 16 16 16s16-7.2 16-16v-80h416v80c0 8.8 7.2 16 16 16s16-7.2 16-16V144c0-8.8-7.2-16-16-16zM48 272V224h416v48H48zm448-176H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16z"/>
        </svg>
      </div>

      {/* 装饰性玩具元素 - 右上角 */}
      <div className="absolute top-10 right-10 w-20 h-20 opacity-10 hidden lg:block">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor" className="text-red-500 -rotate-12">
          <path d="M544 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h480c35.35 0 64-28.65 64-64V96c0-35.35-28.65-64-64-64zM144 224c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm0 96c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm96-96c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm96 0c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"/>
        </svg>
      </div>
      
      {/* 返回按钮 */}
      <div className="mb-6">
        <Link
          href="/products"
          className="inline-flex items-center text-sm text-gray-600 hover:text-green-800"
        >
          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
          返回产品列表
        </Link>
      </div>
      
      {/* 产品详情区域 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* 产品图片 */}
        <div className="relative">
          <div className="relative h-64 sm:h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-xl bg-gray-100 flex items-center justify-center">
            <span className="text-gray-500 font-medium">{product.name} 图片</span>
            {/* 注释掉 Image 组件，因为当前没有实际图片 */}
            {/* <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority
            /> */}
          </div>
          
          {/* 装饰性玩具元素 - 左下角 */}
          <div className="absolute -bottom-5 -left-5 w-16 h-16 opacity-20">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="text-yellow-500 rotate-12">
              <path d="M480 128h-32c0-17.62-14.38-32-32-32s-32 14.38-32 32h-64c0-17.62-14.38-32-32-32s-32 14.38-32 32h-64c0-17.62-14.38-32-32-32S128 110.4 128 128H96c-17.62 0-32 14.38-32 32v192c0 17.62 14.38 32 32 32h384c17.62 0 32-14.38 32-32V160C512 142.4 497.6 128 480 128zM288 232c-13.25 0-24-10.75-24-24S274.8 184 288 184s24 10.75 24 24S301.3 232 288 232zM96 192h32c0 17.62 14.38 32 32 32s32-14.38 32-32h64c0 17.62 14.38 32 32 32s32-14.38 32-32h64c0 17.62 14.38 32 32 32s32-14.38 32-32h32v32H96V192z"/>
            </svg>
          </div>
          
          {/* 装饰性玩具元素 - 右下角 */}
          <div className="absolute -bottom-5 -right-5 w-16 h-16 opacity-20">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="text-blue-500 -rotate-12">
              <path d="M112 128c0-29.5 16.2-55 40-68.9V256h48V48h48v208h48V48h48v208h48V59.1c23.8 13.9 40 39.4 40 68.9v128h48V128C480 57.3 422.7 0 352 0h-16v104c0 13.3-10.7 24-24 24h-48c-13.3 0-24-10.7-24-24V0h-16C153.3 0 96 57.3 96 128v128h-48V128h64zm352 256H48c-26.5 0-48 21.5-48 48v32c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-32c0-26.5-21.5-48-48-48z"/>
            </svg>
          </div>
          
          {/* 图片下方的小缩略图 */}
          <div className="flex justify-center mt-4 space-x-2">
            {[1, 2, 3, 4].map((_, index) => (
              <div 
                key={index}
                className="w-12 h-12 rounded-md bg-gray-200 overflow-hidden flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity border-2 border-transparent hover:border-green-500"
              >
                <span className="text-gray-400 text-xs">{index + 1}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* 产品信息 */}
        <div className="relative">
          <div className="mb-4">
            <span className="inline-block bg-green-100 text-green-800 text-sm px-2 py-1 rounded-full mr-2">
              {product.category}
            </span>
            <span className="inline-block bg-green-100 text-green-800 text-sm px-2 py-1 rounded-full">
              {product.ageRange}
            </span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
          <p className="text-xl font-semibold text-green-800 mb-4">¥{product.price}</p>
          <p className="text-gray-600 mb-6">{product.longDescription}</p>
          
          {/* 装饰性玩具元素 - 右上角 */}
          <div className="absolute top-0 right-0 w-12 h-12 opacity-10">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="text-green-800">
              <path d="M234.5 5.7c13.9-5 29.1-5 43.1 0l192 68.6C495 83.4 512 107.5 512 134.6V377.4c0 27-17 51.2-42.5 60.3l-192 68.6c-13.9 5-29.1 5-43.1 0l-192-68.6C17 428.6 0 404.5 0 377.4V134.6c0-27 17-51.2 42.5-60.3l192-68.6zM256 66L82.3 128 256 190l173.7-62L256 66zm32 368.6l160-57.1v-188l-160 57.1v188z"/>
            </svg>
          </div>
          
          {/* 产品特点 */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
              <svg className="w-5 h-5 mr-2 text-green-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
              </svg>
              产品特点
            </h2>
            <ul className="grid grid-cols-2 gap-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <svg className="w-4 h-4 mr-2 text-green-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          
          {/* 产品信息表格 */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
              <svg className="w-5 h-5 mr-2 text-green-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z" clipRule="evenodd"></path>
              </svg>
              产品信息
            </h2>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-500">材质：</span>
                <span className="text-gray-800">{product.material}</span>
              </div>
              <div>
                <span className="text-gray-500">尺寸：</span>
                <span className="text-gray-800">{product.size}</span>
              </div>
              <div>
                <span className="text-gray-500">适用年龄：</span>
                <span className="text-gray-800">{product.ageRange}</span>
              </div>
              <div>
                <span className="text-gray-500">库存状态：</span>
                <span className={product.inStock ? "text-green-600" : "text-red-600"}>
                  {product.inStock ? "有库存" : "缺货"}
                </span>
              </div>
            </div>
          </div>
          
          {/* 加入购物车 */}
          <div className="flex items-center mb-6">
            <div className="flex items-center border border-gray-300 rounded-md mr-4">
              <button
                className="px-3 py-1 text-gray-500 hover:text-gray-700 focus:outline-none"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </button>
              <span className="px-3 py-1 text-gray-800">{quantity}</span>
              <button
                className="px-3 py-1 text-gray-500 hover:text-gray-700 focus:outline-none"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
            <button
              className="bg-green-800 hover:bg-green-900 text-white font-medium py-2 px-6 rounded-lg transition-colors flex-grow md:flex-grow-0"
            >
              加入购物车
            </button>
          </div>
          
          {/* 支付方式和配送 */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
              <span className="text-gray-600">支持多种支付方式</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
              </svg>
              <span className="text-gray-600">全国快速配送</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z"></path>
              </svg>
              <span className="text-gray-600">7天无理由退换</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
              <span className="text-gray-600">品质保障</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* 相关产品 */}
      <div className="mt-16 relative">
        {/* 装饰性玩具元素 - 左侧 */}
        <div className="absolute -left-8 top-0 w-16 h-16 opacity-10 hidden lg:block">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="text-purple-500 rotate-12">
            <path d="M240 224h96c8.8 0 16-7.2 16-16v-96c0-8.8-7.2-16-16-16h-96c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16zm240 32c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16v-96c0-8.8-7.2-16-16-16h-96zM208 32C94.8 32 16 132.2 16 256s78.8 224 192 224 192-100.2 192-224S321.2 32 208 32zm0 384c-75.6 0-150.7-92.3-150.7-160S132.4 96 208 96s150.7 92.3 150.7 160S283.6 416 208 416z"/>
          </svg>
        </div>
        
        {/* 装饰性玩具元素 - 右侧 */}
        <div className="absolute -right-8 top-1/2 w-16 h-16 opacity-10 hidden lg:block">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="text-green-800 -rotate-12">
            <path d="M352 96c0 53.02-42.98 96-96 96s-96-42.98-96-96 42.98-96 96-96 96 42.98 96 96zM233.59 241.1c-59.33-36.32-155.43-46.3-203.79 49.45C13.55 339.4 0 433.2 0 433.2S176.36 350.5 256 351.8V480l256-224L256 32v119.2c-20.27 0.2-42.64 5.3-69.78 18.2-8.02 3.81-16.53 8.4-25.44 13.1-5.92 3.11-12.03 6.52-18.26 10.17-9.38 5.48-18.98 11.62-28.93 18.63z"/>
          </svg>
        </div>
        
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <svg className="w-6 h-6 mr-2 text-green-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
          </svg>
          相关产品
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedProducts.map(relatedProduct => relatedProduct && (
            <Link 
              key={relatedProduct.id} 
              href={`/products/${relatedProduct.id}`}
              className="group block overflow-hidden rounded-xl bg-white shadow-md transition-transform hover:scale-105 hover:shadow-lg"
            >
              <div className="relative h-48 w-full overflow-hidden">
                {/* 使用占位图片 */}
                <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                  <span className="text-gray-500 font-medium">{relatedProduct.name} 图片</span>
                </div>
                {/* 注释掉 Image 组件，因为当前没有实际图片 */}
                {/* <Image
                  src={relatedProduct.image}
                  alt={relatedProduct.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-110"
                /> */}
              </div>
              <div className="p-4">
                <div className="mb-1">
                  <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mr-1">
                    {relatedProduct.category}
                  </span>
                  <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                    {relatedProduct.ageRange}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{relatedProduct.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{relatedProduct.description}</p>
                <p className="text-green-800 font-medium">¥{relatedProduct.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      {/* 底部装饰性玩具元素 */}
      <div className="flex justify-center mt-16">
        <div className="w-20 h-20 opacity-15">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor" className="text-green-800">
            <path d="M228.5 511.8l-25-7.1c-3.2-.9-5-4.2-4.1-7.4L340.1 4.4c.9-3.2 4.2-5 7.4-4.1l25 7.1c3.2.9 5 4.2 4.1 7.4L235.9 507.6c-.9 3.2-4.3 5.1-7.4 4.2zm-75.6-125.3l18.5-20.9c1.9-2.1 1.6-5.3-.5-7.1L49.9 256l121-102.5c2.1-1.8 2.4-5 .5-7.1l-18.5-20.9c-1.8-2.1-5-2.3-7.1-.4L1.7 252.3c-2.3 2-2.3 5.5 0 7.5L145.8 387c2.1 1.8 5.3 1.6 7.1-.5zm277.3.4l144.1-127.2c2.3-2 2.3-5.5 0-7.5L430.2 125.1c-2.1-1.9-5.3-1.6-7.1.4l-18.5 20.9c-1.9 2.1-1.6 5.3.5 7.1l121 102.5-121 102.5c-2.1 1.8-2.4 5-.5 7.1l18.5 20.9c1.8 2.1 5 2.3 7.1.4z"/>
          </svg>
        </div>
      </div>
    </div>
  );
} 