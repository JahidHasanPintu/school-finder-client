import React, { useEffect } from 'react';
import './Account.css'
import { Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar';
import Dashboard from './Dashboard/Dashboard';
import InvoiceModal from './AllSchool/AddSchool';
import Settings from './Settings/Settings';
import AllSchool from './AllSchool/AllSchool';
import AddSchool from './AllSchool/AddSchool';
import EditSchool from './AllSchool/EditSchool';
import { useAuth } from '../../api/AuthContext';
import { toast } from 'react-toastify';
const Admin = () => {
    const { user } = useAuth();
    const location = useLocation();
    if (!user || !user.role || user.role !== "admin") {
        console.log(user ? user.role : "User object or role not defined");
        toast.error('You are not authorized');
        return <Navigate to="/home" state={{ from: location }} replace />;
    }
    return (
        <div>
        <section className="py-5 w-11/12 mx-auto text-start">
            <div className="container">

                <div className="bg-white shadow rounded-lg grid grid-cols-5">
                    <Sidebar />
                    <div className="h-full ml-2 p-3 space-y-2 col-span-4  bg-gray-100 text-gray-900">
                        <Routes>
                        
                            <Route path="/" element={<Dashboard/>}></Route>
                            <Route path="/allschool" element={<AllSchool/>}></Route>
                            <Route path="/addschool" element={<AddSchool/>}></Route>
                            <Route path="/edit-school" element={<EditSchool/>}></Route>
                            
                            <Route path="/settings" element={<Settings/>}></Route>
                            <Route path="/*" element={<Outlet />} />
                            
                        </Routes>
                    </div>
                </div>
            </div>
        </section>
    </div>
    );
};

export default Admin;