import React from 'react'
import { InstagramOutlined, FacebookOutlined, GoogleOutlined, YoutubeOutlined } from "@ant-design/icons";
import ScrollToTop from "react-scroll-to-top";


export default function Footer() {
  return (
    <div>
      <>
        {/* Footer */}
        <footer className="site-footer footer-dark">
          <ScrollToTop smooth />
          {/* Footer Top */}
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div
                  className="col-xl-3 col-lg-12 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="widget widget_about">
                    <div className="footer-logo logo-white text-center">
                      <a href="https://ambitionpublications.com">
                        <h1 className="kanit-heading text-black">Kina</h1>
                      </a>
                    </div>
                    <p className="text">
                      Ambition Publications, we're dedicated to providing top-quality
                      legal resources in India. Explore our collection for the best
                      bare Acts, complete with insightful commentaries and the latest
                      case laws. Trust us for accurate, updated, and comprehensive
                      legal content.
                    </p>
                    <div className="dz-social-icon style-1">
                      <ul>
                        <li>
                          <a
                            href="https://www.facebook.com/AmbitionPublicationsBooks"
                            target="_blank"
                          >
                            <FacebookOutlined />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://youtube.com/@ambitionlawinstitute2001?si=9SMmKbKEatt-gKgO"
                            target="_blank"
                          >
                            <YoutubeOutlined />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.linkedin.com/company/ambition-publications/"
                            target="_blank"
                          >
                            <GoogleOutlined />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.instagram.com/ambitionpublications/?hl=en"
                            target="_blank"
                          >
                            <InstagramOutlined />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-4 wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <div className="widget widget_services">
                    <h5 className="footer-title">Our Links</h5>
                    <ul>
                      <li>
                        <a href="https://ambitionpublications.com/about-us">
                          About us
                        </a>
                      </li>
                      <li>
                        <a href="https://ambitionpublications.com/contact-us">
                          Contact us
                        </a>
                      </li>
                      <li>
                        <a href="https://ambitionpublications.com/privacy-policy">
                          Privacy Policy
                        </a>
                      </li>
                      <li>
                        <a href="https://ambitionpublications.com/delivery-and-shipping-policy">
                          Shipping And Delivery Policy
                        </a>
                      </li>
                      <li>
                        <a href="https://ambitionpublications.com/cancellation-and-return-policy">
                          Cancellation And Return Policy
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="col-xl-2 col-lg-3 col-sm-4 col-4 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="widget widget_services">
                    <h5 className="footer-title">Ambition </h5>
                    <ul>
                      <li>
                        <a href="https://ambitionpublications.com">
                          Ambition Publications
                        </a>
                      </li>
                      <li>
                        <a href="#">Services</a>
                      </li>
                      <li>
                        <a href="https://ambitionpublications.com/book-shop">
                          Book Details
                        </a>
                      </li>
                      <li>
                        <a href="https://ambitionpublications.com/blogs">
                          Blog Details
                        </a>
                      </li>
                      <li>
                        <a href="https://ambitionpublications.com/book-shop">Shop</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-4 wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  <div className="widget widget_services">
                    <h5 className="footer-title">Resources</h5>
                    <ul>
                      <li>
                        <a href="#">Download</a>
                      </li>
                      <li>
                        <a href="https://ambitionpublications.com/contact-us">
                          Help Center
                        </a>
                      </li>
                      <li>
                        <a href="https://ambitionpublications.com/cart">Shop Cart</a>
                      </li>
                      <li>
                        <a href="https://ambitionpublications.com/sign-in">Login</a>
                      </li>
                      <li>
                        <a href="https://ambitionpublications.com/sign-un">
                          Register
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="col-xl-3 col-lg-3 col-md-12 col-sm-12 wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <div className="widget widget_getintuch">
                    <h5 className="footer-title">Get in Touch With Us</h5>
                    <ul>
                      <li>
                        <i className="flaticon-placeholder" />
                        <span>
                          110, Virat Bhawan, Dr. Mukherjee Nagar, Delhi-110009
                        </span>
                      </li>
                      <li>
                        <i className="flaticon-phone" />
                        <span>
                          +91-8506050204
                          <br />
                          011-49872382
                        </span>
                      </li>
                      <li>
                        <i className="flaticon-email" />
                        <span>
                          ambitionpublications2017@gmail.com
                          <br />
                        </span>
                      </li>
                      <li>
                        <span
                          style={{ background: "#fff", padding: 6, borderRadius: 10 }}
                        >
                          <img
                            src="https://ambitionpublications.com/frontend/images/payment.png"
                            alt=""
                          />
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Footer Top End */}
          {/* Footer Bottom */}
          <div className="footer-bottom">
            <div className="container">
              <div className="row fb-inner">
                <div className="col-lg-6 col-md-12 text-start">
                  <p className="copyright-text">
                    Ambition Law Institute - © 2019 All Rights Reserved
                  </p>
                </div>
                <div className="col-lg-6 col-md-12 text-end">
                  <p>
                    Made with <span className="heart" /> by <a href="#">ARK Tech</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Footer Bottom End */}
        </footer>
        {/* Footer End */}
        <div className="whatsapp-icon-move">
          <ul>
            {/*<li> <a href="https://api.whatsapp.com/send/?phone=%2B918506050204&text&type=phone_number&app_absent=0">*/}
            {/*        <img src="https://ambitionpublications.com/frontend/icons/flaticon/whatsapp-icon.png" style="    max-width: 11%;margin-bottom: 10px"*/}
            {/*            alt="">*/}
            {/*    </a>*/}
            {/*</li>*/}
            {/* <a href="tel:8506050204">
              <li>
                <img
                  src="https://ambitionpublications.com/frontend/icons/flaticon/phone-call.png"
                  alt=""
                />
              </li>
            </a> */}
          </ul>
        </div>
      </>

    </div>
  )
}
