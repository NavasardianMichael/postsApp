import { ADD_NEW_POST } from './types';
import { showAlertMessage } from './actions';

export function forbiddenWordsMiddleware(store) {
	return function(next) {
		return function(action) {
			if(action.type === ADD_NEW_POST) {
				const found = store.getState().posts.forbiddenWords.filter(word => {
					if(action.newPost.title.includes(word) || action.newPost.body.includes(word)) {
						return word;
					}
				});
				if(found.length) return store.dispatch(showAlertMessage('Spam wordsin post inputs'));
			}
			return next(action)
		}
	}
}