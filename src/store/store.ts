import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './cart/cart.slice';
import { productReducer } from './products/product.slice';
// ...
// state merkezi olarak store da tutulacaksa, slice lar burada import edilip eklenir.
export const store = configureStore({
	reducer: {
		cartState: cartReducer,
		productState: productReducer,
	}, // burada slice ların reducer ları eklenir. örn: userState: userReducer
	// bu kısım state tanımı ve store üzerinde middleware ekleme gibi işlemler için kullanılabilir.
});

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
// Uygulama genelikteki tüm state in tipini çıkarsamak için kullanılır.
export type RootState = ReturnType<typeof store.getState>;
// Uygulama genelinde state güncellemek için kullanılan fonksiyon. dispatch fonksiyonunun tipini çıkarsamak için kullanılır.
export type AppDispatch = typeof store.dispatch;

// Store un kendisinin tipi, store ile ilgili işlemler için kullanılabilir.
export type AppStore = typeof store;
