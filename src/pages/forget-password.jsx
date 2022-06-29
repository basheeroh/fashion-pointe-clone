import { useState } from "react";
import fplogo from "../assets/images/FP logo 2-1.svg";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const ForgetPassword = () => {
    const navigate = useNavigate()
    const Login = (e) => {
        e.preventDefault();
    }
    return (
        <main className="login flex">
            <section className="login_section_one">
                <Link to={"/"}>
                <img src={fplogo} alt="" />
                </Link>
            </section>
            <section className="flex">
                <form action="" className="auth_form" onSubmit={Login}>
                    <img src={fplogo} alt="" className="auth_mobile_logo" />
                    <div>
                        <input type="email" name="email" placeholder="Enter Your Email" />
                    </div>
                    <div>
                        <button className="btn auth-btn">Send Password Reset Link</button>
                    </div>
                    <div style={{textAlign: "center", marginTop: "20px"}}>
                        <p><Link to={"/login"}>Login Instead</Link></p>
                        <p>New? <Link to={"/signup"}>Create Account</Link></p>
                    </div>
                </form>
            </section>
        </main>
    )
}

export default ForgetPassword;