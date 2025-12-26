import { useCallback, useState } from 'react';
import PostForm from '../components/post.form';
import { useGetPostsQuery } from '../../../api/postApi/post.api';
import type { Post } from '../../../model/post';
import React from 'react';

//useCallback ile fonksiyonların referanslarını koruyoruz, böylece child componentlere props olarak geçerken
// gereksiz renderların önüne geçmiş oluyoruz. Componenti ise React memo ile sarmalayarak prop değişmediği sürece
// yeniden render edilmesini engelliyoruz.
const MemoizedPostForm = React.memo(PostForm);

function PostIndexv2Page() {
	// useLoaderData ile yüklenen verileri alıyoruz, component yüklenmeden veri hazır olur.
	// const data: Post[] = useLoaderData() as Post[];
	const { data, error, isLoading } = useGetPostsQuery();
	const [open, setOpen] = useState<boolean>(false);
	const [random, setRandom] = useState<number>(0); // random state değişince PostFrom bu componentin child componenti olduğu için yeniden render'a sebep olur.

	// Function memoization yapılmadığından dolayı her renderda handleClose fonksiyonu yeniden oluşturulur. Buda FormPost componetine props olarak geçince yeniden rendera sebep olur.
	const handleClose = useCallback(() => {
		setOpen(false);
	}, []); // component domdan çıkana kadar aynı fonksiyon referansını korur.

	const onFormSubmit = useCallback((data: Post) => {
		console.log('Form submitted data:', data);
		setOpen(false);
	}, []); // component domdan çıkana kadar aynı fonksiyon referansını korur.

	if (isLoading) {
		return <div className="text-center">Loading...</div>;
	}

	if (error) {
		return <div className="text-center text-red-500">Error loading posts.</div>;
	}

	// React virtualda props değişince render aldığında gereksiz render maliyei ortaya çıkıyor.
	// çözüm yöntemi böyle durumlarda useCallback ile function memoization yapabiliriz.

	// Post Formdan dönen function props direkt olarak kullanırsak yeniden render sebep olur.

	return (
		<div>
			<MemoizedPostForm
				open={open}
				handleClose={handleClose}
				onFormSubmit={onFormSubmit}
			/>

			<button
				className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition mb-2 mr-2"
				onClick={() => setRandom(Math.floor(Math.random() * 100))}
			>
				Generate Random Number: {random}
			</button>

			<button
				className="px-4 py-2 bg-gray-600 text-white font-medium rounded-lg hover:bg-gray-700 transition mb-2"
				onClick={() => setOpen(true)}
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
