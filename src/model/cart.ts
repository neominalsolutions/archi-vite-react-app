export interface CartState {
	items: { name: string; productId: string; price: number; quantity: number }[];
	total: number;
}
