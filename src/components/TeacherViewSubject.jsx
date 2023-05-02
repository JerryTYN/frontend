import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import React, { useState } from "react";
import JsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Textarea } from "@material-tailwind/react";
import MyDocument from "./MyDocument";
import { API_ROUTES, axiosInstance } from "../cons";

const TeacherViewSubject = ({ visible, onClose, sj }) => {
  const [subject, setSubject] = useState();
  const handleExportPDF = async () => {
    const input = document.getElementById("monhoc");
    const canvas = await html2canvas(input, { scrollY: -window.scrollY });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new JsPDF({
      unit: "px",
      format: "a4",
      orientation: "portrait",
      compress: true,
    });
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    // const pdfHeight = ((imgProps.height + 50) * pdfWidth) / imgProps.width;
    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    // console.log(imgProps.height, pdfHeight);
    for (
      let i = 1;
      i < canvas.height / pdf.internal.pageSize.getHeight() / 2;
      i++
    ) {
      pdf.addPage();
      pdf.addImage(
        imgData,
        "PNG",
        0,
        -pdf.internal.pageSize.getHeight() * i,
        // -pdf.internal.pageSize.getHeight() * i + 50,
        pdfWidth,
        pdfHeight
      );
      //   pdf.setFillColor(255, 255, 255);
      //   pdf.rect(
      //     0,
      //     pdf.internal.pageSize.getHeight() - 50,
      //     pdf.internal.pageSize.getWidth(),
      //     50,
      //     "F"
      //   );
    }
    pdf.save("file.pdf");
  };
  if (!visible) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center w-full bg-black bg-opacity-25 backdrop-blur-sm">
      <div className="flex-row w-[1100px] h-[600px] bg-white  overflow-auto  rounded ">
        <div className="sticky top-0 z-40 flex justify-between w-full bg-black p-2.5">
          <h1 className="pl-4 text-2xl text-white">Chỉnh sửa môn học</h1>
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
        <div className="flex flex-col w-full h-full p-6 pt-10 space-y-4">
          <div id="monhoc">
            <MyDocument data={sj} />
          </div>
          <div className="sticky bottom-0 flex bg-slate-100 p-2.5 justify-end">
            <button className="bg-green-200 rounded-lg p-2.5 hover:bg-green-500 hover:text-semibold" onClick={handleExportPDF}>
              Xuất file PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherViewSubject;
