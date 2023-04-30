import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
const options = [
  { value: "1", label: "Nguyễn Văn A [email@gmail.com]" },
  { value: "2", label: "Nguyễn Văn B [email@gmail.com]" },
  { value: "3", label: "Nguyễn Văn E [email@gmail.com]" },
  { value: "4", label: "Nguyễn Văn F [email@gmail.com]" },
  { value: "5", label: "Nguyễn Văn G [email@gmail.com]" },
];
const RequestToTeacher = ({ visible, onClose }) => {
  const [query, setQuery] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);

    setQuery(option.label);
  };

  const filterOptions = () => {
    return options.filter(
      (option) =>
        option.label.toLowerCase().indexOf(query.toLowerCase()) >= 0 &&
        (!selectedOption || option.value !== selectedOption.value)
    );
  };

  if (!visible) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm">
      <div className="flex-row w-[800px] h-[auto] bg-white    rounded ">
        <div className="sticky top-0 z-40 flex justify-between w-full bg-black p-2.5">
          <h1 className="pl-4 text-2xl text-white">Gửi yêu cầu</h1>
          <button
            onClick={onClose}
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center "
            data-modal-hide="editUserModal"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div className="flex flex-col w-full h-full p-6 pt-10 space-y-4 overflow-y-auto">
          {/* <h2 className="text-xl font-bold">Thông tin môn học</h2> */}
          <div className="flex flex-row justify-center w-full space-x-64 items-left">
            <div className="flex flex-col w-64 ">
              <label>Tên học phần</label>
            </div>
            <div className="flex w-full ">
              <input
                type="text"
                className="w-[354.4px] border-b-2 focus:outline-none"
              />
            </div>
          </div>
          {/* <div className="flex flex-row justify-center w-full items-left"> */}
          <div className="relative w-full">
            <div className="flex flex-row justify-between w-full">
              <label>Chọn giảng viên được phân công</label>
              <input
                type="text"
                placeholder={selectedOption ? "" : "Tìm giảng viên"}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="block w-1/2 py-2 pl-3 pr-10 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <ChevronDownIcon
                  className="w-5 h-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
            </div>

            {query && (
              <div className="absolute right-0 z-10 w-1/2 mt-1 overflow-auto bg-white border border-gray-300 rounded-md shadow-lg max-h-60 focus:outline-none sm:text-sm">
                {filterOptions().map((option) => (
                  <div
                    key={option.value}
                    className="px-4 py-2 text-gray-900 cursor-pointer hover:bg-gray-100"
                    onClick={() => handleSelect(option)}
                  >
                    {option.label}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="flex flex-row w-full space-x-60 items-left">
            <div className="flex flex-col w-64 space-y-4">
              <label>Chọn giảng viên phụ trách</label>
              <div className="relative ">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500 dark:text-gray-400 "
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
                  className="block w-64 p-2 pl-10 text-sm text-gray-900 bg-white border rounded-lg shadow-md border-1 focus:outline-none"
                  placeholder="Tìm giảng viên"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row w-full space-x-60 items-left">
          <table className="w-full text-sm text-left text-gray-500 ">
            <thead className="sticky top-0 text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th className="px-6 py-3">
                  <input type="checkbox" />
                </th>
                <th scope="col" className="px-6 py-3">
                  Tên giảng viên
                </th>
          
              </tr>
            </thead>
            <tbody>
         
              <tr className="bg-white border-b hover:bg-gray-50 ">
                <th
                  scope="row"
                  className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap "
                >
                  <input type="checkbox" />
                </th>
                <td className="px-6 py-4">Giảng viên </td>
              </tr>
              {/* ))} */}
            </tbody>
          </table>
          </div>
          <div className="sticky bottom-0 flex justify-end w-full bg-gray-300 h-14 p-2.5">
            <button className="w-48 h-10 p-2 font-semibold text-white bg-green-500 rounded-md hover:bg-green-400">
              Gửi yêu cầu
            </button>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default RequestToTeacher;
