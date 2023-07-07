import OfferItem from './OfferItem';
import './styles.css';
import offer1 from '../../../assets/img/mock/offer1.png';
import {
	PRODUCT_TYPE_OFFER,
	Product,
	getProducts,
} from '../../../requests/ProductRequests';
import { useEffect, useState } from 'react';

export default function Offer() {
	const [products, setProducts] = useState<Product[] | undefined>([]);

	useEffect(() => {
		getProducts({ type: PRODUCT_TYPE_OFFER }).then(produtos => {
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
		<div className="offer-background">
			<div className="offer-title">Ofertas!</div>
			<div className="offer-list">
				{products.map(product => (
					<OfferItem
						id={product.prod_id}
						key={product.prod_id}
						image={product.prod_img}
						alt={product.prod_name}
						price={product.prod_price}
						priceDiscount={product.prod_price - 20}
						description={product.prod_desc}
					/>
				))}
			</div>
		</div>
	);
}
