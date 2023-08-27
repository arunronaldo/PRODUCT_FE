/* eslint-disable jsx-a11y/alt-text */
/***************Import React packages*******************/
import React, { useState } from "react";

/***************Import Images**************************/
import Logo from "../../../assets/images/logo.png";

/***************Import API $ Packages**************************/
import { useNavigate } from "react-router-dom";
import LoginApi from "../../../api/LoginApi";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  //Login Function
  const LoginFunction = async () => {
    const payload = {
      email: data.email,
      password: data.password,
    };
    let loginData = await LoginApi.Userlogin(payload);
    if (loginData?.data?.status === true) {
      toast.success(`${loginData?.data?.message}`);
      //set user data and token in local storage
      localStorage.setItem("accessToken", loginData.data.token);
      localStorage.setItem("loggedUser", JSON.stringify(loginData.data.data));
      // for localstorage setTime
      setTimeout(() => {
        navigate("/home");
      }, 3000);
    } else {
      toast.error(`${loginData?.data?.message}`);
    }
  };
  return (
    <div className="container-fluid" style={{ height: "100vh" }}>
      <div className="row">
        <div
          className="col-md-6 d-flex justify-content-center align-items-center"
          style={{ backgroundColor: "#07DB96", height: "100vh" }}
        >
          <div>
            <h1 style={{ color: "#fff" }}>Welcome to our product</h1>
            <img src={Logo} />
          </div>
        </div>
        <div
          className="col-md-6 d-flex justify-content-center align-items-center"
          style={{ backgroundColor: "#fff", height: "100vh" }}
        >
          <div className="row">
            <form className="w-100" style={{ padding: 0 }}>
              <div className="d-flex justify-content-start">
                <h1>Sign in</h1>
              </div>
              <div className="form-floating">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Enter you email address"
                  onChange={(e) => {
                    setData({
                      ...data,
                      email: e.target.value,
                    });
                  }}
                />
                <label for="floatingInput">Email address</label>
              </div>
              <div className="form-floating mt-4">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Enter your password"
                  onChange={(e) => {
                    setData({
                      ...data,
                      password: e.target.value,
                    });
                  }}
                />
                <label for="floatingInput">Password</label>
              </div>
              <div className="form-check text-start my-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="remember-me"
                  id="flexCheckDefault"
                />
                <label className="form-check-label" for="flexCheckDefault">
                  Remember me
                </label>
              </div>
            </form>
            <button
              className="btn w-100 py-2 mt-4"
              type="submit"
              style={{
                backgroundColor: "#07DB96",
                color: "#fff",
                fontWeight: "600",
              }}
              disabled={data.email === "" || data.password === ""}
              onClick={() => LoginFunction()}
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
