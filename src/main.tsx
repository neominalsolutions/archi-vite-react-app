import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
// import './index.css';
import mainRoutes from './routes/main.routes.ts';

const router = createBrowserRouter([mainRoutes]);

createRoot(document.getElementById('root')!).render(
	<RouterProvider router={router} />
);
