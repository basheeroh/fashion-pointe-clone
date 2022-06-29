import { useState } from "react";
import fplogo from "../assets/images/FP logo 2-1.svg";
import { Link } from "react-router-dom";

const Preference = () => {
    const [step, setStep] = useState(1);

    const handleSubmit = (e) => {
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
                <form action="" className="auth_form" onSubmit={handleSubmit}>
                    <img src={fplogo} alt="" className="auth_mobile_logo" />
                    { (step === 1) && 
                    <div>
                        <h2>What aspect of fashion design are you into?</h2>
                        <select>
                            <option value="Option!">Clothing Design</option>
                            <option value="Option!">Option 1</option>
                            <option value="Option!">Option 1</option>
                            <option value="Option!">Option 1</option>
                            <option value="Option!">Option 1</option>
                        </select>
                    </div>
                    }

                    { (step === 2) && 
                    (
                    <div>   
                        <div>
                            <h2>Do you work with a team of fashion desgners?</h2>
                            <div className="flex">
                                {/* <input type="checkbox" name="teamConfirm" value={true} /> */}
                                <label class="container" htmlFor="teamYes">
                                    <input type="radio" name="teamConfirm" id="teamYes" value={true} />
                                    <span class="checkmark"></span>
                                </label>
                                <p>Yes</p>
                            </div>
                            <div className="flex">
                                {/* <input type="checkbox" name="teamConfirm" value={true} /> */}
                                <label class="container" htmlFor="teamNo">
                                    <input type="radio" name="teamConfirm" id="teamNo" value={false} />
                                    <span class="checkmark"></span>
                                </label>
                                <p>No</p>
                            </div>
                            
                        </div>
                        <div>
                            <h2>How many Desginers are in the team?</h2>
                            <select>
                                <option value="Option!">1-2</option>
                                <option value="Option!">Option 1</option>
                                <option value="Option!">Option 1</option>
                                <option value="Option!">Option 1</option>
                                <option value="Option!">Option 1</option>
                            </select>
                        </div>
                    </div>
                    
                    )
                    }

                    { (step === 3) && 
                    <div>
                        <h2>What is most important to you right now?</h2>
                        <select>
                            <option value="Option!">Business of fashion</option>
                            <option value="Option!">Option 1</option>
                            <option value="Option!">Option 1</option>
                            <option value="Option!">Option 1</option>
                            <option value="Option!">Option 1</option>
                        </select>
                    </div>
                    }
                    { (step === 4) && 
                    <div style={{textAlign: "center"}} className="auth-category-btn">
                        <h2 style={{marginBottom: "20px"}}>Select the categories that apply to you</h2>
                        <div>
                            <a href="#" className="btn category-btn">Tie & Dye</a>
                            <a href="#" className="btn category-btn">Pattern Drafting</a>
                            <a href="#" className="btn category-btn">Cousetry</a><br />
                            <a href="#" className="btn category-btn">Cutting & Sewing</a>
                            <a href="#" className="btn category-btn active">Cousetry</a>
                            <a href="#" className="btn category-btn">Beading</a>
                            <a href="#" className="btn category-btn">Cutting & Sewing</a>
                            <a href="#" className="btn category-btn active">Business Accounting</a>
                            <a href="#" className="btn category-btn">Cousetry</a>
                            <a href="#" className="btn category-btn">Beading</a>
                            <a href="#" className="btn category-btn active">Cutting & Sewing</a><br />
                            <a href="#" className="btn category-btn">Tie & Dye</a>
                            <a href="#" className="btn category-btn">Preparing a Pitch Deck</a>
                            <a href="#" className="btn category-btn">Cousetry</a> 
                            {/* <a href="#" className="btn category-btn">Cutting & Sewing</a>
                            <a href="#" className="btn category-btn active">Business Accounting</a>*/}
                            {/* <a href="#" className="btn category-btn">Beading</a>
                            <a href="#" className="btn category-btn">Pattern Drafting</a>
                            <a href="#" className="btn category-btn">Tie & Dye</a>
                            <a href="#" className="btn category-btn active">Cutting & Sewing</a>
                            <a href="#" className="btn category-btn">Beading</a>
                            <a href="#" className="btn category-btn">Pattern Drafting</a> */}
                        </div>
                    </div>
                    }
                    {/* <div>
                        <input type="password" name="password" placeholder="Password" />
                    </div> */}
                    {
                    step < 4 ?
                    <div>
                        <button className="btn auth-btn" onClick={() => setStep(step => step+1)} >Next</button>
                    </div>
                    :
                    <div>
                        <button className="btn auth-btn finish" >Finish</button>
                    </div>
                    }
                </form>
            </section>
        </main>
    )
}

export default Preference;