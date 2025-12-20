import { Link, Outlet } from 'react-router';
import { Typography } from '../ui';

const MainLayout = () => {
	return (
		<>
			<header className="flex justify-center mb-4 text-lg font-medium text-gray-800 border-t bg-blue-100 py-4">
				<Typography renderAs="h1" className="text-2xl">
					Main Layout Header
				</Typography>
			</header>

			<nav className="flex flex-row justify-center mb-4 space-x-4 text-lg font-medium text-blue-600 underline border-b pb-2 bg-gray-50">
				<Link to="/">Home</Link> <Link to="/hooks">Hooks</Link>{' '}
				<Link to="/atomic-design">Atomic Design</Link>{' '}
				<Link to="/posts">Post Pages</Link> <Link to="/products">Products</Link>{' '}
				<Link to="/cart-summary">Cart Summary</Link>{' '}
			</nav>
			<main>
				<div className="min-h-screen bg-gray-50 flex flex-col py-6 px-4">
					<div className="max-w-3xl mx-auto space-y-6 w-full">
						{
							/* Alt sayfalar burada render edilecek */
							<Outlet />
						}
					</div>
				</div>
			</main>
			<footer className="fixed bottom-0 left-0 w-full flex justify-center py-4 text-lg font-medium text-gray-800 border-t bg-white">
				Main Layout Footer
			</footer>
		</>
	);
};

export default MainLayout;
