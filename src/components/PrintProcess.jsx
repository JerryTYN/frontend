import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import React, { useEffect, useState } from "react";
import { Textarea } from "@material-tailwind/react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import JsPDF from "jspdf";
import html2canvas from "html2canvas";
import { MdOutlineLockReset } from "react-icons/md";

import MyDocument from "./MyDocument.jsx";
import { API_ROUTES, axiosInstance } from "../cons/index.js";

const PrintProcess = ({ visible, onClose, process }) => {
  // State
  const [processName, setProcessName] = useState("");
  const [subjects, setSubjects] = useState();
  const [semesters, setSemesters] = useState([]);

  // Effect
  useEffect(() => {
    const fetchProcess = async () => {
      if (process) {
        setSemesters(process.subjectCurriculumModels);

        let lstSubject = [];
        process.subjectCurriculumModels.forEach((item) => {
          lstSubject = lstSubject.concat(item.subjectId);
        });
        lstSubject = [...new Set(lstSubject)];

        let subjectDic = {};
        for (let si of lstSubject) {
          subjectDic[si] = (await getSubjectHandler(si)).result;
        }

        setSubjects(subjectDic);
        setProcessName(process.name);
      }
    };
    fetchProcess();
  }, [process]);

  // Method
  const getSubjectHandler = async (sj) => {
    try {
      let res = await axiosInstance.get(API_ROUTES.getSubject + `?id=${sj}`, {
        headers: {
          Authorization: "bearer " + sessionStorage.getItem("token"),
        },
      });

      return res.data;
    } catch (ex) {
      console.log(ex);
      return null;
    }
  };

  //Print
  const handleExportPDF = async () => {
    const input = document.getElementById("process");
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
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm ">
      <div className="flex-row w-[1000px] h-[700px] bg-white  overflow-auto  rounded ">
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
          <h1 className="pb-10 text-xl font-bold text-center">
            Tổng quan chương trình: {processName}
          </h1>

          {semesters && semesters.length > 0 ? (
            semesters.map((semester) => (
              <div
                className="p-2.5 justify-center items-center flex-col flex"
                key={semester.name}
              >
                <table className="border border-gray-400 p-2.5">
                  <thead>
                    <tr>
                      <th className="w-full p-3 text-center">
                        {semester.semesterName}
                      </th>
                    </tr>
                    <tr className="flex w-full">
                      <th className="w-32 border border-gray-400 p-2.5">
                        Mã môn học
                      </th>
                      <th className="border border-gray-400 w-96  p-2.5">
                        Tên môn học
                      </th>
                      <th className="w-32 border border-gray-400 p-2.5">
                        Tổng tín chỉ
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {subjects &&
                      semester.subjectId.map((id) => {
                        let sbj = subjects[id];

                        return (
                          <tr className="flex w-full " key={sbj.id}>
                            <td className="w-32 p-2 border border-gray-400">
                              {sbj.id}
                            </td>
                            <td className="p-2 border border-gray-400 w-96">
                              {sbj.name}
                            </td>
                            <td className="w-32 p-2 border border-gray-400">
                              {sbj.totalCredits}
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            ))
          ) : (
            <p>Không tìm thấy thông tin môn học</p>
          )}

          <h1 className="pt-20 pb-20 text-xl font-bold text-center">
            Chi tiết chương trình
          </h1>

          {subjects &&
            Object.values(subjects).map((s, idx) => {
              return (
                <div className="space-y-10">
                  <hr className="border-gray-600 border-1" />
                  <MyDocument key={s.id} data={s} />
                  <hr className="border-gray-600 border-1" />
                </div>
              );
            })}
        </div>
        <div className="sticky bottom-0 flex justify-end w-full bg-gray-300 h-14 p-2.5">
          <button
            className="w-48 h-10 p-2 font-semibold text-white bg-green-500 rounded-md hover:bg-green-400"
            onClick={handleExportPDF}
          >
            In chương trình
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrintProcess;
