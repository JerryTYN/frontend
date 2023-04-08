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
    <div className="flex">
      <div className="flex flex-col h-screen w-[350px] bg-slate-800">
        <h1 className="pt-2 text-3xl font-bold text-center text-gray-50">
          Subject Manager
        </h1>
        <div className="pt-2 flex items-center justify-between py-4  p-2.5">
          <label for="table-search" className="sr-only">
            Search
          </label>
          <div className="relative">
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
              id="table-search-users"
              className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:outline-none w-80 bg-gray-50 "
              placeholder="Search for subject"
            />
          </div>
        </div>
        <hr />
        <div className="flex-1 pt-2 pl-[50px] justify-center w-full">
          {/* list subject here */}
          {Subjects.map((sj, id) => (
            <div key={id} className="w-full p-2 pb-2 font-semibold text-white text-md hover:border-r-4 hover:cursor-pointer">{sj.name}</div>
          ))}
        </div>
      </div>
      <div className="flex flex-col w-full h-screen bg-slate-300">
        {/* <h1 className="font-bold text-gray-50 text-md">Subject_view</h1> */}
        <div className="flex-1 pt-12 mx-auto">
          <div className="flex w-[850px]  shadow-xl bg-gray-50 rounded-xl h-[530px] overflow-y-auto justify-center scrollbar-hide border border-gray-50 border-1">
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
          <div className="flex justify-end pt-4 space-x-10 text-center">
            <button className="hover:border-gray-50 shadow-md p-1.5 font-bold text-gray-800 border-2 border-gray-800 rounded-lg hover:bg-gray-800 hover:text-gray-50">
              Clone subject
            </button>
            <button className="hover:border-gray-50 shadow-md p-1.5 font-bold text-gray-800 border-2 border-gray-800 rounded-lg hover:bg-gray-800 hover:text-gray-50">
              Create subject
            </button>
            <button className="hover:border-gray-50 shadow-md p-1.5 font-bold text-gray-800 border-2 border-gray-800 rounded-lg hover:bg-gray-800 hover:text-gray-50">
              Edit subject
            </button>
            <button className="hover:border-gray-50 shadow-md p-1.5 font-bold text-gray-800 border-2 border-gray-800 rounded-lg hover:bg-gray-800 hover:text-gray-50">
              Export subject
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectManager;
