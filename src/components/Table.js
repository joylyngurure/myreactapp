import React, { useState } from "react";
import { PlusCircleOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";

const columns = [
  { title: "ID", dataIndex: "id" },
  { title: "Assets", dataIndex: "assets" },
  { title: "Status", dataIndex: "status" },
];

const dataSource = Array.from({ length: 6 }).map((_, i) => ({
  key: i,
  id: `ef2345 ${i}`,
  asset: `HP Elitebook ${i}`,
  status:`In Use ${i}`,
}));

const Table = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  

  const onSelectChange = (key) => {
    const updatedSelection = selectedRowKeys.includes(key)
      ? selectedRowKeys.filter((k) => k !== key)
      : [...selectedRowKeys, key];
    setSelectedRowKeys(updatedSelection);
  };

  const hasSelected = selectedRowKeys.length > 0;

  return (
    <div className="p-20 bg-white rounded-2xl">
      <h1 className="fond-bold text-2xl mt-2 mr-2">ASSETS</h1>
      <div className="flex items-center gap-4 mb-4">
       
        
        <span>
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : null}
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-black">
          <thead>
            <tr>
              <th className="px-4 py-2">
                <input
                  type="checkbox"
                  onChange={(e) =>
                    e.target.checked
                      ? setSelectedRowKeys(dataSource.map((item) => item.key))
                      : setSelectedRowKeys([])
                  }
                  checked={
                    selectedRowKeys.length === dataSource.length &&
                    selectedRowKeys.length > 0
                  }
                />
              </th>
              {columns.map((col) => (
                <th
                  key={col.title}
                  className="border border-black px-4 py-2 text-left"
                >
                  {col.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dataSource.map((item) => (
              <tr key={item.key}>
                <td className="border border-black px-4 py-2">
                  <input
                    type="checkbox"
                    onChange={() => onSelectChange(item.key)}
                    checked={selectedRowKeys.includes(item.key)}
                  />
                </td>
                <td className="border border-black px-4 py-2">
                  {item.id}
                </td>
                <td className="border border-black px-4 py-2">{item.asset}</td>
                <td className="border border-black px-4 py-2">
                  {item.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
        <div className="flex justify-centre mr-4 mt-4">
            <button className="bg-blue-900 text-white h-10 flex items-center w-48 mt-4 rounded-xl border border-gray-500">
               <PlusCircleOutlined className="inline-block h-4 w-8 ml-4"size='large'/> <span className="ml-4 font-bold">Add Asset</span>
            </button>
            <span>
            <button className="bg-blue-900 text-white h-10 flex items-center w-48 mt-4 ml-6 rounded-xl border border-gray-500">
               <EditOutlined className="inline-block h-4 w-8 ml-4"size='large'/> <span className="ml-2 font-bold">Update Asset</span>
            </button> 
            </span>
            <span>
            <button className="bg-blue-900  text-white h-10 flex items-center w-48 mt-4 ml-6 rounded-xl border border-gray-500">
               <DeleteOutlined className="inline-block h-4 w-8 ml-4"size='large'/> <span className="ml-2 font-bold">Delete  Asset</span>
            </button>  
            </span>
            
        </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
