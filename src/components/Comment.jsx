import fplogo from "../assets/images/FP logo 2-1.svg";
import { useState } from "react";
import profileImg from "../assets/images/profile-circle.svg"
import nextIcon from "../assets/images/next.png";

const Comment = () => {
    return (    
        <article>
            <div>  
                <div className="flex">
                    <img src={profileImg} alt="" width={40} />
                    <p className="username">User 1</p>
                </div>
                <p className="comment">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a neque ut libero semper malesuada. In quis arcu nec velit commodo gravida sed eget leo. Mauris a eros non nisi fringilla commodo. Nulla at diam rhoncus, finibus massa sit amet, finibus orci.
                </p>
            </div>
            <div className="replies">
                <img src={nextIcon} alt="" />
                <div>  
                    <div className="flex">
                        <img src={profileImg} alt="" width={40} />
                        <p className="username">User 2 / Instructor</p>
                    </div>
                    <p className="comment">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a neque ut libero semper malesuada. In quis arcu nec velit commodo gravida sed eget leo. Mauris a eros non nisi fringilla commodo. Nulla at diam rhoncus, finibus massa sit amet, finibus orci.
                    </p>
                </div>
            </div>
        </article>
    )
}

export default Comment;