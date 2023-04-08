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
    <div className="flex w-[1190px] h-[610px] bg-white rounded-md shadow-lg">
      <div className="flex flex-col w-[400px] border-gray-900- border-r-4 p-4 overflow-auto">
        <h1 className="pt-2 text-xl font-bold text-center text-gray-950">
          Môn học
        </h1>
        <div className="pt-2 flex items-center justify-between py-4  p-2.5">
          <label for="table-search" className="sr-only">
            Search
          </label>
        </div>
        <hr />
        <div className="flex-1 w-full pt-2 pl-2">
          {/* list subject here */}
          {Subjects.map((sj, id) => (
            <div key={id} className="w-full p-2 text-base text-center text-gray-900 hover:bg-stone-50 hover:rounded-lg hover:cursor-pointer">{sj.name}</div>
          ))}
        </div>
      </div>
      <div className="flex flex-col w-full">
        {/* <h1 className="font-bold text-gray-50 text-md">Subject_view</h1> */}
        <div className="flex-1 pt-12 mx-auto">
          <div className="flex w-[850px] bg-gray-50 rounded-xl h-[500px] overflow-y-auto justify-center scrollbar-hide border-1  border-gray-900 ">
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
