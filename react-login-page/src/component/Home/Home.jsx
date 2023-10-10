import React, { useEffect, useState } from "react";
import { useContext } from "react";
import "./Home.css";


export default function Home() {



    return (
        <>
            <div className="homecontainer">
            <div id="training" className="home-top">



                <h2 className="sign-header">Agent Login</h2>
                <hr />
               
                <p className="para-header">Sign into your Agent ID to view all of your product information, plus access community support forums, register, and get exclusive customer offers.</p>
            </div>
            <div id="training" className="header-top1">
                <div className="main-head">
                   
                        <h4 className="sign-head">
                            Sign in your Agent Id
                        </h4>
                   
                    <form className="was-validated" onSubmit="">

                        <div className="col-md-6">
                            <div className="form-group loginform">
                                <input
                                    type="email"
                                    pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                                    maxLength={45}
                                    name="userEmail"

                                    placeholder="User Email"
                                    className="form-control remove-arrow"
                                    required
                                />
                            </div>
                        </div>
                        <div className="name-flex">
                            <div className="col-md-6 ">
                                <div className="form-group loginform marginToRight">
                                    <input
                                        type="text"
                                        maxLength={12}
                                        name="enterPassword"

                                        placeholder="Password"
                                        className="form-control"
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="modal-butoons loginform">
                            <div className="col-md-2 ">
                                <button className="sure-button" type="submit">
                                    Sign in{" "}
                                </button>
                            </div>
                        </div>
                    </form>


                </div>

            </div>
            </div>
        </>
    );
}
