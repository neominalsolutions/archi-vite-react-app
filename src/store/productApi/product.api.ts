import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Product } from '../products/product.slice';

export interface ODataResponse<T> {
	value: T[];
}

export const productApi = createApi({
	reducerPath: 'productApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://services.odata.org/northwind/northwind.svc/',
	}),
	endpoints: (builder) => ({
		// https://services.odata.org/northwind/northwind.svc/Products?$format=json
		getProducts: builder.query<ODataResponse<Product>, void>({
			// endpoint içerisinde bağlşadığım method ismi
			query: () => ({
				url: 'Products', // endpoint tanımı
				headers: {},
				params: {
					$format: 'json', // endpointe tanımlanacak olan queryString varsa
				},
			}),
		}),
		getProductsFilterByName: builder.query<
			ODataResponse<Product>,
			{ name: string }
		>({
			query: ({ name }) => ({
				// https://services.odata.org/northwind/northwind.svc/Products?$filter=substringof('ch', ProductName)&$format=json
				url: 'Products',
				params: {
					$filter: `substringof('${name}',ProductName)`,
					$format: 'json',
				},
			}),
		}),
	}),
});

// use + getProducts + Query -> Hook Sayfadan çağırılacak olan hookumuz

export const { useGetProductsQuery, useGetProductsFilterByNameQuery } =
	productApi;
