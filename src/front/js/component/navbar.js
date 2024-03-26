import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


export const Navbar = () => {
	const [isLoggedIn, setLoggedIn] = useState(false);
	const navigate = useNavigate();

	const handleLogout = () => {
		sessionStorage.removeItem('token');
		console.log('Token removed from sessionStorage')
		setLoggedIn(false);
		navigate('/');
	};

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Home</span>
				</Link>
				<div className="ml-auto">
					{isLoggedIn ? (
						<button className="btn btn-primary" onClick={handleLogout}>Logout</button>
					) : (
						<Link to="/log_in">
							<button className="btn btn-primary">Log In</button>
						</Link>
					)}
				</div>
			</div>
		</nav>
	);
};