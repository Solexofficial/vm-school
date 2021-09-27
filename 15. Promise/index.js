//? Task 1.

// const $dataContainer = document.querySelector("#data-container");

// const toggleLoader = () => {
// 	const $loader = document.querySelector("#loader");
// 	const isHidden = loader.hasAttribute("hidden");
// 	if (isHidden) {
// 		$loader.removeAttribute("hidden");
// 	} else {
// 		$loader.setAttribute("hidden", "");
// 	}
// };

// const createUser = user => {
// 	const $element = document.createElement("li");
// 	const $elementAnchor = document.createElement("a");
// 	$elementAnchor.href = "#";
// 	$elementAnchor.textContent = user.name;
// 	$element.append($elementAnchor);

// 	return $element;
// };

// const getAllUsers = () => {
// 	toggleLoader();
// 	const USERS_URL = "http://jsonplaceholder.typicode.com/users";
// 	const users = fetch(USERS_URL, {
// 		method: "GET",
// 	});

// 	users
// 		.then(res => {
// 			if (!res.ok) {
// 				throw new Error("Error response!");
// 			}
// 			return res.json();
// 		})
// 		.then(data => {
// 			data.forEach(user => {
// 				$dataContainer.append(createUser(user));
// 			});
// 		})
// 		.catch(err => console.error(err))
// 		.finally(() => toggleLoader());
// };

// getAllUsers();

// ? Task 2.

// const $dataContainer = document.querySelector("#data-container");

// const toggleLoader = () => {
// 	const $loader = document.querySelector("#loader");
// 	const isHidden = loader.hasAttribute("hidden");
// 	if (isHidden) {
// 		$loader.removeAttribute("hidden");
// 	} else {
// 		$loader.setAttribute("hidden", "");
// 	}
// };

// const createUser = user => {
// 	const $element = document.createElement("li");
// 	const $elementAnchor = document.createElement("a");
// 	$elementAnchor.href = "#";
// 	$elementAnchor.textContent = user.name;
// 	$element.append($elementAnchor);

// 	return $element;
// };

// const getUsersByIds = idArr => {
// 	toggleLoader();
// 	const USERS_URL = "https://jsonplaceholder.typicode.com/users";
// 	const requests = idArr.map(id => fetch(`${USERS_URL}/${id}`));

// 	Promise.all(requests)
// 		.then(responses => {
// 			const dataResults = responses.map(res => res.json());
// 			return Promise.all(dataResults);
// 		})
// 		.then(data => data.forEach(user => $dataContainer.append(createUser(user))))
// 		.catch(err => console.error(err))
// 		.finally(() => toggleLoader());
// };

// getUsersByIds([5, 6, 2, 1]);

//? Task 3.
// const $dataContainer = document.querySelector("#data-container");
// const PHOTOS_URL = "https://jsonplaceholder.typicode.com/photos";

// const toggleLoader = () => {
// 	const $loader = document.querySelector("#loader");
// 	const isHidden = $loader.hasAttribute("hidden");
// 	if (isHidden) {
// 		$loader.removeAttribute("hidden");
// 	} else {
// 		$loader.setAttribute("hidden", "");
// 	}
// };

// const getFastestLoadedPhoto = ids => {
// 	toggleLoader();
// 	const requests = ids.map(id => fetch(`${PHOTOS_URL}/${id}`));
// 	Promise.race(requests)
// 		.then(res => res.json())
// 		.then(data =>
// 			$dataContainer.insertAdjacentHTML(
// 				"afterbegin",
// 				`
//     <li class="photo-item">
//     <img
//         class="photo-item__image"
//         src="${data.url}"
//     />
//     <h3 class="photo-item__title">
//         ${data.title}
//     </h3>
// </li>`
// 			)
// 		)
// 		.catch(err => console.error(err))
// 		.finally(() => toggleLoader());
// };

// getFastestLoadedPhoto([60, 12, 55]);

//? Task 4

// const $body = document.querySelector("body");

// const createPost = post => {
// 	const $post = document.createElement("div");
// 	$post.classList.add("post");
// 	$post.setAttribute("id", "post");
// 	$post.innerHTML = `
//       <h1 class="post__title">${post.title}</h1>
//       <p class="post__text">${post.body}</p>
//       <b class="post__comments-text">Комментарии</b>
//       <div class="post__comments"></div>
//     `;
// 	$body.append($post);
// };

// const createComment = comment => {
// 	const $postComments = document.querySelector(".post__comments");
// 	const $comment = document.createElement("div");
// 	$comment.classList.add("post-comment");
// 	$comment.innerHTML = `
//       <span class="post-comment__author">
//                 ${comment.email}
//             </span>
//             <span class="post-comment__text">
//                 ${comment.body}
//             </span>
//       `;
// 	return $postComments.append($comment);
// };

// const renderPost = postId => {
// 	const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";
// 	const COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments";
// 	const post = fetch(`${POSTS_URL}/${postId}`);
// 	const comments = fetch(`${COMMENTS_URL}?postId=${postId}`);
// 	const requests = [post, comments];

// 	Promise.all(requests)
// 		.then(responses => {
// 			const dataResults = responses.map(res => res.json());
// 			return Promise.all(dataResults);
// 		})
// 		.then(data => {
// 			const [post, comments] = data;

// 			createPost(post);
// 			comments.forEach(comment => createComment(comment));
// 		});
// };

// const randomId = Math.floor(Math.random() * 100 + 1);
// renderPost(randomId);

function solve(a, b) {
	if (a === 0 || b === 0) return [a, b];
	if (a >= 2 * b) {
		a = a - 2 * b;
		return solve(a, b);
	} else if (b > 2 * a) {
		b = b - 2 * a;
		return solve(a, b);
	}
	return [a, b];
}
console.log(solve(2, 10));
