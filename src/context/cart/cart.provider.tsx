// ilk adım context oluşturma ve contextTypeları oluşturma ve contextState oluşturma

import { useState } from 'react';
import { CartContext, initialCartState } from './cart.context';
import type { CartState } from '../../model/cart';

// useContext ile Context içerisinde state ve methodlara erişebiliriz.

// Redux da ise Reducer ile state yönetimi yapıyoruz.
// Cart State güncelleme işlemlerini provider ile yapıyoruz.
const CartProvider = ({ children }: { children: React.ReactNode }) => {
	// state yönetimi için useState kullanımı
	const [cart, setCart] = useState<CartState>(initialCartState);

	// sepete ürün ekleme işlevi
	const addItem = ({
		name,
		productId,
		price,
		quantity,
	}: {
		name: string;
		productId: string;
		price: number;
		quantity: number;
	}) => {
		// Ürün ekleme mantığı
		if (cart.items.find((item) => item.productId === productId)) {
			// updated value
			const items = cart.items.map((item) => {
				// aynı üründen eklenirse quantity artırılır
				if (item.productId === productId) {
					return {
						...item,
						quantity: item.quantity + quantity,
					};
				}
				return item;
			});

			setCart({
				...cart,
				items,
				total: cart.total + price * quantity,
			});
		} else {
			// yeni ürün eklenir
			cart.items.push({ name, productId, price, quantity });
			const total = cart.total + price * quantity;
			setCart({ ...cart, items: [...cart.items], total }); // spread operatörü ile yeni bir nesne oluşturarak state'i güncelle
			// { ...cart } -> nesnenin referansını günceller. React state değişikliklerini referans bazlı takip eder. Reactda referans değişirse virtual dom da değişir ve yeniden render tetiklenir.
		}
	};
	const removeItem = (productId: string) => {
		// Ürün kaldırma mantığı
		const itemToRemove = cart.items.find(
			(item) => item.productId === productId
		);
		if (itemToRemove) {
			// ürün bulunursa toplamdan çıkarılır ve listeden silinir. total güncellenir.
			const total = cart.total - itemToRemove.price * itemToRemove.quantity;

			// ürünü listeden çıkar
			const filteredItems = cart.items.filter(
				(item) => item.productId !== productId
			);
			// güncellenmiş cart state'ini ayarla
			setCart({ ...cart, items: [...filteredItems], total });
		}
	};
	const clearCart = () => {
		// Sepeti temizleme mantığı
		setCart(initialCartState);
	};

	// Provider içerisinde tanımlı olan componentlerin tüketeceği Context.Consumer lere sağlanacak değerler
	const values = {
		cart,
		addItem,
		removeItem,
		clearCart,
	};

	// <CartProvider>
	// <UserInfo />
	// <UserProfile />
	// </CartProvider> ile sarmalanan componentlere context değerlerini sağlar

	return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export default CartProvider;

// Bu yapının uygulama geneline yansıtılması için Provider tanımını src/main.tsx tüm uygulamadaki componentleri sarmalayacak şekilde eklememiz gerekiyor.
