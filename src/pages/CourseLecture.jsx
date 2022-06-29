
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
import Rating from "../components/Rating";
import Comment from "../components/Comment";
import vid_woman from "../assets/images/woman.png";
import playicon from "../assets/images/playicon.png";
import CollapsibleDark from "../components/CollapseibleDark";
import star from "../assets/images/star-light.svg";

const CourseLecture = () => {
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
                    <h2>Community</h2>
                    <div className="rating-container">  
                        <div>
                            <Comment />
                            {/* <Comment />
                            <Comment /> */}
                        </div>
                    </div>
                    
                </section>

                <section className="courses">
                    <h2>Ask a Question / Drop a Comment</h2>
                    <div className="comment-box">  
                        <textarea className="rating-container" name="" id="" cols="30" rows="6"></textarea>
                        <p>
                            <button className="btn course-btn">Submit</button>
                        </p>
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

                <section className="courses">
                    <h2>Rating & Feedback</h2>
                    <div className="rating-container">  
                        <div>
                            <Rating />
                            <Rating />
                        </div>
                        <p className="more"><a href="#">More &gt;&gt;&gt;</a></p>
                    </div>
                </section>

                <section className="courses">
                    <p className="stars">
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                    </p>
                    <div className="comment-box">  
                        <textarea className="rating-container" name="" id="" cols="30" rows="6"></textarea>
                        <p>
                            <button className="btn course-btn">Submit</button>
                        </p>
                    </div>
                </section>
               
            </main>
            <Footer/>
        </>
    )
}

export default CourseLecture;