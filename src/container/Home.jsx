import React, { useEffect, useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { RiAdminFill } from "react-icons/ri";
import { Menus } from "../utils/menus";
import { Link, NavLink, Route, Routes, useNavigate } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import ProcessManager from "../components/ProcessManager";
import SubjectManager from "../components/SubjectManager";
import TeacherManager from "../components/TeacherManager";
import UserProfile from "../components/UserProfile";
import { API_ROUTES, axiosInstance } from "../cons";
import SubjectManagerTeacherRole from "../components/SubjectManagerTeacherRole";
const isNotActiveStyle = 'flex items-center  gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize';
const isActiveStyle = 'flex items-center  gap-3 font-extrabold border-r-2 border-black  transition-all duration-200 ease-in-out capitalize';
const Home = () => {
  const [open, setOpen] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);
  const [userInfo, setUserInfo] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    let token = sessionStorage.getItem("token");

    if (!token) {
      navigate("/");
    } else {
      axiosInstance
        .get(API_ROUTES.getUserInfo, {
          headers: {
            Authorization: "bearer " + token,
          },
        })
        .then((data) => {
          console.log(data);
          setUserInfo(data.data.result);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [navigate]);

  const handleImageClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleDropdownMouseLeave = () => {
    setShowDropdown(false);
  };

  const handleLogoutClick = () => {
    sessionStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="flex bg-stone-50 ">
      <div
        className={`relative duration-300 h-screen p-5 pt-8 bg-white rounded-r-lg shadow-2xl ${
          open ? "w-72" : "w-20"
        } `}
      >
        <BsArrowLeftShort
          className={`absolute text-3xl text-black bg-white border border-gray-950 rounded-full cursor-pointer -right-3 top-9 ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />

        <div className="inline-flex ">
          <RiAdminFill
            className={`block float-left mr-2 text-4xl shadow-lg text-center text-gray-900 bg-stone-50 p-2 rounded cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`pl-4 text-2xl text-gray-900 origin-left font-semibold ${
              !open && "scale-0"
            }`}
          >
            Currtex
          </h1>
        </div>
        <div
          className={`flex items-center  py-2 rounded-md ${
            !open ? "px-1" : "px-3"
          }`}
        >
          <hr class="justify-center w-48 h-1  my-4 bg-gray-900 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
        </div>

        {/* <ul className="pt-2"> */}
        <div className="flex flex-col space-y-6">
          {Menus.map((menu, index) => {
            // console.log(userInfo.roles, menu);
            // if (userInfo) {
            //   // console.log(userInfo)
            //   if (menu.roles.includes(userInfo.roles)) {
            //     return (
            //       <NavLink to={`/Home/${menu.url}`} key={index} >
            //         <li className="flex items-center p-2 mt-2 text-sm font-bold text-gray-900 rounded-md cursor-pointer gap-x-4 hover:bg-stone-100 hover:text-gray-950">
            //           <span
            //             className="block float-left text-2xl rounded-lg shadow-lg bg-stone-50"
            //             onClick={() => setOpen(!open)}
            //           >
            //             {menu.icon}
            //           </span>
            //           <span
            //             className={`flex-1 text-base font-medium duration-200 ${
            //               !open && "hidden"
            //             }`}
            //           >
            //             {menu.title}
            //           </span>
            //         </li>
            //       </NavLink>
            //     );
            //   }
            // }
            if (userInfo) {
              // console.log(userInfo)
              if (menu.roles.includes(userInfo.roles)) {
                return (
                  <NavLink to={`/Home/${menu.url}`} key={index} className={({ isActive }) => (isActive ? isActiveStyle : isNotActiveStyle)}>
                    <span
                      className="block float-left text-2xl rounded-lg shadow-lg bg-stone-50"
                      onClick={() => setOpen(!open)}
                    >
                      {menu.icon}
                    </span>
                    <span
                      className={`flex-1 text-base font-medium duration-200 ${
                        !open && "hidden"
                      }`}
                    >
                      {menu.title}
                    </span>
                  </NavLink>
                );
              }
            }
          })}
          {/* </ul> */}
        </div>
      </div>
      <div className="flex-1">
        <div className="w-full h-10">
          <div className="flex justify-between pr-4">
            {/* <div className="flex items-center pl-8 rounded-md p-2.5">
                            Path
                        </div> */}
            <div className="flex items-center py-4 pl-8 rounded-md p-2.5">
              <label for="table-search" className="text-gray-900 sr-only">
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
                  className="block p-2 pl-10 text-sm text-gray-900 bg-white border rounded-lg shadow-md w-80 border-1 focus:border-2"
                  placeholder="Search"
                />
              </div>
            </div>
            <div
              className="flex justify-center p-2.5 dropdown dropdown-hover"
              onMouseLeave={handleDropdownMouseLeave}
            >
              {/* <p className="text-xl text-slate-700 p-2.5">Hi,User</p> */}
              <button
                onClick={handleImageClick}
                className="pl-2 border border-gray-400 rounded-md shadow-md border-1"
              >
                <h1 className="float-left text-base font-bold text-gray-900 text-end">
                  Xin chào, {userInfo ? userInfo.fullName : "ABC"}
                </h1>
                <svg
                  className="w-4 h-4 mx-1.5 m-1"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>

              {showDropdown && (
                <div className="absolute z-50 py-2 duration-200 bg-white border border-gray-400 rounded-lg shadow-lg right-4 top-16 border-1">
                  <button className="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-green-100 hover:rounded-md hover:text-gray-950">
                    <Link to="Home/User">Hồ sơ cá nhân</Link>
                  </button>
                  <button
                    className="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-red-500 hover:rounded-md hover:text-gray-100"
                    onClick={handleLogoutClick}
                  >
                    Đăng xuất
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="p-7">
          <Routes>
            <Route path="Home/Dashboard" element={<Dashboard />} />
            <Route
              path="Home/ProcessManager"
              element={
                <ProcessManager title="Trang chủ / Quản lý tiến trình" />
              }
            />
            <Route path="Home/SubjectManager" element={<SubjectManager />} />
            <Route path="Home/TeacherManager" element={<TeacherManager />} />
            <Route path="Home/User" element={<UserProfile />} />
            <Route path="Home/SubjectManager_Teacher_role" element={<SubjectManagerTeacherRole />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Home;
