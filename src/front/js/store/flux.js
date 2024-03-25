const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			isAuthenticated: false, 
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			logIn: async (email, password) => {
				try {let response = await fetch(process.env.BACKEND_URL + "/api/log_in", {
					method: "Post",
					headers: {
						'Content-Type':' application/json'
					},


					body: JSON.stringify({
						email: email,
						password: password
					})
				})
				if (!response.ok) {
					return false
				} else {
					let data = await response.json()
					sessionStorage.setItem('token', data.token)
					return true
				}}
				catch(error){console.log("There was an error at the log_in fetch", error)
					return false}
			},

			signUp: async (email, password) => {
				try {
					const response = await fetch(process.env.BACKEND_URL + '/api/sign_up', {
						method: "Post",
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify({
							email: email,
							password: password
						})
					});
					const data = await response.json();
					console.log(data);
					return data; 
				} catch (error) {
					console.log("There was an error at sign up", error);
					throw error; 
				}
			},

			checkAuthentication: () => {
				const token = sessionStorage.getItem('jwt-token')
				if (token) {
					setStore ({
						isAuthenticated: true
					})
				} else {
					setStore ({
						isAuthenticated: false
					})
				}
			},

			private: async () => {
				try {
					let response = await fetch(process.env.BACKEND_URL + '/api/private', {
						method: "Get",
						headers: {
							Authorization: "Bearer" + sessionStorage.getItem('token')
						}
					})
					if (!response.ok) {
						return false
					} else {
						let data = await response.json()
						console.log(data)
						setStore({isAuthenticated: true})
						return true
					}
				} catch (error) {console.log(error)
					return false}
				
			}
		}
	};
};


export default getState;