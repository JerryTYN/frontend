import React from "react";

const faculties = [
  "Unknow",
  "Công nghệ thông tin",
  "Khoa học máy tính",
  "Kỹ thuật phần mềm",
  "Khoa học dữ liệu",
  "Hệ thống thông tin",
  //   "Công nghệ ô tô",
];

const EditUserModal = ({ visible, onClose, userInfo }) => {
  console.log(userInfo);

  if (!visible) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm ">
      <div className="w-full h-full max-w-2xl md:h-auto">
        <form action="#" className="relative bg-white rounded-lg shadow ">
          <div className="flex items-start justify-between p-4 border-b rounded-t ">
            <h3 className="text-xl font-semibold text-gray-900 ">
              Cập nhật thông tin giảng viên
            </h3>
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

          <div className="p-6 space-y-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  for="Ten"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Tên
                </label>
                <input
                  type="text"
                  name="Ten"
                  id="Ten"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 "
                  placeholder="Họ và tên"
                  required=""
                  value={userInfo && userInfo.name}
                />
              </div>
              <div className="col-span-6 sm:col-span-3 ">
                <div class="flex">
                  <div class="mb-3 w-full">
                    <label
                      for="Khoa"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Khoa
                    </label>
                    <select className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block p-2.5 w-full">
                      {faculties.map((value, index) => {
                        if (value === userInfo.faculty)
                          return (
                            <option selected key={index} value={index}>
                              {value}
                            </option>
                          );

                        return (
                          <option key={index} value={index}>
                            {value}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 "
                  placeholder="example@gmail.com"
                  required=""
                  value={userInfo && userInfo.email}
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  for="phone-number"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Số điện thoại
                </label>
                <input
                  type="text"
                  name="phone-number"
                  id="phone-number"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 "
                  placeholder="0987654321"
                  required=""
                  value={userInfo && userInfo.sdt}
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  for="dob"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Ngày sinh
                </label>
                <input
                  type="date"
                  name="dob"
                  id="dob"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 "
                  placeholder="1/1/1999"
                  required=""
                  value={userInfo && userInfo.dob}
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  for="pob"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Nơi sinh
                </label>
                <input
                  type="text"
                  name="pob"
                  id="pob"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 "
                  placeholder="Nơi sinh"
                  required=""
                  value={userInfo && userInfo.pob}
                />
              </div>
              {/* <div className="col-span-6 sm:col-span-3">
                                <label
                                    for="current-password"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Mật khẩu hiện tại
                                </label>
                                <input
                                    type="password"
                                    name="current-password"
                                    id="current-password"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="••••••••"
                                    required=""
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    for="new-password"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Mật khẩu mới
                                </label>
                                <input
                                    type="password"
                                    name="new-password"
                                    id="new-password"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="••••••••"
                                    required=""
                                />
                            </div> */}
            </div>
          </div>

          <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b ">
            <button
              // type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Cập nhật
            </button>
            {/* <button
              // type="submit"
              className="text-white bg-green-800 hover:bg-green-900 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              onClick={() => alert("Reset mật khẩu tài khoản này?")}
            >
              Reset Mật khẩu
            </button>
            <button
              // type="submit"
              className="text-white bg-red-700  hover:bg-red-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              onClick={() => alert("Xóa giảng viên này?")}
            >
              Xóa giảng viên
            </button> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUserModal;
