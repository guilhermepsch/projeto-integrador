import './styles.css';
import cartIcon from '../../../assets/img/akar-icons_cart.png';
import { createItem } from '../../../requests/ItemRequests';

export interface BeachwearItemProps {
	id: number;
	name: string;
	image: string;
	price: number;
}

export default function BeachwearItem({
	id,
	name,
	image,
	price,
}: BeachwearItemProps) {
	return (
		<div className="beachwear-item-container">
			<img src={image} alt={name} width={239} height={270} />
			<div className="beachwear-item-description">
				<div className="beachwear-item-name">{name}</div>
				<div className="beachwear-price-cart-container">
					<div className="beachwear-item-price">R$ {price}</div>
					<div
						className="beachwear-item-cart"
						onClick={() => {
							createItem(1, id);
						}}>
						<img src={cartIcon} alt="Adicionar ao carrinho" />
					</div>
				</div>
			</div>
		</div>
	);
}
