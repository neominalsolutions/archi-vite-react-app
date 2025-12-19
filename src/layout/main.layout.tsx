import { Outlet } from 'react-router';

const MainLayout = () => {
	return (
		<>
			<header>Main Layout Header</header>
			<main>
				{
					/* Alt sayfalar burada render edilecek */
					<Outlet />
				}
			</main>
			<footer>Main Layout Footer</footer>
		</>
	);
};

export default MainLayout;
