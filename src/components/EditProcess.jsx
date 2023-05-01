import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import React, { useEffect, useState } from 'react';
import { API_ROUTES, axiosInstance } from '../cons';

const EditProcess = ({ visible, onClose, process }) => {
    const [processName, setProcessName] = useState('');
    const [semesterTotal, setSemesterTotal] = useState(0);
    const [semesters, setSemesters] = useState([]);
    const [semester, setSemester] = useState(0);
    const [subjects, setSubjects] = useState([]);

    useEffect(() => {
        axiosInstance
            .get(API_ROUTES.getSubjects, {
                headers: {
                    Authorization: 'bearer ' + sessionStorage.getItem('token'),
                },
            })
            .then((data) => {
                let lst = [];

                for (let item of data.data) {
                    if (!item.requestUserMail) {
                        lst.push(item);
                    }
                }

                setSubjects(lst);
            });
    }, []);

    useEffect(() => {
        setProcessName(process.name);

        if (process.subjectCurriculumModels)
            setSemesterTotal(process.subjectCurriculumModels.length);

        setSemesters(process.subjectCurriculumModels);
    }, [process.name, process.subjectCurriculumModels]);

    const handleUpdate = () => {
        let cirObj = {
            id: process.id,
            name: processName,
            subjectCurriculumModels: semesters,
        };

        axiosInstance
            .put(API_ROUTES.updateProcess, cirObj, {
                headers: {
                    Authorization: 'bearer ' + sessionStorage.getItem('token'),
                },
            })
            .then((data) => alert(data.data))
            .catch((err) => {
                alert(err.response.data);
            });
    };

    if (!visible) return null;
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm ">
            <div className="flex-row w-[95%] h-[700px] bg-white  overflow-auto  rounded ">
                <div className="sticky top-0 z-40 flex justify-between w-full bg-black p-2.5">
                    <h1 className="pl-4 text-2xl text-white">
                        Thêm chương trình
                    </h1>
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
                                    value={processName}
                                    onChange={(e) =>
                                        setProcessName(e.target.value)
                                    }
                                />
                            </div>
                            <div className="flex w-1/3 space-x-4">
                                <label>Số học kì</label>
                                <input
                                    type="number"
                                    min={0}
                                    disabled
                                    value={semesterTotal}
                                    className="border-b-2 w-14 focus:outline-none"
                                    onChange={(e) =>
                                        setSemesterTotal(Number(e.target.value))
                                    }
                                />

                                <select
                                    onChange={(e) =>
                                        setSemester(Number(e.target.value))
                                    }
                                    value={semester}
                                >
                                    <option defaultChecked value={0}>
                                        -- Chọn học kì --{' '}
                                    </option>
                                    {semesters &&
                                        semesters.map((value, idx) => (
                                            <option key={idx} value={idx + 1}>
                                                {value.semesterName}
                                            </option>
                                        ))}
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
                            </tr>
                        </thead>
                        <tbody>
                            {subjects.map((data, idx) => {
                                if (semester - 1 === -1)
                                    return (
                                        <tr
                                            key={idx}
                                            className="bg-white border-b hover:bg-gray-50 "
                                        >
                                            <th
                                                scope="row"
                                                className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap "
                                            >
                                                <input
                                                    checked={false}
                                                    type="checkbox"
                                                    onClick={() => {}}
                                                />
                                            </th>
                                            <td className="px-6 py-4">{`${data.name} [${data.id}]`}</td>
                                        </tr>
                                    );

                                // console.log(semesters);
                                let checked = semesters[
                                    semester - 1
                                ].subjectId.includes(data.id);

                                return (
                                    <tr
                                        key={idx}
                                        className="bg-white border-b hover:bg-gray-50 "
                                    >
                                        <th
                                            scope="row"
                                            className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap "
                                        >
                                            <input
                                                checked={checked}
                                                type="checkbox"
                                                onClick={(e) => {
                                                    setSemesters((prev) => {
                                                        let current = [...prev];

                                                        if (!checked) {
                                                            current[
                                                                semester - 1
                                                            ].subjectId.push(
                                                                data.id
                                                            );
                                                        } else {
                                                            let idx = current[
                                                                semester - 1
                                                            ].subjectId.indexOf(
                                                                data.id
                                                            );
                                                            current[
                                                                semester - 1
                                                            ].subjectId.splice(
                                                                idx,
                                                                1
                                                            );
                                                        }

                                                        return current;
                                                    });
                                                }}
                                            />
                                        </th>
                                        <td className="px-6 py-4">{`${data.name} [${data.id}]`}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="sticky bottom-0 flex justify-end w-full bg-gray-300 h-14 p-2.5">
                    <button
                        className="w-48 h-10 p-2 font-semibold text-white bg-green-500 rounded-md hover:bg-green-400"
                        onClick={handleUpdate}
                    >
                        Chỉnh sửa
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditProcess;
