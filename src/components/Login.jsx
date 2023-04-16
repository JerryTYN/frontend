import React, { useState } from 'react';
import logo from '../assets/logo192.png';
import { API_ROUTES, axiosInstance } from '../cons';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();

        console.log(process.env.REACT_APP_API_URL);

        axiosInstance
            .post(API_ROUTES.login, { email: email, password: password })
            .then((data) => {
                let result = data.data.result;
                sessionStorage.setItem('token', result.token);

                console.log(result);
                navigate('/home/dashboard');
            })
            .catch((err) => {
                console.log(err.response.data);
            });
    };

    const emailHander = (e) => {
        setEmail(e.target.value);
    };

    const passwordHander = (e) => {
        setPassword(e.target.value);
    };

    return (
        <div className="flex-1">
            <div className="pt-16 text-2xl font-extrabold text-center">
                WELLCOME
            </div>
            <div className="flex items-center justify-center">
                <img src={logo} className="text-center" />
            </div>
            <div className="flex items-center justify-center">
                <form class="space-y-4" action="#" onSubmit={submitHandler}>
                    <div className="w-350">
                        <label
                            for="email"
                            class="block mb-2 text-sm font-bold  "
                        >
                            Your email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            class="w-350 bg-gray-50 border border-gray-300   rounded-lg   p-2.5"
                            placeholder="email"
                            required=""
                            onChange={emailHander}
                        />
                    </div>
                    <div>
                        <label
                            for="password"
                            class="block mb-2 text-sm font-bold  "
                        >
                            Password
                        </label>
                        <input
                            type="password"
                  
                            placeholder="password"
                            class="w-350 bg-gray-50 border border-gray-300   rounded-lg   p-2.5"
                            required=""
                            onChange={passwordHander}
                        />
                    </div>
                    <button
                        type="submit"
                        class="w-full text-gray-100 bg-blue-700 focus:outline-none font-bold rounded-lg text-sm px-5 py-2.5 text-center hover:bg-blue-900"
                    >
                        Sign in
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
