import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  AiOutlineRead,
  AiOutlineReconciliation,
  AiOutlineUser,
} from "react-icons/ai";

import { MdOutlineAdminPanelSettings } from "react-icons/md";
import EditUserModal from "./EditUserModal";
const Dashboard = () => {
  const [user, setUser] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:3003/teacher").then((res) => {
      setUser(res.data);
    });
  }, []);

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <div className="flex-1 h-full bg-stone-50">
      <div className="flex items-center justify-between p-4 font-semibold text-gray-700 text-md h-36">
        <div className="flex w-1/5 p-4 bg-white rounded-md shadow-lg h-30">
          <div className="flex-1">
            <h3 className="">Tổng đề cương môn học</h3>
            <h1 className="text-3xl font-bold text-gray-800">1741</h1>
          </div>
          <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500 ">
            <AiOutlineRead className="text-lg font-bold text-white" />
          </div>
        </div>
        <div className="flex w-1/5 p-4 bg-white rounded-md shadow-lg h-30">
          <div className="flex-1">
            <h3 className="">Tổng<br/> chương trình học</h3>
            <h1 className="text-3xl font-bold text-gray-800">821</h1>
          </div>
          <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500 ">
            <AiOutlineReconciliation className="text-lg font-bold text-white" />
          </div>
        </div>
        <div className="flex w-1/5 p-4 bg-white rounded-md shadow-lg h-30">
          <div className="flex-1">
            <h3 className="">Tổng trưởng<br/> bộ môn</h3>
            <h1 className="text-3xl font-bold text-gray-800">120</h1>
          </div>
          <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500 ">
            <MdOutlineAdminPanelSettings className="text-lg font-bold text-white" />
          </div>
        </div>
        <div className="flex w-1/5 p-4 bg-white rounded-md shadow-lg h-30">
          <div className="flex-1">
            <h3 className="">Tổng <br/> giảng viên</h3>
            <h1 className="text-3xl font-bold text-gray-800">3012</h1>
          </div>
          <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500">
            <AiOutlineUser className="text-lg font-bold text-white " />
          </div>
        </div>
      </div>
      <div className="flex p-4 space-x-28">
        <div className="flex-col">
          <h2 className="relative w-40 p-2 font-bold bg-gradient-to-tl from-green-700 to-yellow-500 rounded-t-md text-gray-50">
            Giảng viên
          </h2>
          <div className="w-[820px] h-[400px] bg-white rounded-lg shadow-xl overflow-auto">
            <table className="flex-1 w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="sticky top-0 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3 pl-8">
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
                        <div className="font-normal text-gray-500">
                          {u.email}
                        </div>
                      </div>
                    </th>
                    <td className="px-6 py-4">{u.faculty}</td>
                    <td className="px-6 py-4">{u.dob}</td>
                    <td className="px-6 py-4">{u.pob}</td>

                    <td className="px-6 py-4 ">
                      {/* <!-- Modal toggle --> */}
                      <button
                        href="#"
                        type="button"
                        data-modal-target="editUserModal"
                        data-modal-show="editUserModal"
                        className="p-2 font-medium text-gray-800 rounded-lg shadow-md"
                        onClick={() => {
                          setOpenModal(true);
                        }}
                      >
                        Edit user
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex-col">
          <h2 className="relative w-40 p-2 font-bold bg-gradient-to-tl from-red-700 to-gray-500 rounded-t-md text-gray-50">
            Trrưởng bộ môn
          </h2>
          <div className="w-[250px] h-[400px] bg-white rounded-lg shadow-xl"></div>
        </div>
      </div>
      <EditUserModal onClose={handleCloseModal} visible={openModal} />
    </div>
  );
};

export default Dashboard;
