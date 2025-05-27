import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#005550] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 公司简介 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">YYBB</h3>
            <p className="text-gray-300 text-sm">
              YYBB是一家专业的玩具销售企业，致力于为孩子们提供安全、有趣、教育性的玩具产品。
            </p>
          </div>
          
          {/* 快速链接 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  首页
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-white">
                  产品中心
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white">
                  关于我们
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white">
                  联系我们
                </Link>
              </li>
            </ul>
          </div>
          
          {/* 联系方式 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">联系我们</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-start">
                <svg className="h-5 w-5 mr-2 text-[#00776f]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>上海市虹桥路100号</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 mr-2 text-[#00776f]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>contact@yybb.com</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 mr-2 text-[#00776f]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>188 1234 5678</span>
              </li>
            </ul>
          </div>
          
          {/* 营业时间 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">工作时间</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>周一至周五: 9:00 - 18:00</li>
              <li>周六至周日: 10:00 - 17:00</li>
              <li>法定节假日: 10:00 - 16:00</li>
            </ul>
          </div>
        </div>
        
        {/* 版权信息 */}
        <div className="border-t border-[#004540] mt-10 pt-6 text-center text-sm text-gray-300">
          <p>© {new Date().getFullYear()} YYBB. 保留所有权利.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 