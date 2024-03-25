import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

import "../../styles/index.css";


const Private = () => {
    const { store, actions } = useContext(Context)
    const [isAuthenticated, setIsAunthenticated]= useState("pending")

    useEffect(()=>{
        let authenticate = async ()=>{
            let result = await actions.goPrivate()
            if (result){
                setIsAunthenticated("yes")
            }else{
                setIsAunthenticated("no")
            }
        }
       authenticate()
    },[])

    switch(isAuthenticated) {
        case "pending": 
            return(
                <div>
                    <h1>Authentication in Progress</h1>
                    <p>Please wait while we check your authentication status.</p>
                </div>
            )
        case "yes": 
            return (
                <div>
                    <h1>Private Page</h1>
                    <p>This page is only accessible to successfully logged in users.</p>
                </div>
            )
        case "no":
            return (
                <div>
                    <h1>Access Denied</h1>
                    <p>You're not an authenticated user. Please log in successfully to access the private page.</p>
                    <Link to="/log_in">
                        <p>Log In</p>
                    </Link>
                </div>
            )    
    }
};


export default Private;