import React, { useState } from 'react';
import { API_ROUTES, axiosInstance } from '../cons';
const faculties = [
    '-- Chọn khoa --',
    'Công nghệ thông tin',
    'Khoa học máy tính',
    'Kỹ thuật phần mềm',
    'Khoa học dữ liệu',
    'Hệ thống thông tin',
];
const AddTeacher = ({ visible, onClose }) => {
    const [fullName, setFullName] = useState('');
    const [gender, setGender] = useState(true);
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [placeOfBirth, setPlaceOfBirth] = useState('');
    const [faculty, setFaculty] = useState(0);

    const addUserHandler = () => {
        let user = {
            email,
            fullName,
            phone,
            placeOfBirth,
            dateOfBirth,
            gender,
            faculty: faculties[faculty],
        };

        // console.log(user);
        axiosInstance
            .post(API_ROUTES.addUser, user, {
                headers: {
                    Authorization: 'bearer ' + sessionStorage.getItem('token'),
                },
            })
            .then((data) => {
                alert('User was created successfully!\nDefault password: 123456@Abc');
                onClose();
            })
            .catch((err) => {
                alert(err.response.data.message);
            });
    };

    if (!visible) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm ">
            <div className="w-full h-full max-w-2xl md:h-auto">
                <div
                    action="#"
                    className="relative bg-white rounded-lg shadow "
                >
                    <div className="flex items-start justify-between p-4 border-b rounded-t ">
                        <h3 className="text-xl font-semibold text-gray-900 ">
                            Thêm giảng viên
                        </h3>
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

                    <div className="p-6 space-y-6">
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    for="Ten"
                                    className="block mb-2 text-sm font-bold text-gray-700 "
                                >
                                    Tên
                                </label>
                                <input
                                    type="text"
                                    className="focus:outline-none border-b-2  text-gray-900 text-sm  block w-full p-2.5"
                                    placeholder="Tên"
                                    value={fullName}
                                    onChange={(e) =>
                                        setFullName(e.target.value)
                                    }
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    for="pob"
                                    className="block mb-2 text-sm font-bold text-gray-700 "
                                >
                                    Giới tính
                                </label>
                                <div className="flex items-center pt-4">
                                    <input
                                        id="default-radio-1"
                                        type="radio"
                                        checked={gender}
                                        name="default-radio"
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                                        onClick={() => setGender(true)}
                                    />
                                    <label
                                        for="default-radio-1"
                                        className="pr-16 ml-2 text-sm font-medium text-gray-950 "
                                    >
                                        Nam
                                    </label>

                                    <input
                                        checked={!gender}
                                        id="default-radio-2"
                                        type="radio"
                                        name="default-radio"
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                                        onClick={() => setGender(false)}
                                    />
                                    <label
                                        for="default-radio-2"
                                        className="ml-2 text-sm font-medium text-gray-950 "
                                    >
                                        Nữ
                                    </label>
                                </div>
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    for="email"
                                    className="block mb-2 text-sm font-bold text-gray-700 "
                                >
                                    Email
                                </label>
                                {/* <h1 className="p-2.5 text-sm border-b-2 border-slate-600">Tên</h1> */}
                                <input
                                    type="email"
                                    className="focus:outline-none border-b-2  text-gray-900 text-sm  block w-full p-2.5"
                                    placeholder="example@gmail.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    for="phone-number"
                                    className="block mb-2 text-sm font-bold text-gray-700 "
                                >
                                    Số điện thoại
                                </label>
                                <input
                                    type="text"
                                    className="focus:outline-none border-b-2  text-gray-900 text-sm  block w-full p-2.5"
                                    placeholder="Số điện thoại"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    for="dob"
                                    className="block mb-2 text-sm font-bold text-gray-700 "
                                >
                                    Ngày sinh
                                </label>
                                <input
                                    type="date"
                                    name="dob"
                                    className="focus:outline-none border-b-2  text-gray-900 text-sm  block w-full p-2.5"
                                    value={dateOfBirth}
                                    onChange={(e) =>
                                        setDateOfBirth(e.target.value)
                                    }
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    for="pob"
                                    className="block mb-2 text-sm font-bold text-gray-700 "
                                >
                                    Nơi sinh
                                </label>
                                <input
                                    type="text"
                                    className="focus:outline-none border-b-2  text-gray-900 text-sm  block w-full p-2.5"
                                    placeholder="Nơi sinh"
                                    value={placeOfBirth}
                                    onChange={(e) =>
                                        setPlaceOfBirth(e.target.value)
                                    }
                                />
                            </div>
                            <div className="w-full col-span-6 ">
                                <div class="flex ">
                                    <div class="mb-3 w-full">
                                        <label
                                            for="Khoa"
                                            className="block mb-2 text-sm font-bold text-gray-700"
                                        >
                                            Khoa
                                        </label>
                                        <select
                                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block p-2.5 w-full"
                                            onChange={(e) => {
                                                setFaculty(
                                                    parseInt(e.target.value)
                                                );
                                            }}
                                            value={faculty}
                                        >
                                            {faculties.map((value, index) => {
                                                let isSelect = false;
                                                if (index === 0)
                                                    isSelect = true;

                                                return (
                                                    <option
                                                        selected={isSelect}
                                                        key={index}
                                                        value={index}
                                                    >
                                                        {value}
                                                    </option>
                                                );
                                            })}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b ">
                        <button
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            onClick={addUserHandler}
                        >
                            Thêm
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddTeacher;
