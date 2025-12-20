import { useContext } from 'react';
import type { Product } from '../../model/product';
import {
	CartContext,
	type CartContextType,
} from '../../context/cart/cart.context';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../../store/store';

// addItem -> export isimleri aynı olduğu için çakışmayı önlemek adına yeniden adlandırıyoruz.
import { addItem as _addItem } from '../../store/cart/cart.slice';
import { useNavigate } from 'react-router';

const ProductsPage = () => {
	// component üzerinden state değiştirecek olan bir action tetiklememiz gerekiyor.
	// useContext hook ile context listener görevi görür.
	const { addItem } = useContext(CartContext) as CartContextType;
	const dispatch = useDispatch<AppDispatch>();
	const navigate = useNavigate();

	const data: Product[] = [
		{
			id: '1',
			name: 'Product A',
			price: 29.99,
			description: 'Description for Product A',
			imageUrl: 'https://example.com/product-a.jpg',
			stockQuantity: 100,
		},
		{
			id: '2',
			name: 'Product B',
			price: 49.99,
			description: 'Description for Product B',
			imageUrl: 'https://example.com/product-b.jpg',
			stockQuantity: 50,
		},
	];

	const onAddtoCartContextAPI = (data: Product) => {
		console.log(`Product ${data.id} added to cart.`);
		// ilgili methoda  -> redux içtin action'a gönderilen veriye payload denir
		// payload: state değiştirmek için action ile gönderilen veri
		addItem({
			name: data.name,
			productId: data.id,
			price: data.price,
			quantity: 1,
		});

		window.alert(`${data.name} sepete eklendi.`);

		// cartProvider içindeki addItem methodunu kullanarak ürünü sepete eklemeliyiz.
	};

	const onAddtoCartReduxToolkit = (data: Product) => {
		dispatch(
			_addItem({
				productId: data.id,
				name: data.name,
				quantity: 1,
				price: data.price,
			})
		);
		window.alert(`${data.name} sepete eklendi.`);

		// cartProvider içindeki addItem methodunu kullanarak ürünü sepete eklemeliyiz.
	};

	return (
		<>
			<div className="container mx-auto p-4">
				<h1>Products List</h1>
				<div>
					<button
						onClick={() => navigate('/cart-summary')}
						className="mt-4 px-4 py-2 bg-gray-600 text-white font-medium rounded-lg hover:bg-gray-700 transition mb-2"
					>
						Sepete Git (Context API)
					</button>
					<button
						onClick={() => navigate('/cart-summary-v2')}
						className="mt-4 px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition mb-2 ml-2"
					>
						Sepete Git (Redux Toolkit)
					</button>
				</div>

				{data.map((product) => (
					<div
						className="grid gap-4 p-4 mb-2 border rounded shadow "
						key={product.id}
					>
						<h2 className="text-xl font-semibold">{product.name}</h2>
						<p className="text-gray-600">{product.description}</p>
						<p className="text-green-600">Price: ${product.price}</p>
						<p className="text-blue-600">In Stock: {product.stockQuantity}</p>
						<button
							onClick={() => onAddtoCartContextAPI(product)}
							className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
						>
							Sepete Ekle (Context API)
						</button>
						<button
							onClick={() => onAddtoCartReduxToolkit(product)}
							className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
						>
							Sepete Ekle (Redux Toolkit)
						</button>
					</div>
				))}
			</div>
		</>
	);
};

export default ProductsPage;
