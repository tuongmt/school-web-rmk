import { Analytics_BarChart } from "@/components/analytics/barchart";
import { Analytics_PieChart } from "@/components/analytics/piechart";

import React from "react";

export default function Dashboard() {
  return (
    <>
      <div className="  min-h-screen p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="shadow-md rounded-lg p-6">
            <h3 className="text-sm font-medium text-gray-500">
              Thông báo từ sinh viên
            </h3>
            <p className="text-2xl font-bold">20 Thông báo</p>
            <a href="#" className="text-blue-500 hover:underline text-sm">
              Xem chi tiết
            </a>
          </div>
          <div className="shadow-md rounded-lg p-6">
            <h3 className="text-sm font-medium text-gray-500">
              Lượng truy cập
            </h3>
            <p className="text-2xl font-bold">5,634 Lượt truy cập</p>
            <a href="#" className="text-blue-500 hover:underline text-sm">
              Xem chi tiết
            </a>
          </div>
          <div className="shadow-md rounded-lg p-6">
            <h3 className="text-sm font-medium text-gray-500">
              Lượng đăng ký xét tuyển
            </h3>
            <p className="text-2xl font-bold">100 Lượt đăng kí</p>
            <a href="#" className="text-blue-500 hover:underline text-sm">
              Xử lý ngay
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="md:col-span-2 shadow-md rounded-lg p-6">
            <h3 className="text-sm font-medium text-gray-500">Thống kê</h3>
            <Analytics_BarChart />
          </div>
          <div className="shadow-md rounded-lg p-6">
            <h3 className="text-sm font-medium text-gray-500">Báo cáo</h3>
            <Analytics_PieChart />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="shadow-md rounded-lg p-6 order-1">
            <h3 className="text-lg font-bold mb-4">Tin tức mới</h3>
            <div className="mb-2 p-4 bg-blue-100 rounded-lg flex justify-between items-center text-black">
              Tin tức 1
              <a href="#" className="text-blue-500 hover:underline">
                Chi tiết
              </a>
            </div>

            <div className="mb-2 p-4 bg-blue-100 rounded-lg flex justify-between items-center text-black">
              Tin tức 2
              <a href="#" className="text-blue-500 hover:underline">
                Chi tiết
              </a>
            </div>
            <div className="mb-2 p-4 bg-blue-100 rounded-lg flex justify-between items-center text-black">
              Tin tức 3
              <a href="#" className="text-blue-500 hover:underline">
                Chi tiết
              </a>
            </div>
          </div>
          <div className="shadow-md rounded-lg p-6 order-2">
            <h3 className="text-lg font-bold mb-4">Thông báo cho sinh viên</h3>
            <div className="mb-2 p-4 bg-green-100 rounded-lg flex justify-between items-center text-black">
              Thông báo 1
              <a href="#" className="text-blue-500 hover:underline">
                Xem chi tiết
              </a>
            </div>
            <div className="mb-2 p-4 bg-green-100 rounded-lg flex justify-between items-center text-black">
              Thông báo 2
              <a href="#" className="text-blue-500 hover:underline">
                Xem chi tiết
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
