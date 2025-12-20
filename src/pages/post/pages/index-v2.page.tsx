import { useLoaderData } from 'react-router';
import type { Post } from '../../../model/post';

function PostIndexv2Page() {
	// useLoaderData ile yüklenen verileri alıyoruz, component yüklenmeden veri hazır olur.
	const data: Post[] = useLoaderData() as Post[];

	return (
		<div>
			{data.map((post) => (
				<div key={post.id} className="mb-4 p-4 border rounded">
					<h2 className="text-xl font-bold mb-2">{post.title}</h2>
					<p>{post.body}</p>
				</div>
			))}
		</div>
	);
}

export default PostIndexv2Page;
