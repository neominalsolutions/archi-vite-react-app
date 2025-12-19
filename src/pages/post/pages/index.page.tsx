import { useEffect } from 'react';
import { getPosts } from '../../../client/post.client';

function PostIndexPage() {
	const loadData = () => {
		getPosts()
			.then(() => {
				console.log('Posts loaded successfully.');
			})
			.catch((error) => {
				console.error('Error loading posts:', error);
			});
	};
	useEffect(() => {
		document.title = 'Post Index Page';
		loadData();
	}, []);

	return <div>Post Index Page</div>;
}

export default PostIndexPage;
