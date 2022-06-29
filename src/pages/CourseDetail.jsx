import React from "react";
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
import Collapsible from "../components/Collapsible";
import Rating from "../components/Rating";
import { Link } from "react-router-dom";

const CourseDetail = () => {
    return (
        <>
            <header className="course-header">
                <UserNavBar />
                <div className="header-content">
                    <h1>Fashion Business Accounting for Beginners and Intermediate Designers</h1>
                    <div className="course-desc">
                        <p>4.0</p>
                        <p>20,000 Students <span>1hr 50min</span> </p>
                        <p className="course-category">Fashion Accounting, Business of Fashion</p>
                        <div className="flex">
                            <p>Iyanu Olutobi</p>
                            <h2>$29.99</h2>
                        </div>
                    </div>
                </div>
            </header>

            <main className="course">
                <section>
                    <h2>Course Breakdown</h2>
                    <div className="flex course-breakdown">
                        <div>
                            <ul>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                <li>Sed a neque ut libero semper malesuada.</li>
                                <li>In quis arcu nec velit commodo gravida sed eget leo.</li>
                                <li>Mauris a eros non nisi fringilla commodo.</li>
                                <li>Nulla at diam rhoncus, finibus massa sit amet, finibus orci.</li>
                            </ul>
                            <div className="collapse-container">
                                <Collapsible />
                                <Collapsible />
                                <Collapsible />
                                <Collapsible />
                            </div>
                        </div>
                        <div>
                            <Link to={"/cart"} className="btn course-btn grey">Add to Cart</Link>
                            <br />
                            <button className="btn course-btn">Buy Course</button>
                        </div>
                    </div>

                </section>
                <section className="courses">
                    <h2>Rating & Feedback</h2>
                    <div className="rating-container">  
                        <div>
                            <Rating />
                            <Rating />
                            <Rating />
                        </div>
                        <p className="more"><a href="#">More &gt;&gt;&gt;</a></p>
                    </div>
                    
                </section>
                <section className="courses">
                    <h2>Related Courses</h2>
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

export default CourseDetail;