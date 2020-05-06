import React, {useReducer} from 'react';
import {connect} from 'react-redux';
import {addNewPost, showAlertMessage} from '../redux/actions';
import Alert from './Alert';

function PostForm(props) {

	const [newPost, setNewPost] = useReducer(
			(state, newState) => ({...state, ...newState}),
			{ 
				title: '', 
			  	body: '' 
			}
	);

	function handleNewPostChange(event) {
		const {name, value} = event.target;
		setNewPost({ [name]: value });
	}

	function handleNewPostSubmit(event) {
		event.preventDefault();
		if(newPost.title === '' || newPost.body === '') {
			props.showAlertMessage('Inputs must be filled');
		} else {
			const newReadyPost = {
				id: Math.round(Math.random()*1000),
				title: newPost.title,
				body: newPost.body
			};
			props.addNewPost(newReadyPost);
			setNewPost({ body: '', title: '' });
		}
	};

	return (
			<div className="post-form-section">
				{props.alert && <Alert />}
			    <div className="form-group">
			        <form onSubmit={handleNewPostSubmit}>
			            <div className="row">
			                <div className="col-md-5">
			                    <label htmlFor="postText">Post header</label>
			                    <input 
			                    	type="text" 
			                    	className="form-control" 
			                    	id="postText"
			                    	name="title"
			                    	value={newPost.title}
			                    	onChange={handleNewPostChange} 
			                    />
			                </div>
			                <div className="col-md-5">
			                    <label htmlFor="postBody">Post body</label>
			                    <input 
			                    	type="text" 
			                    	className="form-control" 
			                    	id="postBody"
			                    	name="body"
			                    	value={newPost.body}
			                    	onChange={handleNewPostChange}
			                    />
			                </div>
			                <div className="col-lg pt-2 mt-auto">
			                	<button type="submit" className="btn btn-success">Add Post</button>
			                </div>
			            </div>
			        </form>
			    </div>
			</div>
		)
};

const mapStateToProps = state => {
	return {
		alert: state.app.alert
	}
}

const mapDispatchToProps = {
	addNewPost, showAlertMessage
};

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)