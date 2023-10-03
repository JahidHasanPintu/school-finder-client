import React from 'react';
import './Account.css'
import { Outlet, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar';
import Dashboard from './Dashboard/Dashboard';
import InvoiceModal from './AllSchool/AddSchool';
import Settings from './Settings/Settings';
import AllSchool from './AllSchool/AllSchool';
import AddSchool from './AllSchool/AddSchool';
import EditSchool from './AllSchool/EditSchool';
const Admin = () => {
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