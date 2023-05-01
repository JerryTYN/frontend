import React, { useEffect, useState } from 'react';
import { API_ROUTES, axiosInstance } from '../cons';

const faculties = [
    '-- Chọn khoa --',
    'Công nghệ thông tin',
    'Khoa học máy tính',
    'Kỹ thuật phần mềm',
    'Khoa học dữ liệu',
    'Hệ thống thông tin',
    //   "Công nghệ ô tô",
];

const EditUserModal = ({ visible, onClose, userInfo }) => {
    const [name, setName] = useState('');
    const [gender, setGender] = useState(true);
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [dayOfBirth, setDayOfBirth] = useState();
    const [placeOfBirth, setPlaceOfBirth] = useState('');
    const [faculty, setFaculty] = useState();

    useEffect(() => {
        if (userInfo) {
            setName(userInfo.fullName);
            setGender(userInfo.gender);
            setEmail(userInfo.email);
            setPhone(userInfo.phone);
            setDayOfBirth(userInfo.dateOfBirth);
            setPlaceOfBirth(userInfo.placeOfBirth);
            setFaculty(userInfo.faculty);
        }
    }, [userInfo]);

    const handleNameChanged = (e) => {
        setName(e.target.value);
    };
    const handleFemaleClick = (e) => {
        setGender(false);
    };
    const handleMaleClick = (e) => {
        setGender(true);
    };

    const handlePhoneChanged = (e) => {
        setPhone(e.target.value);
    };

    const handleDayOfBirthChanged = (e) => {
        setDayOfBirth(e.target.value);
    };
    const handlePlaceOfBirthChanged = (e) => {
        setPlaceOfBirth(e.target.value);
    };

    const handleUpdateProfile = (e) => {
        let userProfile = {
            email: email,
            fullName: name,
            faculty: faculty,
            phone: phone,
            placeOfBirth: placeOfBirth,
            dateOfBirth: dayOfBirth,
            gender: gender,
        };
        // console.log(userProfile);
        axiosInstance
            .put(API_ROUTES.updateProfile, userProfile, {
                headers: {
                    Authorization: 'bearer ' + sessionStorage.getItem('token'),
                },
            })
            .then((data) => {
                alert(data.data.message);
            })
            .catch((err) => {
                alert(err.response.data)
                // console.log(err);
            });
    };

    if (!visible) return null;
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm ">
            <div className="w-full h-full max-w-2xl md:h-auto">
                <div className="relative bg-white rounded-lg shadow ">
                    <div className="flex items-start justify-between p-4 border-b rounded-t ">
                        <h3 className="text-xl font-semibold text-gray-900 ">
                            Cập nhật thông tin giảng viên
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
                                    required
                                    value={name}
                                    disabled={
                                        userInfo
                                            ? userInfo.roles === 'User'
                                            : false
                                    }
                                    onChange={handleNameChanged}
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
                                        checked={gender}
                                        id="default-radio-1"
                                        type="radio"
                                        value=""
                                        name="default-radio"
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                                        disabled={
                                            userInfo
                                                ? userInfo.roles === 'User'
                                                : false
                                        }
                                        onClick={handleMaleClick}
                                    />
                                    <label
                                        for="default-radio-1"
                                        className="pr-16 ml-2 text-sm font-medium text-gray-950 "
                                    >
                                        Nam
                                    </label>

                                    <input
                                        // checked
                                        checked={!gender}
                                        id="default-radio-2"
                                        type="radio"
                                        value=""
                                        name="default-radio"
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                                        disabled={
                                            userInfo
                                                ? userInfo.roles === 'User'
                                                : false
                                        }
                                        onClick={handleFemaleClick}
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
                                    required
                                    value={email}
                                    disabled
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
                                    required
                                    value={phone}
                                    onChange={handlePhoneChanged}
                                    disabled={
                                        userInfo
                                            ? userInfo.roles === 'User'
                                            : false
                                    }
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
                                    // placeholder="Ngày sinh"
                                    // required
                                    value={dayOfBirth}
                                    disabled={
                                        userInfo
                                            ? userInfo.roles === 'User'
                                            : false
                                    }
                                    onChange={handleDayOfBirthChanged}
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
                                    required
                                    value={placeOfBirth}
                                    disabled={
                                        userInfo
                                            ? userInfo.roles === 'User'
                                            : false
                                    }
                                    onChange={handlePlaceOfBirthChanged}
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
                                            disabled={
                                                userInfo
                                                    ? userInfo.roles === 'User'
                                                    : false
                                            }
                                            onChange={(e) => {
                                                setFaculty(
                                                    parseInt(e.target.value)
                                                );
                                            }}
                                        >
                                            {userInfo &&
                                                faculties.map(
                                                    (value, index) => {
                                                        if (
                                                            value ===
                                                            userInfo.faculty
                                                        )
                                                            return (
                                                                <option
                                                                    selected
                                                                    key={index}
                                                                    value={
                                                                        index
                                                                    }
                                                                >
                                                                    {value}
                                                                </option>
                                                            );

                                                        return (
                                                            <option
                                                                key={index}
                                                                value={index}
                                                            >
                                                                {value}
                                                            </option>
                                                        );
                                                    }
                                                )}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b ">
                        <button
                            className="bg-gradient-to-tl from-blue-400 to-blue-700 p-2.5 rounded-lg w-56  text-white font-bold hover:shadow-lg"
                            hidden={
                                userInfo ? userInfo.roles === 'User' : false
                            }
                            onClick={handleUpdateProfile}
                        >
                            Cập nhật thông tin
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditUserModal;
