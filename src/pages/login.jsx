import { useState } from "react";
import fplogo from "../assets/images/FP logo 2-1.svg";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()
    const Login = (e) => {
        e.preventDefault();
        navigate("/user-landing")
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
                        <input type="email" name="email" placeholder="Email" />
                    </div>
                    <div>
                        <input type="password" name="password" placeholder="Password" />
                    </div>
                    <div>
                        <button className="btn auth-btn">Login</button>
                    </div>
                    <div style={{textAlign: "center", marginTop: "20px"}}>
                        <p><Link to={"/forget-password"}>Forget Password?</Link></p>
                        <p>New? <Link to={"/signup"}>Create Account</Link></p>
                    </div>
                </form>
            </section>
        </main>
    )
}

export default Login;