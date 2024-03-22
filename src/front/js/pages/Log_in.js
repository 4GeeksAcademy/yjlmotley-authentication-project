import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";


const Log_in = () => {
    const { store, actions } = useContext(Context);

    const handleSubmit = (event) => {
        event.preventDefault();
        let email = event.target.emailInput.value;
        let password = event.target.passwordInput.value;
        console.log(email, password);
        actions.logIn(email, password);
        event.target.emailInput.value = "";
        event.target.passwordInput.value = "";
    }

    return (
        <div>
            <h1>LOG IN PAGE!!</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="email@host.com" name="emailInput"></input>
                <input type="text" name="passwordInput"></input>
                <button type="submit">Log In</button>
            </form>
            
        </div>
    )
}
export default Log_in;