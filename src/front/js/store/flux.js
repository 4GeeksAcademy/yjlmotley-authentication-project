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
			logIn: (email, password) => {
				fetch(process.env.BACKEND_URL + "/api/log_in", {
					method: "Post",
					headers: {
						'Content-Type':' application/json'
					},


					body: JSON.stringify({
						email: email,
						password: password
					})
				})
				.then(response => response.json())
				.then((data) => {
					console.log(data)
				})
				.catch(error => console.log("There was an error at the log_in fetch", error))
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

			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};


export default getState;