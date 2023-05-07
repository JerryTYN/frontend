import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import React, { useEffect, useState } from "react";
import { Textarea } from "@material-tailwind/react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdOutlineLockReset } from "react-icons/md";
import { API_ROUTES, axiosInstance } from "../cons";

const AddProcess = ({ visible, onClose }) => {
  const [processName, setProcessName] = useState("");
  const [semesterTotal, setSemesterTotal] = useState(0);
  const [semesters, setSemesters] = useState([]);
  const [semester, setSemester] = useState(0);
  const [subjects, setSubjects] = useState([]);
  const [totalCredits, setTotalCredits] = useState(0);
  const [searchSubject, setSearchSubject] = useState("");
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

  useEffect(() => {
    let list_s = [];
    for (let i = 0; i < semesterTotal; i++) {
      list_s.push({
        semesterName: `Học kì ${i + 1}`,
        subjectId: [],
      });
    }

    setSemesters(list_s);
  }, [semesterTotal]);

  const handleCreate = () => {
    let cirObj = {
      name: processName,
      subjectCurriculumModels: semesters,
    };

    axiosInstance
      .post(API_ROUTES.createProcess, cirObj, {
        headers: {
          Authorization: "bearer " + sessionStorage.getItem("token"),
        },
      })
      .then((data) => alert(data.data))
      .catch((err) => {
        alert(err.response.data);
      });
  };
  const handleCheckboxChange = (checked, subject) => {
    const updatedSubjects = subjects.map((s) => {
      if (s.id === subject.id) {
        return { ...s, selected: checked };
      }
      return s;
    });

    const selectedSubjects = updatedSubjects.filter((s) => s.selected);

    const newTotalCredits = selectedSubjects.reduce(
      (total, s) => total + s.totalCredits,
      0
    );

    setSubjects(updatedSubjects);
    setTotalCredits(newTotalCredits);
  };

  if (!visible) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm ">
      <div className="flex-row w-[95%] h-[700px] bg-white  rounded ">
        <div className="sticky top-0 z-40 flex justify-between w-full bg-black p-2.5">
          <h1 className="pl-4 text-2xl text-white">Thêm chương trình</h1>
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
        <div className="flex flex-col w-full h-full p-6 space-y-4">
          {/* <h2 className="text-xl font-bold">Thông tin môn học</h2> */}
          <div className="flex flex-row justify-center w-full space-x-16 items-left ">
            <div className="flex items-center justify-center w-full space-x-4">
              <div className="flex w-[500px] space-x-4 ">
                <label>Tên chương trình</label>
                <input
                  type="text"
                  className="w-[354.4px] border-b-2 focus:outline-none"
                  onChange={(e) => setProcessName(e.target.value)}
                />
              </div>
              <div className="flex w-1/3 space-x-4">
                <label>Số học kì</label>
                <input
                  type="number"
                  min={0}
                  value={semesterTotal}
                  className="border-b-2 w-14 focus:outline-none"
                  onChange={(e) => setSemesterTotal(Number(e.target.value))}
                />

                <select onChange={(e) => setSemester(Number(e.target.value))}>
                  <option defaultChecked value={0}>
                    -- Chọn học kì --{" "}
                  </option>
                  {semesters.map((value, idx) => (
                    <option key={idx} value={idx + 1}>
                      {value.semesterName}
                    </option>
                  ))}
                </select>
              </div>
              <label>Tổng tín chỉ chương trình:</label>
              <input
                type="number"
                readOnly
                className="w-10"
                value={totalCredits}
              />
            </div>
          </div>
          <div className="pt-2 flex py-4  p-2.5 ">
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
          <div className="w-full h-[400px] overflow-auto">
            <table className="w-full text-sm text-left text-gray-500 ">
              <thead className="sticky top-0 text-xs text-gray-700 uppercase bg-gray-50 ">
                <tr>
                  <th className="px-6 py-3">
                    <input type="checkbox" />
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Mã môn học
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Tên môn học
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Tín chỉ
                  </th>
                </tr>
              </thead>
              <tbody>
                {subjects
                  .filter((data) =>
                    data.name
                      .toLowerCase()
                      .includes(searchSubject.toLowerCase())
                  )
                  .map((data, idx) => {
                    // console.log("Data to table:", data);
                    if (semester - 1 === -1)
                      return (
                        <tr
                          key={idx}
                          className="bg-white border-b hover:bg-gray-50 "
                        >
                          <th
                            scope="row"
                            className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap "
                          >
                            <input
                              checked={false}
                              type="checkbox"
                              onClick={() => {}}
                            />
                          </th>
                          <td className="px-6 py-4">{data.id}</td>
                          <td className="px-6 py-4">{data.name}</td>
                          <td className="px-6 py-4">{data.totalCredits}</td>

                          {/* <td className="px-6 py-4">{`${data.name} [${data.id}]`}</td> */}
                        </tr>
                      );

                    // console.log(semesters);
                    let checked = semesters[semester - 1].subjectId.includes(
                      data.id
                    );

                    return (
                      <tr
                        key={idx}
                        className="bg-white border-b hover:bg-gray-50 "
                      >
                        <th
                          scope="row"
                          className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap "
                        >
                          <input
                            checked={checked}
                            type="checkbox"
                            onClick={(e) => {
                              setSemesters((prev) => {
                                let current = [...prev];

                                if (!checked) {
                                  current[semester - 1].subjectId.push(data.id);
                                } else {
                                  let idx = current[
                                    semester - 1
                                  ].subjectId.indexOf(data.id);
                                  current[semester - 1].subjectId.splice(
                                    idx,
                                    1
                                  );
                                }

                                return current;
                              });
                            }}
                            onChange={(e) =>
                              handleCheckboxChange(e.target.checked, data)
                            }
                          />
                        </th>
                        <td className="px-6 py-4">{data.id}</td>
                        <td className="px-6 py-4">{data.name}</td>
                        <td className="px-6 py-4">{data.totalCredits}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        <div className="sticky bottom-0 flex justify-end w-full h-14 p-2.5">
          <button
            className="w-48 h-10 p-2 font-semibold text-white bg-green-500 rounded-md hover:bg-green-400"
            onClick={handleCreate}
          >
            Tạo chương trình
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default AddProcess;
