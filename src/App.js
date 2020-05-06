import React from 'react';
import PostForm from './components/PostForm';
import Posts from './components/Posts';
import FetchedPosts from './components/FetchedPosts';

function App() {
  return (
    <div className="container pt-3">
      <div className="row">
      	<div className="col">
      		<h3 className="mb-4">Post Form</h3>
      		<PostForm />
      	</div>
      </div>
      <div className="row mt-2">
      	<div className="col-md">
      		<h3 className="mb-4">Sync Posts</h3>
      		<Posts />
      	</div>
      	<div className="col-md">
      		<h3 className="mb-4">Async Posts</h3>
      		<FetchedPosts />
      	</div>
      </div>
    </div>
  );
}

export default App;
