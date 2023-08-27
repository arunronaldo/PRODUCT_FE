/* eslint-disable jsx-a11y/anchor-is-valid */
/***************Import React packages**************************/
import React from "react";

/***************Import CSS**************************/
import "./header.css";

/***************Import Images**************************/
import Logo from "../../assets/images/logo.png";
import Heart from "../../assets/images/heart.svg";
import Person from "../../assets/images/person.svg";
import Cart from "../../assets/images/cart.svg";
import Car from "../../assets/images/car.svg";

const Header = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg py-2 fixed-top d-flex flex-column"
        style={{ background: "#fff" }}
      >
        <div className="container d-none d-md-block pb-3">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex">
              <a href="#about" className="header-list1">
                About Us
              </a>
              <a href="#contact" className="header-list1">
                Contacts
              </a>
              <a href="#store" className="header-list1">
                Store Location
              </a>
              <a href="#track" className="header-list1">
                Track Order
              </a>
              <a href="#blog" className="header-list1">
                Blog
              </a>
            </div>
            <div className="d-flex">
              <a className="header-list1">
                Compare:<span className="header-span">2</span>
              </a>
              <a className="header-list1">
                Currency:<span className="header-span">Rs</span>
              </a>
              <a className="header-list1">
                Language:<span className="header-span">EN</span>
              </a>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="d-flex align-items-center">
            <a href="#" className="navbar-brand text-light">
              <img src={Logo} alt="Logo" width="120px" />
            </a>{" "}
            <form className="d-flex" role="search">
              <div className="dropdown mx-2">
                <button
                  className="btn dropdown-toggle"
                  type="button"
                  style={{ background: "#FFDF3F", fontWeight: "600" }}
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src={Car}
                    alt="Logo"
                    width="24px"
                    style={{ marginRight: 10 }}
                  />{" "}
                  Select Vehicle
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Car
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Two wheeler
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      XUV
                    </a>
                  </li>
                </ul>
              </div>
              <input
                className="form-control"
                style={{
                  width: "350px",
                  height: "40px",
                  backgroundColor: "#EDEDED",
                }}
                type="search"
                placeholder="Enter Keyword or Part Number"
                aria-label="Search"
              />
            </form>
          </div>

          <div className="d-flex justify-content-between align-items-center">
            <a
              href="#"
              className="d-flex justify-content-between align-items-center mx-4"
            >
              <img src={Heart} alt="Wishlist" width="24px" />
            </a>
            <a
              href="#"
              className="d-flex justify-content-between align-items-center mx-2"
              style={{ textDecoration: "none" }}
            >
              <img src={Person} alt="Profile" width="24px" height="24px" />
              <div className="d-flex flex-column mx-3">
                <a style={{ fontSize: 12, color: "#9E9E9E" }}>Hello, Log in</a>
                <a style={{ fontSize: 16, fontWeight: "700", color: "#000" }}>
                  My Account
                </a>
              </div>
            </a>
            <a
              href="#"
              className="d-flex justify-content-between align-items-center mx-2"
              style={{ textDecoration: "none" }}
            >
              <img src={Cart} alt="Cart" width="24px" height="24px" />
              <div className="d-flex flex-column mx-3">
                <a style={{ fontSize: 12, color: "#9E9E9E" }}>Shopping Cart</a>
                <a style={{ fontSize: 16, fontWeight: "700", color: "#000" }}>
                  &#8377;1468.60
                </a>
              </div>
            </a>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle header-list2"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Shop By Category
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </div>
          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item dropdown" style={{ width: 80 }}>
                <a
                  className="nav-link dropdown-toggle header-list2"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Home
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown" style={{ width: 115 }}>
                <a
                  className="nav-link dropdown-toggle header-list2"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Megamenu
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown" style={{ width: 80 }}>
                <a
                  className="nav-link dropdown-toggle header-list2"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Shop
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown" style={{ width: 80 }}>
                <a
                  className="nav-link dropdown-toggle header-list2"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Blog
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown" style={{ width: 100 }}>
                <a
                  className="nav-link dropdown-toggle header-list2"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Account
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown" style={{ width: 90 }}>
                <a
                  className="nav-link dropdown-toggle header-list2"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Pages
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item" style={{ width: 200, paddingTop: 5 }}>
                <a href="#support" className="header-list2">
                  Buy Theme
                </a>
              </li>
            </ul>
          </div>
          <div style={{ paddingTop: 10 }}>
            <p className="header-list1">
              Call Us: <span className="header-span">089252 97807</span>
            </p>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
