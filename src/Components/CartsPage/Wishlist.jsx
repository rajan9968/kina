import React from 'react'

export default function Wishlist() {
    return (
        <div>
            <div className="page-content">
                {/* inner page banner */}
                <div
                    className="dz-bnr-inr overlay-secondary-dark dz-bnr-inr-sm"
                    style={{ backgroundImage: "url(frontend/images/background/bg3.jpg)" }}
                >
                    <div className="container">
                        <div className="dz-bnr-inr-entry">
                            <h1>Wishlist</h1>
                            <nav aria-label="breadcrumb" className="breadcrumb-row">
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <a href="https://ambitionpublications.com"> Home</a>
                                    </li>
                                    <li className="breadcrumb-item">Wishlist</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                {/* inner page banner End*/}
                <div className="content-inner-1">
                    <div className="container">
                        <div style={{ textAlign: "center" }}>
                            <img
                                src="https://ambitionpublications.com/frontend/images/wishlist.png"
                                alt=""
                            />
                            <h2>
                                <b>Wishlist is empty.</b>
                            </h2>
                            <p>
                                If you're interested in series or collections of books, list down the
                                ones you want to complete or explore further
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
