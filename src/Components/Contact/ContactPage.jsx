import React from 'react'

export default function ContactPage() {
    return (
        <div>
            <>
                {/* inner page banner */}
                <div
                    className="dz-bnr-inr overlay-secondary-dark dz-bnr-inr-sm"
                    style={{
                        backgroundImage: "url(frontend/images/background/contact-banner.jpg)",
                        backgroundSize: "cover",
                        backgroundPosition: "top",
                        height: "400px!important"
                    }}
                >
                    <div className="container">
                        <div className="dz-bnr-inr-entry">
                            <h1>Contact</h1>
                            <nav aria-label="breadcrumb" className="breadcrumb-row">
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <a href="https://ambitionpublications.com"> Home</a>
                                    </li>
                                    <li className="breadcrumb-item">Contact</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div
                    className="content-inner-2 pt-0"
                    style={{ paddingBottom: "0px!important" }}
                >
                    <div className="map-iframe">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.7411673477586!2d77.20515427457545!3d28.697388281134216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfde0935c0371%3A0xac994c66734c490e!2sAMBITION%20LAW%20INSTITUTE%20-%20BEST%20JUDICIARY%20COACHING%20IN%20DELHI%20%7C%20INDIA!5e0!3m2!1sen!2sin!4v1713113267114!5m2!1sen!2sin"
                            style={{
                                border: 0,
                                width: "100%",
                                minHeight: "100%",
                                marginBottom: "-8px"
                            }}
                            allowFullScreen=""
                        />
                    </div>
                </div>
                <section
                    className="contact-wraper1"
                    style={{
                        backgroundImage: "url(frontend/images/background/bg2.jpg)",
                        marginBottom: 0
                    }}
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="contact-info">
                                    <div className="section-head text-white style-1">
                                        <h3 className="title text-white">Get In Touch</h3>
                                        <p>
                                            If you are interested in working with us, please get in touch.
                                        </p>
                                    </div>
                                    <ul className="no-margin">
                                        <li className="icon-bx-wraper text-white left m-b30">
                                            <div className="icon-md">
                                                <span className="icon-cell text-primary">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={50}
                                                        height={50}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth={2}
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="feather feather-map-pin"
                                                    >
                                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                                        <circle cx={12} cy={10} r={3} />
                                                    </svg>
                                                </span>
                                            </div>
                                            <div className="icon-content">
                                                <h5 className=" dz-tilte text-white">Our Address</h5>
                                                <p>110, Virat Bhawan, Dr. Mukherjee Nagar, Delhi-110009</p>
                                            </div>
                                        </li>
                                        <li className="icon-bx-wraper text-white left m-b30">
                                            <div className="icon-md">
                                                <span className="icon-cell text-primary">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={50}
                                                        height={50}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth={2}
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="feather feather-mail"
                                                    >
                                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                                        <polyline points="22,6 12,13 2,6" />
                                                    </svg>
                                                </span>
                                            </div>
                                            <div className="icon-content">
                                                <h5 className="dz-tilte text-white">Our Email</h5>
                                                <p>
                                                    ambitionpublications2017@gmail.com
                                                    <br />
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-7 m-b40">
                                <div className="contact-area1 m-r20 m-md-r0">
                                    <div className="section-head style-1">
                                        <h6 className="sub-title text-primary">CONTACT US</h6>
                                        <h3 className="title m-b20">Get In Touch With Us</h3>
                                    </div>
                                    <form
                                        className="dz-form"
                                        method="POST"
                                        action="https://ambitionpublications.com/contact"
                                    >
                                        <input
                                            type="hidden"
                                            name="_token"
                                            defaultValue="lUFtsbl4xvRAl1gcRc9T4ZVTOSgmx4ohKTda33PM"
                                        />
                                        <div className="input-group">
                                            <input
                                                required=""
                                                type="text"
                                                className="form-control"
                                                name="name"
                                                placeholder="Full Name"
                                                defaultValue=""
                                            />
                                        </div>
                                        <div className="input-group">
                                            <input
                                                required=""
                                                type="text"
                                                className="form-control"
                                                name="email"
                                                placeholder="Email Adress"
                                                defaultValue=""
                                            />
                                        </div>
                                        <div className="input-group">
                                            <input
                                                required=""
                                                type="text"
                                                className="form-control"
                                                name="phone"
                                                placeholder="Phone No."
                                                defaultValue=""
                                            />
                                        </div>
                                        <div className="input-group">
                                            <textarea
                                                required=""
                                                name="message"
                                                rows={5}
                                                className="form-control"
                                                placeholder="Message"
                                                defaultValue={""}
                                            />
                                        </div>
                                        <div>
                                            <button
                                                name="submit"
                                                type="submit"
                                                value="submit"
                                                className="btn w-100 btn-primary btnhover"
                                            >
                                                SUBMIT
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>

        </div>
    )
}
