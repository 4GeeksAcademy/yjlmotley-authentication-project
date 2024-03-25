import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/index.css";


const Sign_up = () => {
    const { actions } = useContext(Context);
    
    const handleSubmit = async (event) => {
        event.preventDefault();
    const email = event.target.emailInput.value;
    const password = event.target.passwordInput.value;
    const response = await actions.signUp(email, password);
    if (response) {
    console.log("sign up successful") 
    } else {
        console.log("sign up failed")
    }
};

return (
    <div>
        <h1> SIGN UP </h1>
        <form onSubmit={handleSubmit}>
            <input type="email" name="emailInput" placeholder="example@host.com" required />
            <input placeholder="type password here" type="password" name="passwordInput" className="passwordInput" required />
            <br></br>
            <button className="submitBtn" type="submit">Sign Up</button>
        </form>
    </div>
)
};


export default Sign_up;