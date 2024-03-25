import React, { useContext } from "react";
import { Context } from "../store/appContext";


const Private = () => {
    const { store, actions } = useContext(Context)
    switch(store.isAuthenticated) {
        case true: 
            return (
                <div>
                    <h1>Private Page</h1>
                    <p>This page is only accessible to successfully logged in users.</p>
                </div>
            )
        case false:
            return (
                <div>
                    <h1>Access Denied</h1>
                    <p>You're not an authenticated user. Please log in to access the private page.</p>
                </div>
            )    
    }

};


export default Private;