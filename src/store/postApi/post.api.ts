import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Post } from '../../model/post';

export const postApi = createApi({
	reducerPath: 'postApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://jsonplaceholder.typicode.com',
	}),
	endpoints: (builder) => ({
		getPosts: builder.query<Post[], void>({
			// GET endpoint
			query: () => ({
				url: 'posts', // endpoint tanımı
				headers: {},
				params: {
					$format: 'json', // endpointe tanımlanacak olan queryString varsa
				},
			}),
		}),
		// POST endpoint
		addPost: builder.mutation<Post, Partial<Post>>({
			query: (newPost) => ({
				url: 'posts',
				method: 'POST',
				body: newPost,
				headers: {
					'Content-Type': 'application/json',
				},
			}),
			// Cache update
			async onQueryStarted(_newPost, { dispatch, queryFulfilled }) {
				try {
					const { data: createdProduct } = await queryFulfilled;

					// getProducts cache'ini manuel güncelle
					dispatch(
						postApi.util.updateQueryData('getPosts', undefined, (draft) => {
							draft.unshift(createdProduct);
						})
					);
				} catch (error) {
					console.error('Post eklenemedi', error);
				}
			},
		}),
	}),
});
export const { useAddPostMutation, useGetPostsQuery } = postApi;
