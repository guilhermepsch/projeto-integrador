import HighlightItem from './HighlightItem';
import './styles.css';
import { useEffect, useState } from 'react';
import {
	PRODUCT_TYPE_HIGHLIGHT,
	Product,
	getProducts,
} from '../../../requests/ProductRequests';

export default function Highlight() {
	const [products, setProducts] = useState<Product[] | undefined>([]);

	useEffect(() => {
		getProducts({ type: PRODUCT_TYPE_HIGHLIGHT }).then(produtos => {
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
		<div className="highlight-background">
			<div className="highlight-title">Destaques</div>
			<div className="highlight-list">
				{products.map(product => (
					<HighlightItem
						key={product.prod_id}
						id={product.prod_id}
						imageFront={product.prod_img}
						alt={product.prod_name}
						price={product.prod_price}
						description={product.prod_desc}
					/>
				))}
			</div>
		</div>
	);
}
