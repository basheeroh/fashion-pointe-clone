import fplogo from "../assets/images/FP logo 2-1.svg";

const Footer = () => {
    return (
        <footer>
            <ul>
                <li><a href="#">Sign Up</a></li>
                <li><a href="#">Cart</a></li>
                <li><a href="#">Become an instructor</a></li>
            </ul>
            <div className="flex">
                <div className="logo" >
                    <img src={fplogo} alt="Fashion Pointe logo"/>
                </div>
                <p>&copy; Copyright 2021. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;