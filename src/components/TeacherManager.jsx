import React, { useEffect, useState } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdOutlineLockReset } from "react-icons/md";
import axios from "axios";
import EditUserModal from "./EditUserModal";
import ResetPasswordModal from "./ResetPasswordModal";
import DeleteUserModal from "./DeleteUserModal";
import { API_ROUTES, axiosInstance } from "../cons";
const TeacherManager = ({ title }) => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState();
  useEffect(() => {
    axiosInstance
      .get(API_ROUTES.getListUser, {
        headers: { Authorization: "bearer " + sessionStorage.getItem("token") },
      })
      .then((res) => {
        setUsers(res.data)
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // useEffect(() => {

  //   axios.get('http://localhost:3003/teacher').then((res)=>{
  //     setUsers(res.data)
  //   })
  // }, [])

  const [openModal, setOpenModal] = useState(false);
  const handleCloseModal = () => {
    setOpenModal(false);
    setResetPassword(false);
    setDeleteUser(false);
  };
  const [resetPassword, setResetPassword] = useState(false);
  const [deleteUser, setDeleteUser] = useState(false);
  return (
    <div className="relative h-full shadow-md rounded-lg p-2.5">
      <div className="flex items-center justify-between py-4 bg-white p-2.5 ">
        <label for="table-search" className="sr-only">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500 "
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
            className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            placeholder="Search for users"
          />
        </div>
      </div>
      <div className=" h-[500px] bg-white rounded-b-lg shadow-xl overflow-auto">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="sticky top-0 text-xs text-gray-700 uppercase bg-gray-50">
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
              <th scope="col" className="px-12 py-3">
                ●●●
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((u, index) => (
              <tr key={index} className="bg-white border-b hover:bg-gray-50 ">
                <th
                  scope="row"
                  className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap "
                >
                  <div className="pl-3">
                    <div className="text-base font-semibold">{u.fullName}</div>
                    <div className="font-normal text-gray-500">{u.email}</div>
                  </div>
                </th>
                <td className="px-6 py-4">{u.faculty}</td>
                <td className="px-6 py-4">{u.dateOfBirth}</td>
                <td className="px-6 py-4">{u.placeOfBirth}</td>

                <td className="px-6 py-4 text-xl">
                  {/* <!-- Modal toggle --> */}
                  <button
                    href="#"
                    type="button"
                    data-modal-target="editUserModal"
                    data-modal-show="editUserModal"
                    className="inline-flex items-center p-2 ml-auto text-sm text-gray-600 bg-transparent rounded-lg hover:bg-gray-200 hover:text-gray-900 hover:shadow-lg"
                    onClick={() => {
                      setUser(u);
                      setOpenModal(true);
                    }}
                  >
                    <AiFillEdit />
                  </button>
                  <button
                    href="#"
                    type="button"
                    data-modal-target="editUserModal"
                    data-modal-show="editUserModal"
                    className="inline-flex items-center p-2 ml-auto text-sm text-gray-600 bg-transparent rounded-lg hover:bg-gray-200 hover:text-gray-900 hover:shadow-lg"
                    onClick={() => {
                      setUser(u);
                      setResetPassword(true);
                    }}
                  >
                    <MdOutlineLockReset className="text-green-800" />
                  </button>
                  <button
                    href="#"
                    type="button"
                    data-modal-target="editUserModal"
                    data-modal-show="editUserModal"
                    className="inline-flex items-center p-2 ml-auto text-sm text-gray-600 bg-transparent rounded-lg hover:bg-gray-200 hover:text-gray-900 hover:shadow-lg"
                    onClick={() => {
                      setUser(u);
                      setDeleteUser(true);
                    }}
                  >
                    <AiFillDelete className="text-red-800" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* <!-- Edit user modal --> */}
      <EditUserModal
        onClose={handleCloseModal}
        visible={openModal}
        userInfo={user}
      />

      <ResetPasswordModal
        visible={resetPassword}
        userInfo={user}
        onClose={handleCloseModal}
      />
      <DeleteUserModal
        visible={deleteUser}
        userInfo={user}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default TeacherManager;
