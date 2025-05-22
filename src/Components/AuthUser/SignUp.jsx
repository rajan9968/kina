import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { register } from '../Service/AuthService';
import { Link, useNavigate } from 'react-router-dom';

export default function SignUp() {
    const [inputerror, setInputerror] = useState();
    const navigate = useNavigate()
    const [fromData, setFromdata] = useState({
        name: "",
        email: "",
        mobile: "",
        password: "",
    })
    // handle Input value 
    const handleInputValue = (e) => {
        const { name, value } = e.target;
        setFromdata((prev) => ({
            ...prev,
            [name]: value,
        }))
        setInputerror("")
    }

    // handle form data
    const handleFromData = async (e) => {
        e.preventDefault()
        if (!fromData.name || !fromData.email || !fromData.mobile || !fromData.password) {
            document.querySelector('.site-header').style.zIndex = "1";
            document.querySelector('.marq').style.height = "44px";

            toast.error("Please fill all fields", {
                onClose: () => {
                    document.querySelector('.site-header').style.zIndex = "9999";
                    document.querySelector('.marq').style.height = "35px";
                }
            });

            return;
        }
        // if (fromData.password.length < 6) {

        //     document.querySelector('.site-header').style.zIndex = "1";
        //     document.querySelector('.marq').style.height = "44px";
        //     toast.error("Password must be at least 6 characters", {

        //         onClose: () => {
        //             document.querySelector('.site-header').style.zIndex = "9999";
        //             document.querySelector('.marq').style.height = "35px";
        //         }
        //     });
        //     return;
        // }
        // if (fromData.mobile.length < 10) {
        //     document.querySelector('.site-header').style.zIndex = "1";
        //     document.querySelector('.marq').style.height = "44px";
        //     toast.error("Mobile number must be at least 10 digits", {
        //         onClose: () => {
        //             document.querySelector('.site-header').style.zIndex = "9999";
        //             document.querySelector('.marq').style.height = "35px";
        //         }
        //     });
        //     return;
        // }
        // if (fromData.mobile.length > 15) {
        //     document.querySelector('.site-header').style.zIndex = "1";
        //     document.querySelector('.marq').style.height = "44px";
        //     toast.error("Mobile number must be at most 15 digits", {
        //         onClose: () => {
        //             document.querySelector('.site-header').style.zIndex = "9999";
        //             document.querySelector('.marq').style.height = "35px";
        //         }
        //     });
        //     return;
        // }
        // if (!fromData.email.includes("@")) {
        //     document.querySelector('.site-header').style.zIndex = "1";
        //     document.querySelector('.marq').style.height = "44px";
        //     toast.error("Please enter a valid email address", {
        //         onClose: () => {
        //             document.querySelector('.site-header').style.zIndex = "9999";
        //             document.querySelector('.marq').style.height = "35px";
        //         }
        //     });
        //     return;

        // }
        // if (fromData.password.length < 6) {
        //     document.querySelector('.site-header').style.zIndex = "1";
        //     document.querySelector('.marq').style.height = "44px";
        //     toast.error("Password must be at least 6 characters", {
        //         onClose: () => {
        //             document.querySelector('.site-header').style.zIndex = "9999";
        //             document.querySelector('.marq').style.height = "35px";
        //         }
        //     });
        //     return;
        // }
        try {
            const response = await register(fromData)
            toast.success("Registration successful", {
                onClose: () => {
                    document.querySelector('.site-header').style.zIndex = "9999";
                    document.querySelector('.marq').style.height = "35px";
                    navigate("/sign-in")
                }
            });
            setFromdata({
                name: "",
                email: "",
                mobile: "",
                password: "",
            })
            setInputerror("")

        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <div className="page-content">
                {/* inner page banner */}
                <div
                    className="dz-bnr-inr overlay-secondary-dark dz-bnr-inr-sm"
                    style={{ backgroundImage: "url(frontend/images/background/bg3.jpg)", zIndex: "1" }}
                >
                    <div className="container">
                        <div className="dz-bnr-inr-entry">
                            <h1>Registration</h1>
                            <nav aria-label="breadcrumb" className="breadcrumb-row">
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <a href="index.html"> Home</a>
                                    </li>
                                    <li className="breadcrumb-item">Registration</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                {/* inner page banner End*/}
                {/* contact area */}
                <section className="content-inner shop-account">
                    {/* Product */}
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 col-md-6 mb-4">
                                <div className="login-area">
                                    {inputerror && (
                                        <div class="alert alert-danger">
                                            {inputerror}
                                        </div>)}

                                    <form
                                        method="POST"
                                        onSubmit={handleFromData}
                                    >
                                        <h4 className="text-secondary">Registration</h4>
                                        <p className="font-weight-600">
                                            If you don't have an account with us, please Registration.
                                        </p>
                                        <div className="mb-4">
                                            <label className="label-title">Username *</label>
                                            <input
                                                required=""
                                                name="name"
                                                onChange={handleInputValue}
                                                value={fromData.name}
                                                defaultValue=""
                                                className="form-control"
                                                placeholder="Your Username"
                                                type="text"
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label className="label-title">Email Address *</label>
                                            <input
                                                required=""
                                                name="email"
                                                onChange={handleInputValue}
                                                value={fromData.email}
                                                className="form-control"
                                                placeholder="Your Email address"
                                                defaultValue=""
                                                type="email"
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label className="label-title">Mobile Number*</label>
                                            <input
                                                required=""
                                                name="mobile"
                                                className="form-control"
                                                onChange={handleInputValue}
                                                value={fromData.mobile}
                                                placeholder="Your Email address"
                                                defaultValue=""
                                                type="number"
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label className="label-title">Password *</label>
                                            <input
                                                required=""
                                                name="password"
                                                onChange={handleInputValue}
                                                value={fromData.password}
                                                className="form-control "
                                                placeholder="Type Password"
                                                type="password"
                                            />
                                        </div>
                                        <div className="mb-5">
                                            <small>
                                                Your personal data will be used to support your experience
                                                throughout this website, to manage access to your account, and
                                                for other purposes described in our
                                                <a href="https://ambitionpublications.com/privacy-policy">
                                                    privacy policy
                                                </a>
                                                .
                                            </small>
                                        </div>
                                        <div className="text-left">
                                            <button className="btn btn-primary btnhover w-100 me-2">
                                                Register
                                            </button>
                                        </div>
                                    </form>
                                    {/* Toast Container */}
                                    <ToastContainer
                                        position="top-right"
                                        autoClose={5000}
                                        hideProgressBar={false}
                                        closeOnClick
                                        pauseOnHover
                                        draggable
                                        theme="dark"
                                        style={{ zIndex: 9999, position: 'fixed' }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Product END */}
                </section>
                {/* contact area End*/}
            </div>

        </div>
    )
}
