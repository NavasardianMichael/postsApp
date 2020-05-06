import React from 'react';

function Post(props) {
	return (
		<div className="card mt-2">
		  <div className="card-body">
		    <h5 className="card-title">{props.post.title}</h5>
		    <p className="card-text">{props.post.body}</p>
		  </div>
		</div>		
	)
}

export default Post 