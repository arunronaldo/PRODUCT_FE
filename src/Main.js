/** **********************************Import packages***************************** **/
import React, { useState } from "react";

/** **********************************Import Routers***************************** **/
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/** **********************************Import Layouts***************************** **/
import Login from "./pages/auth/Login";
import Layout from "./containers/Layout";
/** **************************** Import React-Toastify ****************************** */
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, Zoom } from "react-toastify";

const Main = () => {

  const loading = (
    <div className="pt-3 text-center">
      <div className="sk-spinner sk-spinner-pulse" />
    </div>
  );

  return (
    <div>
      <Router>
        <React.Suspense fallback={loading}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Layout />} />
          </Routes>
          <ToastContainer
            limit={1}
            autoClose={2000}
            transition={Zoom}
            pauseOnFocusLoss={false}
            newestOnTop
          />
        </React.Suspense>
      </Router>
    </div>
  );
}

export default Main;
