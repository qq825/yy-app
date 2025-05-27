import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* 页面标题 */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">关于我们</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          了解优优玩具的品牌故事和我们的使命愿景。
        </p>
      </div>

      {/* 公司简介 */}
      <section className="mb-20">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2">
            <div className="relative h-64 sm:h-80 w-full rounded-xl overflow-hidden bg-[#e6efee] flex items-center justify-center">
              <span className="text-[#005550] font-medium">公司团队图片</span>
              <Image
                src="/images/about-company.jpg"
                alt="优优玩具团队"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">公司简介</h2>
            <p className="text-gray-600 mb-4">
              优优玩具成立于2010年，是一家专注于儿童玩具研发、生产和销售的企业。多年来，我们坚持&quot;安全、创意、教育&quot;的产品理念，致力于为0-12岁儿童提供优质、有趣、富有教育意义的玩具产品。
            </p>
            <p className="text-gray-600 mb-4">
              公司总部位于上海，在北京、广州和深圳设有分公司，产品销售网络覆盖全国各大中城市。我们与多家知名连锁玩具店、百货商场和电商平台建立了长期稳定的合作关系，产品深受消费者喜爱。
            </p>
            <p className="text-gray-600">
              优优玩具拥有一支专业的研发团队，持续关注儿童发展需求和玩具行业新趋势，不断推出创新产品，为孩子们的成长提供助力。
            </p>
          </div>
        </div>
      </section>

      {/* 我们的使命和愿景 */}
      <section className="mb-20 bg-[#f0f5f4] rounded-xl p-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">我们的使命和愿景</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-[#e6efee] rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-[#005550]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">我们的使命</h3>
            <p className="text-gray-600">
              通过提供安全、有趣、富有教育意义的玩具产品，激发孩子的想象力和创造力，促进其认知、情感和社交能力的全面发展，让每个孩子都能享受快乐童年，健康成长。
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-[#e6efee] rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-[#005550]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">我们的愿景</h3>
            <p className="text-gray-600">
              成为中国儿童玩具行业的领导品牌，以创新和品质赢得消费者的信赖，为全球儿童提供优质的玩具产品和服务，成为家长和孩子共同喜爱的玩具品牌。
            </p>
          </div>
        </div>
      </section>

      {/* 我们的价值观 */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">我们的价值观</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            这些核心价值观指导我们的每一个决策和行动。
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="w-16 h-16 bg-[#e6efee] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-[#005550]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">安全第一</h3>
            <p className="text-gray-600">
              儿童安全是我们的首要考虑，所有产品严格符合国际安全标准。
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="w-16 h-16 bg-[#e6efee] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-[#005550]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">快乐成长</h3>
            <p className="text-gray-600">
              我们相信玩乐是儿童成长的重要部分，致力于让孩子在游戏中快乐学习。
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="w-16 h-16 bg-[#e6efee] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-[#005550]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">创新精神</h3>
            <p className="text-gray-600">
              不断探索新材料、新工艺和新概念，为孩子带来创新的玩具体验。
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="w-16 h-16 bg-[#e6efee] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-[#005550]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">教育价值</h3>
            <p className="text-gray-600">
              每款产品都融入教育理念，促进孩子认知、创造力和社交能力发展。
            </p>
          </div>
        </div>
      </section>

      {/* 我们的团队 */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">我们的团队</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            优优玩具拥有一支专业、富有创造力的团队，他们是我们最宝贵的财富。
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden relative">
              <span className="absolute inset-0 flex items-center justify-center text-gray-500 font-medium">张总</span>
              {/* 当有实际图片时可以使用下面的代码 */}
              {/* <Image
                src="/images/team-1.jpg"
                alt="张总"
                fill
                style={{objectFit: "cover"}}
              /> */}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-1">张明</h3>
            <p className="text-[#005550] mb-3">创始人 & CEO</p>
            <p className="text-gray-600 text-sm">
              拥有15年玩具行业经验，致力于为中国儿童提供安全、有趣、富有教育意义的玩具产品。
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden relative">
              <span className="absolute inset-0 flex items-center justify-center text-gray-500 font-medium">李总</span>
              {/* 当有实际图片时可以使用下面的代码 */}
              {/* <Image
                src="/images/team-2.jpg"
                alt="李总"
                fill
                style={{objectFit: "cover"}}
              /> */}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-1">李芳</h3>
            <p className="text-[#005550] mb-3">产品设计总监</p>
            <p className="text-gray-600 text-sm">
              毕业于中央美术学院工业设计专业，曾获多项国际玩具设计大奖，负责公司产品创意和设计。
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden relative">
              <span className="absolute inset-0 flex items-center justify-center text-gray-500 font-medium">王总</span>
              {/* 当有实际图片时可以使用下面的代码 */}
              {/* <Image
                src="/images/team-3.jpg"
                alt="王总"
                fill
                style={{objectFit: "cover"}}
              /> */}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-1">王强</h3>
            <p className="text-[#005550] mb-3">市场营销总监</p>
            <p className="text-gray-600 text-sm">
              拥有丰富的市场营销经验，负责公司品牌推广和销售渠道拓展，带领团队实现销售业绩连年增长。
            </p>
          </div>
        </div>
      </section>
    </div>
  );
} 