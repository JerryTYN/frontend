import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import React, { useState } from "react";
import { Textarea } from "@material-tailwind/react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdOutlineLockReset } from "react-icons/md";
const faculties = [
  "Unknow",
  "Công nghệ thông tin",
  "Khoa học máy tính",
  "Kỹ thuật phần mềm",
  "Khoa học dữ liệu",
  "Hệ thống thông tin",
  //   "Công nghệ ô tô",
];
const EditProcess = ({ visible, onClose }) => {
  const [chuanDauRa, setChuanDauRa] = useState("");
  const [noiDungGD, setNoiDungGD] = useState("");
  const [noiDungHD, setNoiDungHD] = useState("");
  const [phuongPhap, setPhuongPhap] = useState("");

  const tlht = [
    {
      type: "text",
      id: 0,
      value: "",
      className: "border-b-2 focus:outline-none",
    },
  ];
  const [arrTLHT, setArrTLHT] = useState(tlht);
  const addInputTLHT = () => {
    setArrTLHT((s) => {
      const lastId = s[s.length - 1].id;
      return [
        ...s,
        {
          type: "text",
          value: "",
          className: "border-b-2 focus:outline-none",
        },
      ];
    });
  };
  const handleDeleteInputTLHT = (index) => {
    setArrTLHT((s) => {
      const newArr = [...s];
      newArr.splice(index, 1);
      return newArr;
    });
  };
  const handleChangeTLHTInput = (e) => {
    e.preventDefault();

    const index = e.target.id;
    setArrTLHT((s) => {
      const newArr = s.slice();
      newArr[index].value = e.target.value;

      return newArr;
    });
  };

  const gvpt = [
    {
      type: "text",
      id: 0,
      value: "",
      className: "border-b-2  focus:outline-none",
    },
  ];
  const [arrGVPT, setArrGVPT] = useState(gvpt);

  const addInputGVPT = () => {
    setArrGVPT((s) => {
      const lastId = s[s.length - 1].id;
      return [
        ...s,
        {
          type: "text",
          value: "",
          className: "border-b-2  focus:outline-none",
        },
      ];
    });
  };
  const handleDeleteInputGVPT = (index) => {
    setArrGVPT((s) => {
      const newArr = [...s];
      newArr.splice(index, 1);
      return newArr;
    });
  };
  const handleChangeGVPTInput = (e) => {
    e.preventDefault();

    const index = e.target.id;
    setArrGVPT((s) => {
      const newArr = s.slice();
      newArr[index].value = e.target.value;

      return newArr;
    });
  };
  const mthp = [
    {
      type: "text",
      id: 0,
      value: "",
      className: "border-b-2 focus:outline-none",
    },
  ];
  const [arrMTHP, setArrMTHP] = useState(mthp);

  const addInputMTHP = () => {
    setArrMTHP((s) => {
      const lastId = s[s.length - 1].id;
      return [
        ...s,
        {
          type: "text",
          value: "",
          className: "border-b-2  focus:outline-none",
        },
      ];
    });
  };
  const handleDeleteInputMTHP = (index) => {
    setArrMTHP((s) => {
      const newArr = [...s];
      newArr.splice(index, 1);
      return newArr;
    });
  };
  const handleChangeMTHPInput = (e) => {
    e.preventDefault();

    const index = e.target.id;
    setArrMTHP((s) => {
      const newArr = s.slice();
      newArr[index].value = e.target.value;

      return newArr;
    });
  };

  const hpht = [
    {
      type: "text",
      id: 0,
      value: "",
      className: "border-b-2 focus:outline-none",
    },
  ];
  const [arrHPHT, setArrHPHT] = useState(hpht);

  const addInputHPHT = () => {
    setArrHPHT((s) => {
      const lastId = s[s.length - 1].id;
      return [
        ...s,
        {
          type: "text",
          value: "",
          className: "border-b-2  focus:outline-none",
        },
      ];
    });
  };
  const handleDeleteInputHPHT = (index) => {
    setArrHPHT((s) => {
      const newArr = [...s];
      newArr.splice(index, 1);
      return newArr;
    });
  };
  const handleChangeHPHTInput = (e) => {
    e.preventDefault();

    const index = e.target.id;
    setArrHPHT((s) => {
      const newArr = s.slice();
      newArr[index].value = e.target.value;

      return newArr;
    });
  };
  const hptq = [
    {
      type: "text",
      id: 0,
      value: "",
      className: "border-b-2  focus:outline-none",
    },
  ];
  const [arrHPTQ, setArrHPTQ] = useState(hptq);

  const addInputHPTQ = () => {
    setArrHPTQ((s) => {
      const lastId = s[s.length - 1].id;
      return [
        ...s,
        {
          type: "text",
          value: "",
          className: "border-b-2  focus:outline-none",
        },
      ];
    });
  };
  const handleDeleteInputHPTQ = (index) => {
    setArrHPTQ((s) => {
      const newArr = [...s];
      newArr.splice(index, 1);
      return newArr;
    });
  };
  const handleChangeHPTQInput = (e) => {
    e.preventDefault();

    const index = e.target.id;
    setArrHPTQ((s) => {
      const newArr = s.slice();
      newArr[index].value = e.target.value;

      return newArr;
    });
  };

  const hpsh = [
    {
      type: "text",
      id: 0,
      value: "",
      className: "border-b-2 focus:outline-none",
    },
  ];
  const [arrHPSH, setArrHPSH] = useState(hpsh);

  const addInputHPSH = () => {
    setArrHPSH((s) => {
      const lastId = s[s.length - 1].id;
      return [
        ...s,
        {
          type: "text",
          value: "",
          className: "border-b-2  focus:outline-none",
        },
      ];
    });
  };
  const handleDeleteInputHPSH = (index) => {
    setArrHPSH((s) => {
      const newArr = [...s];
      newArr.splice(index, 1);
      return newArr;
    });
  };
  const handleChangeHPSHInput = (e) => {
    e.preventDefault();

    const index = e.target.id;
    setArrHPSH((s) => {
      const newArr = s.slice();
      newArr[index].value = e.target.value;

      return newArr;
    });
  };

  const rowCDR = [
    {
      id: 0,
      value: "",
      className: "",
    },
  ];
  const [tableRowCDR, setTableRowCDR] = useState(rowCDR);
  const addTableRowCDR = () => {
    setTableRowCDR((r) => {
      const lastId = r[r.length - 1].id;
      return [...r, { id: 1, value: "", className: "" }];
    });
  };
  const deleteTableRowsCDR = (index) => {
    const rows = [...tableRowCDR];
    rows.splice(index, 1);
    setTableRowCDR(rows);
  };
  const rowKHGD = [
    {
      id: 0,
      value: "",
      className: "",
    },
  ];
  const [tableRowKHGD, setTableRowKHGD] = useState(rowKHGD);
  const addTableRowKHGD = () => {
    setTableRowKHGD((r) => {
      const lastId = r[r.length - 1].id;
      return [...r, { id: 1, value: "", className: "" }];
    });
  };
  const deleteTableRowsKHGD = (index) => {
    const rows = [...tableRowKHGD];
    rows.splice(index, 1);
    setTableRowKHGD(rows);
  };
  const rowPPDG = [
    {
      id: 0,
      value: "",
      className: "",
    },
  ];
  const [tableRowPPDG, setTableRowPPDG] = useState(rowPPDG);
  const addTableRowPPDG = () => {
    setTableRowPPDG((r) => {
      const lastId = r[r.length - 1].id;
      return [...r, { id: 1, value: "", className: "" }];
    });
  };
  const deleteTableRowsPPDG = (index) => {
    const rows = [...tableRowPPDG];
    rows.splice(index, 1);
    setTableRowPPDG(rows);
  };

  const rowTPDG = [
    {
      id: 0,
      value: "",
      className: "",
    },
  ];
  const [tableRowTPDG, setTableRowTPDG] = useState(rowTPDG);
  const addTableRowTPDG = () => {
    setTableRowTPDG((r) => {
      const lastId = r[r.length - 1].id;
      return [...r, { id: 1, value: "", className: "" }];
    });
  };
  const deleteTableRowsTPDG = (index) => {
    const rows = [...tableRowTPDG];
    rows.splice(index, 1);
    setTableRowTPDG(rows);
  };
  if (!visible) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm ">
      <div className="flex-row w-[95%] h-[700px] bg-white  overflow-auto  rounded ">
        <div className="sticky top-0 z-40 flex justify-between w-full bg-black p-2.5">
          <h1 className="pl-4 text-2xl text-white">Chỉnh sửa chương trình</h1>
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
        <div className="flex flex-col w-full h-full p-6 space-y-4">
          {/* <h2 className="text-xl font-bold">Thông tin môn học</h2> */}
          <div className="flex flex-row justify-center w-full space-x-16 items-left">
            <div className="flex items-center justify-center w-full space-x-4">
              <div className="flex w-[500px] space-x-4">
                <label>Tên chương trình</label>
                <input
                  type="text"
                  className="w-[354.4px] border-b-2 focus:outline-none"
                />
              </div>
              <div className="flex w-1/3 space-x-4">
                <label>Số học kì</label>
                <input
                  type="number"
                  min={0}
                  className="border-b-2 w-14 focus:outline-none"
                />

                <select>
                  <option>-- Chọn học kì --</option>
                  <option>Học kì 1</option>
                  <option>Học kì 1</option>
                  <option>Học kì 1</option>
                </select>
              </div>
            </div>
          </div>
          {/* </div>
        <div className="flex flex-col w-full h-full p-6 pt-10 space-y-4"> */}
          <table className="w-full text-sm text-left text-gray-500 ">
            <thead className="sticky top-0 text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th className="px-6 py-3">
                  <input type="checkbox" />
                </th>
                <th scope="col" className="px-6 py-3">
                  Tên môn học
                </th>
                {/* <th scope="col" className="px-6 py-3">
                                inpu
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Ngày sinh
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Nơi sinh
                            </th>
                            <th scope="col" className="px-12 py-3">
                                ●●●
                            </th> */}
              </tr>
            </thead>
            <tbody>
              {/* {users
                            .filter((u) =>
                                u.fullName
                                    .toLowerCase()
                                    .includes(searchUser.toLowerCase())
                            )
                            .map((u, index) => ( */}
              <tr className="bg-white border-b hover:bg-gray-50 ">
                <th
                  scope="row"
                  className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap "
                >
                  <input type="checkbox" />
                </th>
                <td className="px-6 py-4">Môn học</td>
              </tr>
              {/* ))} */}
            </tbody>
          </table>
        </div>
        <div className="sticky bottom-0 flex justify-end w-full bg-gray-300 h-14 p-2.5">
          <button className="w-48 h-10 p-2 font-semibold text-white bg-green-500 rounded-md hover:bg-green-400">Lưu chỉnh sửa</button>
        </div>
      </div>
    </div>
  );
};

export default EditProcess;
