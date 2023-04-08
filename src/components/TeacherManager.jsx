import React, { useEffect, useState } from "react";

import axios from "axios";
import EditUserModal from "./EditUserModal";
const TeacherManager = ({title}) => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3003/teacher").then((res) => {
      setUser(res.data);
    });
  }, []);

  const [openModal, setOpenModal] = useState(false);
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <div className="relative overflow-x-auto shadow-md rounded-lg p-2.5">
      <div className="flex items-center justify-between py-4 bg-white dark:bg-gray-800 p-2.5 ">
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
            className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for users"
          />
        </div>
      </div>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Tên / Email
            </th>
            <th scope="col" className="px-6 py-3">
              Khoa
            </th>
            <th scope="col" className="px-6 py-3">
              Ngày sinh
            </th>
            <th scope="col" className="px-6 py-3">
              Nơi sinh
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {user.map((u, index) => (
            <tr
              key={index}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <th
                scope="row"
                className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
              >
                <div className="pl-3">
                  <div className="text-base font-semibold">{u.name}</div>
                  <div className="font-normal text-gray-500">{u.email}</div>
                </div>
              </th>
              <td className="px-6 py-4">{u.faculty}</td>
              <td className="px-6 py-4">{u.dob}</td>
              <td className="px-6 py-4">{u.pob}</td>

              <td className="px-6 py-4">
                {/* <!-- Modal toggle --> */}
                <button
                  href="#"
                  type="button"
                  data-modal-target="editUserModal"
                  data-modal-show="editUserModal"
                  className="inline-flex items-center ml-auto text-sm text-gray-400 bg-transparent rounded-lg hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={() => setOpenModal(true)}
                >
                  Cập nhật
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <!-- Edit user modal --> */}
      <EditUserModal onClose={handleCloseModal} visible={openModal} />
    </div>
  );
};

export default TeacherManager;
