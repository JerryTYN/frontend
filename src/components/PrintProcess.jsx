import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import React, { useState } from "react";
import { Textarea } from "@material-tailwind/react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdOutlineLockReset } from "react-icons/md";
import MyDocument from "./MyDocument.jsx";
const PrintProcess = ({ visible, onClose }) => {
  const sohk = 5;
  if (!visible) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm ">
      <div className="flex-row w-[95%] h-[700px] bg-white  overflow-auto  rounded ">
        <div className="sticky top-0 z-40 flex justify-between w-full bg-black p-2.5">
          <h1 className="pl-4 text-2xl text-white">In chương trình</h1>
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
        <div id="process" className="p-2.5">
          <h1 className="text-xl font-bold text-center">
            Tổng quan chương trình
          </h1>

          {[...Array(sohk)].map((_, i) => (
            <div className="p-2.5" key={i}>
              <table className="w-full  border border-gray-400 p-2.5">
                <thead>
                  <tr>
                    <th className="w-full text-center ">Học kỳ {i + 1}</th>
                  </tr>
                  <tr className="flex w-full ">
                    <th className="border border-gray-400 w-96">Mã môn học</th>
                    <th className="border border-gray-400 w-96">Tên môn học</th>
                    <th className="border border-gray-400 w-96">Học phần</th>
                    <th className="flex-1 border border-gray-400">
                      Tổng tín chỉ
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="flex w-full ">
                    <td className="border border-gray-400 w-96">Mã môn học</td>
                    <td className="border border-gray-400 w-96">Tên môn học</td>
                    <td className="border border-gray-400 w-96">Học phần</td>
                    <td className="flex-1 border border-gray-400">
                      Tổng tín chỉ
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
          <h1 className="text-xl font-bold text-center">
            Chi tiết chương trình
          </h1>

          {/* Hoc ki list */}

          {/* Documents */}
          <MyDocument />
          <MyDocument />
          <MyDocument />
        </div>
          <div className="sticky bottom-0 flex justify-end w-full bg-gray-300 h-14 p-2.5">
            <button className="w-48 h-10 p-2 font-semibold text-white bg-green-500 rounded-md hover:bg-green-400">
              In chương trình
            </button>
          </div>
      </div>
    </div>
  );
};

export default PrintProcess;
