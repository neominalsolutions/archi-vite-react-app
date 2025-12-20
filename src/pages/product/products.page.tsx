import { useContext } from 'react';
import type { Product } from '../../model/product';
import {
	CartContext,
	type CartContextType,
} from '../../context/cart/cart.context';

const ProductsPage = () => {
	// component üzerinden state değiştirecek olan bir action tetiklememiz gerekiyor.
	// useContext hook ile context listener görevi görür.
	const { addItem } = useContext(CartContext) as CartContextType;

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

	const onAddtoCart = (data: Product) => {
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

	return (
		<div className="container mx-auto p-4">
			<h1>Products List</h1>
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
						onClick={() => onAddtoCart(product)}
						className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
					>
						Sepete Ekle
					</button>
				</div>
			))}

			<button
				onClick={() => {}}
				className="mt-4 px-4 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition"
			>
				Sepete Git
			</button>
		</div>
	);
};

export default ProductsPage;
