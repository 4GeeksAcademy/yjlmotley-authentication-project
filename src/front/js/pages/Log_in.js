import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";


const Log_in = () => {
    const { actions } = useContext(Context);
    const handleSubmit = async (event) => {
        event.preventDefault();
        let email = event.target.emailInput.value;
        let password = event.target.passwordInput.value;
        const response = await actions.logIn(email, password); // Changed 'respose' to 'response'
        if (response) {
            console.log('Login successful');
        } else {
            console.log('Login failed');
        };
    };

    return (
        <div>
            <h1>LOG IN PAGE!!</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="email@host.com" name="emailInput" required></input>
                <input type="password" name="passwordInput" required></input>
                <button type="submit">Log In</button>
            </form>
            
        </div>
    )
}


export default Log_in;