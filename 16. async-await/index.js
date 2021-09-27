// const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";
// let isLoading = false;
// const createNewPost = () => {
// 	isLoading = true;
// 	fetch(POSTS_URL, {
// 		method: "POST",
// 	})
// 		.then(response => response.json())
// 		.then(result => {
// 			console.log("result", result);
// 		})
// 		.catch(error => {
// 			console.log("error", error);
// 		})
// 		.finally(() => {
// 			isLoading = false;
// 		});
// };
// createNewPost();

// const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";
// let isLoading = false;
// const createNewPost = async () => {
// 	try {
// 		isLoading = true;
// 		const posts = await fetch(POSTS_URL, {
// 			method: "POST",
// 		}).then(res => res.json());
// 		console.log("####: posts", posts);
// 	} catch (err) {
// 		console.log("####: err", err);
// 	} finally {
// 		isLoading = false;
// 	}
// };

// createNewPost();

// ======================= Task 1 end

// ?Task 2

// const TODOS_URL = "https://jsonplaceholder.typicode.com/todos";

// const getTodosByIds = ids => {
// 	const requests = ids.map(id => fetch(`${TODOS_URL}/${id}`));
// 	Promise.all(requests)
// 		.then(responses => {
// 			const dataResults = responses.map(data => data.json());
// 			return Promise.all(dataResults);
// 		})
// 		.then(allTasks => {
// 			console.log(allTasks);
// 		})
// 		.catch(error => {
// 			console.log(error);
// 		});
// };

// getTodosByIds([43, 21, 55, 100, 10]);

// const TODOS_URL = "https://jsonplaceholder.typicode.com/todos";

// const getTodosByIds = async ids => {
// 	try {
// 		const requests = await ids.map(id => fetch(`${TODOS_URL}/${id}`));
// 		const promiseAll = await Promise.all(requests);
// 		const result = await promiseAll.map(res => res.json());
// 		const allTasks = await Promise.all(result);
// 		console.log("####: allTasks", allTasks);
// 	} catch (err) {
// 		console.log("####: err", err);
// 	}
// };

// getTodosByIds([43, 21, 55, 100, 10]);

// ? Task 3

const ALBUMS_URL = "https://jsonplaceholder.typicode.com/albums";

const $dataContainer = document.querySelector("#data-container");

const toggleLoader = () => {
	const $loader = document.querySelector("#loader");
	const isHidden = loader.hasAttribute("hidden");
	if (isHidden) {
		$loader.removeAttribute("hidden");
	} else {
		$loader.setAttribute("hidden", "");
	}
};

const getAlbums = async () => {
	try {
		toggleLoader();
		const response = await fetch(ALBUMS_URL);
		const albums = await response.json();
		console.log("####: result", albums);
		albums.forEach(album => {
			const $element = document.createElement("li");
			$element.textContent = album.title;
			$dataContainer.append($element);
		});
	} catch (err) {
		const $errorMessage = document.createElement("span");
		$errorMessage.textContent = "Произошла ошибка в получении данных об альбомах...";
		$dataContainer.append($errorMessage);
	} finally {
		toggleLoader();
	}
};

getAlbums();
