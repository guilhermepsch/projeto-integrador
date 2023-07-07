import axios from "axios";

export type Item = {
	id: number;
	id_cart: number;
	id_product: number;
	created_at: string;
	updated_at: string;
};

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
