import React from "react";
import { API_ROUTES, axiosInstance } from "../cons";

const DeleteUserModal = ({ visible, userInfo, onClose }) => {
  if (!visible) return null;

  const deleteUserHandler = () => {
    let query = `?email=${userInfo.email}`;
    axiosInstance
      .delete(
        API_ROUTES.deleteUser + query,

        {
          headers: {
            Authorization: "bearer " + sessionStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        alert(res.data.message);
        onClose();
        console.log(res);
      });
  };
  return (
    <div>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
        <div className="relative w-auto max-w-3xl mx-auto my-6">
          <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
            <div className="relative flex-auto p-6">
              <p className="text-lg leading-relaxed text-slate-500">
                Xóa giảng viên này?
              </p>
            </div>
            <div className="flex items-center justify-end p-6 border-t border-solid rounded-b border-slate-200">
              <button
                className="px-6 py-2 mb-1 mr-1 text-sm font-bold uppercase transition-all duration-150 ease-linear bg-green-500 rounded-lg shadow-lg outline-none hover:bg-green-700 text-gray-50 background-transparent focus:outline-none hover:shadow-md"
                onClick={deleteUserHandler}
              >
                Xóa
              </button>
              <button
                className="px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-600 uppercase transition-all duration-150 ease-linear rounded-lg shadow outline-none active:text-white active:bg-red-900 hover:shadow-lg focus:outline-none"
                onClick={onClose}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
    </div>
  );
};

export default DeleteUserModal;
