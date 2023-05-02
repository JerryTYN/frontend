import React, { useEffect, useState } from "react";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import MyDocument from "./MyDocument";
import AddSubjectModal from "./AddSubjectModal";
import { API_ROUTES, axiosInstance } from "../cons";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { GoRequestChanges } from "react-icons/go";
import UpdateSubjectModal from "./UpdateSubjectModal";
import CloneSubjectModal from "./CloneSubjectModal";
import { PDFDownloadLink, usePDF, pdf } from "@react-pdf/renderer";
import JsPDF from "jspdf";
import ReactDOMServer from "react-dom/server";
import html2canvas from "html2canvas";
import html2pdf from "html2pdf.js";
import "jspdf-autotable";
import RequestToTeacher from "./RequestToTeacher";
const SubjectManager = () => {
  const [addSubjectModal, setAddSubjectModal] = useState(false);

  const [subjects, setSubjects] = useState([]);
  const [subject, setSubject] = useState();

  useEffect(() => {
    axiosInstance
      .get(API_ROUTES.getSubjects, {
        headers: {
          Authorization: "bearer " + sessionStorage.getItem("token"),
        },
      })
      .then((data) => {
        let lst = [];

        for (let item of data.data) {
          if (!item.requestUserMail) {
            lst.push(item);
          }
        }

        setSubjects(lst);
      });
  }, []);

  const [updateSubjectModal, setUpdateSubjectModal] = useState(false);
  const [cloneSubjectModal, setCloneSubjectModal] = useState(false);
  const handleCloseModal = () => {
    setAddSubjectModal(false);
    setUpdateSubjectModal(false);
    setCloneSubjectModal(false);
    setRequestTeacherModal(false);
    if (subject) {
      getSubjectHandler(subject);
    }
    axiosInstance
      .get(API_ROUTES.getSubjects, {
        headers: {
          Authorization: "bearer " + sessionStorage.getItem("token"),
        },
      })
      .then((data) => {
        let lst = [];

        for (let item of data.data) {
          if (!item.requestUserMail) {
            lst.push(item);
          }
        }

        setSubjects(lst);
      });
  };
  const [selectedSubject, setSelectedSubject] = useState(null);

  const getSubjectHandler = (sj) => {
    if(sj){

        setSelectedSubject(sj.name);
    }
    
    axiosInstance
      .get(API_ROUTES.getSubject + `?id=${sj.id}`, {
        headers: {
          Authorization: "bearer " + sessionStorage.getItem("token"),
        },
      })
      .then((data) => setSubject(data.data.result))
      .catch((err) => alert(err.response.data));
  };
  // dep
  const handleExportPDF = async () => {
    const input = document.getElementById("report");
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

  const handleDeleteSubject = () => {
    if (subject) {
      axiosInstance
        .delete(API_ROUTES.deleteSubject + `?id=${subject.id}`, {
          headers: {
            Authorization: "bearer " + sessionStorage.getItem("token"),
          },
        })
        .then((data) => {
          alert(data.data);
          setSubject(undefined);
          axiosInstance
            .get(API_ROUTES.getSubjects, {
              headers: {
                Authorization: "bearer " + sessionStorage.getItem("token"),
              },
            })
            .then((data) => {
              setSubjects(data.data);
            });
        })
        .catch((err) => console.log(err));
    } else {
      alert("Subject is not selected.");
    }
  };

  // tach dc trang
  //   const handleExportPDF = async () => {
  //     const input = document.getElementById("report");
  //     const canvas = await html2canvas(input, {
  //       scrollY: -window.scrollY,
  //       scale: 1,
  //     });
  //     const imgData = canvas.toDataURL("image/png");
  //     const pdf = new JsPDF();
  //     const imgProps = pdf.getImageProperties(imgData);
  //     const pdfWidth = pdf.internal.pageSize.getWidth();
  //     const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width - 40;
  //     pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
  //     for (
  //       let i = 1;
  //       i < canvas.height / pdf.internal.pageSize.getHeight();
  //       i++
  //     ) {
  //       pdf.addPage();
  //       pdf.addImage(
  //         imgData,
  //         "PNG",
  //         0,
  //         -pdf.internal.pageSize.getHeight() * i,
  //         pdfWidth,
  //         pdfHeight
  //       );
  //     }
  //     pdf.save("file.pdf");
  //   };

  // const handleExportPDF = async () => {
  //     const input = document.getElementById("report");
  //     const canvas = await html2canvas(input, { scrollY: -window.scrollY });
  //     const imgData = canvas.toDataURL("image/png");
  //     const pdfWidth = canvas.width;
  //     const pdfHeight = canvas.height;
  //     const pdf = new JsPDF({ orientation: 'portrait', unit: 'px', format: [pdfWidth, pdfHeight] });

  //     let position = 0;
  //     while (position < canvas.height) {
  //     const imgProps = pdf.getImageProperties(imgData);
  //     pdf.addImage(
  //     imgData,
  //     "PNG",
  //     0,
  //     position,
  //     imgProps.width,
  //     imgProps.height
  //     );
  //     position += imgProps.height;
  //     if (position < canvas.height) {
  //     pdf.addPage();
  //     }
  //     }
  //     pdf.save("file.pdf");
  //     };
  // OK

  // const handleExportPDF = async () => {
  //     const input = document.getElementById("report");
  //     const canvas = await html2canvas(input, { scrollY: -window.scrollY });
  //     const imgData = canvas.toDataURL("image/png");
  //     const pdfWidth = canvas.width;
  //     const pdfHeight = canvas.height;
  //     const pdf = new JsPDF({ orientation: 'portrait', unit: 'px', format: [pdfWidth, pdfHeight] });

  //     let position = 0;
  //     let page = 1;
  //     const maxPageHeight = pdf.internal.pageSize.height;

  //     while (position < canvas.height) {
  //       const imgProps = pdf.getImageProperties(imgData);
  //       const remainingPageHeight = maxPageHeight - position % maxPageHeight;
  //       const imgHeightOnPage = Math.min(imgProps.height, remainingPageHeight);
  //       pdf.addImage(
  //         imgData,
  //         "PNG",
  //         0,
  //         position,
  //         imgProps.width,
  //         imgHeightOnPage
  //       );
  //       position += imgHeightOnPage;
  //       if (position % maxPageHeight === 0) {
  //         pdf.addPage();
  //         page++;
  //       }
  //     }

  //     pdf.save("file.pdf");
  //   };
  //

  const [requestTeacherModal, setRequestTeacherModal] = useState(false);
  const [searchSubject, setSearchSubject] = useState("");

  return (
    <div className="flex h-[600px] bg-white rounded-md shadow-lg overflow-hidden">
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
                onChange={(e) => setSearchSubject(e.target.value)}
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="flex-1 w-full pt-2 pl-2 overflow-y-auto">
          {subjects
            .filter((sj) =>
              sj.name.toLowerCase().includes(searchSubject.toLowerCase())
            )
            .map((sj, id) => {
              // console.log("ten mon hoc",sj.name);
              return (
                <div
                  key={id}
                  className={`w-full p-2 text-base text-gray-900  hover:rounded-lg hover:cursor-pointer ${
                    selectedSubject === sj.name
                      ? "bg-blue-500 rounded-lg text-white"
                      : ""
                  }`}
                  onClick={() => getSubjectHandler(sj)}
                >
                  {sj.name}
                </div>
              );
            })}
        </div>
        <button
          className="sticky bottom-0 flex items-center justify-center w-full p-1 border-2 border-black rounded-lg hover:cursor-pointer hover:bg-slate-100"
          onClick={() => setRequestTeacherModal(true)}
        >
          <label className="p-2.5 hover:cursor-pointer">Tạo yêu cầu</label>
          <span className="p-2.5 bg-black text-white rounded-lg ">
            <GoRequestChanges className="font-semibold" />
          </span>
        </button>
      </div>
      <div className="flex flex-col w-full">
        {/* <h1 className="font-bold text-gray-50 text-md">Subject_view</h1> */}
        <div className="flex-1 mx-auto">
          <div className="flex w-[850px] bg-gray-50 rounded-xl h-[480px] overflow-y-auto justify-center scrollbar-hide border-1  border-gray-900 ">
            {/* <center> */}
            {/* <div> */}

            <MyDocument data={subject} />
            {/* </div> */}
            {/* </center> */}
          </div>
          <div className="flex justify-end pt-8 pr-4 space-x-10 text-center">
            <button
              onClick={() => setAddSubjectModal(true)}
              className="hover:border-gray-400 shadow-md p-1.5 font-bold text-gray-50 border-2 border-gray-200 rounded-lg bg-green-500 "
            >
              Tạo môn học
            </button>
            <button
              className="hover:border-gray-400 shadow-md p-1.5 font-bold text-gray-50 border-2 border-gray-200 rounded-lg bg-yellow-500 "
              onClick={() => {
                if (subject) setUpdateSubjectModal(true);
                else alert("Subject is not selected.");
              }}
            >
              Chỉnh sửa môn học
            </button>
            <button
              className="hover:border-gray-400 shadow-md p-1.5 font-bold text-gray-50 border-2 border-gray-200 rounded-lg bg-blue-500"
              onClick={() => {
                if (subject) setCloneSubjectModal(true);
                else alert("Subject is not selected.");
              }}
            >
              Sao chép môn học
            </button>
            {/* <button
              className="hover:border-gray-400 shadow-md p-1.5 font-bold text-gray-50 border-2 border-gray-200 rounded-lg bg-gray-500 "
              onClick={()=>ReactPDF.render(
                <MyDocument />,
                `example.pdf`
              )}
            >
              In môn học
            </button> */}
            <button type="button" onClick={handleExportPDF} className="hover:border-gray-800 hover:bg-gray-600 hover:text-gray-50 shadow-md p-1.5 font-bold text-gray-950 border-2 border-gray-500 rounded-lg bg-slate-50">
              Export PDF
            </button>
            <button
              className="hover:border-gray-400 shadow-md p-1.5 font-bold text-gray-50 border-2 border-gray-200 rounded-lg bg-red-500"
              onClick={handleDeleteSubject}
            >
              Xóa môn học
            </button>
          </div>
        </div>
      </div>

      <AddSubjectModal visible={addSubjectModal} onClose={handleCloseModal} />

      <UpdateSubjectModal
        visible={updateSubjectModal}
        onClose={handleCloseModal}
        subject={subject}
      />
      <CloneSubjectModal
        visible={cloneSubjectModal}
        onClose={handleCloseModal}
        subject={subject}
      />
      <RequestToTeacher
        visible={requestTeacherModal}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default SubjectManager;
