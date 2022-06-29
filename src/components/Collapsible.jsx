import fplogo from "../assets/images/FP logo 2-1.svg";
import { useState } from "react";
import upArrow from "../assets/images/arrow-up.png";
import upArrowWhite from "../assets/images/arrow-up-white.png";
import downArrow from "../assets/images/arrow-down.png";
import downArrowWhite from "../assets/images/arrow-down-white.png";

const Collapsible = (props) => {
    const [open, setOpen] = useState(false);
    return (    
        <div className="collapse">
            <div className="flex collapse-header" onClick={() => setOpen(val => !val)}>
                <h3>Lesson 1</h3>
                <img src={open ? (props.theme === "dark" ? upArrowWhite: upArrow) : (props.theme === "dark" ? downArrowWhite: downArrow)} alt="" height={13} width={13} />
            </div>
            {
                open && 
                <ul>
                    <li>Lorem ipsum dolor sit.</li>
                    <li>Sed a neque ut libero.</li>
                    <li>In quis arcu nec.</li>
                </ul>
            }
        </div>
    )
}

export default Collapsible;