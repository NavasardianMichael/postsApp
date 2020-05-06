import React from 'react';
import {connect} from 'react-redux';
import Post from './Post';

function Posts(props) {
	if(!props.syncPosts.length) {
		return <p className="text-center">There are no posts</p>
	}
	const syncPosts = props.syncPosts.map(item => <Post post={item} key={item.id} />)
	return (
		<div>
			{syncPosts}
		</div>
	)
};

const mapStateToProps = state => {
	return {
		syncPosts: state.posts.syncPosts
	}
}

export default connect(mapStateToProps, null)(Posts)