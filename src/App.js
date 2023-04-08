import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Login = lazy(() => import('./components/Login'));
const Home = lazy(() => import('./container/Home'));

const App = () => {
    return (
        <Suspense fallback={<>Loading...</>}>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/*" element={<Home />} />
            </Routes>
        </Suspense>
    );
};

export default App;
