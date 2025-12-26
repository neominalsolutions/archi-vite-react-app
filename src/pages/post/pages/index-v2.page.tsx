import {
	useAddPostMutation,
	useGetPostsQuery,
} from '../../../store/postApi/post.api';

function PostIndexv2Page() {
	// useLoaderData ile yüklenen verileri alıyoruz, component yüklenmeden veri hazır olur.
	// const data: Post[] = useLoaderData() as Post[];

	const [addPost] = useAddPostMutation();
	const { data, error, isLoading } = useGetPostsQuery();

	const handleAdd = async () => {
		await addPost({
			title: 'New Product',
			body: 'This is a new product added via Redux Toolkit Query.',
			userId: 1,
		});
	};

	if (isLoading) {
		return <div className="text-center">Loading...</div>;
	}

	if (error) {
		return <div className="text-center text-red-500">Error loading posts.</div>;
	}

	return (
		<div>
			<button
				className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition mb-2"
				onClick={handleAdd}
			>
				Add Post
			</button>

			{data?.map((post) => (
				<div key={post.id} className="mb-4 p-4 border rounded">
					<h2 className="text-xl font-bold mb-2">{post.title}</h2>
					<p>{post.body}</p>
				</div>
			))}
		</div>
	);
}

export default PostIndexv2Page;
