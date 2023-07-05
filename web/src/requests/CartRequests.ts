import axios from 'axios';

export type Cart = {
  cart_id: number;
  clie_id: number;
  created_at: string;
  updated_at: string;
};

export type Item = {
	item_id: number;
	cart_id: number;
	prod_id: number;
	created_at: string;
	updated_at: string;
};

export type Product = {
	prod_id: number;
	prod_name: string;
	prod_price: number;
	prod_description: string;
	prod_image: string;
	cata_id: number;
	created_at: string;
	updated_at: string;
};

export async function getCartById(id: number): Promise<Cart | null> {
	try {
		const response = await axios.request({
			method: 'GET',
			url: 'http://localhost:5000/cart/' + id,
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const cart: Cart = response.data;
		return cart;
	} catch (err) {
		console.log(err);
		return null;
	}
}

export async function getItemsByCartId(cart_id: number){
	try {
		const response = await axios.request({
			method: 'GET',
			url: 'http://localhost:5000/item/cart/' + cart_id,
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const items: Item[] = response.data;
		return items;
	} catch (err) {
		console.log(err);
		return null;
	}
}

export async function getProductById(prod_id: number){
	try {
		const response = await axios.request({
			method: 'GET',
			url: 'http://localhost:5000/product/' + prod_id,
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const product: Product = response.data;
		return product;
	} catch (err) {
		console.log(err);
		return null;
	}
}