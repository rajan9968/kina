import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { login } from '../Service/AuthService';

export default function SignIn() {
    const navigate = useNavigate();
    const [fromValue, setInputdata] = useState({
        email: "",
        password: ""
    })
    const handleInputValue = (e) => {
        const { name, value } = e.target;
        setInputdata((prev) => ({
            ...prev,
            [name]: value,
        }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!fromValue.email || !fromValue.password) {
            toast.error("Please fill all fields");
            return;
        }
        try {
            // console.log("Form data:", fromValue);
            const response = await login(fromValue);
            if (response.success === true) {
                toast.success("Login successful");
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("user", JSON.stringify(response.data.user));
                localStorage.setItem("isLoggedIn", true);
                // console.log("Login response:", response.data);
                navigate("/");
            }

            setInputdata({
                email: "",
                password: "",
            })


        } catch (error) {
            const errorMessage = error.response?.data?.message || "Login failed";;
            document.querySelector('.site-header').style.zIndex = "1";
            document.querySelector('.marq').style.height = "44px";
            toast.error(errorMessage, {
                onClose: () => {
                    document.querySelector('.site-header').style.zIndex = "9999";
                    document.querySelector('.marq').style.height = "35px";
                }
            });
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
                            <h1>Login</h1>
                            <nav aria-label="breadcrumb" className="breadcrumb-row">
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <a href="index.html"> Home</a>
                                    </li>
                                    <li className="breadcrumb-item">Login</li>
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
                        <div className="row">
                            <div className="col-lg-6 col-md-6 mb-4">
                                <div className="login-area">
                                    <div className="tab-content">
                                        <h4>NEW CUSTOMER</h4>
                                        <p>
                                            By creating an account with our store, you will be able to move
                                            through the checkout process faster, store multiple shipping
                                            addresses, view and track your orders in your account and more.
                                        </p>
                                        <Link
                                            className="btn btn-primary btnhover m-r5 button-lg radius-no"
                                            to="/sign-up"
                                        >
                                            CREATE AN ACCOUNT
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 mb-4">
                                <div className="login-area">
                                    <div className="tab-content nav">
                                        <div className="col-12">{/**/}</div>
                                        <form
                                            id="login"
                                            onSubmit={handleSubmit}
                                            className="tab-pane active col-12"
                                        >

                                            <h4 className="text-secondary">LOGIN</h4>
                                            <p className="font-weight-600">
                                                If you have an account with us, please log in.
                                            </p>
                                            <div className="mb-4">
                                                <label className="label-title">E-MAIL *</label>
                                                <input
                                                    name="email"
                                                    onChange={handleInputValue}
                                                    value={fromValue.email}
                                                    required=""
                                                    className="form-control"
                                                    placeholder="Your Email Id"
                                                    type="email"
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label className="label-title">PASSWORD *</label>
                                                <input
                                                    name="password"
                                                    onChange={handleInputValue}
                                                    value={fromValue.password}
                                                    required=""
                                                    className="form-control "
                                                    placeholder="Type Password"
                                                    type="password"
                                                />
                                            </div>
                                            <div className="text-left">
                                                <button className="btn btn-primary btnhover me-2">
                                                    login
                                                </button>
                                                <a
                                                    data-bs-toggle="tab"
                                                    href="#forgot-password"
                                                    className="m-l5"
                                                >
                                                    <i className="fas fa-unlock-alt" /> Forgot Password
                                                </a>
                                            </div>
                                        </form>
                                        <form
                                            id="forgot-password"
                                            action="https://ambitionpublications.com/sent-otp"
                                            method="post"
                                            className="tab-pane fade col-12"
                                            onsubmit="handleSubmit()"
                                        >
                                            <input
                                                type="hidden"
                                                name="_token"
                                                defaultValue="XDqpp553uSwk99ubv8FGVQDdJAsutceHa8yvKvWH"
                                            />{" "}
                                            <h4 className="text-secondary">FORGET PASSWORD ?</h4>
                                            <p className="font-weight-600">Enter Registered Email</p>
                                            <div className="mb-3">
                                                <label className="label-title">E-MAIL *</label>
                                                <input
                                                    name="email"
                                                    required=""
                                                    className="form-control"
                                                    placeholder="Your Email Id"
                                                    type="email"
                                                />
                                            </div>
                                            <div className="text-left">
                                                <a
                                                    className="btn btn-outline-secondary btnhover m-r10"
                                                    data-bs-toggle="tab"
                                                    href="#login"
                                                >
                                                    Back
                                                </a>
                                                <button
                                                    id="submitBtn"
                                                    className="btn btn-primary btnhover me-2"
                                                    type="submit"
                                                >
                                                    Submit
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
                    </div>
                    {/* Product END */}
                </section>
                {/* contact area End*/}
            </div>

        </div>
    )
}
