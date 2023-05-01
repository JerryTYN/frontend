import React, { useEffect, useState } from 'react';
import {
    AiFillEdit,
    AiFillDelet,
    AiFillPrintere,
    AiFillPrinter,
    AiFillDelete,
} from 'react-icons/ai';
import { MdOutlineLockReset } from 'react-icons/md';

import AddProcess from './AddProcess';
import EditProcess from './EditProcess';
import PrintProcess from './PrintProcess';
import { API_ROUTES, axiosInstance } from '../cons';
const ProcessManager = () => {
    const [editProcessModal, setEditProcessModal] = useState(false);
    const [addProcessModal, setAddProcessModal] = useState(false);
    const [printProcessModal, setPrintProcessModal] = useState(false);
    const handleCloseModal = () => {
        setAddProcessModal(false);
        setPrintProcessModal(false);
        setEditProcessModal(false);

        axiosInstance
            .get(API_ROUTES.getProcesses, {
                headers: {
                    Authorization: 'bearer ' + sessionStorage.getItem('token'),
                },
            })
            .then((data) => setProcesses(data.data));
    };

    const [processes, setProcesses] = useState([]);
    const [process, setProcess] = useState([]);

    useEffect(() => {
        axiosInstance
            .get(API_ROUTES.getProcesses, {
                headers: {
                    Authorization: 'bearer ' + sessionStorage.getItem('token'),
                },
            })
            .then((data) => setProcesses(data.data));
    }, []);

    const handleDelete = (id) => {
        axiosInstance
            .delete(API_ROUTES.deleteProcess + `?id=${id}`, {
                headers: {
                    Authorization: 'bearer ' + sessionStorage.getItem('token'),
                },
            })
            .then((data) => {
                alert(data.data);
                axiosInstance
                    .get(API_ROUTES.getProcesses, {
                        headers: {
                            Authorization:
                                'bearer ' + sessionStorage.getItem('token'),
                        },
                    })
                    .then((data) => setProcesses(data.data));
            });

        axiosInstance
            .get(API_ROUTES.getProcesses, {
                headers: {
                    Authorization: 'bearer ' + sessionStorage.getItem('token'),
                },
            })
            .then((data) => setProcesses(data.data));
    };

    return (
        <div className="relative h-full shadow-md rounded-lg p-2.5">
            <div className="flex items-center justify-between py-4   p-2.5">
                <label for="table-search" className="sr-only">
                    Search
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                            className="w-5 h-5 text-gray-500 "
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
                        // onChange={(e) => setSearchUser(e.target.value)}
                        type="text"
                        id="table-search-users"
                        className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                        placeholder="Search here ..."
                    />
                </div>

                <div className="flex items-center justify-center ">
                    <button
                        onClick={() => setAddProcessModal(true)}
                        className="w-20 h-12 text-2xl font-bold bg-gray-900 rounded-lg text-gray-50 hover:bg-gray-50 hover:shadow-lg hover:text-gray-800 hover:border-2 hover:border-gray-500 "
                    >
                        +
                    </button>
                </div>
            </div>
            <div className=" h-[590px] bg-white rounded-b-lg shadow-xl overflow-auto">
                <table className="w-full text-sm text-left text-gray-500 ">
                    <thead className="sticky top-0 text-xs text-gray-700 uppercase bg-gray-50">
                        <tr className="flex items-center justify-between w-full">
                            <th scope="col" className="w-[80%] px-6 py-3">
                                Tên chương trình
                            </th>
                            <th scope="col" className="px-12 py-3">
                                ●●●
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {processes.map((item, idx) => (
                            <tr
                                // key={index}
                                className="flex items-center justify-between w-full bg-white border-b hover:bg-gray-50"
                            >
                                <th
                                    scope="row"
                                    className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap "
                                >
                                    {item.name}
                                </th>

                                <td className="items-center justify-center px-6 py-4 text-xl ">
                                    {/* <!-- Modal toggle --> */}
                                    <button
                                        href="#"
                                        type="button"
                                        data-modal-target="editUserModal"
                                        data-modal-show="editUserModal"
                                        className="inline-flex items-center p-2 ml-auto text-sm text-gray-600 bg-transparent rounded-lg hover:bg-gray-200 hover:text-gray-900 hover:shadow-lg"
                                        onClick={() => {
                                            setProcess(item);
                                            setEditProcessModal(true);
                                        }}
                                    >
                                        <AiFillEdit />
                                    </button>
                                    {/*  */}
                                    <button
                                        href="#"
                                        type="button"
                                        data-modal-target="editUserModal"
                                        data-modal-show="editUserModal"
                                        className="inline-flex items-center p-2 ml-auto text-sm text-gray-600 bg-transparent rounded-lg hover:bg-gray-200 hover:text-gray-900 hover:shadow-lg"
                                        onClick={() => handleDelete(item.id)}
                                    >
                                        <AiFillDelete className="text-red-800" />
                                    </button>
                                    <button
                                        href="#"
                                        type="button"
                                        data-modal-target="editUserModal"
                                        data-modal-show="editUserModal"
                                        className="inline-flex items-center p-2 ml-auto text-sm text-gray-600 bg-transparent rounded-lg hover:bg-gray-200 hover:text-gray-900 hover:shadow-lg"
                                        onClick={() => {
                                            // setUser(u);
                                            setProcess(item);
                                            setPrintProcessModal(true);
                                            
                                        }}
                                    >
                                        <AiFillPrinter className="text-blue-800" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <AddProcess
                visible={addProcessModal}
                onClose={handleCloseModal}
                // userInfo={user}
            />
            <EditProcess
                visible={editProcessModal}
                onClose={handleCloseModal}
                process={process}
            />
            <PrintProcess
                visible={printProcessModal}
                onClose={handleCloseModal}
                process={process}
            />
        </div>
    );
};

export default ProcessManager;
