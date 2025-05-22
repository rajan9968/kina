import React from 'react'
import { Link } from 'react-router-dom'
import { getUser, logout, isLoggedIn } from '../Utils/authutils'
import { useNavigate } from "react-router-dom";


export default function Header() {
  const navigate = useNavigate();
  const user = getUser()
  const userName = user ? user.name : "Sign In";
  const userLink = user ? "/profile" : "/sign-in";
  const loggedIn = isLoggedIn();

  const handleLogout = () => {
    logout();
    navigate("/");
  }
  return (
    <div>
      <>
        {/* Header */}
        <header className="site-header mo-left header style-1">
          <div className="topheader">
            <div className="container">
              <div className="row">
                <div className="col-lg-6" />
                <div className="col-lg-6">
                  <ul>
                    <li style={{ display: "inline-block" }}>011-49872382 |</li>
                    <li style={{ display: "inline-block", marginRight: "7%" }}>
                      +91-8506050204&nbsp;&nbsp;
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Main Header */}
          <div className="header-info-bar">
            <div className="container clearfix">
              {/* Website Logo */}
              <div className="logo-header logo-dark">
                <Link to="/">
                  {/* <img
                    src="https://ambitionpublications.com/frontend/images/AMBITION PUBLICATION logo.png"
                    alt="logo"
                  /> */}
                  <h1 className="kanit-heading">Kina</h1>

                </Link>


              </div>
              {/* EXTRA NAV */}
              <div className="extra-nav">
                <div className="extra-cell">
                  <ul className="navbar-nav header-right">
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to="/wishlist"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24px"
                          viewBox="0 0 24 24"
                          width="24px"
                          fill="#000000"
                        >
                          <path d="M0 0h24v24H0V0z" fill="none" />
                          <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" />
                        </svg>
                        <span
                          className="badge"
                          style={{ borderRadius: 14, background: "red" }}
                        >
                          0
                        </span>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/cart">
                        <button type="button" className="nav-link box cart-btn">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 0 24 24"
                            width="24px"
                            fill="#000000"
                          >
                            <path d="M0 0h24v24H0V0z" fill="none" />
                            <path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                          </svg>
                          <span
                            className="badge"
                            style={{ borderRadius: 14, background: "red" }}
                          >
                            0
                          </span>
                        </button>
                      </Link>
                    </li>
                    <li className="nav-item dropdown profile-dropdown  ms-4">
                      <a
                        className="nav-link"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <img
                          src="https://ambitionpublications.com/frontend/images/user-account.png"
                          alt="/"
                        />
                        <div className="profile-info">
                          <h6 className="title">
                            Hello,<small style={{ fontSize: 13 }}>{userName}</small>
                          </h6>
                          <span>Accounts &amp; Lists</span>
                        </div>
                      </a>
                      <div className="dropdown-menu py-0 dropdown-menu-end">
                        <div className="dropdown-header"></div>
                        <div className="dropdown-body">
                          <Link
                            to={userLink}
                            className="dropdown-item d-flex justify-content-between align-items-center ai-icon"
                          >
                            <div>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="20px"
                                viewBox="0 0 24 24"
                                width="20px"
                                fill="#000000"
                              >
                                <path d="M0 0h24v24H0V0z" fill="none" />
                                <path d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                              </svg>
                              <span className="ms-2">Profile</span>
                            </div>
                          </Link>
                          <a
                            href="https://ambitionpublications.com/profile"
                            className="dropdown-item d-flex justify-content-between align-items-center ai-icon"
                          >
                            <div>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="20px"
                                viewBox="0 0 24 24"
                                width="20px"
                                fill="#000000"
                              >
                                <path d="M0 0h24v24H0V0z" fill="none" />
                                <path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                              </svg>
                              <span className="ms-2">My Order</span>
                            </div>
                          </a>
                          <a
                            href="https://ambitionpublications.com/profile"
                            className="dropdown-item d-flex justify-content-between align-items-center ai-icon"
                          >
                            <div>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="20px"
                                viewBox="0 0 24 24"
                                width="20px"
                                fill="#000000"
                              >
                                <path d="M0 0h24v24H0V0z" fill="none" />
                                <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" />
                              </svg>
                              <span className="ms-2">Wishlist</span>
                            </div>
                          </a>
                        </div>
                        <div className="dropdown-footer">
                          {loggedIn ? (
                            <button
                              className="btn btn-primary w-100 btnhover btn-sm"
                              onClick={handleLogout}
                            >
                              Logout
                            </button>
                          ) : (
                            <Link
                              className="btn btn-primary w-100 btnhover btn-sm"
                              to="/sign-in"
                            >
                              Login
                            </Link>
                          )}
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              {/* header search nav */}
              <div className="header-search-nav">
                <form
                  className="header-item-search"
                  method="get"
                  action="https://ambitionpublications.com/book-shop"
                >
                  <div className="input-group search-input">
                    {/* <select className="default-select">
                <option value="">All</option>
                <option>BARE ACT-HINDI</option>
                <option>BARE ACT ENGLISH</option>
                <option>PYQ AND CASE LAW BOOKS</option>
                <option>LAW ENTRANCE BOOK &amp; NOTES</option>
              </select> */}
                    <input
                      type="search"
                      name="search"
                      className="form-control"
                      aria-label="Text input with dropdown button"
                      placeholder="Search Books Here"
                    />
                    <button className="btn" type="button">
                      <i className="flaticon-loupe" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* Main Header End */}
          {/* Main Header */}
          <div className="sticky-header main-bar-wraper navbar-expand-lg">
            <div className="main-bar clearfix">
              <div className="container clearfix">
                {/* Website Logo */}
                <div className="logo-header logo-dark">
                  <a href="https://ambitionpublications.com">
                    <img
                      src="https://ambitionpublications.com/frontend/images/AMBITION PUBLICATION logo.png"
                      alt="logo"
                    />
                  </a>
                </div>
                {/* Nav Toggle Button */}
                <button
                  className="navbar-toggler collapsed navicon justify-content-end"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavDropdown"
                  aria-controls="navbarNavDropdown"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span />
                  <span />
                  <span />
                </button>
                {/* EXTRA NAV */}
                <div className="extra-nav">
                  <div className="extra-cell">
                    <Link to="/contact-us" className="btn btn-primary btnhover">
                      Get In Touch
                    </Link>

                  </div>
                </div>
                {/* Main Nav */}
                <div
                  className="header-nav navbar-collapse collapse justify-content-start"
                  id="navbarNavDropdown"
                >
                  <div className="logo-header logo-dark">
                    <a href="index.html">
                      <img
                        src="https://ambitionpublications.com/frontend/images/logo.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <form className="search-input">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        aria-label="Text input with dropdown button"
                        placeholder="Search Books Here"
                      />
                      <button className="btn" type="button">
                        <i className="flaticon-loupe" />
                      </button>
                    </div>
                  </form>
                  <ul className="nav navbar-nav">
                    <li>
                      <Link to="/">
                        <span>Home</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="about-us">
                        <span>About Us</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="products">
                        <span>Shop</span>
                      </Link>

                    </li>
                    <li>
                      <Link to="gallery">
                        <span>Gallery</span>
                      </Link>

                    </li>
                    <li>
                      <Link to="blogs">
                        <span>Blogs</span>
                      </Link>

                    </li>
                    <li>
                      <Link to="contact-us">
                        <span>Contact Us</span>
                      </Link>

                    </li>
                    {/* <li className="mobile-check">
                <a
                  className="nav-link"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://ambitionpublications.com/frontend/images/user-account.png"
                    alt="/"
                  />
                  <div className="profile-info">
                    <h6 className="title">
                      Hello,<small style={{ fontSize: 13 }}>Sign In</small>
                    </h6>
                    <span>Accounts &amp; Lists</span>
                  </div>
                </a>
                <div className="dropdown-menu py-0 dropdown-menu-end">
                  <div className="dropdown-header"></div>
                  <div className="dropdown-body">
                    <a
                      href="https://ambitionpublications.com/profile"
                      className="dropdown-item d-flex justify-content-between align-items-center ai-icon"
                    >
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="20px"
                          viewBox="0 0 24 24"
                          width="20px"
                          fill="#000000"
                        >
                          <path d="M0 0h24v24H0V0z" fill="none" />
                          <path d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg>
                        <span className="ms-2">Profile</span>
                      </div>
                    </a>
                    <a
                      href="https://ambitionpublications.com/profile"
                      className="dropdown-item d-flex justify-content-between align-items-center ai-icon"
                    >
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="20px"
                          viewBox="0 0 24 24"
                          width="20px"
                          fill="#000000"
                        >
                          <path d="M0 0h24v24H0V0z" fill="none" />
                          <path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                        </svg>
                        <span className="ms-2">My Order</span>
                      </div>
                    </a>
                    <a
                      href="https://ambitionpublications.com/profile"
                      className="dropdown-item d-flex justify-content-between align-items-center ai-icon"
                    >
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="20px"
                          viewBox="0 0 24 24"
                          width="20px"
                          fill="#000000"
                        >
                          <path d="M0 0h24v24H0V0z" fill="none" />
                          <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" />
                        </svg>
                        <span className="ms-2">Wishlist</span>
                      </div>
                    </a>
                  </div>
                  <div className="dropdown-footer">
                    <a
                      className="btn btn-primary w-100 btnhover btn-sm"
                      href="https://ambitionpublications.com/sign-in"
                    >
                      Log In
                    </a>
                  </div>
                </div>
              </li> */}
                  </ul>
                  <div className="dz-social-icon">
                    <ul>
                      <li>
                        <a className="fab fa-facebook-f" target="_blank" href="#" />
                      </li>
                      <li>
                        <a className="#" target="_blank" href="#" />
                      </li>
                      <li>
                        <a
                          className="fab fa-linkedin-in"
                          target="_blank"
                          href="https://www.linkedin.com/showcase/3686700/admin/"
                        />
                      </li>
                      <li>
                        <a className="fab fa-instagram" target="_blank" href="#" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="main">
                <marquee
                  className="marq"
                  direction="left"
                  loop="true"
                  onmouseover="this.stop();"
                  onmouseout="this.start();"
                >
                  <div className="geek1">
                    <p className="title">
                      <img
                        src="frontend/images/background/balance.png"
                        alt=""
                        style={{ marginBottom: 4 }}
                      />
                      &nbsp;&nbsp; +9185060 50204 Ambition Publications | Best Law
                      Publication in India | Best Law Publishers in India
                      <span style={{ marginLeft: "30%" }}>
                        <img
                          src="frontend/images/background/balance.png"
                          alt=""
                          style={{ marginBottom: 4 }}
                        />
                        &nbsp;&nbsp;Ambition Publications +9185060 50204 | New Law
                        Bare Acts are available | Bharatiya Nyaya Sanhita (B.N.S) 2023
                        | The Bharatiya Sakshya Adhiniyam, 2023 | The Bharatiya
                        Nagarik Suraksha Sanhita, 2023 &nbsp;+9185060&nbsp;50204{" "}
                      </span>
                    </p>
                    <p className="title" />
                  </div>
                </marquee>
              </div>
            </div>
          </div>
          {/* Main Header End */}
        </header>
        {/* Header End */}
      </>

    </div>
  )
}
