import React, { useEffect } from 'react'

export default function AboutPAge() {
    useEffect(() => {
        const text = document.querySelector(".text2");
        if (text) {
            text.innerHTML = text.innerText
                .split("")
                .map((char, i) => `<span style="transform:rotate(${i * 10.3}deg)">${char}</span>`)
                .join("");
        }
    }, []);
    return (
        <div>
            <div className="page-content bg-white">
                {/*banner*/}
                <div
                    className="dz-bnr-inr overlay-secondary-dark dz-bnr-inr-sm"
                    style={{
                        backgroundImage: "url(frontend/images/background/about-banner.jpg)"
                    }}
                >
                    <div className="container">
                        <div className="dz-bnr-inr-entry">
                            <h1>About us</h1>
                            <nav aria-label="breadcrumb" className="breadcrumb-row">
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <a href="https://ambitionpublications.com"> Home</a>
                                    </li>
                                    <li className="breadcrumb-item">About us</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>

                {/*Our Mission Section*/}
                <section className="content-inner overlay-white-middle">
                    <div className="container">
                        <div className="row about-style1 align-items-center">
                            <div className="col-lg-5 m-b30">
                                <div
                                    className="mainn"
                                    style={{
                                        backgroundImage: "url(frontend/images/about/a.jpeg)",
                                        backgroundSize: "cover",
                                        backgroundPosition: "center"
                                    }}
                                >
                                    <div className=" circle2">
                                        <div className="logo2">
                                            <img
                                                src="frontend/images/about/hammer.png"
                                                style={{ padding: "11px 22px" }}
                                                alt=""
                                            />
                                        </div>
                                        <div className="text2">
                                            <p>AMBITION PUBLICATIONS-LAW PUBLISHERS</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-lg-7 m-b30 aos-item"
                                data-aos="fade-up"
                                data-aos-duration={800}
                                data-aos-delay={500}
                            >
                                <div className="about-content px-lg-4">
                                    <div className="section-head style-1">
                                        <h2 className="title">Ambition Law Institute</h2>
                                        <p
                                            style={{

                                                color: "#3e4073",

                                                fontWeight: 500,
                                                textAlign: "justify"
                                            }}
                                        >
                                            <strong>'Ambition Law Institute'</strong> is a subsidiary of
                                            AEPL which has a glorious history of 19 years of successful
                                            guidance in Judicial Services Examination along with Civil
                                            Services Examination and CLAT. Ambition has a unique teaching
                                            technique developed by highly experienced and dedicated team of
                                            experts. This methodology has been developed through extensive
                                            interaction with renowned and reverent faculty members who have
                                            given their valuable inputs. We have some of the finest faculty
                                            available in the coaching includes blend of experience,
                                            expertise &amp; young dynamic coach who developed the techniques
                                            of Subjective Answer writing &amp; Interview. Our Vision To
                                            provide high quality and relevant education and training to meet
                                            the requirement of the modern era competitive exams standard so
                                            that the aspirants from any segment of society could have full
                                            confidence about any exam in legal sphere at lowest cost. We are
                                            seriously committed to our mission to provide the finest legal
                                            education and to prepare the next generation of leaders. Why Us?
                                            Apart from this, we have a strong research and development team
                                            consisting of people with great experience who continuously
                                            indulge in making the materials and shorting the day to day
                                            development which is provided to the student. This institute
                                            offers a highly conducive, healthy and congenial study
                                            environment in well-ventilated, spacious and hygienic classrooms
                                        </p>
                                    </div>
                                    <a
                                        href="https://ambitionpublications.com/contact-us"
                                        className="btn btn-primary btnhover shadow-primary"
                                    >
                                        Contact Us
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*icon-box3 section*/}
                <section className="content-inner-1 bg-light">
                    <div className="container">
                        <div className="section-head text-center">
                            <h2 className="title">Our Mission</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris
                            </p>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div
                                    className="icon-bx-wraper style-3 m-b30"
                                    style={{ height: "90%" }}
                                >
                                    <div className="icon-lg m-b20">
                                        <i className="flaticon-open-book-1 icon-cell" />
                                    </div>
                                    <div className="icon-content">
                                        <h4 className="title">Best Bookstore</h4>
                                        <p>
                                            Ambition has been serving students from across the spectrum in
                                            all capacities for over a decade and has been the undisputed
                                            leader in providing meaningful preparatory legal education.{" "}
                                        </p>
                                        <a href="https://ambitionpublications.com/contact-us">
                                            Learn More <i className="fa-solid fa-angles-right" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div
                                    className="icon-bx-wraper style-3 m-b30"
                                    style={{ height: "90%" }}
                                >
                                    <div className="icon-lg m-b20">
                                        <i className="flaticon-exclusive icon-cell" />
                                    </div>
                                    <div className="icon-content">
                                        <h4 className="title">Trusted Seller</h4>
                                        <p>
                                            All our teachers and staff are dedicated to making classes
                                            congenial for students. We commit ourselves to evolve in as many
                                            ways as possible to suit the needs and aspirations of our
                                            students. The pace, intensity and remedial attributes are
                                            carefully placed keeping only the students at the realm.{" "}
                                        </p>
                                        <a href="https://ambitionpublications.com/contact-us">
                                            Learn More <i className="fa-solid fa-angles-right" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div
                                    className="icon-bx-wraper style-3 m-b30"
                                    style={{ height: "90%" }}
                                >
                                    <div className="icon-lg m-b20">
                                        <i className="flaticon-store icon-cell" />
                                    </div>
                                    <div className="icon-content">
                                        <h4 className="title">Expand Store</h4>
                                        <p>
                                            We strongly believe in helping a child grow not only
                                            intellectually but also in terms of a more pleasing personality.
                                            Additionally, we absolutely cherish spending time and effort on
                                            every individual so ensure a marked betterment.
                                        </p>
                                        <a href="https://ambitionpublications.com/contact-us">
                                            Learn More <i className="fa-solid fa-angles-right" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    )
}
