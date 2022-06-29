
import fplogo from "../assets/images/FP logo 2-1.svg";

// import cart from "../assets/images/shopping-cart.svg";
import cart from "../assets/images/cart-icon.png";
import profileIcon from "../assets/images/profile-circle.svg";
import dropdown from "../assets/images/arrow-down.svg";
import { Link } from "react-router-dom";

const UserNavBar = () => {

    const toggleNav = () => {
        const nav = document.querySelector(".menu.flex ul");
        nav.classList.toggle("active");
    }
    return (
        <nav className="flex">
            <div className="logo" >
                <Link to={"/"}>
                    <img src={fplogo} alt="Fashion Pointe logo"/>
                </Link>
            </div>
            <div className="menu flex">
               <div className="flex">
                    <div className="drop_down" style={{position: "relative"}}>
                        <a href="#" className="flex">
                            <span>Browse categories</span> 
                            <img src={dropdown} alt="" srcset="" width={"15px"} />
                        </a>
                        <div className="nav_category_dropdown">
                            <a href="#">Category 1</a>
                            <a href="#">Category 2</a>
                            <a href="#">Category 3</a>
                            <a href="#">Category 4</a>
                        </div>
                    </div>
                    <input type="search" placeholder="Search" className="main_search" />
                </div>
                <ul className="flex user">
                    <img src={fplogo} alt="" className="mobile_logo" />
                    <li><a href="#">Become an instructor</a></li>
                    <li><a href="/courses">Courses</a></li>
                    <li className="browse_category">
                        <a href="#" className="flex"><span>Browse categories</span> 
                            <img src={dropdown} alt="" srcset="" width={"15px"} />
                        </a>
                        <div className="nav_category_dropdown">
                            <a href="#">Category 1</a>
                            <a href="#">Category 2</a>
                            <a href="#">Category 3</a>
                            <a href="#">Category 4</a>
                        </div>
                    </li>
                    <li className="nav_icon">
                        <a href="/cart">
                            <img src={cart} alt="cart_icon" width={40} />
                        </a>
                    </li>
                    <li style={{display: "none"}}><a href="/courses">Courses</a></li>
                    <li className="nav_icon"><a href="#"><img src={profileIcon} alt="profile_icon" width={40} /></a></li>
                    {/* <li><a href="/login" className="btn menu_btn dark">LOGIN</a></li>
                    <li><a href="signup" className="btn menu_btn light">SIGNUP</a></li> */}
                </ul> 
                <div className="menu_toggle" onClick={toggleNav}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </nav>
    )
}

export default UserNavBar;