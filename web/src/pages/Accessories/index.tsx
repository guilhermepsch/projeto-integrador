import AccessoryItem from './AccessoryItem';
import './styles.css';
import { useEffect, useState } from 'react';
import {
	PRODUCT_TYPE_ACCESSORY,
	Product,
	getProducts,
} from '../../requests/ProductRequests';

export default function Accessories() {
	const [products, setProducts] = useState<Product[] | undefined>([]);

	useEffect(() => {
		getProducts({ type: PRODUCT_TYPE_ACCESSORY }).then(produtos => {
			if (produtos.length === 0) setProducts(undefined);
			else setProducts(produtos);
		});
	}, []);

	if (products === undefined) {
		return <p>Erro ao carregar produtos.</p>;
	}
	if (products.length === 0) {
		return <p>Carregando...</p>;
	}

	return (
		<>
			<div className="accessory-title">A C E S S Ó R I O S</div>
			<div className="accessory-list-container">
				{products.map(product => (
					<AccessoryItem
					id={product.prod_id}
						key={product.prod_id}
						name={product.prod_name}
						image={product.prod_img}
						price={product.prod_price}
					/>
				))}
			</div>
		</>
	);
}
