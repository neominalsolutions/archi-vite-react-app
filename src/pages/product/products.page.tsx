import type { Product } from '../../model/product';

const ProductsPage = () => {
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
		</div>
	);
};

export default ProductsPage;
