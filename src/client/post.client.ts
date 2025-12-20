import { type AxiosResponse } from 'axios';
import type { Post } from '../model/post';
import { jsonPlaceholderClient } from './jsonplaceholder.client';

// Example function to fetch posts from a placeholder API
// Post model API karşılıkları için kullanılabilir

export const getPostAsync = async (): Promise<Post[]> => {
	const response: AxiosResponse<Post[]> = await jsonPlaceholderClient.httpGet(
		'/posts'
	);
	const data: Post[] = response.data;
	return data;
};

export function getPosts() {
	console.log('This is the post client.');
	return fetch('https://jsonplaceholder.typicode.com/posts')
		.then((response) => response.json())
		.then((data: Post[]) => {
			// console.log('Fetched posts:', data);
			// data.forEach((post) => {
			// 	//console.log(`Post ID: ${post.id}, Title: ${post.title}`);
			// });

			// geç resolve et

			return Promise.resolve(data);
		})
		.catch((error) => {
			console.error('Error fetching posts:', error);
			return Promise.reject(error);
		});
}
export function getPostById(postId: number) {
	return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
		.then((response) => response.json())
		.then((data: Post) => {
			// console.log('Fetched post:', data);
			return data;
		})
		.catch((error) => {
			console.error(`Error fetching post with ID ${postId}:`, error);
		});
}
