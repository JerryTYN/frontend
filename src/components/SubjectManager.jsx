import React, { useEffect, useState } from 'react';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import MyDocument from './MyDocument';
import AddSubjectModal from './AddSubjectModal';
import { API_ROUTES, axiosInstance } from '../cons';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import UpdateSubjectModal from './UpdateSubjectModal';
import CloneSubjectModal from './CloneSubjectModal';
const SubjectManager = () => {
    const [addSubjectModal, setAddSubjectModal] = useState(false);

    const [subjects, setSubjects] = useState([]);
    const [subject, setSubject] = useState();

    useEffect(() => {
        axiosInstance
            .get(API_ROUTES.getSubjects, {
                headers: {
                    Authorization: 'bearer ' + sessionStorage.getItem('token'),
                },
            })
            .then((data) => {
                setSubjects(data.data);
            });
    }, []);

    const [updateSubjectModal, setUpdateSubjectModal] = useState(false);
    const [cloneSubjectModal, setCloneSubjectModal] = useState(false);
    const handleCloseModal = () => {
        setAddSubjectModal(false);
        setUpdateSubjectModal(false);
        setCloneSubjectModal(false);

        axiosInstance
            .get(API_ROUTES.getSubjects, {
                headers: {
                    Authorization: 'bearer ' + sessionStorage.getItem('token'),
                },
            })
            .then((data) => {
                setSubjects(data.data);
            });
    };
    const [selectedSubject, setSelectedSubject] = useState(null);

    const getSubjectHandler = (sj) => {
        setSelectedSubject(sj.name);

        axiosInstance
            .get(API_ROUTES.getSubject + `?id=${sj.id}`, {
                headers: {
                    Authorization: 'bearer ' + sessionStorage.getItem('token'),
                },
            })
            .then((data) => setSubject(data.data.result))
            .catch((err) => console.log(err));
    };

    const handleDeleteSubject = () => {
        if (subject) {
            axiosInstance
                .delete(API_ROUTES.deleteSubject + `?id=${subject.id}`, {
                    headers: {
                        Authorization:
                            'bearer ' + sessionStorage.getItem('token'),
                    },
                })
                .then((data) => {
                    alert(data.data);
                    setSubject(undefined);
                    axiosInstance
                        .get(API_ROUTES.getSubjects, {
                            headers: {
                                Authorization:
                                    'bearer ' + sessionStorage.getItem('token'),
                            },
                        })
                        .then((data) => {
                            setSubjects(data.data);
                        });
                })
                .catch((err) => console.log(err));
        } else {
            alert('Subject is not selected.');
        }
    };

    return (
        <div className="flex h-[580px] bg-white rounded-md shadow-lg overflow-hidden">
            <div className="flex flex-col p-4 border-r-4 border-gray-900- ">
                <div className="sticky top-0 ">
                    <h1 className="pt-2 text-xl font-bold text-center text-gray-950 z">
                        Quản lý môn học
                    </h1>
                    <div className="pt-2 flex items-center  justify-center py-4  p-2.5 ">
                        <label
                            for="table-search"
                            className="text-gray-900 sr-only"
                        >
                            Search
                        </label>
                        <div className="relative ">
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
                                className="block w-64 p-2 pl-10 text-sm text-gray-900 bg-white border rounded-lg shadow-md border-1 focus:outline-none"
                                placeholder="Tìm môn học"
                            />
                        </div>
                    </div>
                </div>
                <hr />
                <div className="flex-1 w-full pt-2 pl-2 overflow-y-auto">
                    {subjects.map((sj, id) => (
                        <div
                            key={id}
                            className={`w-full p-2 text-base text-gray-900  hover:rounded-lg hover:cursor-pointer ${
                                selectedSubject === sj.name
                                    ? 'bg-blue-500 rounded-lg text-white'
                                    : ''
                            }`}
                            onClick={() => getSubjectHandler(sj)}
                        >
                            {sj.name}
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col w-full">
                {/* <h1 className="font-bold text-gray-50 text-md">Subject_view</h1> */}
                <div className="flex-1 mx-auto">
                    <div className="flex w-[850px] bg-gray-50 rounded-xl h-[460px] overflow-y-auto justify-center scrollbar-hide border-1  border-gray-900 ">
                        {/* <center> */}
                        {/* <div> */}
                        <MyDocument data={subject} />
                        {/* </div> */}
                        {/* </center> */}
                    </div>
                    <div className="flex justify-end pt-4 pr-4 space-x-10 text-center">
                        <button
                            onClick={() => setAddSubjectModal(true)}
                            className="hover:border-gray-400 shadow-md p-1.5 font-bold text-gray-50 border-2 border-gray-200 rounded-lg bg-green-500 "
                        >
                            Tạo môn học
                        </button>
                        <button
                            className="hover:border-gray-400 shadow-md p-1.5 font-bold text-gray-50 border-2 border-gray-200 rounded-lg bg-yellow-500 "
                            onClick={() => {
                                if (subject) setUpdateSubjectModal(true);
                                else alert('Subject is not selected.');
                            }}
                        >
                            Chỉnh sửa môn học
                        </button>
                        <button
                            className="hover:border-gray-400 shadow-md p-1.5 font-bold text-gray-50 border-2 border-gray-200 rounded-lg bg-blue-500"
                            onClick={() => {
                                if (subject) setCloneSubjectModal(true);
                                else alert('Subject is not selected.');
                            }}
                        >
                            Sao chép môn học
                        </button>
                        <button className="hover:border-gray-400 shadow-md p-1.5 font-bold text-gray-50 border-2 border-gray-200 rounded-lg bg-gray-500 ">
                            In môn học
                        </button>
                        <button
                            className="hover:border-gray-400 shadow-md p-1.5 font-bold text-gray-50 border-2 border-gray-200 rounded-lg bg-red-500"
                            onClick={handleDeleteSubject}
                        >
                            Xóa môn học
                        </button>
                    </div>
                </div>
            </div>

            <AddSubjectModal
                visible={addSubjectModal}
                onClose={handleCloseModal}
            />

            <UpdateSubjectModal
                visible={updateSubjectModal}
                onClose={handleCloseModal}
                subject={subject}
            />
            <CloneSubjectModal
                visible={cloneSubjectModal}
                onClose={handleCloseModal}
                subject={subject}
            />
        </div>
    );
};

export default SubjectManager;
