import axios from 'axios';

export type Product = {
	prod_id: number;
	prod_name: string;
	prod_price: number;
	prod_desc: string;
	cata_id: number;
	prod_img: string;
	created_at: string;
	updated_at: string;
};

export async function getProductById(id: number): Promise<Product | null> {
	try {
		const response = await axios.request({
			method: 'GET',
			url: 'http://localhost:5000/product/' + id,
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
