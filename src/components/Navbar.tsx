'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-green-800">Logo</span>
            </Link>
          </div>
          
          {/* 桌面端导航菜单 */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-green-800 px-3 py-2 rounded-md font-medium">
              首页
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-green-800 px-3 py-2 rounded-md font-medium">
              产品中心
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-green-800 px-3 py-2 rounded-md font-medium">
              关于我们
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-green-800 px-3 py-2 rounded-md font-medium">
              联系方式
            </Link>
          </div>
          
          {/* 移动端菜单按钮 */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-800 focus:outline-none"
            >
              <svg
                className={`h-6 w-6 ${isMenuOpen ? 'hidden' : 'block'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`h-6 w-6 ${isMenuOpen ? 'block' : 'hidden'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* 移动端菜单 */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          <Link href="/" className="block text-gray-700 hover:text-green-800 px-3 py-2 rounded-md font-medium">
            首页
          </Link>
          <Link href="/products" className="block text-gray-700 hover:text-green-800 px-3 py-2 rounded-md font-medium">
            产品中心
          </Link>
          <Link href="/about" className="block text-gray-700 hover:text-green-800 px-3 py-2 rounded-md font-medium">
            关于我们
          </Link>
          <Link href="/contact" className="block text-gray-700 hover:text-green-800 px-3 py-2 rounded-md font-medium">
            联系方式
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 