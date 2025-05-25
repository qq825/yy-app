// import Image from "next/image";
import Link from "next/link";
import FeaturedProducts from "@/components/FeaturedProducts";
import ProductCategories from "@/components/ProductCategories";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* 英雄区域 */}
      <section className="relative bg-green-50 overflow-hidden">
        {/* 装饰性玩具元素 - 左上角 */}
        <div className="absolute -top-6 -left-6 w-24 h-24 rotate-12 opacity-20">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="text-green-800">
            <path d="M256 32C132.8 32 32 132.8 32 256s100.8 224 224 224 224-100.8 224-224S379.2 32 256 32zm0 400c-97 0-176-79-176-176S159 80 256 80s176 79 176 176-79 176-176 176z"/>
            <path d="M363.5 256c0 59.4-48.1 107.5-107.5 107.5S148.5 315.4 148.5 256 196.6 148.5 256 148.5 363.5 196.6 363.5 256z"/>
          </svg>
        </div>

        {/* 装饰性玩具元素 - 右上角 */}
        <div className="absolute top-10 right-10 w-16 h-16 rotate-45 opacity-10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="text-green-800">
            <path d="M453.1 120l-58.5-58.5c-12-12-28.3-18.7-45.3-18.7H162.7c-17 0-33.3 6.7-45.3 18.7L58.9 120c-25 25-25 65.5 0 90.5l58.5 58.5V388c0 48.6 39.4 88 88 88h160c48.6 0 88-39.4 88-88V269l58.5-58.5c25-25 25-65.5 0-90.5zm-41.4 49.1l-58.5 58.5v160c0 13.3-10.7 24-24 24h-160c-13.3 0-24-10.7-24-24v-160l-58.5-58.5c-6-6-6-15.8 0-21.8l58.5-58.5c3-3 7.1-4.7 11.3-4.7h186.3c4.3 0 8.3 1.7 11.3 4.7l58.5 58.5c6 6 6 15.8 0 21.8z"/>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col md:flex-row items-center relative">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              为孩子打造欢乐童年
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              优优玩具提供各类高品质、安全、有趣的玩具产品，激发孩子的想象力和创造力，陪伴孩子健康成长。
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/products" 
                className="bg-green-800 hover:bg-green-900 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                浏览产品
              </Link>
              <Link 
                href="/about" 
                className="bg-white hover:bg-gray-100 text-green-800 font-medium py-3 px-6 rounded-lg border border-green-800 transition-colors"
              >
                了解我们
              </Link>
            </div>

            {/* 装饰性玩具元素 - 气球 */}
            <div className="absolute -bottom-10 left-20 w-16 h-16 animate-bounce opacity-20">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="text-red-500">
                <path d="M256 56C176.7 56 112 120.7 112 200c0 72.2 50.7 132.7 118.4 147.9l3.7 11.2L128 400l26.7 26.7 64-64 32 96h32l32-96 64 64L380 400l-106.1-40.9 3.7-11.2C345.3 332.7 396 272.2 396 200c0-79.3-64.7-144-144-144z"/>
              </svg>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative">
            <div className="relative h-64 sm:h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-xl bg-green-100 flex items-center justify-center">
              <span className="text-green-700 font-medium text-xl">儿童玩具展示图片</span>
              
              {/* 装饰性玩具元素 - 积木 */}
              <div className="absolute -bottom-5 -right-5 w-20 h-20 rotate-12 opacity-30">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="text-yellow-500">
                  <path d="M480 32H32C14.3 32 0 46.3 0 64v384c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32zm-32 384H64V96h384v320z"/>
                </svg>
              </div>
              
              {/* 装饰性玩具元素 - 玩具车 */}
              <div className="absolute top-5 -left-5 w-16 h-16 opacity-30">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor" className="text-blue-500">
                  <path d="M544 192h-16L419.22 56.02A64.025 64.025 0 0 0 369.24 32H155.33c-26.17 0-49.7 15.93-59.42 40.23L48 194.26C20.44 201.4 0 226.21 0 256v112c0 8.84 7.16 16 16 16h48c0 53.02 42.98 96 96 96s96-42.98 96-96h128c0 53.02 42.98 96 96 96s96-42.98 96-96h48c8.84 0 16-7.16 16-16v-80c0-53.02-42.98-96-96-96zM160 432c-26.47 0-48-21.53-48-48s21.53-48 48-48 48 21.53 48 48-21.53 48-48 48zm230.4-254.87c-8-24.75-29.77-41.13-55.69-41.13h-78.54l13.37-40.12A16.003 16.003 0 0 1 284.18 80h85.05c9.97 0 18.82 4.91 24.22 12.42L433.82 176H345.6l44.8 1.13zM480 432c-26.47 0-48-21.53-48-48s21.53-48 48-48 48 21.53 48 48-21.53 48-48 48z"/>
                </svg>
              </div>
              
              {/* 当有实际图片时可以使用下面的代码 */}
              {/* <Image
                src="/images/hero-toys.jpg"
                alt="儿童玩具展示"
                fill
                style={{objectFit: "cover"}}
                priority
              /> */}
            </div>
          </div>
        </div>
      </section>

      {/* 产品分类 */}
      <section className="py-16 bg-white relative">
        {/* 装饰性玩具元素 - 拼图 */}
        <div className="absolute top-10 left-10 w-20 h-20 opacity-10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="text-green-800">
            <path d="M451.9 142.5l-46.5-46.5c-8-8-20.9-8-28.9 0L306.7 166c-11.3-5.9-24.1-9-37.7-9-46.1 0-83.4 37.4-83.4 83.4 0 12.9 2.9 25.1 8.1 36-8.5 9.4-16.3 17.3-23.5 24.5-5.4 5.4-14.4 5.4-19.8 0L32 182.7c-8-8-8-20.9 0-28.9l46.5-46.5c8-8 20.9-8 28.9 0l69.8 69.8c11.3-5.9 24.1-9 37.7-9 46.1 0 83.4 37.4 83.4 83.4 0 12.9-2.9 25.1-8.1 36 8.5 9.4 16.3 17.3 23.5 24.5 5.4 5.4 14.4 5.4 19.8 0L452 182.7c8-8 8-20.9 0-28.9l-69.8-69.8c11.3-5.9 24.1-9 37.7-9 5.5 0 10 4.5 10 10s-4.5 10-10 10c-30.3 0-54.9 24.6-54.9 54.9 0 5.5-4.5 10-10 10s-10-4.5-10-10c0-30.3-24.6-54.9-54.9-54.9-5.5 0-10-4.5-10-10s4.5-10 10-10c13.6 0 26.3 3.1 37.7 9l35.7-35.7c-1.9-1.9-1.9-5.1 0-7.1 1.9-1.9 5.1-1.9 7.1 0l30.6 30.6c1.9 1.9 1.9 5.1 0 7.1l-30.6 30.6c-1.9 1.9-5.1 1.9-7.1 0-1.9-1.9-1.9-5.1 0-7.1L451.9 142.5z"/>
          </svg>
        </div>

        {/* 装饰性玩具元素 - 玩具熊 */}
        <div className="absolute bottom-10 right-10 w-24 h-24 opacity-10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor" className="text-green-800">
            <path d="M464 144c-13.3 0-26.1 2.5-37.9 7.1C415.2 84.6 358.8 32 288 32c-70.8 0-127.2 52.6-138.1 119.1C138.1 146.5 125.3 144 112 144c-61.9 0-112 50.1-112 112s50.1 112 112 112h16v50.2c18.8 14.8 40.4 25.6 64 32V400h16c22.1 0 40-17.9 40-40v-24h128v24c0 22.1 17.9 40 40 40h16v50.2c23.6-6.4 45.2-17.3 64-32V368h16c61.9 0 112-50.1 112-112s-50.1-112-112-112zm-80 256h-16v-24c0-22.1-17.9-40-40-40H248c-22.1 0-40 17.9-40 40v24h-16c-39.7 0-72-32.3-72-72V192h13.9C166.7 232 222.2 256 288 256s121.3-24 140.1-64H432v136c0 39.7-32.3 72-72 72zM288 64c42 0 78.7 21.9 100.7 54.7-20.6 12.3-36.8 31.5-45.8 55.2-15.5 6-32.3 9.1-49.9 9.1s-34.4-3.1-49.9-9.1c-9.1-23.7-25.3-42.9-45.8-55.2C219.3 85.9 246 64 288 64zM144 144c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16zm288 0c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16z"/>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 relative">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">探索产品分类</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              我们提供多种类型的玩具产品，满足不同年龄段孩子的需求和兴趣。
            </p>
            
            {/* 装饰性玩具元素 - 标题装饰 */}
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-24 h-6 opacity-20">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="text-green-800">
                <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200z"/>
                <path d="M256 288c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32z"/>
                <path d="M256 128c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm0 192c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32z"/>
              </svg>
            </div>
          </div>
          <ProductCategories />
          <div className="text-center mt-10">
            <Link
              href="/products"
              className="inline-block bg-green-800 hover:bg-green-900 text-white font-medium py-3 px-6 rounded-lg transition-colors"
            >
              查看全部分类
            </Link>
          </div>
        </div>
      </section>

      {/* 特色产品 */}
      <section className="py-16 bg-gray-50 relative">
        {/* 装饰性玩具元素 - 建筑块 */}
        <div className="absolute top-10 right-20 w-16 h-16 opacity-10 rotate-12">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="text-yellow-600">
            <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-32 252c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92H92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"/>
          </svg>
        </div>

        {/* 装饰性玩具元素 - 旋转木马 */}
        <div className="absolute bottom-10 left-10 w-20 h-20 opacity-10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor" className="text-red-500">
            <path d="M288 0c-11.7 0-21.3 9.6-21.3 21.3v32h-69.3c-11.7 0-21.3 9.6-21.3 21.3s9.6 21.3 21.3 21.3H416c11.7 0 21.3-9.6 21.3-21.3s-9.6-21.3-21.3-21.3h-69.3v-32C346.7 9.6 337.1 0 325.3 0H288zm85.3 128H202.7c-11.7 0-21.3 9.6-21.3 21.3 0 38.6 16.9 72.9 43.7 96H164c-19.1 0-32 18.9-32 32v64c0 17.7 14.3 32 32 32h248c17.7 0 32-14.3 32-32v-64c0-13.1-12.9-32-32-32h-61.1c26.8-23.1 43.7-57.4 43.7-96 0-11.7-9.6-21.3-21.3-21.3zM160 352h256v32H160v-32z"/>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 relative">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">特色产品</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              精选优质玩具产品，让孩子享受快乐的同时，促进能力发展。
            </p>
            
            {/* 装饰性玩具元素 - 标题装饰 */}
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-24 h-6 opacity-20">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor" className="text-green-800">
                <path d="M488 312.7V456c0 13.3-10.7 24-24 24H348c-6.6 0-12-5.4-12-12V356c0-6.6-5.4-12-12-12h-72c-6.6 0-12 5.4-12 12v112c0 6.6-5.4 12-12 12H112c-13.3 0-24-10.7-24-24V312.7c0-3.6 1.6-7 4.4-9.3l188-154.8c4.4-3.6 10.8-3.6 15.3 0l188 154.8c2.7 2.3 4.3 5.7 4.3 9.3zm83.6-60.9L488 182.9V44.4c0-6.6-5.4-12-12-12h-56c-6.6 0-12 5.4-12 12V117l-89.5-73.7c-17.7-14.6-43.3-14.6-61 0L4.4 251.8c-5.1 4.2-5.8 11.8-1.6 16.9l25.5 31c4.2 5.1 11.8 5.8 16.9 1.6l235.2-193.7c4.4-3.6 10.8-3.6 15.3 0l235.2 193.7c5.1 4.2 12.7 3.5 16.9-1.6l25.5-31c4.2-5.2 3.4-12.7-1.7-16.9z"/>
              </svg>
            </div>
          </div>
          <FeaturedProducts />
          <div className="text-center mt-10">
            <Link
              href="/products"
              className="inline-block bg-green-800 hover:bg-green-900 text-white font-medium py-3 px-6 rounded-lg transition-colors"
            >
              查看更多产品
            </Link>
          </div>
        </div>
      </section>

      {/* 客户评价 */}
      <section className="py-16 bg-white relative">
        {/* 装饰性玩具元素 - 玩具小车 */}
        <div className="absolute top-20 left-10 w-16 h-16 opacity-10 transform -rotate-12">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor" className="text-blue-500">
            <path d="M544 192h-16L419.22 56.02A64.025 64.025 0 0 0 369.24 32H155.33c-26.17 0-49.7 15.93-59.42 40.23L48 194.26C20.44 201.4 0 226.21 0 256v112c0 8.84 7.16 16 16 16h48c0 53.02 42.98 96 96 96s96-42.98 96-96h128c0 53.02 42.98 96 96 96s96-42.98 96-96h48c8.84 0 16-7.16 16-16v-80c0-53.02-42.98-96-96-96zM160 432c-26.47 0-48-21.53-48-48s21.53-48 48-48 48 21.53 48 48-21.53 48-48 48zm230.4-254.87c-8-24.75-29.77-41.13-55.69-41.13h-78.54l13.37-40.12A16.003 16.003 0 0 1 284.18 80h85.05c9.97 0 18.82 4.91 24.22 12.42L433.82 176H345.6l44.8 1.13zM480 432c-26.47 0-48-21.53-48-48s21.53-48 48-48 48 21.53 48 48-21.53 48-48 48z"/>
          </svg>
        </div>

        {/* 装饰性玩具元素 - 星星 */}
        <div className="absolute bottom-10 right-10 w-20 h-20 opacity-10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor" className="text-yellow-500">
            <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 relative">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">客户评价</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              听听我们的客户怎么说，他们的孩子如何喜欢我们的产品。
            </p>
            
            {/* 装饰性玩具元素 - 标题装饰 */}
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-20 h-6 opacity-20">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="text-green-800">
                <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"/>
              </svg>
            </div>
          </div>
          <Testimonials />
        </div>
      </section>
      
      {/* 为什么选择我们 */}
      <section className="py-16 bg-green-50 relative">
        {/* 装饰性玩具元素 - 风车 */}
        <div className="absolute top-10 right-10 w-20 h-20 opacity-10 animate-spin" style={{animationDuration: '15s'}}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="text-green-800">
            <path d="M288 167.2v-28.1c-28.2-36.3-47.1-79.3-54.1-125.2-2.1-13.5-19-18.8-27.8-8.3-21.1 24.9-37.7 54.1-48.9 86.5 34.2 38.3 80 64.5 130.8 75.1zM400 64c-44.2 0-80 35.9-80 80.1v59.4C215.6 197.3 127 133 87 41.8c-5.5-12.5-23.2-13.2-29-.9C41.4 76 32 115.2 32 156.6c0 70.8 34.1 136.9 85.1 185.9 13.2 12.7 26.1 23.2 38.9 32.8l-143.9 36C1.4 414-3.4 426.4 2.6 435.7 20 462.6 63 508.2 155.8 512c8 .3 16-2.6 22.1-7.9l65.2-56.1H320c88.4 0 160-71.5 160-159.9V128l32-64H400zm0 96.1c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16z"/>
          </svg>
        </div>

        {/* 装饰性玩具元素 - 积木堆 */}
        <div className="absolute bottom-10 left-10 w-24 h-24 opacity-10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="text-purple-500">
            <path d="M240 232c0 13.3-10.7 24-24 24s-24-10.7-24-24 10.7-24 24-24 24 10.7 24 24 24zm-69.7 140h75.2c7.3 0 13.4-5.3 14.7-12.5l11.1-66.5c2.8-17-12.9-31-29.9-31h-72.1c-17 0-32.8 14.1-29.9 31l11.2 66.5c1.3 7.2 7.4 12.5 14.7 12.5zM350.9 66.6c11.3 11.3 11.3 29.7 0 41l-60.4 60.4c-10.8 10.8-28.4 11.4-39.9 1.4-10.9-9.4-21.1-8.2-31.5 2.3-11.3 11.3-29.7 11.3-41 0L118.7 112 76.9 70.3c-5.4-5.4-8.5-12.7-8.9-20.3-.3-7.7 2.2-15.3 7.2-21L96.4 4c1.4-1.5 2.9-2.9 4.6-4H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V167c-1.1 1.7-2.5 3.2-4 4.6l-25 24.9c-5.7 5-13.3 7.6-21 7.2-7.6-.4-14.9-3.5-20.3-8.9L271.9 152l-59.4-59.4c-11.3-11.3-11.3-29.7 0-41 10.5-10.5 11.7-20.7 2.3-31.5-10.1-11.5-9.4-29.1 1.4-39.9l60.4-60.4c11.3-11.3 29.7-11.3 41 0 10.8 10.8 28.4 11.4 39.9 1.4C362.5 51.6 373.2 44.3 386 44.3V24c0-13.3-10.7-24-24-24h-77.1c1.7 1.1 3.2 2.5 4.6 4l25 24.9c5.7 5 8.5 12.3 8.1 19.8-.5 7.5-4 14.6-9.7 19.4z"/>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 relative">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">为什么选择优优玩具</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              我们致力于提供高品质、安全、有教育意义的玩具产品。
            </p>
            
            {/* 装饰性玩具元素 - 标题装饰 */}
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-24 h-6 opacity-20">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="text-green-800">
                <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"/>
              </svg>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md relative">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">安全可靠</h3>
              <p className="text-gray-600">
                所有产品均符合国际安全标准，使用环保材料，确保孩子使用安全。
              </p>

              {/* 装饰性小元素 */}
              <div className="absolute top-2 right-2 w-8 h-8 opacity-10">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="text-green-800">
                  <path d="M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zm-47.2 114.2l-184 184c-6.2 6.2-16.4 6.2-22.6 0l-104-104c-6.2-6.2-6.2-16.4 0-22.6l22.6-22.6c6.2-6.2 16.4-6.2 22.6 0l70.1 70.1 150.1-150.1c6.2-6.2 16.4-6.2 22.6 0l22.6 22.6c6.3 6.3 6.3 16.4 0 22.6z"/>
                </svg>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md relative">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">教育价值</h3>
              <p className="text-gray-600">
                精心设计的玩具产品，不仅好玩，还能促进孩子的认知、创造力和社交能力发展。
              </p>

              {/* 装饰性小元素 */}
              <div className="absolute top-2 right-2 w-8 h-8 opacity-10">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor" className="text-green-800">
                  <path d="M320 96c26.5 0 48-21.5 48-48S346.5 0 320 0s-48 21.5-48 48 21.5 48 48 48zm125.7 160.2l-54.4-25.7c-9.7-4.6-20.1-7-30.7-7h-42.4l-57.4 32.8c-19.6 11.2-29.4 33.7-25 55.2l22.9 112.1c4.9 23.8 22.2 43.3 45.1 51.5l50.2 18.2c5.1 1.9 10.6 2.8 16.2 2.8 7.8 0 15.5-1.8 22.4-5.2L487 334.2c16.7-8.4 29.8-22.5 36.7-39.8l18.6-46.6c5.9-14.8 2.9-31.7-7.8-43.6s-26.9-15.7-41.9-9.8l-46.6 18.6zm-128-16.2h-25.6c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64h25.6V240zm32 160h-32V240h32v160zM96 128c26.5 0 48-21.5 48-48S122.5 32 96 32 48 53.5 48 80s21.5 48 48 48zM48 256v-22.8C48 197.9 69.9 176 105.2 176h14.6c8.1 0 16 1.7 23.4 5L157.8 190l-18.2 10.5c-14.6 8.4-23.6 23.8-23.6 40.5v32c0 16.7 9 32.1 23.6 40.5l18.2 10.5-14.6 9c-7.4 3.3-15.3 5-23.4 5H105.2C69.9 336 48 314.1 48 278.8V256z"/>
                </svg>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md relative">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">品质保证</h3>
              <p className="text-gray-600">
                我们承诺提供高品质的产品和服务，不满意可退换，让您购买无忧。
              </p>

              {/* 装饰性小元素 */}
              <div className="absolute top-2 right-2 w-8 h-8 opacity-10">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor" className="text-green-800">
                  <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
