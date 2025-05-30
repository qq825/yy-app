"use client";

// import { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import WishlistForm from "@/app/components/WishlistForm";

// 模拟产品数据
const productsData = [
  {
    id: 1,
    name: "彩虹积木套装",
    description: "30块彩色积木，适合3岁以上儿童",
    longDescription:
      "这套彩虹积木套装包含30块不同颜色和形状的积木，采用优质环保材料制作，安全无毒。通过拼搭积木，可以锻炼孩子的空间想象力、创造力和手眼协调能力。积木表面光滑，棱角圆润，专为幼儿设计，确保使用安全。",

    category: "积木",
    ageRange: "3-6岁",
    material: "优质实木",
    size: "中号",
    features: ["环保材质", "安全圆角", "色彩鲜艳", "多种形状"],
    relatedProductIds: [7, 2, 6],
    inStock: true,
    image: "/images/16.jpg",
  },
  {
    id: 2,
    name: "智能机器人",
    description: "可编程智能机器人，培养编程思维",
    longDescription:
      "这款智能机器人采用先进的编程理念设计，支持图形化编程和简单的代码指令。孩子可以通过编程控制机器人完成各种任务，培养逻辑思维和问题解决能力。机器人具有语音交互、自动避障、跟随行走等多种功能，陪伴孩子学习成长。",

    category: "电子玩具",
    ageRange: "6岁以上",
    material: "ABS塑料",
    size: "25cm高",
    features: ["图形化编程", "语音交互", "充电式", "APP控制"],
    relatedProductIds: [4, 7, 8],
    inStock: true,
    image: "/images/test003.jpg",
  },
  {
    id: 3,
    name: "毛绒恐龙",
    description: "柔软舒适的毛绒恐龙玩具",
    longDescription:
      "这款毛绒恐龙玩具采用优质超柔短毛绒面料，内部填充环保PP棉，手感柔软，触感舒适。恐龙形象生动可爱，是孩子睡前的好伙伴。产品经过严格的安全测试，适合所有年龄段的儿童。多种恐龙种类可选，收集起来更有趣。",

    category: "毛绒玩具",
    ageRange: "0-3岁",
    material: "优质短毛绒",
    size: "30cm长",
    features: ["柔软舒适", "可手洗", "安全认证", "多色可选"],
    relatedProductIds: [5, 8, 1],
    inStock: true,
    image: "/images/test002.jpg",
  },
  {
    id: 4,
    name: "遥控赛车",
    description: "高速遥控赛车，多种操控模式",
    longDescription:
      "这款遥控赛车采用高性能马达，动力强劲，最高时速可达25km/h。车身采用抗震耐摔材质，即使跌落也不易损坏。遥控器采用2.4G技术，控制距离远，反应灵敏。支持漂移、特技等多种操控模式，带来刺激的赛车体验。",

    category: "遥控玩具",
    ageRange: "6岁以上",
    material: "工程塑料",
    size: "28cm长",
    features: ["高速马达", "防震底盘", "漂移功能", "长效电池"],
    relatedProductIds: [2, 8, 7],
    inStock: true,
    image: "/images/ts-05.jpg",
  },
  {
    id: 5,
    name: "宝宝摇铃",
    description: "五彩缤纷的宝宝摇铃，刺激感官发展",
    longDescription:
      "这款宝宝摇铃设计精巧，造型可爱，摇晃时会发出悦耳的声音，能够吸引宝宝注意力。表面有多种纹理和凸起，可以锻炼宝宝的触觉能力。采用食品级材料制作，即使宝宝放入口中也安全无害。色彩鲜艳，有助于视觉发育。",

    category: "婴幼儿玩具",
    ageRange: "0-1岁",
    material: "食品级塑料",
    size: "小巧便携",
    features: ["无毒材质", "多种纹理", "悦耳声音", "色彩鲜艳"],
    relatedProductIds: [3, 6, 1],
    inStock: true,
    image: "/images/ts-03.jpg",
  },
  {
    id: 6,
    name: "水彩笔套装",
    description: "12色可水洗水彩笔，安全无毒",
    longDescription:
      "这套水彩笔含12种鲜艳颜色，采用水溶性颜料，容易清洗，不用担心弄脏衣物和家具。笔尖韧性好，不易变形，书写流畅。采用环保材料制作，通过安全认证，不含有害物质。适合儿童绘画和涂色，激发创造力和想象力。",

    category: "绘画玩具",
    ageRange: "3-6岁",
    material: "环保塑料",
    size: "标准尺寸",
    features: ["可水洗", "不易干", "环保无毒", "色彩鲜艳"],
    relatedProductIds: [7, 1, 3],
    inStock: true,
    image: "/images/test002.jpg",
  },
  {
    id: 7,
    name: "拼图游戏",
    description: "100片趣味拼图，锻炼观察力和专注力",
    longDescription:
      "这款拼图游戏包含100片精美图案的拼图，画面生动有趣。通过拼图游戏，可以锻炼孩子的观察力、专注力和耐心。拼图边缘平滑，不伤手，采用优质硬纸板制作，不易变形。拼图尺寸适中，便于收纳和保存。",

    category: "益智玩具",
    ageRange: "3-6岁",
    material: "硬纸板",
    size: "完成尺寸38x26cm",
    features: ["精美图案", "边缘平滑", "不易变形", "锻炼专注力"],
    relatedProductIds: [1, 6, 2],
    inStock: true,
    image: "/images/ts-01.jpg",
  },
  {
    id: 8,
    name: "沙滩玩具套装",
    description: "沙滩桶、铲子、模具等10件套",
    longDescription:
      "这套沙滩玩具包含沙滩桶、铲子、耙子、模具等10件工具，满足孩子在沙滩或沙池中的各种玩耍需求。采用环保塑料制作，色彩鲜艳，耐用防摔。工具手柄设计符合人体工学，适合儿童抓握。轻便易携带，是夏日户外玩耍的必备玩具。",

    category: "户外玩具",
    ageRange: "3-6岁",
    material: "环保塑料",
    size: "便携套装",
    features: ["10件套", "便携收纳", "环保材质", "色彩鲜艳"],
    relatedProductIds: [4, 3, 7],
    inStock: true,
    image: "/images/ts-03.jpg",
  },
];

