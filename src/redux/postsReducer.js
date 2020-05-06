import {ADD_NEW_POST, RENDER_FETCHED_POSTS} from './types';

const initialState = {
	syncPosts: [],
	fetchedPosts: [],
	forbiddenWords: ['fuck', 'suck']
}

export const postsReducer = (state = initialState, action) => {
	switch(action.type) {

		case ADD_NEW_POST:
			return { ...state, syncPosts: [...state.syncPosts, action.newPost] };
		
		case RENDER_FETCHED_POSTS:
			return {...state, fetchedPosts: action.fetchedPosts }

		default: return state
	}
};