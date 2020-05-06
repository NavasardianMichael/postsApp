import React from 'react';
import {useStore} from 'react-redux';

function Alert(props) {
	const { getState } = useStore();
	return <div className="alert alert-danger" role="alert">{getState().app.alertText}</div>
};

export default Alert