import { ADD_NEW_POST, RENDER_FETCHED_POSTS, SHOW_LOADER, HIDE_LOADER, SHOW_ALERT, HIDE_ALERT } from './types';

export function addNewPost(newPost) {
	return {
		type: ADD_NEW_POST,
		newPost: {
			id: newPost.id,
			title: newPost.title,
			body: newPost.body,
		}
	}
};

export function addFetchedPosts(posts) {
	return {
		type: RENDER_FETCHED_POSTS,
		fetchedPosts: posts
	}
};

export function showLoader() {
	return {
		type: SHOW_LOADER
	}
};

export function hideLoader() {
	return {
		type: HIDE_LOADER
	}
}

export function showAlert(alertText) {
	return {
		type: SHOW_ALERT,
		alertText: alertText
	}
};

export function hideAlert() {
	return {
		type: HIDE_ALERT
	}
};

export const showAlertMessage = alertText => {
	return dispatch => {
		dispatch(showAlert(alertText));
		setTimeout(() => {
			dispatch(hideAlert());
			dispatch(hideLoader());
		}, 3000);
	}
};

export const fetchPosts = () => {
	return dispatch => {
			var fetchedPosts = [];
			dispatch(showLoader())
			fetch('https://jsonplaceholder.typicode.com/posts')
			.then(reponse => reponse.json())
			.then(data => {
					fetchedPosts = data;
					dispatch(addFetchedPosts(fetchedPosts));
					dispatch(hideLoader())
			})
			.catch(e => {
				dispatch(showAlertMessage(`${e.name}: ${e.message}` ));
			})
	}
};

