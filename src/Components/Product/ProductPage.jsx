import React from 'react'

export default function Product() {
    return (
        <div>
            <div className="page-content bg-grey">
                <div className="content-inner-1 border-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3">
                                <div className="shop-filter">
                                    <div className="d-flex justify-content-between">
                                        <h4 className="title">Filter</h4>
                                        <a href="javascript:void(0);" className="panel-close-btn">
                                            <i className="flaticon-close" />
                                        </a>
                                    </div>
                                    <div className="accordion accordion-filter" id="accordionExample">
                                        <div className="accordion-item">
                                            <button
                                                className="accordion-button"
                                                id="headingOne"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseOne"
                                                aria-expanded="true"
                                                aria-controls="collapseOne"
                                            >
                                                Shop by Category
                                            </button>
                                            <div
                                                id="collapseOne"
                                                className="accordion-collapse collapse show accordion-body"
                                                aria-labelledby="headingOne"
                                                data-bs-parent="#accordionExample"
                                            >
                                                <div className="widget dz-widget_services d-flex justify-content-between">
                                                    <div className="widget widget_categories">
                                                        <ul>
                                                            <li className="cat-item cat-item-26">
                                                                <a href="https://ambitionpublications.com/book-shop/bare-act-hindi">
                                                                    BARE ACT-HINDI (7)
                                                                </a>
                                                            </li>
                                                            <li className="cat-item cat-item-26">
                                                                <a href="https://ambitionpublications.com/book-shop/bare-act-english">
                                                                    BARE ACT ENGLISH (26)
                                                                </a>
                                                            </li>
                                                            <li className="cat-item cat-item-26">
                                                                <a href="https://ambitionpublications.com/book-shop/pyq-and-case-law-books">
                                                                    PYQ AND CASE LAW BOOKS (6)
                                                                </a>
                                                            </li>
                                                            <li className="cat-item cat-item-26">
                                                                <a href="https://ambitionpublications.com/book-shop/law-entrance-book-notes">
                                                                    LAW ENTRANCE BOOK &amp; NOTES (1)
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row filter-buttons">
                                        <div>
                                            <a
                                                href="javascript:void(0);"
                                                className="btn btn-secondary btnhover mt-4 d-block"
                                            >
                                                Refine Search
                                            </a>
                                            <a
                                                href="javascript:void(0);"
                                                className="btn btn-outline-secondary btnhover mt-3 d-block"
                                            >
                                                Reset Filter
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-9">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h4 className="title">Books</h4>
                                    <a href="javascript:void(0);" className="btn btn-primary panel-btn">
                                        Filter
                                    </a>
                                </div>
                                <div className="filter-area m-b30">
                                    <div className="grid-area" style={{ justifyContent: "left" }}>
                                        <div className="shop-tab">
                                            <ul
                                                className="nav text-center product-filter justify-content-end"
                                                role="tablist"
                                            >
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#">
                                                        <svg
                                                            width={24}
                                                            height={24}
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M3 5H21C21.2652 5 21.5196 4.89464 21.7071 4.7071C21.8946 4.51957 22 4.26521 22 4C22 3.73478 21.8946 3.48043 21.7071 3.29289C21.5196 3.10536 21.2652 3 21 3H3C2.73478 3 2.48043 3.10536 2.29289 3.29289C2.10536 3.48043 2 3.73478 2 4C2 4.26521 2.10536 4.51957 2.29289 4.7071C2.48043 4.89464 2.73478 5 3 5Z"
                                                                fill="#AAAAAA"
                                                            />
                                                            <path
                                                                d="M3 13H21C21.2652 13 21.5196 12.8947 21.7071 12.7071C21.8946 12.5196 22 12.2652 22 12C22 11.7348 21.8946 11.4804 21.7071 11.2929C21.5196 11.1054 21.2652 11 21 11H3C2.73478 11 2.48043 11.1054 2.29289 11.2929C2.10536 11.4804 2 11.7348 2 12C2 12.2652 2.10536 12.5196 2.29289 12.7071C2.48043 12.8947 2.73478 13 3 13Z"
                                                                fill="#AAAAAA"
                                                            />
                                                            <path
                                                                d="M3 21H21C21.2652 21 21.5196 20.8947 21.7071 20.7071C21.8946 20.5196 22 20.2652 22 20C22 19.7348 21.8946 19.4804 21.7071 19.2929C21.5196 19.1054 21.2652 19 21 19H3C2.73478 19 2.48043 19.1054 2.29289 19.2929C2.10536 19.4804 2 19.7348 2 20C2 20.2652 2.10536 20.5196 2.29289 20.7071C2.48043 20.8947 2.73478 21 3 21Z"
                                                                fill="#AAAAAA"
                                                            />
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#">
                                                        <svg
                                                            width={24}
                                                            height={24}
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M3 11H10C10.2652 11 10.5196 10.8946 10.7071 10.7071C10.8946 10.5196 11 10.2652 11 10V3C11 2.73478 10.8946 2.48043 10.7071 2.29289C10.5196 2.10536 10.2652 2 10 2H3C2.73478 2 2.48043 2.10536 2.29289 2.29289C2.10536 2.48043 2 2.73478 2 3V10C2 10.2652 2.10536 10.5196 2.29289 10.7071C2.48043 10.8946 2.73478 11 3 11ZM4 4H9V9H4V4Z"
                                                                fill="#AAAAAA"
                                                            />
                                                            <path
                                                                d="M14 11H21C21.2652 11 21.5196 10.8946 21.7071 10.7071C21.8946 10.5196 22 10.2652 22 10V3C22 2.73478 21.8946 2.48043 21.7071 2.29289C21.5196 2.10536 21.2652 2 21 2H14C13.7348 2 13.4804 2.10536 13.2929 2.29289C13.1054 2.48043 13 2.73478 13 3V10C13 10.2652 13.1054 10.5196 13.2929 10.7071C13.4804 10.8946 13.7348 11 14 11ZM15 4H20V9H15V4Z"
                                                                fill="#AAAAAA"
                                                            />
                                                            <path
                                                                d="M3 22H10C10.2652 22 10.5196 21.8946 10.7071 21.7071C10.8946 21.5196 11 21.2652 11 21V14C11 13.7348 10.8946 13.4804 10.7071 13.2929C10.5196 13.1054 10.2652 13 10 13H3C2.73478 13 2.48043 13.1054 2.29289 13.2929C2.10536 13.4804 2 13.7348 2 14V21C2 21.2652 2.10536 21.5196 2.29289 21.7071C2.48043 21.8946 2.73478 22 3 22ZM4 15H9V20H4V15Z"
                                                                fill="#AAAAAA"
                                                            />
                                                            <path
                                                                d="M14 22H21C21.2652 22 21.5196 21.8946 21.7071 21.7071C21.8946 21.5196 22 21.2652 22 21V14C22 13.7348 21.8946 13.4804 21.7071 13.2929C21.5196 13.1054 21.2652 13 21 13H14C13.7348 13 13.4804 13.1054 13.2929 13.2929C13.1054 13.4804 13 13.7348 13 14V21C13 21.2652 13.1054 21.5196 13.2929 21.7071C13.4804 21.8946 13.7348 22 14 22ZM15 15H20V20H15V15Z"
                                                                fill="#AAAAAA"
                                                            />
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#">
                                                        <svg
                                                            width={24}
                                                            height={24}
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M3 22H21C21.2652 22 21.5196 21.8946 21.7071 21.7071C21.8946 21.5196 22 21.2652 22 21V3C22 2.73478 21.8946 2.48043 21.7071 2.29289C21.5196 2.10536 21.2652 2 21 2H3C2.73478 2 2.48043 2.10536 2.29289 2.29289C2.10536 2.48043 2 2.73478 2 3V21C2 21.2652 2.10536 21.5196 2.29289 21.7071C2.48043 21.8946 2.73478 22 3 22ZM13 4H20V11H13V4ZM13 13H20V20H13V13ZM4 4H11V20H4V4Z"
                                                                fill="#AAAAAA"
                                                            />
                                                        </svg>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="category">
                                        <div className="form-group">
                                            <i className="fas fa-sort-amount-down me-2 text-secondary" />
                                            <select className="default-select" id="categorys">
                                                <option value={1}>Sort by popularity</option>
                                                <option value="newness">Sort by newness</option>
                                                <option value="lowest_price">
                                                    Sort by price: low to high
                                                </option>
                                                <option value="highest_price">
                                                    Sort by price: high to low
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="row book-grid-row filter-data" id="filter-data">
                                    <div className="col-book style-2">
                                        <div className="dz-shop-card style-1" style={{ height: "95%" }}>
                                            <div className="dz-media">
                                                {/* Image and overlay within the same parent div */}
                                                <img
                                                    src="https://ambitionpublications.com/media/book/1742797681-book.jpg"
                                                    alt="book"
                                                    className="book-image"
                                                />
                                                <div className="overlay">
                                                    <a
                                                        href="#"
                                                        className="button btn-primary quick-view"
                                                        data-toggle="modal"
                                                        data-target="#myModal"
                                                        data-item-id={48}
                                                        style={{
                                                            backgroundColor: "#fff",
                                                            borderColor: "#1bc1a4"
                                                        }}
                                                    >
                                                        <div className="qube">
                                                            <div className="front">
                                                                {" "}
                                                                <i className="fa fa-eye" aria-hidden="true" />
                                                            </div>
                                                            <div className="back">Quick view</div>
                                                        </div>
                                                    </a>
                                                    <a
                                                        href="https://ambitionpublications.com/cart/NEW CRIMINAL LAW BARE ACT COMBO PACK HINDI | 3 BARE ACTS/48"
                                                        style={{
                                                            color: "#000",
                                                            background: "white",
                                                            border: "#fff"
                                                        }}
                                                        className="btn btn-primary add-to-cart"
                                                    >
                                                        <i className="flaticon-shopping-cart-1 m-r10" />
                                                        Add to Cart
                                                    </a>
                                                </div>
                                            </div>
                                            <br />
                                            <h5 className="title" style={{ fontSize: 16 }}>
                                                <a href="https://ambitionpublications.com/books-detail/new-criminal-law-bare-act-combo-pack-hindi-3-bare-acts">
                                                    NEW CRIMINAL LAW BARE ACT COMBO PACK HINDI | 3 BARE ACTS
                                                </a>
                                            </h5>
                                            <div className="price">
                                                <span className="price-num">₹1125</span>
                                                <del>₹1500</del>
                                            </div>
                                            {/* Rest of your existing code remains here */}
                                            <div className="bookmark-btn style-2">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="flexCheckDefault1"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="flexCheckDefault1"
                                                >
                                                    <i className="flaticon-heart" />
                                                </label>
                                            </div>
                                            {/* Rest of existing HTML continues here... */}
                                        </div>
                                    </div>
                                    <div className="col-book style-2">
                                        <div className="dz-shop-card style-1" style={{ height: "95%" }}>
                                            <div className="dz-media">
                                                {/* Image and overlay within the same parent div */}
                                                <img
                                                    src="https://ambitionpublications.com/media/book/1741590797-book.jpg"
                                                    alt="book"
                                                    className="book-image"
                                                />
                                                <div className="overlay">
                                                    <a
                                                        href="#"
                                                        className="button btn-primary quick-view"
                                                        data-toggle="modal"
                                                        data-target="#myModal"
                                                        data-item-id={47}
                                                        style={{
                                                            backgroundColor: "#fff",
                                                            borderColor: "#1bc1a4"
                                                        }}
                                                    >
                                                        <div className="qube">
                                                            <div className="front">
                                                                {" "}
                                                                <i className="fa fa-eye" aria-hidden="true" />
                                                            </div>
                                                            <div className="back">Quick view</div>
                                                        </div>
                                                    </a>
                                                    <a
                                                        href="https://ambitionpublications.com/cart/Recent & Landmark  CASE LAWS  | SUBJECT-WISE & CHAPTER-WISE CONTAINING CASES ON BNS, BSA AND BNSS/47"
                                                        style={{
                                                            color: "#000",
                                                            background: "white",
                                                            border: "#fff"
                                                        }}
                                                        className="btn btn-primary add-to-cart"
                                                    >
                                                        <i className="flaticon-shopping-cart-1 m-r10" />
                                                        Add to Cart
                                                    </a>
                                                </div>
                                            </div>
                                            <br />
                                            <h5 className="title" style={{ fontSize: 16 }}>
                                                <a href="https://ambitionpublications.com/books-detail/recent-landmark-case-laws-subject-wise-chapter-wise-containing-cases-on-bns-bsa-and-bnss">
                                                    Recent &amp; Landmark CASE LAWS | SUBJECT-WISE &amp;
                                                    CHAPTER-WISE CONTAINING CASES ON BNS, BSA AND BNSS
                                                </a>
                                            </h5>
                                            <div className="price">
                                                <span className="price-num">₹735</span>
                                                <del>₹980</del>
                                            </div>
                                            {/* Rest of your existing code remains here */}
                                            <div className="bookmark-btn style-2">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="flexCheckDefault1"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="flexCheckDefault1"
                                                >
                                                    <i className="flaticon-heart" />
                                                </label>
                                            </div>
                                            {/* Rest of existing HTML continues here... */}
                                        </div>
                                    </div>
                                    <div className="col-book style-2">
                                        <div className="dz-shop-card style-1" style={{ height: "95%" }}>
                                            <div className="dz-media">
                                                {/* Image and overlay within the same parent div */}
                                                <img
                                                    src="https://ambitionpublications.com/media/book/1741586199-book.jpg"
                                                    alt="book"
                                                    className="book-image"
                                                />
                                                <div className="overlay">
                                                    <a
                                                        href="#"
                                                        className="button btn-primary quick-view"
                                                        data-toggle="modal"
                                                        data-target="#myModal"
                                                        data-item-id={46}
                                                        style={{
                                                            backgroundColor: "#fff",
                                                            borderColor: "#1bc1a4"
                                                        }}
                                                    >
                                                        <div className="qube">
                                                            <div className="front">
                                                                {" "}
                                                                <i className="fa fa-eye" aria-hidden="true" />
                                                            </div>
                                                            <div className="back">Quick view</div>
                                                        </div>
                                                    </a>
                                                    <a
                                                        href="https://ambitionpublications.com/cart/भारतीय नागरिक सुरक्षा संहिता, 2023/46"
                                                        style={{
                                                            color: "#000",
                                                            background: "white",
                                                            border: "#fff"
                                                        }}
                                                        className="btn btn-primary add-to-cart"
                                                    >
                                                        <i className="flaticon-shopping-cart-1 m-r10" />
                                                        Add to Cart
                                                    </a>
                                                </div>
                                            </div>
                                            <br />
                                            <h5 className="title" style={{ fontSize: 16 }}>
                                                <a href="https://ambitionpublications.com/books-detail/bharataya-nagaraka-sarakashha-sahata-2023">
                                                    भारतीय नागरिक सुरक्षा संहिता, 2023
                                                </a>
                                            </h5>
                                            <div className="price">
                                                <span className="price-num">₹585</span>
                                                <del>₹780</del>
                                            </div>
                                            {/* Rest of your existing code remains here */}
                                            <div className="bookmark-btn style-2">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="flexCheckDefault1"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="flexCheckDefault1"
                                                >
                                                    <i className="flaticon-heart" />
                                                </label>
                                            </div>
                                            {/* Rest of existing HTML continues here... */}
                                        </div>
                                    </div>
                                    <div className="col-book style-2">
                                        <div className="dz-shop-card style-1" style={{ height: "95%" }}>
                                            <div className="dz-media">
                                                {/* Image and overlay within the same parent div */}
                                                <img
                                                    src="https://ambitionpublications.com/media/book/1728651884-book.jpg"
                                                    alt="book"
                                                    className="book-image"
                                                />
                                                <div className="overlay">
                                                    <a
                                                        href="#"
                                                        className="button btn-primary quick-view"
                                                        data-toggle="modal"
                                                        data-target="#myModal"
                                                        data-item-id={45}
                                                        style={{
                                                            backgroundColor: "#fff",
                                                            borderColor: "#1bc1a4"
                                                        }}
                                                    >
                                                        <div className="qube">
                                                            <div className="front">
                                                                {" "}
                                                                <i className="fa fa-eye" aria-hidden="true" />
                                                            </div>
                                                            <div className="back">Quick view</div>
                                                        </div>
                                                    </a>
                                                    <a
                                                        href="https://ambitionpublications.com/cart/भारतीय न्याय संहिता, 2023/45"
                                                        style={{
                                                            color: "#000",
                                                            background: "white",
                                                            border: "#fff"
                                                        }}
                                                        className="btn btn-primary add-to-cart"
                                                    >
                                                        <i className="flaticon-shopping-cart-1 m-r10" />
                                                        Add to Cart
                                                    </a>
                                                </div>
                                            </div>
                                            <br />
                                            <h5 className="title" style={{ fontSize: 16 }}>
                                                <a href="https://ambitionpublications.com/books-detail/bharataya-nayaya-sahata-2023">
                                                    भारतीय न्याय संहिता, 2023
                                                </a>
                                            </h5>
                                            <div className="price">
                                                <span className="price-num">₹330</span>
                                                <del>₹440</del>
                                            </div>
                                            {/* Rest of your existing code remains here */}
                                            <div className="bookmark-btn style-2">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="flexCheckDefault1"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="flexCheckDefault1"
                                                >
                                                    <i className="flaticon-heart" />
                                                </label>
                                            </div>
                                            {/* Rest of existing HTML continues here... */}
                                        </div>
                                    </div>
                                    <div className="col-book style-2">
                                        <div className="dz-shop-card style-1" style={{ height: "95%" }}>
                                            <div className="dz-media">
                                                {/* Image and overlay within the same parent div */}
                                                <img
                                                    src="https://ambitionpublications.com/media/book/1725948860-book.jpg"
                                                    alt="book"
                                                    className="book-image"
                                                />
                                                <div className="overlay">
                                                    <a
                                                        href="#"
                                                        className="button btn-primary quick-view"
                                                        data-toggle="modal"
                                                        data-target="#myModal"
                                                        data-item-id={44}
                                                        style={{
                                                            backgroundColor: "#fff",
                                                            borderColor: "#1bc1a4"
                                                        }}
                                                    >
                                                        <div className="qube">
                                                            <div className="front">
                                                                {" "}
                                                                <i className="fa fa-eye" aria-hidden="true" />
                                                            </div>
                                                            <div className="back">Quick view</div>
                                                        </div>
                                                    </a>
                                                    <a
                                                        href="https://ambitionpublications.com/cart/भारतीय साक्ष्य अधिनियम, 2023 ( DIGLOT) HINDI/44"
                                                        style={{
                                                            color: "#000",
                                                            background: "white",
                                                            border: "#fff"
                                                        }}
                                                        className="btn btn-primary add-to-cart"
                                                    >
                                                        <i className="flaticon-shopping-cart-1 m-r10" />
                                                        Add to Cart
                                                    </a>
                                                </div>
                                            </div>
                                            <br />
                                            <h5 className="title" style={{ fontSize: 16 }}>
                                                <a href="https://ambitionpublications.com/books-detail/bharataya-sakashhaya-athhanayama-2023-diglot-hindi">
                                                    भारतीय साक्ष्य अधिनियम, 2023 ( DIGLOT) HINDI
                                                </a>
                                            </h5>
                                            <div className="price">
                                                <span className="price-num">₹210</span>
                                                <del>₹280</del>
                                            </div>
                                            {/* Rest of your existing code remains here */}
                                            <div className="bookmark-btn style-2">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="flexCheckDefault1"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="flexCheckDefault1"
                                                >
                                                    <i className="flaticon-heart" />
                                                </label>
                                            </div>
                                            {/* Rest of existing HTML continues here... */}
                                        </div>
                                    </div>
                                    <div className="col-book style-2">
                                        <div className="dz-shop-card style-1" style={{ height: "95%" }}>
                                            <div className="dz-media">
                                                {/* Image and overlay within the same parent div */}
                                                <img
                                                    src="https://ambitionpublications.com/media/book/1725948494-book.jpg"
                                                    alt="book"
                                                    className="book-image"
                                                />
                                                <div className="overlay">
                                                    <a
                                                        href="#"
                                                        className="button btn-primary quick-view"
                                                        data-toggle="modal"
                                                        data-target="#myModal"
                                                        data-item-id={43}
                                                        style={{
                                                            backgroundColor: "#fff",
                                                            borderColor: "#1bc1a4"
                                                        }}
                                                    >
                                                        <div className="qube">
                                                            <div className="front">
                                                                {" "}
                                                                <i className="fa fa-eye" aria-hidden="true" />
                                                            </div>
                                                            <div className="back">Quick view</div>
                                                        </div>
                                                    </a>
                                                    <a
                                                        href="https://ambitionpublications.com/cart/All  STATES  JUDICIARY PYQs 3rd EDITION NEW/43"
                                                        style={{
                                                            color: "#000",
                                                            background: "white",
                                                            border: "#fff"
                                                        }}
                                                        className="btn btn-primary add-to-cart"
                                                    >
                                                        <i className="flaticon-shopping-cart-1 m-r10" />
                                                        Add to Cart
                                                    </a>
                                                </div>
                                            </div>
                                            <br />
                                            <h5 className="title" style={{ fontSize: 16 }}>
                                                <a href="https://ambitionpublications.com/books-detail/all-states-judiciary-pyqs-3rd-edition-new">
                                                    All STATES JUDICIARY PYQs 3rd EDITION NEW
                                                </a>
                                            </h5>
                                            <div className="price">
                                                <span className="price-num">₹1249</span>
                                                <del>₹1699</del>
                                            </div>
                                            {/* Rest of your existing code remains here */}
                                            <div className="bookmark-btn style-2">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="flexCheckDefault1"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="flexCheckDefault1"
                                                >
                                                    <i className="flaticon-heart" />
                                                </label>
                                            </div>
                                            {/* Rest of existing HTML continues here... */}
                                        </div>
                                    </div>
                                    <div className="col-book style-2">
                                        <div className="dz-shop-card style-1" style={{ height: "95%" }}>
                                            <div className="dz-media">
                                                {/* Image and overlay within the same parent div */}
                                                <img
                                                    src="https://ambitionpublications.com/media/book/1722067893-book.png"
                                                    alt="book"
                                                    className="book-image"
                                                />
                                                <div className="overlay">
                                                    <a
                                                        href="#"
                                                        className="button btn-primary quick-view"
                                                        data-toggle="modal"
                                                        data-target="#myModal"
                                                        data-item-id={41}
                                                        style={{
                                                            backgroundColor: "#fff",
                                                            borderColor: "#1bc1a4"
                                                        }}
                                                    >
                                                        <div className="qube">
                                                            <div className="front">
                                                                {" "}
                                                                <i className="fa fa-eye" aria-hidden="true" />
                                                            </div>
                                                            <div className="back">Quick view</div>
                                                        </div>
                                                    </a>
                                                    <a
                                                        href="https://ambitionpublications.com/cart/3 NEW CRIMINAL LAW BARE ACT COMBO PACKS (NEW BNS ,BNSS, BSA) ENGLISH/41"
                                                        style={{
                                                            color: "#000",
                                                            background: "white",
                                                            border: "#fff"
                                                        }}
                                                        className="btn btn-primary add-to-cart"
                                                    >
                                                        <i className="flaticon-shopping-cart-1 m-r10" />
                                                        Add to Cart
                                                    </a>
                                                </div>
                                            </div>
                                            <br />
                                            <h5 className="title" style={{ fontSize: 16 }}>
                                                <a href="https://ambitionpublications.com/books-detail/3-new-criminal-law-bare-act-combo-packs-new-bns-bnss-bsa-english">
                                                    3 NEW CRIMINAL LAW BARE ACT COMBO PACKS (NEW BNS ,BNSS, BSA)
                                                    ENGLISH
                                                </a>
                                            </h5>
                                            <div className="price">
                                                <span className="price-num">₹705</span>
                                                <del>₹940</del>
                                            </div>
                                            {/* Rest of your existing code remains here */}
                                            <div className="bookmark-btn style-2">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="flexCheckDefault1"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="flexCheckDefault1"
                                                >
                                                    <i className="flaticon-heart" />
                                                </label>
                                            </div>
                                            {/* Rest of existing HTML continues here... */}
                                        </div>
                                    </div>
                                    <div className="col-book style-2">
                                        <div className="dz-shop-card style-1" style={{ height: "95%" }}>
                                            <div className="dz-media">
                                                {/* Image and overlay within the same parent div */}
                                                <img
                                                    src="https://ambitionpublications.com/media/book/1722249986-book.jpg"
                                                    alt="book"
                                                    className="book-image"
                                                />
                                                <div className="overlay">
                                                    <a
                                                        href="#"
                                                        className="button btn-primary quick-view"
                                                        data-toggle="modal"
                                                        data-target="#myModal"
                                                        data-item-id={40}
                                                        style={{
                                                            backgroundColor: "#fff",
                                                            borderColor: "#1bc1a4"
                                                        }}
                                                    >
                                                        <div className="qube">
                                                            <div className="front">
                                                                {" "}
                                                                <i className="fa fa-eye" aria-hidden="true" />
                                                            </div>
                                                            <div className="back">Quick view</div>
                                                        </div>
                                                    </a>
                                                    <a
                                                        href="https://ambitionpublications.com/cart/CLAT PYQs Solved Paper Year wise & Subject wise Solution 2008-2023/40"
                                                        style={{
                                                            color: "#000",
                                                            background: "white",
                                                            border: "#fff"
                                                        }}
                                                        className="btn btn-primary add-to-cart"
                                                    >
                                                        <i className="flaticon-shopping-cart-1 m-r10" />
                                                        Add to Cart
                                                    </a>
                                                </div>
                                            </div>
                                            <br />
                                            <h5 className="title" style={{ fontSize: 16 }}>
                                                <a href="https://ambitionpublications.com/books-detail/clat-pyqs-solved-paper-year-wise-subject-wise-solution-2008-2023">
                                                    CLAT PYQs Solved Paper Year wise &amp; Subject wise Solution
                                                    2008-2023
                                                </a>
                                            </h5>
                                            <div className="price">
                                                <span className="price-num">₹340</span>
                                                <del>₹850</del>
                                            </div>
                                            {/* Rest of your existing code remains here */}
                                            <div className="bookmark-btn style-2">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="flexCheckDefault1"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="flexCheckDefault1"
                                                >
                                                    <i className="flaticon-heart" />
                                                </label>
                                            </div>
                                            {/* Rest of existing HTML continues here... */}
                                        </div>
                                    </div>
                                    <div className="col-book style-2">
                                        <div className="dz-shop-card style-1" style={{ height: "95%" }}>
                                            <div className="dz-media">
                                                {/* Image and overlay within the same parent div */}
                                                <img
                                                    src="https://ambitionpublications.com/media/book/1720167251-book.jpg"
                                                    alt="book"
                                                    className="book-image"
                                                />
                                                <div className="overlay">
                                                    <a
                                                        href="#"
                                                        className="button btn-primary quick-view"
                                                        data-toggle="modal"
                                                        data-target="#myModal"
                                                        data-item-id={38}
                                                        style={{
                                                            backgroundColor: "#fff",
                                                            borderColor: "#1bc1a4"
                                                        }}
                                                    >
                                                        <div className="qube">
                                                            <div className="front">
                                                                {" "}
                                                                <i className="fa fa-eye" aria-hidden="true" />
                                                            </div>
                                                            <div className="back">Quick view</div>
                                                        </div>
                                                    </a>
                                                    <a
                                                        href="#"
                                                        style={{
                                                            color: "#000",
                                                            background: "white",
                                                            border: "#fff"
                                                        }}
                                                        className="btn btn-primary add-to-cart"
                                                    >
                                                        <i className="flaticon-shopping-cart-1 m-r10" />
                                                        Out Of Stockt
                                                    </a>
                                                </div>
                                            </div>
                                            <br />
                                            <h5 className="title" style={{ fontSize: 16 }}>
                                                <a href="https://ambitionpublications.com/books-detail/model-judiciary-papers">
                                                    MODEL JUDICIARY PAPERS
                                                </a>
                                            </h5>
                                            <div className="price">
                                                <span className="price-num">₹218</span>
                                                <del>₹290</del>
                                            </div>
                                            {/* Rest of your existing code remains here */}
                                            <div className="bookmark-btn style-2">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="flexCheckDefault1"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="flexCheckDefault1"
                                                >
                                                    <i className="flaticon-heart" />
                                                </label>
                                            </div>
                                            {/* Rest of existing HTML continues here... */}
                                        </div>
                                    </div>
                                </div>
                                <div className="row page mt-0">
                                    <div className="col-md-6"></div>
                                    <div className="col-md-6">
                                        <nav aria-label="Blog Pagination">
                                            <ul className="pagination text-center p-t20 style-1 m-b30">
                                                {/* Previous Page Link */}
                                                <li className="page-item disabled">
                                                    <a className="page-link prev" href="">
                                                        Prev
                                                    </a>
                                                </li>
                                                {/* Pagination Elements */}
                                                <li className="page-item active">
                                                    <a
                                                        className="page-link"
                                                        href="https://ambitionpublications.com/book-shop?page=1"
                                                    >
                                                        1
                                                    </a>
                                                </li>
                                                <li className="page-item ">
                                                    <a
                                                        className="page-link"
                                                        href="https://ambitionpublications.com/book-shop?page=2"
                                                    >
                                                        2
                                                    </a>
                                                </li>
                                                <li className="page-item ">
                                                    <a
                                                        className="page-link"
                                                        href="https://ambitionpublications.com/book-shop?page=3"
                                                    >
                                                        3
                                                    </a>
                                                </li>
                                                <li className="page-item ">
                                                    <a
                                                        className="page-link"
                                                        href="https://ambitionpublications.com/book-shop?page=4"
                                                    >
                                                        4
                                                    </a>
                                                </li>
                                                <li className="page-item ">
                                                    <a
                                                        className="page-link"
                                                        href="https://ambitionpublications.com/book-shop?page=5"
                                                    >
                                                        5
                                                    </a>
                                                </li>
                                                {/* Next Page Link */}
                                                <li className="page-item ">
                                                    <a
                                                        className="page-link next"
                                                        href="https://ambitionpublications.com/book-shop?page=2"
                                                    >
                                                        Next
                                                    </a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* The Modal */}
                <div className="modal fade" id="myModal">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <button
                                type="button"
                                style={{
                                    background: "black",
                                    padding: "0px 10px",
                                    border: "none",
                                    color: "#fff",
                                    fontSize: 22,
                                    position: "absolute",
                                    right: "-10px",
                                    top: "-18px"
                                }}
                                className="close"
                                data-dismiss="modal"
                            >
                                ×
                            </button>
                            {/* Modal Header */}
                            <div className="row">
                                <div className="col-lg-4 moim">
                                    <img src="" id="book_image" alt="" className="img-fluid" />
                                </div>
                                <div className="col-lg-8 p-3 px-3">
                                    <div style={{ padding: 10 }}>
                                        <input type="hidden" name="" id="id" />
                                        <h5 id="book_title" />
                                        <h6 id="book_heading" />
                                        <div className="price">
                                            <del style={{ fontSize: 22 }} id="book_cut_price">
                                                RS. 100
                                            </del>
                                            <span
                                                className="price-num"
                                                style={{ fontSize: "25px!important", color: "red" }}
                                                id="book_price"
                                            >
                                                RS. 500
                                            </span>
                                        </div>
                                        <br />
                                        <p>Shipping calculated at checkout.</p>
                                        <p id="book_description" />
                                        <div className="row">
                                            <div className="col-lg-3 col-6 quantity btn-quantity style-1 me-3 qun">
                                                <input
                                                    id="demo_vertical2"
                                                    type="text"
                                                    defaultValue={1}
                                                    name="demo_vertical2"
                                                    maxLength={0}
                                                />
                                            </div>
                                            <div className="col-lg-4 col-6 atcc">
                                                <button className="btn btn-primary atc">ADD TO CART</button>
                                            </div>
                                            <div className="col-lg-4 hinm">
                                                <a id="book_id">
                                                    <button
                                                        className="btn btn-primary atc"
                                                        style={{ background: "#000", border: "#000" }}
                                                    >
                                                        BUY NOW
                                                    </button>
                                                </a>
                                            </div>
                                        </div>
                                        <br />
                                        <div>
                                            <ul>
                                                <li>SKU</li>
                                                <li>
                                                    Availability : <span className="qv" id="book_quantity" />
                                                </li>
                                                <li>
                                                    Language : <span className="qv" id="book_language" />
                                                </li>
                                                <li>
                                                    Publisher : <span className="qv" id="book_publisher" />
                                                </li>
                                                <li>
                                                    Categories : <span className="qv" id="cate_name" />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
