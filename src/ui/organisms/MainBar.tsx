import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React, { useMemo } from 'react';
import { Link } from 'react-router';
import Button from '@mui/material/Button';

function MainBar() {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

	// Menü öğelerini useMemo ile tanımladık bu sayede bileşen her render edildiğinde yeniden oluşturulmaz
	// değerler sadece bağımlılıklar değiştiğinde yeniden hesaplanır

	const getPages = () => {
		console.log('getPapages rendered');
		return [
			{
				id: 1,
				name: 'Products', // (RTK Query)
				href: '/products',
			},
			{
				id: 2,
				name: 'Posts',
				href: '/posts',
			},
			{
				id: 3,
				name: 'Cart Summary', // Context API
				href: '/cart-summary',
			},
			{
				id: 4,
				name: 'Hooks',
				href: '/hooks',
			},
			{
				id: 5,
				name: 'Atomic Design',
				href: '/atomic-design',
			},
			{
				id: 6,
				name: 'Products V2 ', //(RTK Query)
				href: '/products-v2',
			},
			{
				id: 7,
				name: 'Cart Summary V2', // Redux Toolkit
				href: '/cart-summary-v2',
			},
			{
				id: 8,
				name: 'Post V2', // (RTK Query)
				href: '/posts/v2',
			},
			{
				id: 9,
				name: 'Home',
				href: '/posts/home',
			},
			{
				id: 10,
				name: 'Home',
				href: '/',
			},
		];
	};

	const pages = useMemo(
		() => getPages(),
		[] // boş dependency array, bu yüzden sadece ilk renderda hesaplanır
	);

	return (
		<AppBar position="sticky" color="primary" elevation={0}>
			<Toolbar sx={{ justifyContent: 'center' }}>
				{/* Mobile */}
				<Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
					<IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
						<MenuIcon />
					</IconButton>
					<Menu
						anchorEl={anchorEl}
						open={Boolean(anchorEl)}
						onClose={() => {
							setAnchorEl(null);
						}}
					>
						{pages.map((page) => (
							<MenuItem
								key={page.name}
								onClick={() => setAnchorEl(null)}
								component={Link} // react-router Link component'ını kullan ile uyumlu
								to={page.href}
							>
								{page.name}
							</MenuItem>
						))}
					</Menu>
				</Box>

				{/* Desktop */}
				<Box sx={{ display: { xs: 'none', sm: 'flex', padding: 2 } }}>
					{pages.map((page) => (
						<Button
							component={Link}
							to={page.href}
							key={page.id}
							color="inherit"
						>
							{page.name}
						</Button>
					))}
				</Box>
			</Toolbar>
		</AppBar>
	);
}

export default MainBar;
