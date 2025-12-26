import { Outlet } from 'react-router';
import { Typography } from '../ui';
import MainBar from '../ui/organisms/MainBar';
import { useState, useEffect } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Fab } from '@mui/material';

const MainLayout = () => {
	const [showScrollButton, setShowScrollButton] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setShowScrollButton(window.scrollY > 100);
		};

		// evenlistener tanımlarını useEffect içinde yapıyoruz

		window.addEventListener('scroll', handleScroll);

		// component domdan ayrılırsa yani başka bir layouta geçerse eventlistener kaldırılır
		// cleanup function
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<>
			<header className="flex justify-center mb-4 text-lg font-medium text-gray-800 border-t bg-blue-100 py-4">
				<Typography renderAs="h1" className="text-2xl">
					Main Layout Header
				</Typography>
			</header>

			<MainBar />

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
			<footer className="left-0 w-full flex justify-center py-4 text-lg font-medium text-gray-800 border-t bg-white">
				Main Layout Footer
			</footer>

			{showScrollButton && (
				<Fab
					color="primary"
					onClick={scrollToTop}
					sx={{
						position: 'fixed',
						bottom: 30,
						right: 30,
					}}
				>
					<KeyboardArrowUpIcon />
				</Fab>
			)}
		</>
	);
};

export default MainLayout;
