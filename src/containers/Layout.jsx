/***************Import React packages**************************/
import React from 'react';

/***************Import Components**************************/
import Header from "./Header";
import Footer from "./Footer";
import Home from "../pages/Home";

/***************Import CSS**************************/
import "./layout.css"

const Layout = () => {
    return (
        <div>
            <div className='container'>
                <Header />
            </div>
            <div className='container'>
                <Home />
            </div>
            <div className='footer'>
                <Footer />
            </div>
        </div>
    );
};

export default Layout;