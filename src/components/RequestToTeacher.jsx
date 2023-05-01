import "react-quill/dist/quill.snow.css";
import React, { useEffect, useState } from "react";
import { BiSearchAlt } from "react-icons/bi"
import { API_ROUTES, axiosInstance } from "../cons";

const RequestToTeacher = ({ visible, onClose }) => {
  const [options, setOptions] = useState([]);
  const [query, setQuery] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const [subjectName, setSubjectName] = useState("");

  useEffect(() => {
    axiosInstance
      .get(API_ROUTES.getListUser, {
        headers: {
          Authorization: "bearer " + sessionStorage.getItem("token"),
        },
      })
      .then((res) => {
        setOptions(
          res.data.map((item, idx) => {
            return {
              value: idx + "",
              label: `${item.fullName} | ${item.email}`,
            };
          })
        );
      });
  });

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

  const handelRequestSubject = () => {
    let resSubjectModel = {
      name: subjectName,
      requestUserMail: query.split(" | ")[1],
    };

    axiosInstance
      .post(API_ROUTES.requestSubject, resSubjectModel, {
        headers: {
          Authorization: "bearer " + sessionStorage.getItem("token"),
        },
      })
      .then((data) => alert(data.data))
      .catch((err) => alert(err.response.data));
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
        <div className="flex flex-col w-full h-full p-6 pt-10 space-y-4 overflow-y-auto min-h-[400px]">
          {/* <h2 className="text-xl font-bold">Thông tin môn học</h2> */}
          <div className="flex flex-row justify-center w-full space-x-64 items-left">
            <div className="flex flex-col w-64 ">
              <label>Tên học phần</label>
            </div>
            <div className="flex w-full ">
              <input
                onChange={(e) => setSubjectName(e.target.value)}
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
                <BiSearchAlt
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
        </div>
        <div className="sticky bottom-0 flex justify-end w-full bg-gray-300 h-14 p-2.5">
          <button
            className="w-48 h-10 p-2 font-semibold text-white bg-green-500 rounded-md hover:bg-green-400"
            onClick={handelRequestSubject}
          >
            Gửi yêu cầu
          </button>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default RequestToTeacher;
