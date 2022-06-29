
import React from "react";
import UserNavBar from "../components/UserNavBar";
import fplogo from "../assets/images/FP icon 1-3.svg";
import man from "../assets/images/man2.png";
import woman from "../assets/images/woman.jpg";
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Footer from "../components/Footer";
import prev from "../assets/images/prev.png";
import next from "../assets/images/next.png";
import Rating from "../components/Rating";
import Comment from "../components/Comment";
import vid_woman from "../assets/images/woman.png";
import playicon from "../assets/images/playicon.png";
import CollapsibleDark from "../components/CollapseibleDark";
import star from "../assets/images/star-light.svg";
import { Link } from "react-router-dom";

const Courses = () => {
    return (
        <>
            <header className="inner-header">
                <UserNavBar />
                <div className="header-content">
                    <h1>My Courses</h1>
                </div>
            </header>

            <main className="course inner">
                <section>
                    <div>    
                        <h3>Continue Learning: Pick Up Where You Left Off</h3>
                        <h2>Fashion Business Accounting for Beginners and Intermediate Designers</h2>
                    </div>
                </section>

                <section>
                    <h2>Lesson 1 - Lorem ipsum dolor</h2>
                    <div className="flex course-breakdown" style={{alignItems: "flex-start"}}>
                        <div className="course-preview">
                            <img src={vid_woman} alt="Course title" className="course-img" />
                            <span className="play-icon">
                                <img src={playicon} alt="Couse title" />
                            </span>
                        </div>
                        <div className="collapse-container dark">
                            <CollapsibleDark theme={"dark"} />
                            <CollapsibleDark theme={"dark"} />
                            <CollapsibleDark theme={"dark"} />
                            <CollapsibleDark theme={"dark"} />
                        </div>
                    </div>

                </section>
                <section className="courses">
                    <h2>Other Courses</h2>
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
                                <p className="progress"><span>33% Complete</span> | 50 mins left</p>
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
                                <p className="progress"><span>33% Complete</span> | 50 mins left</p>
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
                                <p className="progress"><span>33% Complete</span> | 50 mins left</p>
                            </div>
                        </article>
                    </div>
                    
                </section>

                <section className="courses" style={{marginTop: "50px"}}>
                    <h2>Finished Courses</h2>
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
                                <p className="progress"><span>33% Complete</span> | 50 mins left</p>
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
                                <p className="progress"><span>33% Complete</span> | 50 mins left</p>
                            </div>
                        </article>
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

export default Courses;