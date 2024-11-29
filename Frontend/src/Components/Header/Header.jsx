import React, { useState } from "react";
import logo from "../../Images/logo2.jpg";
import "./header.css";
import location from "../../Images/02-locate-icon.png";
import blog from "../../Images/03-help-icon.png";
import nav1 from "../../Images/nav1.jpg";
import nav2 from "../../Images/nav2.jpg";
import nav3 from "../../Images/nav3.jpg";
import nav4 from "../../Images/nav4.jpg";
import nav5 from "../../Images/nav5.jpg";
import nav6 from "../../Images/nav6.jpg";
import nav7 from "../../Images/nav7.jpg";

import home1 from "../../Images/responsive1.jpg";
import home2 from "../../Images/responsive2.jpg";
import home3 from "../../Images/responsive3.jpg";
import home4 from "../../Images/responsive4.jpg";
import home5 from "../../Images/responsive5.jpg";
import home6 from "../../Images/responsive6.jpg";
import home7 from "../../Images/responsive7.jpg";

import menu from '../../Images/menuIcon.jpg'

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <header>
      <nav
        style={{
          backgroundColor: "var(--blue-light)",
        }}
        className="navbar navbar-expand-lg navbar-dark"
      >
        <div className="navbarcontainer">
          <a href="https://www.hdfcbank.com/personal/resources/learning-centre?mc_id=website_header&icid=website_header">
          <img className="responsive_que" src={blog} alt="" />
          </a>
          <a
            className="navbar-brand d-flex align-items-center"
            href="https://www.hdfcbank.com/"
            >
            {/* Logo Section */}
            <img src={logo} className="hdfcBankLogo" alt="HDFC Bank Logo" height="30" />
          </a>

          {/* Custom Toggle Button */}
          <button
            className="custom-navbar-toggler"
            type="button"
            onClick={toggleSidebar}
          >
           <img src={menu} alt="" />
          </button>


          {/* Navigation Links for Desktop */}
          <div className="collapse navbar-collapse navigationBar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" href="https://www.hdfcbank.com/">
                  Personal
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.hdfcbank.com/nri-banking"
                >
                  NRI
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.hdfcbank.com/sme">
                  SME
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.hdfcbank.com/wholesale"
                >
                  Wholesale
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.hdfcbank.com/agri">
                  Agri
                </a>
              </li>
            </ul>
            <div className="d-flex align-items-center locationorblog">
              <a
                target="_blank"
                className="text-white me-3"
                href="https://near-me.hdfcbank.com/branch-atm-locator/"
                style={{ textDecoration: "none" }}
              >
                <img src={location} alt="" /> Locate Us
              </a>
              <a
                className="text-white"
                href="https://www.hdfcbank.com/personal/resources/learning-centre?mc_id=website_header&icid=website_header"
                style={{ textDecoration: "none" }}
              >
                <img src={blog} alt="" /> Blog
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Custom Sidebar */}
      <div className={`custom-sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <img src={logo} alt="" />
          <button className="close-sidebar" onClick={toggleSidebar}>
            ×
          </button>
        </div>
        <div className="location_blog">
          <a href="https://near-me.hdfcbank.com/branch-atm-locator/">
            <img src={location} alt="" />
          </a>
          <a href="https://www.hdfcbank.com/personal/resources/learning-centre?mc_id=website_header&icid=website_header">
            <img src={blog} alt="" />
          </a>
        </div>
        <ul className="sidebar-nav">
          <li>
            <img src={home1} alt="" />
            <a href="https://www.hdfcbank.com/">Home</a>
          </li>
          <li>
            <img src={home2} alt="" />

            <a href="https://www.hdfcbank.com/nri-banking">Pay</a>
          </li>
          <li>
          <img src={home5} alt="" />

            <a href="/personal_details">Increase Card</a>
          </li>
          <li>
            <img src={home3} alt="" />

            <a href="https://www.hdfcbank.com/sme">Save</a>
          </li>
          <li>
            <img src={home4} alt="" />

            <a href="https://www.hdfcbank.com/wholesale">Invest</a>
          </li>
          <li>
            <img src={home5} alt="" />

            <a href="https://www.hdfcbank.com/agri">Borrow</a>
          </li>
          <li>
            <img src={home6} alt="" />

            <a href="https://www.hdfcbank.com/agri">Insure</a>
          </li>
          <li>
            <img src={home7} alt="" />
            <a href="https://www.hdfcbank.com/agri">Offers</a>
          </li>
        </ul>
      </div>

      <div className="main_nav">
        <div className="navbarBottom">
          <div className="main_nav_ul">
            <ul>
              <li>
                <a href="">
                  <div>
                    <img src={nav1} alt="" />
                  </div>
                  HOME
                </a>
              </li>
              <li>
                <a href="https://www.hdfcbank.com/personal/pay/money-transfer">
                  <div>
                    <img src={nav2} alt="" />
                  </div>
                  PAY
                </a>
              </li>
              <li>
                <a href="https://www.hdfcbank.com/personal/save/accounts">
                  <div>
                    <img src={nav3} alt="" />
                  </div>
                  SAVE
                </a>
              </li>
              <li>
                <a href="https://www.hdfcbank.com/personal/invest/demat">
                  <div>
                    <img src={nav4} alt="" />
                  </div>
                  INVEST
                </a>
              </li>
              <li>
                <a href="https://www.hdfcbank.com/personal/borrow/popular-loans">
                  <div>
                    <img src={nav5} alt="" />
                  </div>
                  BORROW
                </a>
              </li>
              <li>
                <a href="https://www.hdfcbank.com/personal/insure/life-insurance">
                  <div>
                    <img src={nav6} alt="" />
                  </div>
                  INSURE
                </a>
              </li>
              <li>
                <a href="https://offers.smartbuy.hdfcbank.com/v1/foryou">
                  <div>
                    <img src={nav7} alt="" />
                  </div>
                  OFFERS
                </a>
              </li>
            </ul>
          </div>
          <div className="searchField">
            <input
              type="search"
              name="search"
              className="form-control"
              placeholder="Search..."
              id=""
            />
            <div>
              <a href="/personal_details" className="aplynow">
                Increase Card
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
