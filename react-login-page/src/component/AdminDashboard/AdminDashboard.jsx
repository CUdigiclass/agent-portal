
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";



import "./AdminDashboard.css";


const AdminDashBoard = () => {
  
  // handle change session


  return (
    <>
 
 <div className="hero_sec vh-100 d-flex  align-items-center  bg-light  ">

        <div className="container  ">
            <div className="row home-section">
                <div className="col-lg-3 col-md-6">
                    <div className="card bg-primary rounded-4 p-2 mb-lg-0 mb-3 "
                        data-tor="inview:bg(primary) , hover:bg(danger)">
                        {/* <div className="hstack gap-3">
                            <div className="p-2">
                                <h3 className="fs-6 text-white-50 lh-1">Agent Portal</h3>
                                <strong className="fs-5 text-white-50 lh-1">100</strong>
                            </div>
                            <div className="p-2 ms-auto rounded-circle bg-primary badge">
                                <i className="fa-brands fa-btc color-white fs-5 "></i>
                            </div>
                        </div> */}
                        {/* <p className="text-white-50 fw-semibold fs-6 ps-2"><a href="#"

                                className="link-info  text-white-50 text-decoration-none fw-bold">+55%</a>
                            since yesterday</p> */}
                             <div className="relative z-10 mb-4 text-white text-4xl leading-none font-semibold">
                  <h3 style={{ color: "white" }}>
                    {/* {dashboardData?.totalActiveCourse} */}
                    30
                  </h3>
                </div>
                <div className="relative z-10 text-green-200 leading-none font-semibold">
                  <h2
                    style={{
                      color: "white",
                      fontWeight: "normal",
                      fontSize: "22px",
                    }}
                  >
                   Agent Portal
                  </h2>
                </div>


                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="card bg-warning rounded-4 p-2 mb-lg-0 mb-3 ">
                        {/* <div className="hstack gap-3">
                            <div className="p-2">
                                <h3 className="fs-6 text-white-50 lh-1">Total USERS</h3>
                                <strong className="fs-5 text-white-50 lh-1">2,300</strong>
                            </div>
                            <div className="p-2 ms-auto rounded-circle bg-danger badge ">
                                
                            </div>
                        </div>
                        <p className="text-white-50 fw-semibold fs-6 ps-2"><a href="#"
                                className="link-info text-white-50 text-decoration-none fw-bold">+3%</a>
                            since week</p> */}

<div className="relative z-10 mb-4 text-white text-4xl leading-none font-semibold">
                  <h3 style={{ color: "white" }}>
                    {/* {dashboardData?.totalActiveCourse} */}
                    25
                  </h3>
                </div>
                <div className="relative z-10 text-green-200 leading-none font-semibold">
                  <h2
                    style={{
                      color: "white",
                      fontWeight: "normal",
                      fontSize: "22px",
                    }}
                  >
                   Total User
                  </h2>
                </div>
                    </div>
                </div>
                </div>
              
                <div className="row home-section-2">
                
                <div className="col-lg-3 col-md-6">
                    <div className="card bg-danger rounded-4 p-2 mb-lg-0 mb-3">
                        {/* <div className="hstack gap-3">
                            <div className="p-2">
                                <h3 className="fs-6 text-white-50 lh-1">NEW Users</h3>
                                <strong className="fs-5  text-white-50 lh-1">+3,462</strong>
                            </div>
                            <div className="p-2 ms-auto rounded-circle bg-info badge ">
                             
                            </div>
                        </div>
                        <p className="text-white-50 fw-semibold fs-6 ps-2"><a href="#"
                                className="link-danger text-decoration-none fw-bold">-2%</a>
                            last quarter</p> */}
                             <div className="relative z-10 mb-4 text-white text-4xl leading-none font-semibold  ">
                  <h3 style={{ color: "white" }}>
                    {/* {dashboardData?.totalActiveCourse} */}
                    45
                  </h3>
                </div>
                <div className="relative z-10 text-green-200 leading-none font-semibold">
                  <h2
                    style={{
                      color: "white",
                      fontWeight: "normal",
                      fontSize: "22px",
                    }}
                  >
                    Feedback
                  </h2>
                </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    
                    <div className="card bg-success rounded-4 p-2 mb-lg-0 mb-3">
                        {/* <div className="hstack gap-3">
                            <div className="p-2">
                                <h3 className="fs-6 text-white-50 lh-1">Feedback</h3>
                                <strong className="fs-5 text-white-50 lh-1">200</strong>
                            </div>
                            <div className="p-2 ms-auto rounded-circle bg-warning badge ">
                               
                            </div>
                        </div>
                        <p className="text-white-50 fw-semibold fs-6 ps-2"><a href="#"
                                className="link-info text-white-50 text-decoration-none fw-bold">+5%</a>
                            than last month</p> */}

<div className="relative z-10 mb-4 text-white text-4xl leading-none font-semibold">
                  <h3 style={{ color: "white" }}>
                    {/* {dashboardData?.totalActiveCourse} */}
                    65

                  </h3>
                </div>

                <div className="relative z-10 text-green-200 leading-none font-semibold">
                  <h2
                    style={{
                      color: "white",
                      fontWeight: "normal",
                      fontSize: "22px",
                    }}
                  >
                    Contact Us
                  </h2>
                </div>
                
                    </div>
                </div>
            </div>
        </div>
        </div>
      
   
    </>
  );
};

export default AdminDashBoard;
