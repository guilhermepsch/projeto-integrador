import axios from 'axios';

export type Product = {
	prod_id: number;
	prod_name: string;
	prod_price: number;
	prod_desc: string;
	prod_type: number;
	cata_id: number;
	prod_img: string;
	created_at: string;
	updated_at: string;
};

export const PRODUCT_TYPE_HIGHLIGHT = 1;
export const PRODUCT_TYPE_OFFER = 2;
export const PRODUCT_TYPE_ACCESSORY = 3;
export const PRODUCT_TYPE_BEACHWEAR = 4;

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

interface ProductRequest {
	type?: number;
}

export async function getProducts({type}: ProductRequest) : Promise<Product[]>{
	try {
		const response = await axios.request({
			method: 'GET',
			url: 'http://localhost:5000/product',
			headers: {
				'Content-Type': 'application/json',
			},
			params: {
				type: type
			}
		});
		const products: Product[] = response.data;
		return products;
	} catch (err) {
		console.log(err);
		return [];
	}
}
