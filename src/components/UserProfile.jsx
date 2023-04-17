import React, { useEffect, useState } from 'react';
import logonam from '../assets/male-icon-32.png';
import logonu from '../assets/female-icon.png';
// import axios from "axios";
import { API_ROUTES, axiosInstance } from '../cons';
import { useNavigate } from 'react-router-dom';

const faculties = [
    '-- Chọn khoa --',
    'Công nghệ thông tin',
    'Khoa học máy tính',
    'Kỹ thuật phần mềm',
    'Khoa học dữ liệu',
    'Hệ thống thông tin',
];

const UserProfile = () => {
    const [user, setUser] = useState();
    const [userInfo, setUserInfo] = useState();
    const navigate = useNavigate();
    const [genderLogo, setGenderLogo] = useState('');
    const [name, setName] = useState('');
    const [gender, setGender] = useState(true);
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [dayOfBirth, setDayOfBirth] = useState();
    const [placeOfBirth, setPlaceOfBirth] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
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

    useEffect(() => {
        let token = sessionStorage.getItem('token');

        // if (!token) {
        //   navigate("/");
        // } else {
        axiosInstance
            .get(API_ROUTES.getUserInfo, {
                headers: {
                    Authorization: 'bearer ' + token,
                },
            })
            .then((data) => {
                console.log(data);
                setUserInfo(data.data.result);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        if (gender) {
            setGenderLogo(logonam);
        } else {
            setGenderLogo(logonu);
        }
    }, [gender]);

    const handleNameChanged = (e) => {
        setName(e.target.value);
    };
    const handleFemaleClick = (e) => {
        setGender(false);
    };
    const handleMaleClick = (e) => {
        setGender(true);
    };
    const handleEmailChanged = (e) => {
        setEmail(e.target.value);
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
    const handleCurrentPasswordChanged = (e) => {
        setCurrentPassword(e.target.value);
    };
    const handleNewPasswordChanged = (e) => {
        setNewPassword(e.target.value);
    };
    const changePasswordHandler = (e) => {
        axiosInstance
            .put(
                API_ROUTES.changePassword,
                {
                    email: email,
                    password: currentPassword,
                    newPassword: newPassword,
                },
                {
                    headers: {
                        Authorization:
                            'bearer ' + sessionStorage.getItem('token'),
                    },
                }
            )
            .then((data) => {
                console.log(data);
                alert(data.data.message);
            })
            .catch((err) => {
                console.log(err);
                alert(err.response.data.message);
            });
    };
    if (dayOfBirth) {
        console.log(typeof dayOfBirth, dayOfBirth);
    }
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
        console.log(userProfile);
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
                console.log(err);
            });
    };
    return (
        <div className="flex w-full h-[575px] shadow-lg bg-white rounded-lg">
            <div className="flex flex-col w-[500px] border-r-4 border-white">
                <div className="relative items-center justify-center h-full pb-2 border-r-4">
                    <div className="flex flex-col pb-5 ">
                        <div className="relative flex flex-col mb-7 ">
                            <div className="flex flex-col items-center justify-center pl-2 pt-28">
                                {/* <img
                  className="object-cover w-full h-56 shadow-lg rounded-xl"
                  src="https://source.unsplash.com/300x400/?education"
                  alt="user-pic"
                /> */}
                                <img
                                    className="object-cover w-20 h-20 -mt-10 rounded-full shadow-xl"
                                    src={genderLogo}
                                    alt="user-pic"
                                />
                            </div>
                            <h1 className="pt-8 text-3xl text-center text-black font-semiabold">
                                {userInfo && userInfo.fullName}
                            </h1>
                            <hr class="justify-center w-48 h-1 mx-auto my-4 bg-gray-950 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
                            {/* <div className="flex justify-start pl-4 text-base text-gray-950">
                <div className="flex flex-1"></div>
              </div> */}
                            {/* #đổi mk */}
                            <div className="p-4 w-350">
                                <div className="col-span-6 ">
                                    <label
                                        for="current-password"
                                        className="block mb-2 text-sm font-bold text-gray-700 "
                                    >
                                        Mật khẩu hiện tại
                                    </label>
                                    <input
                                        type="password"
                                        className="focus:outline-none border-b-2  text-gray-900 text-sm  block w-full p-2.5"
                                        placeholder="Current password"
                                        required
                                        onChange={handleCurrentPasswordChanged}
                                        // value={userInfo && userInfo.email}
                                    />
                                </div>
                                <div className="col-span-6 pt-4">
                                    <label
                                        for="new-password"
                                        className="block mb-2 text-sm font-bold text-gray-700 "
                                    >
                                        Mật khẩu mới
                                    </label>
                                    <input
                                        type="password"
                                        className="focus:outline-none border-b-2  text-gray-900 text-sm  block w-full p-2.5"
                                        placeholder="New Password"
                                        required
                                        onChange={handleNewPasswordChanged}

                                        // value={userInfo && userInfo.email}
                                    />
                                </div>
                                <div className="flex items-center justify-center pt-10 ">
                                    <button
                                        className=" bg-gradient-to-tl from-green-400 to-green-700 p-2.5 rounded-lg w-190  text-white font-bold hover:shadow-lg"
                                        onClick={changePasswordHandler}
                                    >
                                        Cập nhật mật khẩu
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-full pt-24 rounded-xl">
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
                                    userInfo ? userInfo.roles === 'User' : false
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
                                    userInfo ? userInfo.roles === 'User' : false
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
                                    userInfo ? userInfo.roles === 'User' : false
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
                                    userInfo ? userInfo.roles === 'User' : false
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
                                            faculties.map((value, index) => {
                                                if (value === userInfo.faculty)
                                                    return (
                                                        <option
                                                            selected
                                                            key={index}
                                                            value={index}
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
                                            })}
                                    </select>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-span-6 sm:col-span-3">
              <label
                for="pob"
                className="block mb-2 text-sm font-bold text-gray-700 "
              >
                Quê quán
              </label>
              <input
                type="text"
                className="focus:outline-none border-b-2  text-gray-900 text-sm  block w-full p-2.5"
                placeholder="Quê quán"
                required
                // value={userInfo && userInfo.email}
              />
            </div> */}
                        {/* <div className="col-span-6 sm:col-span-3">
              <label
                for="pob"
                className="block mb-2 text-sm font-bold text-gray-700 "
              >
                Tôn giáo
              </label>
              <input
                type="text"
                className="focus:outline-none border-b-2  text-gray-900 text-sm  block w-full p-2.5"
                placeholder="Tôn giáo"
                required
                // value={userInfo && userInfo.email}
              />
            </div> */}
                        {/* <div className="col-span-6 sm:col-span-3">
              <label
                for="pob"
                className="block mb-2 text-sm font-bold text-gray-700 "
              >
                Tình trạng hôn nhân
              </label>
              <h1 className="p-2.5 text-sm border-b-2 border-slate-600">Tên</h1>
            </div> */}
                    </div>
                </div>
                <div className="flex items-center justify-center p-3">
                    <button
                        className="bg-gradient-to-tl from-blue-400 to-blue-700 p-2.5 rounded-lg w-300  text-white font-bold hover:shadow-lg"
                        hidden={userInfo ? userInfo.roles === 'User' : false}
                        onClick={handleUpdateProfile}
                    >
                        Cập nhật thông tin
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