export default function ProductDetailPage() {
  const params = useParams();
  const productId = Number(params.id);

  const product = productsData.find((p) => p.id === productId);
  // const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        {/* 装饰性玩具元素 - 404页面装饰 */}
        <div className="absolute -top-6 -left-6 w-24 h-24 opacity-15 hidden lg:block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
            fill="currentColor"
            className="text-red-500 rotate-12"
          >
            <path d="M544 192h-16L419.22 56.02A64.025 64.025 0 0 0 369.24 32H155.33c-26.17 0-49.7 15.93-59.42 40.23L48 194.26C20.44 201.4 0 226.21 0 256v112c0 8.84 7.16 16 16 16h48c0 53.02 42.98 96 96 96s96-42.98 96-96h128c0 53.02 42.98 96 96 96s96-42.98 96-96h48c8.84 0 16-7.16 16-16v-80c0-53.02-42.98-96-96-96zM160 432c-26.47 0-48-21.53-48-48s21.53-48 48-48 48 21.53 48 48-21.53 48-48 48zm72-240H116.93l38.4-96H232v96zm48 0V96h89.24l76.8 96H280zm200 240c-26.47 0-48-21.53-48-48s21.53-48 48-48 48 21.53 48 48-21.53 48-48 48z" />
          </svg>
        </div>
        <div className="absolute top-10 right-10 w-20 h-20 opacity-10 hidden lg:block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill="currentColor"
            className="text-green-800 -rotate-12"
          >
            <path d="M256 256c52.805 0 96-43.201 96-96s-43.195-96-96-96-96 43.201-96 96 43.195 96 96 96zm0 48c-63.598 0-192 32.402-192 96v48h384v-48c0-63.598-128.402-96-192-96z" />
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                fill="currentColor"
                className="text-yellow-500"
              >
                <path d="M320 64c0-35.3 28.7-64 64-64s64 28.7 64 64-28.7 64-64 64-64-28.7-64-64zm308.8 235.6l-136.1-21.4-63.9 119.2c-3.2 6-9.5 9.6-16.1 9.6h-.1c-6.6 0-12.9-3.7-16.1-9.7L320 226.5l-80 53.4V416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V128c0-17.7 14.3-32 32-32h176c5.5 0 10.9 1.4 15.7 4.1l120.3 80.2 59.7-30.1c10.1-5.1 22.3-3.2 30.1 4.7s10.2 19.9 5.3 30.1l-59.7 118.2 85.8 13.5c21 3.3 35.7 23.1 32.4 44.1-3.3 21.1-23.1 35.8-44.1 32.4z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 获取相关产品
  const relatedProducts = product.relatedProductIds
    .map((id) => productsData.find((p) => p.id === id))
    .filter(Boolean);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 返回按钮 */}
        <div className="mb-8">
          <Link
            href="/products"
            className="inline-flex items-center text-green-800 hover:text-green-700 group"
          >
            <svg
              className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:-translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
            <span className="font-medium">返回产品列表</span>
          </Link>
        </div>

        {/* 产品简介区域 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* 产品图片 */}
          <div className="relative">
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl shadow-lg bg-white">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </div>
          </div>

          {/* 产品信息 */}
          <div className="relative bg-white rounded-2xl shadow-lg p-8">
            <div className="mb-4 space-x-2">
              <span className="inline-block bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
                {product.category}
              </span>
              <span className="inline-block bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
                {product.ageRange}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              {product.name}
            </h1>
            <p className="text-gray-600 mb-8 leading-relaxed">
              {product.longDescription}
            </p>

            {/* 产品特点 */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-green-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                </svg>
                产品特点
              </h2>
              <ul className="grid grid-cols-2 gap-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <svg
                      className="w-4 h-4 mr-2 text-green-600 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 加入心愿单按钮 */}
            <WishlistForm product={product} />
          </div>
        </div>

        {/* 产品详情 */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <svg
              className="w-6 h-6 mr-2 text-green-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              ></path>
            </svg>
            产品详情
          </h2>
          <div className="w-full">
            <div className="bg-white rounded-xl shadow-lg p-6 text-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                产品规格
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="font-medium text-gray-700">材质：</span>
                  <span className="text-gray-600">{product.material}</span>
                </li>
                <li className="flex items-center">
                  <span className="font-medium text-gray-700">尺寸：</span>
                  <span className="text-gray-600">{product.size}</span>
                </li>
                <li className="flex items-center">
                  <span className="font-medium text-gray-700">适用年龄：</span>
                  <span className="text-gray-600">{product.ageRange}</span>
                </li>
              </ul>
              <p className="text-gray-600 mt-4">
                商品介绍后台录入内容
              </p>
              <p className="text-gray-600 mt-4 line-clamp-3">
                用独立的思考，思辨的精神，看待教育的观点，并为之努力。
                我们寻找的，也许是适宜的平衡点，也许是还在探索的，对儿童的
                世界深怀敬畏之心…
              </p>
              <p className="text-gray-600 mt-4 leading-relaxed">
                小林：
                我们以激发幼儿潜力为目标，不违背幼儿天性。将生活与自然元素融入
                产品，以期幼儿在游戏中获得全面的发展与成长。 小群：
                初心如磐，行稳志远，不断精进，进而有为。发展自身的同时，还将投
                入到社会的奉献中去… 庆庆：
              以思辨的精神与态度看待教育的观点”作为我们成长学习的理念，也是
              我们设计、研发产品时追求专业与平衡的灯塔。 虹虹：
              我儿子没入学之前就开始玩公司的玩具，我们玩具给了我儿子探索的动
              力，动手的能力，思维的想象，扩大了视野，增长了见识，对他以后的
              发展给予了很大的帮助。 大伟：
              启智阶段是教育的起点，高品质的玩教具可以提供一个良好的思维环境
              和学习环境，为后期的教育阶段打下优秀的基础。
              </p>
            </div>
          </div>
        </div>

        {/* 相关产品 */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <svg
              className="w-6 h-6 mr-2 text-green-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
            </svg>
            相关产品
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map(
              (relatedProduct) =>
                relatedProduct && (
                  <Link
                    key={relatedProduct.id}
                    href={`/products/${relatedProduct.id}`}
                    className="group bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-6">
                      <div className="mb-2">
                        <span className="inline-block bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
                          {relatedProduct.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-800 transition-colors">
                        {relatedProduct.name}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {relatedProduct.description}
                      </p>
                    </div>
                  </Link>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
