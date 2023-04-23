import React from "react";

const ProcessManager = () => {
  return (
    <div className="flex-1 h-[585px] ">
      <div className="w-full">
        <h1 className="font-bold text-md">Tên chương trình</h1>
      </div>
      <div className="flex flex-1 w-full p-2.5 rounded-lg bg-slate-100">
        <div className="flex flex-1 ">
          <div className="w-[200px] space-x-4">
            <label>Số lượng học kì:</label>
            <input className="w-10 p-2 text-center rounded-md" type="number" min={2} />
          </div>
          <div className="w-[200px] text-center ">
            <select className="p-2.5 rounded-lg border border-gray-600">
              <option className="p-2">--Học kì--</option>
              <option className="p-2">Học kì 1</option>
              <option className="p-2">Học kì 2</option>
              <option className="p-2">Học kì 3</option>
            </select>
          </div>
          <div className="w-[200px] items-center flex">
            <label className="text-center">Tổng tín chỉ:</label>
          </div>
          <div className="flex items-center justify-end flex-1 ">
           <button className="bg-green-600 rounded-lg p-2.5 text-white font-semibold hover:bg-green-400">Xuất đề cương</button>
          </div>
        </div>
      </div>
      <div className="flex-1 space-y-4">



      <div className="relative space-y-5">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500 "
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="table-search-users"
            className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            placeholder="Search for users"
          />
        </div>
        <div className=" h-[430px] bg-white rounded-b-lg shadow-xl overflow-auto">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="sticky top-0 text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Tên / Email
              </th>
              <th scope="col" className="px-6 py-3">
                Khoa
              </th>
              <th scope="col" className="px-6 py-3">
                Ngày sinh
              </th>
              <th scope="col" className="px-6 py-3">
                Nơi sinh
              </th>
              <th scope="col" className="px-12 py-3">
                ●●●
              </th>
            </tr>
          </thead>
          <tbody>
            
                <tr className="bg-white border-b hover:bg-gray-50 ">
                  <th
                    scope="row"
                    className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap "
                  >
                    <div className="pl-3">
                      <div className="text-base font-semibold">
  
                      </div>
                      <div className="font-normal text-gray-500"></div>
                    </div>
                  </th>
                  <td className="px-6 py-4"></td>
                  <td className="px-6 py-4"></td>
                  <td className="px-6 py-4"></td>

                  
                </tr>
              
          </tbody>
        </table>
      </div>
      
      </div>
    </div>
  );
};

export default ProcessManager;
