/* eslint-disable jsx-a11y/alt-text */
/***************Import React packages**************************/
import React from "react";
import payments from "../../assets/images/payments.png";

/***************Import CSS**************************/
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer className="p-5 text-white text-center background">
        <div className="container">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-5" style={{ textAlign: "initial" }}>
                <h5>Contact Us</h5>
                <p className="mt-4" style={{ color: "#969696", fontSize: 14 }}>
                  Hi, we are always open for cooperation and suggestions,
                  <br />
                  contact us in one of the ways below:
                </p>
                <div className="col-md-12">
                  <div className="row pt-3">
                    <div
                      className="col-md-6"
                      style={{ color: "#969696", fontSize: 12 }}
                    >
                      PHONE NUMBER
                      <br />
                      <span
                        style={{
                          color: "#fff",
                          fontSize: 14,
                          fontWeight: "500",
                        }}
                      >
                        089252 97807
                      </span>
                    </div>
                    <div
                      className="col-md-6"
                      style={{ color: "#969696", fontSize: 12 }}
                    >
                      EMAIL ADDRESS
                      <br />
                      <span
                        style={{
                          color: "#fff",
                          fontSize: 14,
                          fontWeight: "500",
                        }}
                      >
                        careers@uitouxsolution.com
                      </span>
                    </div>
                  </div>
                </div>

                <div className="col-md-12" style={{ marginTop: "20px" }}>
                  <div className="row">
                    <div
                      className="col-md-6"
                      style={{ color: "#969696", fontSize: 12 }}
                    >
                      OUR LOCATION
                      <br />
                      <span
                        style={{
                          color: "#fff",
                          fontSize: 14,
                          fontWeight: "500",
                        }}
                      >
                        102, Athipalayam Rd, Ramakrishnapuram, Chinnavedampatti,
                        Coimbatore,Tamilnadu
                        <br />
                        641049
                      </span>
                    </div>
                    <div
                      className="col-md-6"
                      style={{ color: "#969696", fontSize: 12 }}
                    >
                      WORKING HOURS
                      <br />
                      <span
                        style={{
                          color: "#fff",
                          fontSize: 14,
                          fontWeight: "500",
                        }}
                      >
                        Mon-Fri 10:00am - 6:00pm
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-2" style={{ textAlign: "initial" }}>
                <h5>Information</h5>
                <div
                  className="mt-4 text-start"
                  style={{ color: "#969696", fontSize: 14 }}
                >
                  <p>About Us</p>
                  <p>Delivery Information</p>
                  <p>Privacy policy</p>
                  <p>Brands</p>
                  <p>Contact Us</p>
                  <p>Returns</p>
                  <p>Site Map</p>
                </div>
              </div>
              <div className="col-md-2" style={{ textAlign: "initial" }}>
                <h5>My Account</h5>
                <div
                  className="mt-4 text-start"
                  style={{ color: "#969696", fontSize: 14 }}
                >
                  <p>Store Location</p>
                  <p>Order History</p>
                  <p>Wish List</p>
                  <p>Newsletter</p>
                  <p>Special Offers</p>
                  <p>Gift Certificates</p>
                  <p>Affiliate</p>
                </div>
              </div>
              <div className="col-md-3" style={{ textAlign: "initial" }}>
                <h5>News Letter</h5>
                <div
                  className="mt-4 text-start"
                  style={{ color: "#969696", fontSize: 14 }}
                >
                  <p>
                    Enter your email address below to subscribe to our
                    newsletter and keep up to date with discounts
                  </p>
                </div>
                <form>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="row">
                        <div className="col-md-8">
                          <input
                            type="email"
                            className="form-control custom-input"
                            id="email"
                            placeholder="user@example.com"
                            style={{
                              backgroundColor: "#4B4B4B",
                              color: "#EFEFEF",
                              width: "100%",
                            }}
                          />
                        </div>
                        <div className="col-md-4">
                          <button
                            type="submit"
                            className="btn"
                            style={{
                              backgroundColor: "#07DB96",
                              color: "#fff",
                              borderRadius: 2,
                              height: 37,
                            }}
                          >
                            Subscribe
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 mt-3">
                      <p style={{ color: "#969696", fontSize: 14 }}>
                        Follow us on social networks
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div
        className="container-fluid"
        style={{
          backgroundColor: "#282828",
          paddingLeft: "8%",
          paddingRight: "8%",
        }}
      >
        <div className="row d-flex align-items-center">
          <div className="col-md-6 pt-3">
            <p style={{ fontSize: 14, color: "#969696" }}>
              Powered by
              <span style={{ color: "#fff", fontWeight: "600" }}>
                {" "}
                React / next.js{" "}
              </span>
              - Designed by
              <span style={{ color: "#fff", fontWeight: "600" }}>
                {" "}
                UITOUX Solutions{" "}
              </span>
            </p>
          </div>
          <div className="col-md-6 d-flex justify-content-end">
            <img src={payments} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
