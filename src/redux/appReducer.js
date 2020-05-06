import { SHOW_LOADER, HIDE_LOADER, SHOW_ALERT, HIDE_ALERT } from './types';

const initialState = {
	isLoading: false,
	alert: false,
	alertText: ''
};

export function appReducer(state = initialState, action) {
	switch (action.type) {
		case SHOW_LOADER:
			return {...initialState, isLoading: true}
		case HIDE_LOADER:
			return {...initialState, isLoading: false}
		case SHOW_ALERT:
			return {...state, alert: true, alertText: action.alertText}
		case HIDE_ALERT:
			return {...state, alert: false, alertText: ''}
		default:
			return state
	}
};