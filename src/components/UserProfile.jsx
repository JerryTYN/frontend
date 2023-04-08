import React from "react";
import logonam from "../assets/male-icon-32.png";
import logonu from "../assets/female-icon.png";
const UserProfile = () => {
  return (
    <div className="flex w-full h-[575px] shadow-lg bg-slate-50 rounded-lg">
      <div className="flex flex-col w-[500px] border-r-4 border-slate-50">
        <div className="relative items-center justify-center h-full pb-2">
          <div className="flex flex-col pb-5">
            <div className="relative flex flex-col mb-7">
              <div className="flex flex-col items-center justify-center pl-2 pt-28">
                <img
                  className="object-cover w-full h-56 shadow-lg rounded-xl"
                  src="https://source.unsplash.com/300x400/?education"
                  alt="user-pic"
                />
                <img
                  className="object-cover w-20 h-20 -mt-10 rounded-full shadow-xl"
                  src={logonu}
                  alt="user-pic"
                />
              </div>
              <h1 className="mt-3 text-3xl text-center text-black font-semiabold">
                Nguyễn Văn A
              </h1>
              <hr class="justify-center w-48 h-1 mx-auto my-4 bg-gray-950 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
              <div className="flex justify-start pl-4 text-base text-gray-950">
                <div className="flex flex-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full pt-16 rounded-xl">
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <label
                for="Ten"
                className="block mb-2 text-sm font-bold text-gray-700 "
              >
                Tên
              </label>
              <h1 className="p-2.5 text-sm border-b-2 border-slate-600">Tên</h1>
            </div>
            <div className="col-span-6 sm:col-span-3 ">
              <div class="flex">
                <div class="mb-3 w-full">
                  <label
                    for="Khoa"
                    className="block mb-2 text-sm font-bold text-gray-700 "
                  >
                    Khoa
                  </label>
                  <select
                    id="Khoa"
                    name="Khoa"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5  cursor-pointer hover:cursor-pointer"
                  >
                    <option value="1">Công nghệ thông tin</option>
                    <option value="2">Công nghệ may</option>
                    <option value="3">Công nghệ thực phẩm</option>
                    <option value="4">Điện tử máy tính</option>
                    <option value="5">Kế toán kiểm toán</option>
                    <option value="6">Quản trị kinh doanh</option>
                    <option value="7">Luật</option>
                    <option value="8">Maketing</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                for="email"
                className="block mb-2 text-sm font-bold text-gray-700 "
              >
                Email
              </label>
              <h1 className="p-2.5 text-sm border-b-2 border-slate-600">Tên</h1>
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                for="phone-number"
                className="block mb-2 text-sm font-bold text-gray-700 "
              >
                Số điện thoại
              </label>
              <h1 className="p-2.5 text-sm border-b-2 border-slate-600">Tên</h1>
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                for="dob"
                className="block mb-2 text-sm font-bold text-gray-700 "
              >
                Ngày sinh
              </label>
              <h1 className="p-2.5 text-sm border-b-2 border-slate-600">Tên</h1>
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                for="pob"
                className="block mb-2 text-sm font-bold text-gray-700 "
              >
                Nơi sinh
              </label>
              <h1 className="p-2.5 text-sm border-b-2 border-slate-600">Tên</h1>
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                for="current-password"
                className="block mb-2 text-sm font-bold text-gray-700 "
              >
                Mật khẩu hiện tại
              </label>
              <h1 className="p-2.5 text-sm border-b-2 border-slate-600">Tên</h1>
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                for="new-password"
                className="block mb-2 text-sm font-bold text-gray-700 "
              >
                Mật khẩu mới
              </label>
              <h1 className="p-2.5 text-sm border-b-2 border-slate-600">Tên</h1>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center p-3">
          <button className="bg-blue-800 p-2.5 rounded-lg w-300  text-white font-bold hover:bg-blue-600">
            Cập nhật thông tin
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
