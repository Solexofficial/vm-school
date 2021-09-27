// then catch finally - problem
// async await

const USERS_URL = "https://jsonplaceholder.typicode.com/users";
const TODOS_URL = "https://jsonplaceholder.typicode.com/todos";

// fetch(USERS_URL)
// 	.then(response => response.json())
// 	.then(users => {
// 		console.log(users);
// 		const firstUserId = users[0]?.id;
// 		console.log("####: firstUserId", firstUserId);
// 		fetch(`${TODOS_URL}?userId=${firstUserId}`)
// 			.then(res => res.json())
// 			.then(todos => {
// 				console.log("####: todos", todos);
// 				// fetch('url')
// 				//   .then(() => {})
// 				//   .catch(() => {})
// 			})
// 			.catch(err => console.log("####: err", err));
// 	})
// 	.catch(error => {
// 		console.log(error);
// 	});

try {
} catch (error) {
	console.log("error", error);
} finally {
	console.log("####: finally");
}

// try catch finally
const getTodosWithUserData = async () => {
	try {
		const response = await fetch(USERS_URL);
		if (!response.ok) {
			throw new Error("response");
		}
		console.log("####: response", response);
		const users = await response.json();
		console.log("####: users", users);
		const firstUserId = users[0]?.id;
		const todosResponse = await fetch(`${TODOS_URL}?userId=${firstUserId}`);
		const todos = await todosResponse.json();
		console.log("####: todos", todos);
	} catch (error) {
		console.log("####: error", error);
	} finally {
		console.log("####: finally");
	}
};

const promise = getTodosWithUserData();
console.log("####: promise", promise);
