import React from 'react';
import type { RouteObject } from 'react-router';
import { getPosts } from '../client/post.client';

// Nested Route ve Nested Layout Örneği
// Ana layout altında farklı sayfalar ve alt layoutlar tanımlanabilir

const mainRoutes: RouteObject = {
	path: '',
	Component: React.lazy(() => import('../layout/main.layout')),
	children: [
		{
			index: true,
			Component: React.lazy(() => import('../pages/index/home.page')),
		},
		{
			path: 'hooks',
			Component: React.lazy(() => import('../pages/index/react.hooks.page')),
		},
		{
			path: 'atomic-design',
			Component: React.lazy(() => import('../pages/index/atomic-design.page')),
		},
		{
			path: 'posts',
			Component: React.lazy(() => import('../layout/post.layout')),
			children: [
				{
					index: true,
					Component: React.lazy(() => import('../pages/post/pages/index.page')),
				},
				{
					path: 'v2',
					Component: React.lazy(
						() => import('../pages/post/pages/index-v2.page')
					),
					loader: async () => {
						// Veri yükleme işlemleri burada yapılabilir
						// Örneğin, API çağrıları veya veri ön işleme
						// preload edilmiş verilerle component render edilir
						// throw new Error('Hata');

						const data = await getPosts();

						return data;
					},
					hasErrorBoundary: true,
					ErrorBoundary: React.lazy(() => import('../pages/error')),
				},
			],
		},
	],
};

// loader, action, errorBoundary kullanımı Reactte Router v7 ile gelen yeni özelliklerdir

// React.lazy ile tembel yükleme kullanarak ana rota yapılandırması
// Ana layout ve alt sayfalar için bileşenler dinamik olarak yüklenir
// React Lazy bir peformans optimizasyonudur
// Her sayfanın kodunu code-split yaparak başlangıç yükleme süresini azaltır

// TS için modül dışa aktarma
// ES Module standardını kullanır
export default mainRoutes;
