import React from 'react'

export default function Cart() {
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
                            <h1>Cart</h1>
                            <nav aria-label="breadcrumb" className="breadcrumb-row">
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <a href="https://ambitionpublications.com"> Home</a>
                                    </li>
                                    <li className="breadcrumb-item">Cart</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                {/* inner page banner End*/}
                {/* contact area */}
                {/*<form action="https://ambitionpublications.com/sign-in" method="post">*/}
                <form action="https://ambitionpublications.com/account-login" method="post">
                    <input
                        type="hidden"
                        name="_token"
                        defaultValue="XDqpp553uSwk99ubv8FGVQDdJAsutceHa8yvKvWH"
                    />{" "}
                    <section className="content-inner shop-account">
                        {/* Product */}
                        <div style={{ textAlign: "center" }}>
                            <img
                                src="https://ambitionpublications.com/frontend/images/add-to-cart.png"
                                alt=""
                            />
                            <h2>
                                <b>Cart is empty.</b>
                            </h2>
                            <p>
                                If you're interested in series or collections of books, list down the
                                ones you want to complete or explore further
                            </p>
                        </div>
                        {/* Product END */}
                    </section>
                </form>
                {/* contact area End*/}
            </div>

        </div>
    )
}
