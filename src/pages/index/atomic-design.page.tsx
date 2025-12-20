import React from 'react';
import PostGrid from '../../ui/templates/PostGrid';
import PostSummary from '../../ui/templates/PostSummary';
export const PostCardExample: React.FC = () => {
	return (
		<>
			<h1 className="text-3xl font-bold text-gray-800 mb-8">
				Post Summary Template
			</h1>

			{/* Örnek 1: Temel Kullanım */}

			<h1>Atomic Design ile Oluşturulmuş Post Summary Template Örneği</h1>
			<PostSummary
				item={[
					{
						userInfo: { name: 'Ali', date: '19.12.2025', avatarUrl: 'A' },
						title: 'React ve TypeScript ile Modern Web Geliştirme',
						contentText:
							'React ve TypeScript kombinasyonu, modern web uygulamaları geliştirmek için güçlü bir temel sağlar. Type safety ve component-based mimari ile daha güvenli ve sürdürülebilir kodlar yazabilirsiniz.',
						link: 'detail',
					},
					{
						userInfo: { name: 'Ahmet', date: '19.12.2025', avatarUrl: 'A' },
						title: 'React ve TypeScript ile Modern Web Geliştirme',
						contentText:
							'React ve TypeScript kombinasyonu, modern web uygulamaları geliştirmek için güçlü bir temel sağlar. Type safety ve component-based mimari ile daha güvenli ve sürdürülebilir kodlar yazabilirsiniz.',
						link: 'iletişime geçin',
					},
				]}
			>
				<PostGrid />
			</PostSummary>
		</>
	);
};

export default PostCardExample;
