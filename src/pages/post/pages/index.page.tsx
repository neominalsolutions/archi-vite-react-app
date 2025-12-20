import { useEffect, useState } from 'react';
import { getPosts } from '../../../client/post.client';
import type { Post } from '../../../model/post';

// Not: Bu componentteki veriler örnek amaçlıdır ve gerçek bir API çağrısı yapmaz.
// component ayrımları göz ardı edilmiştir.

function PostIndexPage() {
	// load edilen verilen asenkron olduğundan dolayı useEffect içinde çağrılması gerekir. ve asenkron bir yapıda sayfayı aseknron duruma göre düzenlememiz gerekir.
	const [posts, setPosts] = useState<Post[]>([]); // apidan gelir, apidan load olma süresi var
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null); // hata alma ihtimalmiz söz konusu

	const loadData = () => {
		getPosts()
			.then(() => {
				setLoading(false);
				setPosts(posts);
				console.log('Posts loaded successfully.');
			})
			.catch((error) => {
				setLoading(false);
				setError('Failed to load posts.');
				console.error('Error loading posts:', error);
			});
	};
	
	useEffect(() => {
		document.title = 'Post Index Page';
		loadData();
	}, []);

	if (loading) {
		return <div className="text-center">Loading...</div>;
	}

	if (error) {
		return <div className="text-center text-red-500">{error}</div>;
	}

	// posts yüklendiğinde gösterilecek içerik
	return (
		<div>
			{posts.map((post) => (
				<div key={post.id} className="mb-4 p-4 border rounded">
					<h2 className="text-xl font-bold mb-2">{post.title}</h2>
					<p>{post.body}</p>
				</div>
			))}
		</div>
	);
}

export default PostIndexPage;
