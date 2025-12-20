import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import './index.css';
import mainRoutes from './routes/main.routes.ts';
import CartProvider from './context/cart/cart.provider.tsx';

const router = createBrowserRouter([mainRoutes]);

createRoot(document.getElementById('root')!).render(
	<CartProvider>
		<RouterProvider router={router} />
		{/* sayfa olarak sayfa içlerinde componentlerde dahil olmak üzere, bütün pagler ve diğer alt componentler hepsi cartprovider üzerindeki state alabilirler */}
	</CartProvider>
);
