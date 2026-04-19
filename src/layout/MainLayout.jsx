import React from 'react';
import Navbar from '../components/shared/navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/shared/footer/Footer';
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            
            <Toaster />
        </div>
    );
};

export default MainLayout;