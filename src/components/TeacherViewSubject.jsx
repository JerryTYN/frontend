import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import React, { useState } from "react";
import { Textarea } from "@material-tailwind/react";
const faculties = [
  "Unknow",
  "Công nghệ thông tin",
  "Khoa học máy tính",
  "Kỹ thuật phần mềm",
  "Khoa học dữ liệu",
  "Hệ thống thông tin",
  //   "Công nghệ ô tô",
];
const TeacherViewSubject = ({ visible, onClose }) => {
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
      className: "border border-gray-400",
    },
  ];
  const [tableRowCDR, setTableRowCDR] = useState(rowCDR);
  const addTableRowCDR = () => {
    setTableRowCDR((r) => {
      const lastId = r[r.length - 1].id;
      return [...r, { id: 1, value: "", className: "border border-gray-400" }];
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
      className: "border border-gray-400",
    },
  ];
  const [tableRowKHGD, setTableRowKHGD] = useState(rowKHGD);
  const addTableRowKHGD = () => {
    setTableRowKHGD((r) => {
      const lastId = r[r.length - 1].id;
      return [...r, { id: 1, value: "", className: "border border-gray-400" }];
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
      className: "border border-gray-400",
    },
  ];
  const [tableRowPPDG, setTableRowPPDG] = useState(rowPPDG);
  const addTableRowPPDG = () => {
    setTableRowPPDG((r) => {
      const lastId = r[r.length - 1].id;
      return [...r, { id: 1, value: "", className: "border border-gray-400" }];
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
      className: "border border-gray-400",
    },
  ];
  const [tableRowTPDG, setTableRowTPDG] = useState(rowTPDG);
  const addTableRowTPDG = () => {
    setTableRowTPDG((r) => {
      const lastId = r[r.length - 1].id;
      return [...r, { id: 1, value: "", className: "border border-gray-400" }];
    });
  };
  const deleteTableRowsTPDG = (index) => {
    const rows = [...tableRowTPDG];
    rows.splice(index, 1);
    setTableRowTPDG(rows);
  };
  if (!visible) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm">
      <div className="flex-row w-[1100px] h-[600px] bg-white  overflow-auto  rounded ">
        <div className="sticky top-0 z-40 flex justify-between w-full bg-black p-2.5">
          <h1 className="pl-4 text-2xl text-white">Chỉnh sửa môn học</h1>
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
        <div className="flex flex-col w-full h-full p-6 pt-10 space-y-4">
          <h2 className="text-xl font-bold">Thông tin môn học</h2>
          <div className="flex flex-row justify-center w-full space-x-16 items-left">
            <div className="flex flex-col w-64 ">
              <label>Tên học phần</label>
            </div>
            <div className="flex w-full ">
              <input
                type="text"
                className="w-[354.4px] border-b-2 focus:outline-none"
              />
            </div>
          </div>
          <div className="flex flex-row justify-center w-full space-x-16 items-left ">
            <div className="flex flex-col w-64 ">
              <label>Mã học phần</label>
            </div>
            <div className="flex w-full ">
              <input
                type="text"
                className="w-[354.4px] border-b-2 focus:outline-none"
              />
            </div>
          </div>
          <div className="flex flex-row justify-center w-full space-x-16 items-left">
            <div className="flex flex-col w-64 ">
              <label>Lý thuyết</label>
            </div>
            <div className="flex w-full ">
              <input
                type="number"
                className="w-10 border-b-2 focus:outline-none"
                min={0}
              />
            </div>
          </div>
          <div className="flex flex-row justify-center w-full space-x-16 items-left ">
            <div className="flex flex-col w-64 ">
              <label>Thực hành</label>
            </div>
            <div className="flex w-full ">
              <input
                type="number"
                className="w-10 border-b-2 focus:outline-none"
                min={0}
              />
            </div>
          </div>
          <div className="flex flex-row justify-center w-full space-x-16 items-left ">
            <div className="flex flex-col w-64 ">
              <label>Tự học</label>
            </div>
            <div className="flex w-full ">
              <input
                type="number"
                className="w-10 border-b-2 focus:outline-none"
                min={0}
              />
            </div>
          </div>
          <div className="flex flex-row justify-center w-full space-x-16 items-left ">
            <div className="flex flex-col w-64 ">
              <label>Tổng tín chỉ</label>
            </div>
            <div className="flex w-full ">
              <input
                type="text"
                className="w-10 border-b-2 focus:outline-none"
                disabled
              />
            </div>
          </div>
          <div className="flex flex-row w-full ">
            <div className="flex flex-col w-64 ">
              <label>Giảng viên phụ trách</label>
            </div>
            <div className="flex flex-col space-y-2">
              {arrGVPT.map((item, i) => {
                return (
                  <div className="space-x-6">
                    <input
                      onChange={handleChangeGVPTInput}
                      value={item.value}
                      id={i}
                      type={item.type}
                      size="40"
                      className={item.className}
                    />
                    {item.id === 0 ? (
                      <button
                      disabled
                        className="w-6 h-6 text-center text-green-600 border border-green-600 rounded-lg "
                        onClick={addInputGVPT}
                      >
                        +
                      </button>
                    ) : (
                      <button
                      disabled
                        className="w-6 h-6 text-center text-red-600 border border-red-600 rounded-lg "
                        onClick={() => handleDeleteInputGVPT(i)}
                      >
                        -
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
            {/* <button
              className="w-6 h-6 text-center text-green-600 border border-green-600 rounded-lg "
              onClick={addInputGVPT}
            >
              +
            </button> */}
          </div>
          <div className="flex flex-row w-full ">
            <div className="flex flex-col w-64 ">
              <label>Tài liệu học tập</label>
            </div>
            <div className="flex flex-col space-y-2">
              {arrTLHT.map((item, i) => {
                return (
                  <div className="space-x-6">
                    <input
                      onChange={handleChangeTLHTInput}
                      value={item.value}
                      id={i}
                      type={item.type}
                      size="40"
                      className={item.className}
                    />
                    {item.id === 0 ? (
                      <button
                      disabled
                        className="w-6 h-6 text-center text-green-600 border border-green-600 rounded-lg "
                        onClick={addInputTLHT}
                      >
                        +
                      </button>
                    ) : (
                      <button
                      disabled
                        className="w-6 h-6 text-center text-red-600 border border-red-600 rounded-lg "
                        onClick={() => handleDeleteInputTLHT(i)}
                      >
                        -
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
            {/* <button
              className="w-6 h-6 text-center text-green-600 border border-green-600 rounded-lg "
              onClick={addInputTLHT}
            >
              +
            </button> */}
          </div>
          <h2 className="text-xl font-bold">Thông tin học phần</h2>
          <div className="flex flex-row w-full ">
            <div className="flex flex-col w-64 ">
              <label>Mục tiêu học phần</label>
            </div>
            <div className="flex flex-col space-y-2">
              {arrMTHP.map((item, i) => {
                return (
                  <div className="space-x-6">
                    <input
                      onChange={handleChangeMTHPInput}
                      value={item.value}
                      id={i}
                      type={item.type}
                      size="40"
                      className={item.className}
                    />
                    {item.id === 0 ? (
                      <button
                      disabled
                        className="w-6 h-6 text-center text-green-600 border border-green-600 rounded-lg "
                        onClick={addInputMTHP}
                      >
                        +
                      </button>
                    ) : (
                      <button
                      disabled
                        className="w-6 h-6 text-center text-red-600 border border-red-600 rounded-lg "
                        onClick={() => handleDeleteInputMTHP(i)}
                      >
                        -
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
            {/* <button
              className="w-6 h-6 text-center text-green-600 border border-green-600 rounded-lg "
              onClick={addInputMTHP}
            >
              +
            </button> */}
          </div>
          <div className="flex flex-row items-center justify-center w-full ">
            <div className="flex flex-col w-64 ">
              <label>Mô tả vắn tắt</label>
            </div>
            <div className="flex w-full pl-12">
              <textarea type="text" className="w-full border-2 rounded-md" />
            </div>
          </div>
          <div className="flex flex-row w-full ">
            <div className="flex flex-col w-64 ">
              <label>Học phần học trước</label>
            </div>
            <div className="flex flex-col space-y-2">
              {arrHPHT.map((item, i) => {
                return (
                  <div className="space-x-6">
                    <input
                      onChange={handleChangeHPHTInput}
                      value={item.value}
                      id={i}
                      type={item.type}
                      size="40"
                      className={item.className}
                    />
                    {item.id === 0 ? (
                      <button
                      disabled
                        className="w-6 h-6 text-center text-green-600 border border-green-600 rounded-lg "
                        onClick={addInputHPHT}
                      >
                        +
                      </button>
                    ) : (
                      <button
                      disabled
                        className="w-6 h-6 text-center text-red-600 border border-red-600 rounded-lg "
                        onClick={() => handleDeleteInputHPHT(i)}
                      >
                        -
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
            {/* <button
              className="w-6 h-6 text-center text-green-600 border border-green-600 rounded-lg "
              onClick={addInputHPHT}
            >
              +
            </button> */}
          </div>
          <div className="flex flex-row w-full ">
            <div className="flex flex-col w-64 ">
              <label>Học phần tiên quyết</label>
            </div>
            <div className="flex flex-col space-y-2">
              {arrHPTQ.map((item, i) => {
                return (
                  <div className="space-x-6">
                    <input
                      onChange={handleChangeHPTQInput}
                      value={item.value}
                      id={i}
                      type={item.type}
                      size="40"
                      className={item.className}
                    />
                    {item.id === 0 ? (
                      <button
                      disabled
                        className="w-6 h-6 text-center text-green-600 border border-green-600 rounded-lg "
                        onClick={addInputHPTQ}
                      >
                        +
                      </button>
                    ) : (
                      <button
                      disabled
                        className="w-6 h-6 text-center text-red-600 border border-red-600 rounded-lg "
                        onClick={() => handleDeleteInputHPTQ(i)}
                      >
                        -
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
            {/* <button
              className="w-6 h-6 text-center text-green-600 border border-green-600 rounded-lg "
              onClick={addInputHPTQ}
            >
              +
            </button> */}
          </div>
          <div className="flex flex-row w-full ">
            <div className="flex flex-col w-64 ">
              <label>Học phần song hành</label>
            </div>
            <div className="flex flex-col space-y-2">
              {arrHPSH.map((item, i) => {
                return (
                  <div className="space-x-6">
                    <input
                      onChange={handleChangeHPSHInput}
                      value={item.value}
                      id={i}
                      type={item.type}
                      size="40"
                      className={item.className}
                    />
                    {item.id === 0 ? (
                      <button
                      disabled
                        className="w-6 h-6 text-center text-green-600 border border-green-600 rounded-lg "
                        onClick={addInputHPSH}
                      >
                        +
                      </button>
                    ) : (
                      <button
                      disabled
                        className="w-6 h-6 text-center text-red-600 border border-red-600 rounded-lg "
                        onClick={() => handleDeleteInputHPSH(i)}
                      >
                        -
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
            {/* <button
              className="w-6 h-6 text-center text-green-600 border border-green-600 rounded-lg "
              onClick={addInputHPSH}
            >
              +
            </button> */}
          </div>
          <div className="flex flex-row items-center justify-center w-full ">
            <div className="flex flex-col w-64 ">
              <label>Yêu cầu khác</label>
            </div>
            <div className="flex w-full pl-12">
              <textarea type="text" className="w-full border-2 rounded-md" />
            </div>
          </div>
          <h2 className="text-xl font-bold">Chuẩn đầu ra môn học</h2>
          <div className="flex flex-col justify-between w-full space-y-2">
            <div className="flex flex-row w-full">
              <div className="relative w-[1100px]">
                <table className="w-full text-sm border border-gray-400">
                  <thead className="border border-gray-400">
                    <tr>
                      <th scope="col" className="px-1 border border-gray-400 ">
                        CLOs
                      </th>
                      <th
                        scope="col"
                        className="relative pr-40 border border-gray-400 "
                      >
                        Chuẩn đầu ra của học phần
                      </th>

                      <th scope="col " className="border border-gray-400 ">
                        SO/PI
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm border border-gray-400 ">
                    {tableRowCDR.map((item, i) => {
                      return (
                        <tr id={i} className={item.className}>
                          <td
                            scope="row"
                            className="w-10 font-medium text-center border border-gray-400 "
                          >
                            {i + 1}
                          </td>
                          <td className=" border pt-2 relative w-[800px] border-gray-400  ">
                            {/* <ReactQuill
                              theme="snow"
                              // value={value}
                              onChange={setChuanDauRa}
                            /> */}
                            <textarea className="w-full break-all"></textarea>
                          </td>

                          <td className="relative flex w-40 pt-2">
                            <textarea rows="auto" cols="auto" />
                          </td>

                          <td className="border border-gray-400 ">
                            {item.id === 0 ? (
                              <button
                              disabled
                                className="w-6 h-6 text-center text-green-600 border border-green-600 rounded-lg "
                                onClick={addTableRowCDR}
                              >
                                +
                              </button>
                            ) : (
                              <button
                              disabled
                                className="w-6 h-6 text-center text-red-600 border border-red-600 rounded-lg "
                                onClick={() => deleteTableRowsCDR(i)}
                              >
                                -
                              </button>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                {/* <button
                  className="w-12 font-bold bg-gray-700 text-gray-50 rounded-b-md"
                  onClick={addTableRowCDR}
                >
                  +
                </button> */}
              </div>
            </div>
            <h2 className="text-xl font-bold">
              Nội dung học phần và kế hoạch giảng dạy
            </h2>
            <div className="flex flex-row w-full">
              <div className="w-[1100px] relative flex flex-col text-sm text-gray-500">
                <table className="w-full text-sm border border-gray-400">
                  <thead className="border border-gray-400">
                    <tr>
                      <th scope="col" className="px-1 border border-gray-400 ">
                        STT
                      </th>

                      <th scope="col " className="border border-gray-400 ">
                        Nội dung giảng dạy
                      </th>
                      <th scope="col " className="border border-gray-400 ">
                        Số tiết
                      </th>
                      <th scope="col " className="border border-gray-400 ">
                        CLOs
                      </th>
                      <th scope="col " className="border border-gray-400 ">
                        Phương pháp dạy
                      </th>
                      <th scope="col " className="border border-gray-400 ">
                        Nội dung và hướng dẫn tự học
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm border border-gray-400 ">
                    {tableRowKHGD.map((item, i) => {
                      return (
                        <tr id={i} className={item.className}>
                          <th
                            scope="row"
                            className="w-10 font-medium border border-gray-400"
                          >
                            {i + 1}
                          </th>
                          <td className="relative break-all border border-gray-400 w-96">
                            <ReactQuill
                              theme="snow"
                              // value={value}
                              onChange={setNoiDungGD}
                            />
                          </td>
                          <td className="relative w-12 p-2 break-all">
                            <input
                              type="number"
                              min={0}
                              className="w-10 text-center border-b-2 focus:outline-none"
                            />
                          </td>
                          <td className="relative w-24 p-2 break-all border border-gray-400">
                            <input
                              type="text"
                              className="w-full border-b-2 focus:outline-none"
                            />
                          </td>
                          <td className="relative w-40 p-2 break-all border border-gray-400">
                            <input
                              type="text"
                              className="w-full border-b-2 focus:outline-none"
                            />
                          </td>
                          <td className="relative p-2 break-all border border-gray-400 w-72">
                            <ReactQuill
                              theme="snow"
                              // value={value}
                              onChange={setNoiDungGD}
                            />
                          </td>
                          <td className="border-none">
                            {item.id === 0 ? (
                              <button
                              disabled
                                className="w-6 h-6 text-center text-green-600 border border-green-600 rounded-lg "
                                onClick={addTableRowKHGD}
                              >
                                +
                              </button>
                            ) : (
                              <button
                              disabled
                                className="w-6 h-6 text-center text-red-600 border border-red-600 rounded-lg "
                                onClick={() => deleteTableRowsKHGD(i)}
                              >
                                -
                              </button>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                {/* <button
                  className="w-10 font-bold bg-gray-700 text-gray-50 rounded-b-md"
                  onClick={addTableRowKHGD}
                >
                  +
                </button> */}
              </div>
            </div>
            <h2 className="text-xl font-bold">Phương pháp đánh giá</h2>
            <h3>a. Phương pháp đánh giá các chuẩn đầu ra của học phần</h3>
            <div className="flex flex-row w-full">
              <div className=" relative w-[1100px] flex flex-col text-sm text-gray-500">
                <table className="w-full text-sm border border-gray-400">
                  <thead className="border border-gray-400">
                    <tr>
                      <th scope="col" className="px-1 border border-gray-400 ">
                        CLOs
                      </th>

                      <th scope="col " className="border border-gray-400 ">
                        Bài kiểm tra
                      </th>
                      <th scope="col " className="border border-gray-400 ">
                        Phương pháp đánh giá
                      </th>
                      <th scope="col " className="border border-gray-400 ">
                        Tỉ trọng (%)
                      </th>
                      <th scope="col " className="border border-gray-400 ">
                        Chỉ tiêu (%)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm border border-gray-400 ">
                    {tableRowPPDG.map((item, i) => {
                      return (
                        <tr id={i} className={item.className}>
                          <th
                            scope="row"
                            className="w-10 p-2 font-medium border border-gray-400"
                          >
                             <input
                              type="number"
                              className="w-full text-center border-b-2 focus:outline-none"       min={0}
                            />
                          </th>
                          <td className="relative p-2 break-all border border-gray-400 w-96">
                            <input
                              type="text"
                              className="w-full border-b-2 focus:outline-none"
                            />
                          </td>
                          <td className="relative break-all border border-gray-400 w-[500px] p-2">
                            <input
                              type="text"
                              className="w-full border-b-2 focus:outline-none"
                            />
                          </td>
                          <td className="relative w-32 p-2 break-all border border-gray-400">
                            <input
                              type="number"
                              className="w-full border-b-2 focus:outline-none"       min={0}
                            />
                          </td>
                          <td className="relative w-32 p-2 break-all border border-gray-400">
                            <input
                              type="number"
                              className="w-full border-b-2 focus:outline-none"       min={0}
                            />
                          </td>
                          <td className="border border-gray-400 ">
                            {item.id === 0 ? (
                              <button
                              disabled
                                className="w-6 h-6 text-center text-green-600 border border-green-600 rounded-lg "
                                onClick={addTableRowPPDG}
                              >
                                +
                              </button>
                            ) : (
                              <button
                              disabled
                                className="w-6 h-6 text-center text-red-600 border border-red-600 rounded-lg "
                                onClick={() => deleteTableRowsPPDG(i)}
                              >
                                -
                              </button>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                {/* <button
                  className="w-12 font-bold bg-gray-700 text-gray-50 rounded-b-md"
                  onClick={addTableRowPPDG}
                >
                  +
                </button> */}
              </div>
            </div>
            <h3>b.Các thành phần đánh giá</h3>
            <div className="flex flex-row w-full">
              <div className=" relative w-[1100px] flex flex-col text-sm text-gray-500">
                <table className="w-full text-sm border border-gray-400">
                  <thead className="border border-gray-400">
                    <tr>
                      <th scope="col" className="px-1 border border-gray-400 ">
                        Phương pháp
                      </th>

                      <th scope="col " className="border border-gray-400 ">
                        Phương pháp đánh giá
                      </th>

                      <th scope="col " className="border border-gray-400 ">
                        Tỉ trọng (%)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm border border-gray-400 ">
                    {tableRowTPDG.map((item, i) => {
                      return (
                        <tr id={i} className={item.className}>
                          <th
                            scope="row"
                            className="p-2 font-medium border border-gray-400 w-82"
                          >
                             <textarea
                              type="text"
                              className="w-full"
                            ></textarea>
                          </th>
                          <td className="relative break-all border border-gray-400 w-[510px] p-2">
                           
                            <ReactQuill
                              theme="snow"
                              // value={value}
                              onChange={setPhuongPhap}
                            />
                          </td>
                          <td className="relative w-24 p-2 break-all border border-gray-400">
                            <input
                              type="number"
                              className="w-full border-b-2 focus:outline-none "
                              min={0}
                            />
                          </td>

                          <td className="w-5 border-none">
                            {item.id === 0 ? (
                              <button
                              disabled
                                className="w-6 h-6 text-center text-green-600 border border-green-600 rounded-lg "
                                onClick={addTableRowTPDG}
                              >
                                +
                              </button>
                            ) : (
                              <button
                              disabled
                                className="w-6 h-6 text-center text-red-600 border border-red-600 rounded-lg "
                                onClick={() => deleteTableRowsTPDG(i)}
                              >
                                -
                              </button>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                {/* <button
                  className="w-10 font-bold bg-gray-700 text-gray-50 rounded-b-md"
                  onClick={addTableRowTPDG}
                >
                  +
                </button> */}
              </div>
            </div>
            <h3>c.Thang điểm đánh giá: Học theo chế tín chỉ</h3>
          </div>
          <div className="flex items-center justify-end pb-8 space-x-6">
            <button disabled className="w-[90px] h-12 border rounded-lg text-center bg-green-500 border-gray-100 text-gray-50 font-semibold ">
              Lưu
            </button>
            {/* <button className="w-[90px] text-gray-50 h-12 bg-red-500 border rounded-lg text-center border-gray-100 hover:bg-blue-300 hover:text-gray-800 font-semibold">
              Hủy
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherViewSubject;
