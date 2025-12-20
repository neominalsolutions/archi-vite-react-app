import { NavLink, Outlet } from 'react-router';

// Nasayafadan post sayfalarına geçiş için bir layout örneği
// Post sayfaları için ortak başlık ve navigasyon içerir
// Navlink hangi statede kaldığımızı bilir ve ona göre stil uygular

function PostLayout() {
	return (
		<div>
			<nav className="mb-4">
				<NavLink
					className={({ isActive }) =>
						isActive
							? 'px-4 py-2 text-blue-600 font-semibold'
							: 'px-4 py-2 text-gray-600 hover:text-blue-600'
					}
					to="/posts/home"
				>
					All Post V1
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive
							? 'px-4 py-2 text-blue-600 font-semibold'
							: 'px-4 py-2 text-gray-600 hover:text-blue-600'
					}
					to="/posts/v2"
				>
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
