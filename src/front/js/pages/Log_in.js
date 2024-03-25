import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";


const Log_in = () => {
    const { actions } = useContext(Context);
    const navigate = useNavigate()
    const handleSubmit = async (event) => {
        event.preventDefault();
        let email = event.target.emailInput.value;
        let password = event.target.passwordInput.value;
        const response = await actions.logIn(email, password);
        if (response) {
            console.log('Login successful');
            navigate('/private')
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