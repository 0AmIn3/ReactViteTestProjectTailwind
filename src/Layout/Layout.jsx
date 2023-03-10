import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

const Layout = () =>{
        return (
            <>
                <Header/>
                <main className='max-w-[1920px] my-0 mx-auto'>
                    <Outlet/>
                </main>
                <Footer/>
            </>
        );
    
}

export default Layout;