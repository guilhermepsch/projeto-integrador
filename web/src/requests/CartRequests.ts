import axios from 'axios';

export type Cart = {
  id: number;
  clie_id: number;
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
