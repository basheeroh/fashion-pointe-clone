import fplogo from "../assets/images/FP logo 2-1.svg";
import { useState } from "react";
import profileImg from "../assets/images/profile-circle.svg"

const Rating = () => {
    return (    
        <article>
            <div className="flex">
                <img src={profileImg} alt="" width={40} />
                <p className="username">User 1</p>
                <p>
                <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 0L8.5716 4.83688H13.6574L9.5429 7.82624L11.1145 12.6631L7 9.67376L2.8855 12.6631L4.4571 7.82624L0.342604 4.83688H5.4284L7 0Z" fill="white"/>
                </svg>
                <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 0L8.5716 4.83688H13.6574L9.5429 7.82624L11.1145 12.6631L7 9.67376L2.8855 12.6631L4.4571 7.82624L0.342604 4.83688H5.4284L7 0Z" fill="white"/>
                </svg>
                <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 0L8.5716 4.83688H13.6574L9.5429 7.82624L11.1145 12.6631L7 9.67376L2.8855 12.6631L4.4571 7.82624L0.342604 4.83688H5.4284L7 0Z" fill="white"/>
                </svg>
                <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 0.809018L8.33383 4.91413L8.38996 5.08688H8.5716H12.888L9.39595 7.62398L9.24901 7.73075L9.30513 7.90349L10.639 12.0086L7.14695 9.47151L7 9.36475L6.85305 9.47151L3.36103 12.0086L4.69487 7.90349L4.75099 7.73075L4.60405 7.62398L1.11203 5.08688H5.4284H5.61004L5.66617 4.91413L7 0.809018Z" stroke="white" stroke-width="0.5"/>
                </svg>
                <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 0.809018L8.33383 4.91413L8.38996 5.08688H8.5716H12.888L9.39595 7.62398L9.24901 7.73075L9.30513 7.90349L10.639 12.0086L7.14695 9.47151L7 9.36475L6.85305 9.47151L3.36103 12.0086L4.69487 7.90349L4.75099 7.73075L4.60405 7.62398L1.11203 5.08688H5.4284H5.61004L5.66617 4.91413L7 0.809018Z" stroke="white" stroke-width="0.5"/>
                </svg>
                </p>
            </div>
            <p className="comment">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a neque ut libero semper malesuada. In quis arcu nec velit commodo gravida sed eget leo. Mauris a eros non nisi fringilla commodo. Nulla at diam rhoncus, finibus massa sit amet, finibus orci.
            </p>
        </article>
    )
}

export default Rating;