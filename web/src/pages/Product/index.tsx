import { useParams } from 'react-router-dom';
import { Product, getProductById } from '../../requests/ProductRequests';
import { useEffect, useState } from 'react';
import { numberToMoneyString } from '../../utils/numberUtils';
import './styles.css';
import CartIcon from '../../assets/img/akar-icons_cart';

export default function Product() {
	const { id } = useParams();
	const [product, setProduct] = useState<Product | null | undefined>(null);
	const [quantity, setQuantity] = useState<number>(1);

	useEffect(() => {
		getProductById(Number(id)).then(product => {
			if (product != null) {
				setProduct(product);
			} else {
				setProduct(undefined);
			}
		});
	}, [id]);

	return (
		<>
			{product === null ? (
				<p>Carregando...</p>
			) : product === undefined ? (
				<p>Produto não encontrado.</p>
			) : (
				<div className="product-main-content">
					<div className="product-image">
						<img
							src={product.prod_img}
							alt={product.prod_name}
							height={466}
							width={466}
						/>
					</div>
					<div className="product-info">
						<div className="product-title">{product.prod_name}</div>
						<div className="product-price">
							{numberToMoneyString(product.prod_price * quantity)}
						</div>
						<div className="product-quantity">
							<a
								onClick={() => {
									if (quantity == 1) return;
									setQuantity(quantity - 1);
								}}>
								<span className="change-quantity">-</span>
							</a>
							<span className="quantity">{quantity}</span>
							<a onClick={() => setQuantity(quantity + 1)}>
								<span className="change-quantity">+</span>
							</a>
						</div>
						<div className="product-divider" />
						<div className="product-description">
							“{product.prod_desc}”
						</div>
						<div className="add-to-cart">
							<div className="add-to-cart-text">
								Adicionar ao carrinho
							</div>
							<div className="add-to-cart-icon">
								<CartIcon width={55} height={55} />
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
