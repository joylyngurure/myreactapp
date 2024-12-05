import React from "react";
import { Progress } from "antd";
import { AppstoreOutlined, DollarOutlined } from "@ant-design/icons";
import { FcMoneyTransfer } from "react-icons/fc";

const DashboardContent = () => {
  return (
    <div className="w-full  h-[90%]">
      <h1 className="text-2xl font-semibold p-4">Good afternoon, Joylyn!</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <div className="flex gap-4 items-center font-bold text-lg">
            <Progress
              type="circle"
              percent={60}
              format={() => (
                <AppstoreOutlined className="text-blue-500 text-sm" />
              )}
            />
            <div className="flex flex-col">
              <span className="text-sm font-medium text-gray-600">
                Number of Assets
              </span>
              <span className="text-xl font-semibold text-black">66</span>
            </div>
          </div>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md">
          <div className="flex gap-4 items-center font-bold text-lg">
            <Progress
              type="circle"
              percent={100}
              status="exception"
              format={() => (
                <DollarOutlined className="text-blue-500 text-sm" />
              )}
            />
            <div className="flex flex-col">
              <span className="text-sm font-medium text-gray-600">
                Value of Assets
              </span>
              <span className="text-xl font-semibold text-black">$200,000</span>
            </div>
          </div>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md">
          <div className="flex gap-4 items-center font-bold text-lg">
            <Progress
              type="circle"
              percent={50}
              status="exception"
              format={() => <FcMoneyTransfer className="text-blue-500 ml-10" />}
            />
            <div className="flex flex-col">
              <span className="text-sm font-medium text-gray-600">
                Purchase of Assets
              </span>
              <span className="text-xl font-semibold text-black">$18,000</span>
            </div>
          </div>
        </div>

       
      </div>
      <div className="p-4">
          <table className="w-full  bg-white shadow-md rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-blue-950 text-white">
                <th className="px-4 py-3 text-left">Asset ID</th>
                <th className="px-4 py-3 text-left">Asset Name</th>
                <th className="px-4 py-3 text-left">Category</th>
                <th className="px-4 py-3 text-left">Location</th>
                <th className="px-4 py-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-3">A001</td>
                <td className="px-4 py-3">Laptop</td>
                <td className="px-4 py-3">IT Equipment</td>
                <td className="px-4 py-3">Office A</td>
                <td className="px-4 py-3 text-green-500">In Use</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-3">A002</td>
                <td className="px-4 py-3">Printer</td>
                <td className="px-4 py-3">IT Equipment</td>
                <td className="px-4 py-3">Office B</td>
                <td className="px-4 py-3 text-yellow-500">Maintenance</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-3">A003</td>
                <td className="px-4 py-3">Conference Table</td>
                <td className="px-4 py-3">Furniture</td>
                <td className="px-4 py-3">Meeting Room</td>
                <td className="px-4 py-3 text-green-500">In Use</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-3">A004</td>
                <td className="px-4 py-3">Office Chair</td>
                <td className="px-4 py-3">Furniture</td>
                <td className="px-4 py-3">Office C</td>
                <td className="px-4 py-3 text-red-500">Damaged</td>
              </tr>
              <tr>
                <td className="px-4 py-3">A005</td>
                <td className="px-4 py-3">Whiteboard</td>
                <td className="px-4 py-3">Office Supplies</td>
                <td className="px-4 py-3">Meeting Room</td>
                <td className="px-4 py-3 text-green-500">In Use</td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
  );
};

export default DashboardContent;
