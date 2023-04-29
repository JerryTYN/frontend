import React, { useState } from "react";
import TeacherCreateSubject from "./TeacherCreateSubject";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCoffee,
  faBell,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";

const icons = [faCoffee, faBell, faEnvelope];
const SubjectManagerTeacherRole = () => {
  const [teacherCreateSJModal, setTeacherCreateSJModal] = useState(false);
  const handleCloseModal = () => {
    setTeacherCreateSJModal(false);
  };
  const randomIndex = Math.floor(Math.random() * icons.length);
  const icon = icons[1];
  const badgeNumber = 2;
  const hasBadge = badgeNumber > 0;

  const iconClassNames = classNames("text-gray-400", "text-xl", "mr-2");
  return (
    <div className="w-full h-[600px]  flex   p-2 space-y-8">
      <div className="fixed flex items-center mr-2 right-4">
        <div className="relative">
          <div title={hasBadge ? `Bạn có ${badgeNumber} yêu cầu từ Trưởng bộ môn` : ""}>
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
                <tr className="flex">
                  <td className="w-32 border border-gray-700">Mã môn học</td>
                  <td className="border border-gray-700 w-72">Tên môn học</td>
                  <td className="flex-1 border border-gray-700">
                    Tổng tín chỉ
                  </td>
                </tr>
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
      </div>
    </div>
  );
};

export default SubjectManagerTeacherRole;
