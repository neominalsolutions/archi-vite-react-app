import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import './index.css';
import mainRoutes from './routes/main.routes.ts';
import CartProvider from './context/cart/cart.provider.tsx';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';
import '@fontsource/roboto/400.css';
import Container from '@mui/material/Container';

const router = createBrowserRouter([mainRoutes]);

createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<CartProvider>
			<Container maxWidth="xl" sx={{ paddingTop: '20px' }}>
				<RouterProvider router={router} />

				{/* sayfa olarak sayfa içlerinde componentlerde dahil olmak üzere, bütün pagler ve diğer alt componentler hepsi cartprovider üzerindeki state alabilirler */}
			</Container>
		</CartProvider>
	</Provider>
);
