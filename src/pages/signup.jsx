import { useState } from "react";
import fplogo from "../assets/images/FP logo 2-1.svg";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()
    const createAccount = (e) => {
        e.preventDefault();
        navigate("/preference-setting");
    }
    return (
        <main className="login flex">
            <section className="login_section_one">
                <Link to={"/"}>
                <img src={fplogo} alt="" />
                </Link>
            </section>
            <section className="flex">
                <form action="" className="auth_form" onSubmit={createAccount}>
                    <img src={fplogo} alt="" className="auth_mobile_logo" />
                    <div>
                        <input type="text" name="fullname" placeholder="Full Name" />
                    </div>
                    <div>
                        <input type="email" name="email" placeholder="Email" />
                    </div>
                    <div>
                        <input type="password" name="password" placeholder="Password" />
                    </div>
                    <div className="flex">
                        <input type="checkbox" name="tc" value={true} />
                        <a href="#">Terms and Conditions</a>
                    </div>
                    <div>
                        <button className="btn auth-btn">Create Account</button>
                    </div>
                </form>
            </section>
        </main>
    )
}

export default Login;