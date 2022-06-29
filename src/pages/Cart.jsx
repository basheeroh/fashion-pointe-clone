
import React from "react";
import UserNavBar from "../components/UserNavBar";
import fplogo from "../assets/images/FP icon 1-3.svg";
import man from "../assets/images/man2.png";
import woman from "../assets/images/woman.jpg";
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Cart = () => {
    return (
        <>
            <header className="inner-header">
                <UserNavBar />
                <div className="header-content">
                    <h1>Cart</h1>
                </div>
            </header>

            <main className="course ">
                <section className="courses">
                    <h2>3 Courses in your cart</h2>
                    <div className="flex cart">
                        <div className="list-courses">  
                            <article className="flex">
                                <div>
                                    <Link to={"/courses/123"}>
                                        <img src={man} alt="" className="course-img"/>
                                        <div className="header-info">
                                            <p>4.0</p>
                                            <p className="flex"><span>20,000 Students</span><span>1hr 50m</span> </p> 
                                        </div>
                                    </Link>
                                </div>
                                <div className="desc">
                                    <Link to={"/courses/123"}>
                                        <h3>Fashion Business Accounting For Beginners and Intermediate Designers</h3>
                                    </Link>
                                    <p className="category">Fashion Accounting, Business Fashion</p>
                                    <p>James Oludiya</p>
                                    <div className="flex cart-option">
                                        <p>
                                            <a href="#">Remove</a> | <Link to="/wishlist">Move to Wishlist</Link>
                                        </p>
                                        <p className="price">$29.99</p>
                                    </div>
                                    {/* <p className="progress"><span>33% Complete</span> | 50 mins left</p> */}
                                </div>
                            </article>
                            <article className="flex">
                                <div>
                                    <Link to={"/courses/123"}>
                                        <img src={woman} alt="" className="course-img"/>
                                        <div className="header-info">
                                            <p>4.0</p>
                                            <p className="flex"><span>20,000 Students</span><span>1hr 50m</span> </p> 
                                        </div>
                                    </Link>
                                </div>
                                <div className="desc">
                                    <Link to={"/courses/123"}>
                                        <h3>Fashion Business Accounting For Beginners and Intermediate Designers</h3>
                                    </Link>
                                    <p className="category">Fashion Accounting, Business Fashion</p>
                                    <p>James Oludiya</p>
                                    <div className="flex cart-option">
                                        <p>
                                            <a href="#">Remove</a> | <Link to="/wishlist">Move to Wishlist</Link>
                                        </p>
                                        <p className="price">$29.99</p>
                                    </div>
                                </div>
                            </article>
                            <article className="flex">
                                <div>
                                    <Link to={"/courses/123"}>
                                        <img src={man} alt="" className="course-img"/>
                                        <div className="header-info">
                                            <p>4.0</p>
                                            <p className="flex"><span>20,000 Students</span><span>1hr 50m</span> </p> 
                                        </div>
                                    </Link>
                                </div>
                                <div className="desc">
                                    <Link to={"/courses/123"}>
                                        <h3>Fashion Business Accounting For Beginners and Intermediate Designers</h3>
                                    </Link>
                                    <p className="category">Fashion Accounting, Business Fashion</p>
                                    <p>James Oludiya</p>
                                    <div className="flex cart-option">
                                        <p>
                                            <a href="#">Remove</a> | <Link to="/wishlist">Move to Wishlist</Link>
                                        </p>
                                        <p className="price">$29.99</p>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className="order-info">
                            <p>Total:</p>
                            <h2>$89.97</h2>
                            <Link to={"/checkout"} className="btn course-btn">Checkout</Link>
                        </div>
                    </div>
                    
                </section>

               
            </main>
            <Footer/>
        </>
    )
}

export default Cart;