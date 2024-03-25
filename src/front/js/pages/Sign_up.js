import React, { useContext } from "react";
import { Context } from "../store/appContext";

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
        <h1> Sign Up </h1>
        <form onSubmit={handleSubmit}>
            <input type="email" name="emailInput" placeholder="example@host.com" required />
            <input type="password" name="passwordInput" required />
            <button type="submit">Sign-Up</button>
        </form>
    </div>
)
};


export default Sign_up;