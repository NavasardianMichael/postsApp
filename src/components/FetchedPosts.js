import React from 'react';
import {connect} from 'react-redux';
import {fetchPosts, showLoader, hideLoader} from '../redux/actions';
import Post from './Post';

function FetchedPosts(props) {

	function fetchPostsHandler() {
		props.fetchPosts();
	}
	if(props.isLoading) {
		return (
			<img src="https://waters.kz/wp-content/uploads/2020/04/Alternate-Preloader.gif" width="100%" />
		)	
	};

	if(!props.fetchedPosts.length) {
		return <button className="btn btn-primary" onClick={fetchPostsHandler}>Fetch</button>
	}
	
	const fetchedPosts = props.fetchedPosts.map(item => <Post post={item} key={item.id} />)
	return (
		<div>
			{fetchedPosts}
		</div>
	)
};

const mapStateToProps = state => {
	return {
		fetchedPosts: state.posts.fetchedPosts,
		isLoading: state.app.isLoading
	}
};

const mapDispatchToProps = {
	fetchPosts, showLoader, hideLoader
}

export default connect(mapStateToProps, mapDispatchToProps)(FetchedPosts)