import { NavLink, Outlet } from 'react-router';
import { Typography } from '../ui';

// Nasayafadan post sayfalarına geçiş için bir layout örneği
// Post sayfaları için ortak başlık ve navigasyon içerir

function PostLayout() {
	return (
		<div>
			<Typography renderAs="h1">Post Layout</Typography>
			<nav className="mb-4">
				<NavLink to="/posts" className="mr-4">
					All Post V1
				</NavLink>
				<NavLink to="/posts-v2" className="mr-4">
					All Post V2
				</NavLink>
			</nav>
			<main>
				{/* Post content will go here */}
				<Outlet />
			</main>
		</div>
	);
}

export default PostLayout;
