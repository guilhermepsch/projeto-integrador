import BeachwearItem from './BeachwearItem';
import './styles.css';
import beachwear1 from '../../assets/img/mock/accessory1.png';
import { useEffect, useState } from 'react';
import {
	PRODUCT_TYPE_BEACHWEAR,
	Product,
	getProducts,
} from '../../requests/ProductRequests';

export default function Beachwear() {
	const [products, setProducts] = useState<Product[] | undefined>([]);

	useEffect(() => {
		getProducts({ type: PRODUCT_TYPE_BEACHWEAR }).then(produtos => {
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
			<div className="accessory-title">M O D A P R A I A</div>
			<div className="accessory-list-container">
				{products.map(product => (
					<BeachwearItem
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
