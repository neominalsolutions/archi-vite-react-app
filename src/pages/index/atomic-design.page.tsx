import React from 'react';
import { Link } from '../../ui/atoms/Link';
import { Typography } from '../../ui/atoms/Typography';
import { UserInfo } from '../../ui/molecules/UserInfo';
import { PostCard } from '../../ui/organisms/PostCard';
import PostSummary from '../../ui/templates/PostSummary';
export const PostCardExample: React.FC = () => {
	return (
		<div className="min-h-screen bg-gray-50 p-8">
			<div className="max-w-2xl mx-auto space-y-6">
				<h1 className="text-3xl font-bold text-gray-800 mb-8">
					PostCard Örnekleri
				</h1>

				{/* Örnek 1: Temel Kullanım */}

				<h1>Atomic Design ile Oluşturulmuş Post Template Örneği</h1>
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
					<div className="mb-6 p-4">
						<table className="w-full table-auto border-collapse border border-gray-300">
							<thead>
								<tr className="bg-gray-200">
									<th className="border border-gray-300 px-4 py-2 text-left">
										Title
									</th>
									<th className="border border-gray-300 px-4 py-2 text-left">
										Content
									</th>
									<th className="border border-gray-300 px-4 py-2 text-left">
										Link
									</th>
									<th className="border border-gray-300 px-4 py-2 text-left">
										User Name
									</th>
									<th className="border border-gray-300 px-4 py-2 text-left">
										Date
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td className="border border-gray-300 px-4 py-2">
										React ve TypeScript ile Modern Web Geliştirme
									</td>
									<td className="border border-gray-300 px-4 py-2">
										React ve TypeScript kombinasyonu, modern web uygulamaları
										geliştirmek için güçlü bir temel sağlar. Type safety ve
										component-based mimari ile daha güvenli ve sürdürülebilir
										kodlar yazabilirsiniz.
									</td>
									<td className="border border-gray-300 px-4 py-2">detail</td>
									<td className="border border-gray-300 px-4 py-2">Ali</td>
								</tr>
							</tbody>
						</table>
					</div>
				</PostSummary>

				<PostCard>
					<PostCard.Header>
						<Typography
							renderAs="h3"
							className="text-xl font-bold text-gray-800"
						>
							React ve TypeScript ile Modern Web Geliştirme
						</Typography>
					</PostCard.Header>
					<PostCard.Content>
						<Typography className="text-gray-600 text-sm leading-relaxed mb-2">
							React ve TypeScript kombinasyonu, modern web uygulamaları
							geliştirmek için güçlü bir temel sağlar. Type safety ve
							component-based mimari ile daha güvenli ve sürdürülebilir kodlar
							yazabilirsiniz.
						</Typography>
						<Link href="#" className="text-sm font-medium">
							detail
						</Link>
					</PostCard.Content>
					<PostCard.Footer>
						<UserInfo userName="Ali" date="19.12.2025" userInitials="A" />
					</PostCard.Footer>
				</PostCard>
			</div>
		</div>
	);
};

export default PostCardExample;
