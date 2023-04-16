import React, { useState } from "react";

import pdffile from "../assets/tex3.pdf";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { Subjects } from "../utils/subject";
const SubjectManager = () => {
  const [numPages, setNumPages] = useState(null);
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };
  return (
    <div className="flex h-[580px] bg-white rounded-md shadow-lg overflow-hidden">
      <div className="flex flex-col p-4 border-r-4 border-gray-900- ">
        <div className="sticky top-0 ">
          <h1 className="pt-2 text-xl font-bold text-center text-gray-950 z">
            Quản lý môn học
          </h1>
          <div className="pt-2 flex items-center  justify-center py-4  p-2.5 ">
            <label for="table-search" className="text-gray-900 sr-only">
              Search
            </label>
            <div className="relative ">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
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
                placeholder="Tìm môn học"
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="flex-1 w-full pt-2 pl-2 overflow-y-auto">
          {Subjects.map((sj, id) => (
            <div
              key={id}
              className="w-full p-2 text-base text-gray-900 hover:bg-stone-50 hover:rounded-lg hover:cursor-pointer"
            >
              {sj.name}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col w-full">
        {/* <h1 className="font-bold text-gray-50 text-md">Subject_view</h1> */}
        <div className="flex-1 pt-12 mx-auto">
          <div className="flex w-[850px] bg-gray-50 rounded-xl h-[460px] overflow-y-auto justify-center scrollbar-hide border-1  border-gray-900 ">
            <center>
              <div>
                <Document file={pdffile} onLoadSuccess={onDocumentLoadSuccess}>
                  {Array.from(new Array(numPages), (el, index) => (
                    <Page
                      height="1200"
                      key={`page_${index + 1}`}
                      pageNumber={index + 1}
                      renderTextLayer={false}
                    />
                  ))}
                </Document>
              </div>
            </center>
          </div>
          <div className="flex justify-end pt-4 pr-4 space-x-10 text-center">
            <button className="hover:border-gray-400 shadow-md p-1.5 font-bold text-gray-50 border-2 border-gray-50 rounded-lg bg-gradient-to-tl from-green-400 to-green-700">
              Tạo môn học
            </button>
            <button className="hover:border-gray-400 shadow-md p-1.5 font-bold text-gray-50 border-2 border-gray-50 rounded-lg bg-gradient-to-tl from-yellow-400 to-yellow-700">
              Chỉnh sửa môn học
            </button>
            <button className="hover:border-gray-400 shadow-md p-1.5 font-bold text-gray-50 border-2 border-gray-50 rounded-lg bg-gradient-to-tl from-blue-300 to-blue-700">
              Sao chép môn học
            </button>
            <button className="hover:border-gray-400 shadow-md p-1.5 font-bold text-gray-50 border-2 border-gray-50 rounded-lg bg-gradient-to-tl from-gray-300 to-gray-700">
              In môn học
            </button>
            <button className="hover:border-gray-400 shadow-md p-1.5 font-bold text-gray-50 border-2 border-gray-50 rounded-lg bg-gradient-to-tl from-red-300 to-red-700">
              Xóa môn học
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectManager;
