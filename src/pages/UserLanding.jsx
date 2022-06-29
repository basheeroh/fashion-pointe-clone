import React from "react";
import NavBar from "../components/NavBar";
import UserNavBar from "../components/UserNavBar";
import fplogo from "../assets/images/FP icon 1-3.svg";
// import businessman from "../assets/images/businessman.jpg";
import man from "../assets/images/man.jpg";
import woman from "../assets/images/woman.jpg";
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Footer from "../components/Footer";
import prev from "../assets/images/prev.png";
import next from "../assets/images/next.png";
import { Link } from "react-router-dom";

const UserLanding = () => {
    return (
        <>
            <header className="main-header">
                <UserNavBar />
                <div className="header-content flex">
                    <h1>Learn.<br />Build. Create on Pointe Fashion.</h1>
                    <form action="#" className="flex header-search">
                        <input type="text" name="" id="" placeholder="Hey designer, what do you want to learn today?" />
                        <button type="submit" className="flex"><span style={{marginRight: "10px"}}>Search</span>  <img src={fplogo} alt="FP logo" width={20} /></button>
                    </form>
                </div>
            </header>

            <main>
                <section className="courses">
                    <h2>Featured Courses</h2>
                    <Splide 
                    hasTrack={ false } 
                    aria-label="..." 
                    options={{
                        type   : 'loop',
                        perPage: 5,
                        // focus  : 'center',
                        pagination: false
                    }} 
                    className=" courses-container"
                    >
                        <div className="custom-wrapper">
                            <SplideTrack>
                                <SplideSlide className="article">
                                    <div>
                                        <Link to={"/courses/123"}>
                                            <img src={man} alt="course name" />
                                        </Link>
                                        <div className="header-info">
                                            <Link to={"/courses/123"}>
                                                <p>4.0</p>
                                                <p className="flex"><span>20,000 Students</span><span>1hr 50m</span> </p> 
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="desc">
                                        <h3>Fashion Business Accounting For Beginners and Intermediate Designers</h3>
                                        <p className="category">Fashion Accounting, Business Fashion</p>
                                        <p>James Oludiya</p>
                                        <p className="price">$29.99</p>
                                    </div>
                                </SplideSlide>
                                <SplideSlide className="article">
                                    <div>
                                        <img src={woman} alt="course name" />
                                        <div className="header-info">
                                        <p>4.0</p>
                                            <p className="flex"><span>20,000 Students</span><span>1hr 50m</span> </p> 
                                        </div>
                                    </div>
                                    <div className="desc">
                                        <h3>Fashion Business Accounting For Beginners and Intermediate Designers</h3>
                                        <p className="category">Fashion Accounting, Business Fashion</p>
                                        <p>James Oludiya</p>
                                        <p className="price">$29.99</p>
                                    </div>
                                </SplideSlide>
                                <SplideSlide className="article">
                                    <div>
                                        <img src={man} alt="course name" />
                                        <div className="header-info">
                                        <p>4.0</p>
                                            <p className="flex"><span>20,000 Students</span><span>1hr 50m</span> </p> 
                                        </div>
                                    </div>
                                    <div className="desc">
                                        <h3>Fashion Business Accounting For Beginners and Intermediate Designers</h3>
                                        <p className="category">Fashion Accounting, Business Fashion</p>
                                        <p>James Oludiya</p>
                                        <p className="price">$29.99</p>
                                    </div>
                                </SplideSlide>
                                <SplideSlide className="article">
                                    <div>
                                        <img src={woman} alt="course name" />
                                        <div className="header-info">
                                        <p>4.0</p>
                                            <p className="flex"><span>20,000 Students</span><span>1hr 50m</span> </p> 
                                        </div>
                                    </div>
                                    <div className="desc">
                                        <h3>Fashion Business Accounting For Beginners and Intermediate Designers</h3>
                                        <p className="category">Fashion Accounting, Business Fashion</p>
                                        <p>James Oludiya</p>
                                        <p className="price">$29.99</p>
                                    </div>
                                </SplideSlide>
                                <SplideSlide className="article">
                                    <div>
                                        <img src={man} alt="course name" />
                                        <div className="header-info">
                                        <p>4.0</p>
                                            <p className="flex"><span>20,000 Students</span><span>1hr 50m</span> </p> 
                                        </div>
                                    </div>
                                    <div className="desc">
                                        <h3>Fashion Business Accounting For Beginners and Intermediate Designers</h3>
                                        <p className="category">Fashion Accounting, Business Fashion</p>
                                        <p>James Oludiya</p>
                                        <p className="price">$29.99</p>
                                    </div>
                                </SplideSlide>
                                <SplideSlide className="article">
                                    <div>
                                        <img src={woman} alt="course name" />
                                        <div className="header-info">
                                        <p>4.0</p>
                                            <p className="flex"><span>20,000 Students</span><span>1hr 50m</span> </p> 
                                        </div>
                                    </div>
                                    <div className="desc">
                                        <h3>Fashion Business Accounting For Beginners and Intermediate Designers</h3>
                                        <p className="category">Fashion Accounting, Business Fashion</p>
                                        <p>James Oludiya</p>
                                        <p className="price">$29.99</p>
                                    </div>
                                </SplideSlide>
                                
                            </SplideTrack>
                            <div className="splide__arrows">
                                <button className="splide__arrow splide__arrow--prev">
                                    <img src={prev} alt="" />
                                </button>
                                <button className="splide__arrow splide__arrow--next">
                                    <img src={next} alt="" />
                                </button>
                            </div>
                            {/* <div className="splide__arrows" /> */}
                        </div>
                    </Splide>
                </section>
                <section className="courses">
                    <h2>Popular Courses</h2>
                    <Splide 
                    hasTrack={ false } 
                    aria-label="..." 
                    options={{
                        type   : 'loop',
                        perPage: 5,
                        // focus  : 'center',
                        pagination: false
                    }} 
                    className=" courses-container"
                    >
                        <div className="custom-wrapper">
                            <SplideTrack>
                                <SplideSlide className="article">
                                    <div>
                                        <img src={woman} alt="course name" />
                                        <div className="header-info">
                                        <p>4.0</p>
                                            <p className="flex"><span>20,000 Students</span><span>1hr 50m</span> </p> 
                                        </div>
                                    </div>
                                    <div className="desc">
                                        <h3>Fashion Business Accounting For Beginners and Intermediate Designers</h3>
                                        <p className="category">Fashion Accounting, Business Fashion</p>
                                        <p>James Oludiya</p>
                                        <p className="price">$29.99</p>
                                    </div>
                                </SplideSlide>
                                <SplideSlide className="article">
                                    <div>
                                        <img src={man} alt="course name" />
                                        <div className="header-info">
                                        <p>4.0</p>
                                            <p className="flex"><span>20,000 Students</span><span>1hr 50m</span> </p> 
                                        </div>
                                    </div>
                                    <div className="desc">
                                        <h3>Fashion Business Accounting For Beginners and Intermediate Designers</h3>
                                        <p className="category">Fashion Accounting, Business Fashion</p>
                                        <p>James Oludiya</p>
                                        <p className="price">$29.99</p>
                                    </div>
                                </SplideSlide>
                                <SplideSlide className="article">
                                    <div>
                                        <img src={woman} alt="course name" />
                                        <div className="header-info">
                                        <p>4.0</p>
                                            <p className="flex"><span>20,000 Students</span><span>1hr 50m</span> </p> 
                                        </div>
                                    </div>
                                    <div className="desc">
                                        <h3>Fashion Business Accounting For Beginners and Intermediate Designers</h3>
                                        <p className="category">Fashion Accounting, Business Fashion</p>
                                        <p>James Oludiya</p>
                                        <p className="price">$29.99</p>
                                    </div>
                                </SplideSlide>
                                <SplideSlide className="article">
                                    <div>
                                        <img src={man} alt="course name" />
                                        <div className="header-info">
                                        <p>4.0</p>
                                            <p className="flex"><span>20,000 Students</span><span>1hr 50m</span> </p> 
                                        </div>
                                    </div>
                                    <div className="desc">
                                        <h3>Fashion Business Accounting For Beginners and Intermediate Designers</h3>
                                        <p className="category">Fashion Accounting, Business Fashion</p>
                                        <p>James Oludiya</p>
                                        <p className="price">$29.99</p>
                                    </div>
                                </SplideSlide>
                                <SplideSlide className="article">
                                    <div>
                                        <img src={woman} alt="course name" />
                                        <div className="header-info">
                                        <p>4.0</p>
                                            <p className="flex"><span>20,000 Students</span><span>1hr 50m</span> </p> 
                                        </div>
                                    </div>
                                    <div className="desc">
                                        <h3>Fashion Business Accounting For Beginners and Intermediate Designers</h3>
                                        <p className="category">Fashion Accounting, Business Fashion</p>
                                        <p>James Oludiya</p>
                                        <p className="price">$29.99</p>
                                    </div>
                                </SplideSlide>
                                <SplideSlide className="article">
                                    <div>
                                        <img src={man} alt="course name" />
                                        <div className="header-info">
                                        <p>4.0</p>
                                            <p className="flex"><span>20,000 Students</span><span>1hr 50m</span> </p> 
                                        </div>
                                    </div>
                                    <div className="desc">
                                        <h3>Fashion Business Accounting For Beginners and Intermediate Designers</h3>
                                        <p className="category">Fashion Accounting, Business Fashion</p>
                                        <p>James Oludiya</p>
                                        <p className="price">$29.99</p>
                                    </div>
                                </SplideSlide>
                                
                            </SplideTrack>

                            <div className="splide__arrows">
                                <button className="splide__arrow splide__arrow--prev">
                                    <img src={prev} alt="" />
                                </button>
                                <button className="splide__arrow splide__arrow--next">
                                    <img src={next} alt="" />
                                </button>
                            </div>
                        </div>
                    </Splide>
                </section>
                <section className="start-learning flex">
                    <div>   
                        <h1>It's never too late to start building your fashion business the right way</h1>
                        <a href="#" className="btn">START LEARNING TODAY</a>
                    </div>
                </section>
                <section className="courses">
                    <h2>Shoemaking</h2>
                    <Splide 
                    hasTrack={ false } 
                    aria-label="..." 
                    options={{
                        type   : 'loop',
                        perPage: 5,
                        // focus  : 'center',
                        pagination: false
                    }} 
                    className=" courses-container"
                    >
                        <div className="custom-wrapper">
                            <SplideTrack>
                                <SplideSlide className="article">
                                    <div>
                                        <img src={woman} alt="course name" />
                                        <div className="header-info">
                                        <p>4.0</p>
                                            <p className="flex"><span>20,000 Students</span><span>1hr 50m</span> </p> 
                                        </div>
                                    </div>
                                    <div className="desc">
                                        <h3>Fashion Business Accounting For Beginners and Intermediate Designers</h3>
                                        <p className="category">Fashion Accounting, Business Fashion</p>
                                        <p>James Oludiya</p>
                                        <p className="price">$29.99</p>
                                    </div>
                                </SplideSlide>
                                <SplideSlide className="article">
                                    <div>
                                        <img src={man} alt="course name" />
                                        <div className="header-info">
                                        <p>4.0</p>
                                            <p className="flex"><span>20,000 Students</span><span>1hr 50m</span> </p> 
                                        </div>
                                    </div>
                                    <div className="desc">
                                        <h3>Fashion Business Accounting For Beginners and Intermediate Designers</h3>
                                        <p className="category">Fashion Accounting, Business Fashion</p>
                                        <p>James Oludiya</p>
                                        <p className="price">$29.99</p>
                                    </div>
                                </SplideSlide>
                                <SplideSlide className="article">
                                    <div>
                                        <img src={woman} alt="course name" />
                                        <div className="header-info">
                                        <p>4.0</p>
                                            <p className="flex"><span>20,000 Students</span><span>1hr 50m</span> </p> 
                                        </div>
                                    </div>
                                    <div className="desc">
                                        <h3>Fashion Business Accounting For Beginners and Intermediate Designers</h3>
                                        <p className="category">Fashion Accounting, Business Fashion</p>
                                        <p>James Oludiya</p>
                                        <p className="price">$29.99</p>
                                    </div>
                                </SplideSlide>
                                <SplideSlide className="article">
                                    <div>
                                        <img src={man} alt="course name" />
                                        <div className="header-info">
                                        <p>4.0</p>
                                            <p className="flex"><span>20,000 Students</span><span>1hr 50m</span> </p> 
                                        </div>
                                    </div>
                                    <div className="desc">
                                        <h3>Fashion Business Accounting For Beginners and Intermediate Designers</h3>
                                        <p className="category">Fashion Accounting, Business Fashion</p>
                                        <p>James Oludiya</p>
                                        <p className="price">$29.99</p>
                                    </div>
                                </SplideSlide>
                                <SplideSlide className="article">
                                    <div>
                                        <img src={woman} alt="course name" />
                                        <div className="header-info">
                                        <p>4.0</p>
                                            <p className="flex"><span>20,000 Students</span><span>1hr 50m</span> </p> 
                                        </div>
                                    </div>
                                    <div className="desc">
                                        <h3>Fashion Business Accounting For Beginners and Intermediate Designers</h3>
                                        <p className="category">Fashion Accounting, Business Fashion</p>
                                        <p>James Oludiya</p>
                                        <p className="price">$29.99</p>
                                    </div>
                                </SplideSlide>
                                <SplideSlide className="article">
                                    <div>
                                        <img src={man} alt="course name" />
                                        <div className="header-info">
                                        <p>4.0</p>
                                            <p className="flex"><span>20,000 Students</span><span>1hr 50m</span> </p> 
                                        </div>
                                    </div>
                                    <div className="desc">
                                        <h3>Fashion Business Accounting For Beginners and Intermediate Designers</h3>
                                        <p className="category">Fashion Accounting, Business Fashion</p>
                                        <p>James Oludiya</p>
                                        <p className="price">$29.99</p>
                                    </div>
                                </SplideSlide>
                                
                            </SplideTrack>

                            <div className="splide__arrows">
                                <button className="splide__arrow splide__arrow--prev">
                                    <img src={prev} alt="" />
                                </button>
                                <button className="splide__arrow splide__arrow--next">
                                    <img src={next} alt="" />
                                </button>
                            </div>
                        </div>
                    </Splide>
                </section>
                <section className="courses category-btn-container">
                    <h2>A lot of categories for you</h2>
                    <div>
                        <a href="#" className="btn category-btn">Tie & Dye</a>
                        <a href="#" className="btn category-btn">Pattern Drafting</a>
                        <a href="#" className="btn category-btn">Cousetry</a>
                        <a href="#" className="btn category-btn">Cutting & Sewing</a>
                        <a href="#" className="btn category-btn active">Cousetry</a>
                        <a href="#" className="btn category-btn">Beading</a>
                        <a href="#" className="btn category-btn">Cutting & Sewing</a>
                        <a href="#" className="btn category-btn">Tie & Dye</a>
                        <a href="#" className="btn category-btn">Preparing a Pitch Deck</a>
                        <a href="#" className="btn category-btn">Cousetry</a>
                        <a href="#" className="btn category-btn active">Business Accounting</a>
                        <a href="#" className="btn category-btn">Cousetry</a>
                        <a href="#" className="btn category-btn">Beading</a>
                        <a href="#" className="btn category-btn">Pattern Drafting</a>
                        <a href="#" className="btn category-btn">Tie & Dye</a>
                        <a href="#" className="btn category-btn active">Cutting & Sewing</a>
                        <a href="#" className="btn category-btn">Beading</a>
                        <a href="#" className="btn category-btn">Pattern Drafting</a>
                    </div>
                </section>
                <section className="courses">
                    <h2>Fashion Finance</h2>
                    <Splide 
                    hasTrack={ false } 
                    aria-label="..." 
                    options={{
                        type   : 'loop',
                        perPage: 5,
                        // focus  : 'center',
                        pagination: false
                    }} 
                    className=" courses-container"
                    >
                        <div className="custom-wrapper">
                            <SplideTrack>
                                <SplideSlide className="article">
                                    <div>
                                        <img src={woman} alt="course name" />
                                        <div className="header-info">
                                        <p>4.0</p>
                                            <p className="flex"><span>20,000 Students</span><span>1hr 50m</span> </p> 
                                        </div>
                                    </div>
                                    <div className="desc">
                                        <h3>Fashion Business Accounting For Beginners and Intermediate Designers</h3>
                                        <p className="category">Fashion Accounting, Business Fashion</p>
                                        <p>James Oludiya</p>
                                        <p className="price">$29.99</p>
                                    </div>
                                </SplideSlide>
                                <SplideSlide className="article">
                                    <div>
                                        <img src={man} alt="course name" />
                                        <div className="header-info">
                                        <p>4.0</p>
                                            <p className="flex"><span>20,000 Students</span><span>1hr 50m</span> </p> 
                                        </div>
                                    </div>
                                    <div className="desc">
                                        <h3>Fashion Business Accounting For Beginners and Intermediate Designers</h3>
                                        <p className="category">Fashion Accounting, Business Fashion</p>
                                        <p>James Oludiya</p>
                                        <p className="price">$29.99</p>
                                    </div>
                                </SplideSlide>
                                <SplideSlide className="article">
                                    <div>
                                        <img src={woman} alt="course name" />
                                        <div className="header-info">
                                        <p>4.0</p>
                                            <p className="flex"><span>20,000 Students</span><span>1hr 50m</span> </p> 
                                        </div>
                                    </div>
                                    <div className="desc">
                                        <h3>Fashion Business Accounting For Beginners and Intermediate Designers</h3>
                                        <p className="category">Fashion Accounting, Business Fashion</p>
                                        <p>James Oludiya</p>
                                        <p className="price">$29.99</p>
                                    </div>
                                </SplideSlide>
                                <SplideSlide className="article">
                                    <div>
                                        <img src={man} alt="course name" />
                                        <div className="header-info">
                                        <p>4.0</p>
                                            <p className="flex"><span>20,000 Students</span><span>1hr 50m</span> </p> 
                                        </div>
                                    </div>
                                    <div className="desc">
                                        <h3>Fashion Business Accounting For Beginners and Intermediate Designers</h3>
                                        <p className="category">Fashion Accounting, Business Fashion</p>
                                        <p>James Oludiya</p>
                                        <p className="price">$29.99</p>
                                    </div>
                                </SplideSlide>
                                <SplideSlide className="article">
                                    <div>
                                        <img src={woman} alt="course name" />
                                        <div className="header-info">
                                        <p>4.0</p>
                                            <p className="flex"><span>20,000 Students</span><span>1hr 50m</span> </p> 
                                        </div>
                                    </div>
                                    <div className="desc">
                                        <h3>Fashion Business Accounting For Beginners and Intermediate Designers</h3>
                                        <p className="category">Fashion Accounting, Business Fashion</p>
                                        <p>James Oludiya</p>
                                        <p className="price">$29.99</p>
                                    </div>
                                </SplideSlide>
                                <SplideSlide className="article">
                                    <div>
                                        <img src={man} alt="course name" />
                                        <div className="header-info">
                                        <p>4.0</p>
                                            <p className="flex"><span>20,000 Students</span><span>1hr 50m</span> </p> 
                                        </div>
                                    </div>
                                    <div className="desc">
                                        <h3>Fashion Business Accounting For Beginners and Intermediate Designers</h3>
                                        <p className="category">Fashion Accounting, Business Fashion</p>
                                        <p>James Oludiya</p>
                                        <p className="price">$29.99</p>
                                    </div>
                                </SplideSlide>
                                
                            </SplideTrack>

                            <div className="splide__arrows">
                                <button className="splide__arrow splide__arrow--prev">
                                    <img src={prev} alt="" />
                                </button>
                                <button className="splide__arrow splide__arrow--next">
                                    <img src={next} alt="" />
                                </button>
                            </div>
                        </div>
                    </Splide>
                </section>
            </main>
            <Footer/>
        </>
    )
}

export default UserLanding;