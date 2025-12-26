/* eslint-disable @typescript-eslint/no-explicit-any */
// addItem -> export isimleri aynı olduğu için çakışmayı önlemek adına yeniden adlandırıyoruz.
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { addItem as _addItem } from '../../store/cart/cart.slice';
import { useGetProductsFilterByNameQuery } from '../../store/productApi/product.api';
import { type Product } from '../../store/products/product.slice';
import debounce from '../../utils/debounce';

const ProductsV2Page = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [searchText, setSearchText] = useState<string>('');
	// const { isLoading, data, error } = useGetProductsQuery();

	// elimizdeki bir state değeri değiştirğinde searchText -> yeni parametre üzerinden çalışması gerektiğinde sayfanın yeniden render alınması gerekir.
	const { isLoading, data, error } = useGetProductsFilterByNameQuery(
		{
			name: searchText,
		},
		{
			skip: false, // cache bozunalan kadar atlat default true -> fetch etme
			// pollingInterval: 3000, // 3s de bir arka planda veriyi güncelle -> setInterval ile yaptığımız -> cache invalid olursa yeniden veri çeker.
			refetchOnFocus: true, // Tarayıca Tab arası geçişlerde geri verinin yüklü olduğu taba dönünce yeniden refetch et
			refetchOnReconnect: true,

			// Internet bağlantısı gidip gelince yeniden güncel veriyi refetch et
		}
	);

	const onAddtoCartReduxToolkit = (data: Product) => {
		dispatch(
			_addItem({
				productId: data.ProductID,
				name: data.ProductName,
				quantity: 1,
				price: data.UnitPrice,
			})
		);
		window.alert(`${data.ProductName} sepete eklendi.`);

		// cartProvider içindeki addItem methodunu kullanarak ürünü sepete eklemeliyiz.
	};

	// e.target.value -> değeri değişene kadar component içerisinde state tut.
	// const onSearch = useMemo(
	// 	() => debounce((e: any) => setSearchText(e.target.value), 300),
	// 	[]
	// );

	// backend tarafında 300ms rama işlemlerinde istek attırdık.
	const onSearchHandler = debounce(
		(e: any) => setSearchText(e.target.value),
		300
	);

	if (isLoading) return <>Veri Yükleniyor...</>;

	if (error) return <>Veri yüklenirken bir hata meydana geldi</>;

	// Hata yoksa sayfamı böyle render et.
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

					<input
						onChange={(e) => onSearchHandler(e)}
						type="text"
						placeholder="Ürün ismini yazınız"
						className="mx-2 rounded-lg border border-gray-300 px-4 py-2 text-sm
         focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30
         outline-none transition"
					/>
				</div>

				{data?.value.map((product) => (
					<div
						className="grid gap-4 p-4 mb-2 border rounded shadow "
						key={product.ProductID}
					>
						<h2 className="text-xl font-semibold">{product.ProductName}</h2>
						<p className="text-green-600">Price: ${product.UnitPrice}</p>
						<p className="text-blue-600">In Stock: {product.UnitsInStock}</p>
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

export default ProductsV2Page;
