import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './styles.css';
import {
	Cart,
	Product,
	getCartById,
	getProductById,
} from '../../requests/CartRequests';
import { Item, getItemsByCartId } from '../../requests/CartRequests';

export default function Carrinho() {
	const { id } = useParams();
	const [cart, setCart] = useState<Cart | null | undefined>(null);
	const [cartItems, setCartItems] = useState<Item[] | null | undefined>(null);
	const [product, setProduct] = useState<Product | null | undefined>(null);
	const arrayProduto: number[] = [];

	useEffect(() => {
		getCartById(Number(id)).then(cart => {
			if (cart != null) {
				setCart(cart);
			} else {
				setCart(undefined);
			}
		});

		getItemsByCartId(Number(id)).then(cartItems => {
			if (cartItems != null) {
				setCartItems(cartItems);
			} else {
				setCartItems(undefined);
			}
		});

		getProductById(Number(id)).then(product => {
			if (product != null) {
				setProduct(product);
			} else {
				setProduct(undefined);
			}
		});

			// check if cartItems is empty, if it is not, count the quantity of each product
			 cartItems?.map(item => {
			 	if (item.prod_id != null) {
			 		arrayProduto.push(item.prod_id);
				}
			});

			//check arrayProduto and count the quantity of each product
			const count = arrayProduto.reduce((acc: Record<number, number>, curr) => {
				if (typeof acc[curr] === 'undefined') {
					acc[curr] = 1;
				} else {
					acc[curr] += 1;
				}
				return acc;
			}, {});

			console.log(count);

	}, [id]);

	return (
		<>
			{cart === null ? (
				<p>Carregando...</p>
			) : cart === undefined ? (
				<>
					<div className="empty-cart">
						<p>
							O seu carrinho está vazio... <br />
							Volte e dê uma olhada em nosso catálogo!
						</p>
					</div>
					<span
						onClick={() => window.history.back()}
						className="back-button">
						Voltar
					</span>
				</>
			) : (
				<>
					<div className="items-box">
						<div className="item-quantity">
							{cartItems && cartItems.length < 2
								? `${cartItems?.length} item`
								: `${cartItems?.length} itens`}
						</div>
						<div className="item-divider" />
						{cartItems &&
							cartItems.map(item => (
								<>
									<div className="items-info">
										<img
											src="product?.prod_image"
											alt=""
											height={135}
											width={135}
										/>
										<div className="item-name">
											{product?.prod_name}
										</div>
									</div>
									<div className="item-divider" />
								</>
							))}
					</div>
				</>
			)}
		</>
	);
}
