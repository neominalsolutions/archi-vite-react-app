import { Link, Outlet } from 'react-router';

const MainLayout = () => {
	return (
		<>
			<header>Main Layout Header</header>
			<nav>
				<Link to="/">Home</Link> | <Link to="/hooks">Hooks</Link> |{' '}
			</nav>
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
