import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import TeacherCreateSubject from "./TeacherCreateSubject";

import {
  faBell,
  faCoffee,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import { API_ROUTES, axiosInstance } from "../cons";
import TeacherViewSubject from "./TeacherViewSubject";

const icons = [faCoffee, faBell, faEnvelope];
const SubjectManagerTeacherRole = () => {
  const [teacherCreateSJModal, setTeacherCreateSJModal] = useState(false);
  const [teacherViewSJModal, setTeacherViewSJModal] = useState(false);
  const [sj, setSj] = useState();
  const handleCloseModal = () => {
    setTeacherCreateSJModal(false);
    setTeacherViewSJModal(false);
  };
  const randomIndex = Math.floor(Math.random() * icons.length);
  const icon = icons[1];
  const badgeNumber = 2;
  const hasBadge = badgeNumber > 0;
  // const [selectedSubject, setSelectedSubject] = useState(null);


  const getSubjectHandler = (sj) => {
    // setSelectedSubject(sj.name);

    axiosInstance
      .get(API_ROUTES.getSubject + `?id=${sj}`, {
        headers: {
          Authorization: "bearer " + sessionStorage.getItem("token"),
        },
      })
      .then((data) => setSj(data.data.result))
      .catch((err) => console.log(err));
  };


  const iconClassNames = classNames("text-gray-400", "text-xl", "mr-2");

  const [subjects, setSubjects] = useState([]);
  useEffect(() => {
    axiosInstance
      .get(API_ROUTES.getSubjects, {
        headers: {
          Authorization: "bearer " + sessionStorage.getItem("token"),
        },
      })
      .then((data) => {
        // let lst = [];

        // for (let item of data.data) {
        //   if (!item.requestUserMail) {
        //     lst.push(item);
        //   }
        // }
        console.log("Data", data.data);
        setSubjects(data.data);
        console.log(typeof subjects);
        // console.log("1",subjects)
      });
  }, []);
  return (
    <div className="w-full h-[600px]  flex   p-2 space-y-8">
      <div className="fixed flex items-center mr-2 right-4 hover:cursor-pointer">
        <div className="relative">
          <div
            title={
              hasBadge ? `Bạn có ${badgeNumber} yêu cầu từ Trưởng bộ môn` : ""
            }
          >
            <FontAwesomeIcon icon={icon} className={iconClassNames} />
            {hasBadge && (
              <div className="absolute flex items-center justify-center w-4 h-4 text-xs text-white transform bg-red-500 rounded-full -translate-y-1/6 -translate-x-1/4 -top-1 -right-1">
                {badgeNumber}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex w-full">
        <div className="flex-col w-1/2 overflow-auto ">
          <div className="w-full">
            <table>
              <thead className="sticky top-0">
                <tr className="bg-gray-300">
                  <th>Danh sách môn học</th>
                </tr>
                <tr className="flex bg-gray-200 ">
                  <th className="w-32 border border-gray-700">Mã môn học</th>
                  <th className="border border-gray-700 w-72">Tên môn học</th>
                  <th className="flex-1 border border-gray-700">
                    Tổng tín chỉ
                  </th>
                </tr>
              </thead>
              <tbody>
                {subjects.map((subject) => {
                  return (
                    <tr
                      className="flex hover:bg-gray-100 hover:cursor-pointer"
                      onClick={() => {
                        getSubjectHandler(subject.id);
                        setTeacherViewSJModal(true);
                      }}
                    >
                      <td className="w-32 border border-gray-700">
                        {subject.id}
                      </td>
                      <td className="border border-gray-700 w-72">
                        {subject.name}
                      </td>
                      <td className="flex-1 border border-gray-700">
                        {subject.totalCredits}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex-col w-1/2 overflow-auto ">
          <div className="w-full ">
            <table className="w-full">
              <thead className="sticky top-0 w-full ">
                <tr className="bg-gray-300">
                  <th>Danh sách yêu cầu</th>
                </tr>
                <tr className="flex bg-gray-200">
                  <th className="w-32 border border-gray-700">Mã môn học</th>
                  <th className="w-full border border-gray-700">Tên môn học</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  className="flex hover:bg-gray-100 hover:cursor-pointer"
                  onClick={() => setTeacherCreateSJModal(true)}
                >
                  <td className="w-32 border border-gray-700">Mã môn học</td>
                  <td className="w-full border border-gray-700">Tên môn học</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <TeacherCreateSubject
          visible={teacherCreateSJModal}
          onClose={handleCloseModal}
        />
        <TeacherViewSubject
          visible={teacherViewSJModal}
          onClose={handleCloseModal}
          sj={sj}
        />
      </div>
    </div>
  );
};

export default SubjectManagerTeacherRole;