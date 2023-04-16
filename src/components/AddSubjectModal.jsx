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
const AddSubjectModal = ({ visible, onClose }) => {
  if (!visible) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm">
      <div className="flex w-[1100px] h-[600px] bg-stone-50 overflow-auto">
        <div className="flex-1 p-4 space-y-6">
          <div className="flex justify-between w-full gap-6">
            <div className="space-x-4">
              <label>Tên học phần</label>
              <input className="border-b border-gray-500 w-96 focus:outline-none" />
            </div>
            <div className="space-x-4">
              <label>Mã học phần</label>
              <input className="border-b border-gray-500 w-96 focus:outline-none" />
            </div>
          </div>
          <div className="flex pl-8">
            <div className="space-x-4 ">
              <label>Lý thuyết</label>
              <input className="w-10 border-b border-gray-500 focus:outline-none" />
              <label>Thực hành</label>
              <input className="w-10 border-b border-gray-500 focus:outline-none" />
              <label>Tự học</label>
              <input className="w-10 border-b border-gray-500 focus:outline-none" />
              <label>Tổng tín chỉ</label>
              <input className="w-10 border-b border-gray-500 focus:outline-none" />
            </div>
          </div>
          <div>
            <label>
                Giảng viên phụ trách
            </label>
          </div>
          <div>2</div>
          <div>2</div>
          <div>2</div>
          <div>2</div>
          <div>2</div>
          <div>2</div>
          <div>2</div>
          <div>2</div>
          <div>2</div>
          <div>2</div>
          <div>2</div>
          <div>2</div>
          <div>2</div>
          <div>2</div>
          <div>2</div>
          <div>2</div>
          <div>2</div>
          <div>2</div>
          <div>2</div>
          <div>2</div>
          <div>2</div>
          <div>2</div>
          <div>2</div>
          <div>2</div>
          <div>2</div>
          <div>2</div>
          <div>2</div>
          <div>2</div>
          <div>2</div>
          <div>2</div>
          <div>2</div>
          <div>2</div>
          <div>2</div>
          <div>2</div>
          <div>2</div>
        </div>
      </div>
    </div>
  );
};

export default AddSubjectModal;
