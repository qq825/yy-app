import { useState } from "react";
import Image from "next/image";
interface WishlistFormProps {
  product?: {
    name: string;
  };
}

export default function WishlistForm({ product }: WishlistFormProps) {
  const [isWishlistFormOpen, setIsWishlistFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    contact: "",
  });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("提交的数据:", { ...formData, productName: product?.name });
    setIsWishlistFormOpen(false);
    setFormData({ name: "", company: "", contact: "" });
    alert("已成功添加到心愿单！");
  };
  return (
    <div>
      <button
        onClick={() => setIsWishlistFormOpen(true)}
        className="w-full bg-green-800 cursor-pointer text-white font-medium transition-colors flex items-center justify-center rounded-full p-4 shadow-lg text-white"
      >
        <svg
          className="w-5 h-5 text-white"
          id="katman_1"
          viewBox="0 0 236 216.39"
          fill="currentColor"
        >
          <g>
            <path
              fill="currentColor"
              d="M230.3,43.4c-4.9-5.9-12.5-9.3-20.8-9.3H38.1l-0.3-1.5c-1.7-9.4-4.2-16.2-7.8-21.4C25,3.9,17.4,0,8.3,0C3.7,0,0,3.7,0,8.3
		s3.7,8.3,8.3,8.3c4.7,0,10,1.5,13.2,18.9l20.8,113.7c1.2,6.4,5.4,12.2,11.8,16.4c5.8,3.7,13,5.8,20.1,5.8H209
		c4.6,0,8.3-3.7,8.3-8.3s-3.7-8.3-8.3-8.3H74.2c-8,0-14.9-4.5-15.6-8.5l-0.1-0.5h135.1c5.8,0,11.7-1.7,16.4-4.8
		c5.2-3.4,8.7-8.3,9.8-13.6l15.7-63.1l0.1-0.3v-0.3C236.9,56.4,235,48.9,230.3,43.4z M219.3,60.6l-15.7,63.1l-0.1,0.3v0.3
		c-0.3,1.8-4.3,5-9.9,5H55.5L41.1,50.7h168.4c3.4,0,6.2,1.2,8,3.3C219.1,55.8,219.7,58.1,219.3,60.6L219.3,60.6z"
            />
            <path
              fill="currentColor"
              d="M165.8,213.7c9.6,5.5,21.8,2.3,27.4-7.3c5.5-9.6,2.3-21.8-7.3-27.4l0,0c-9.6-5.5-21.8-2.3-27.4,7.3
		C152.9,195.9,156.2,208.1,165.8,213.7L165.8,213.7z"
            />
            <path
              fill="currentColor"
              d="M81.4,213.7c9.6,5.5,21.8,2.3,27.4-7.3c5.5-9.6,2.3-21.8-7.3-27.4l0,0c-9.6-5.5-21.8-2.3-27.4,7.3S71.8,208.1,81.4,213.7
		L81.4,213.7z"
            />
          </g>
        </svg>
      </button>
      {isWishlistFormOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900">添加到心愿单</h3>
              <button
                onClick={() => setIsWishlistFormOpen(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  商品名称
                </label>
                <input
                  type="text"
                  value={product?.name}
                  disabled
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  您的姓名 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="请输入您的姓名"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  单位名称 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="请输入单位名称"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  联系方式 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.contact}
                  onChange={(e) =>
                    setFormData({ ...formData, contact: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="请输入手机号或其他联系方式"
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setIsWishlistFormOpen(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-700 font-medium"
                >
                  取消
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-800 hover:bg-green-900 text-white font-medium rounded-md"
                >
                  确认提交
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
