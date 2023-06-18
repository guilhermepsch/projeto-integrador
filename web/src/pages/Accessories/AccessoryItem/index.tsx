import './styles.css';
import cartIcon from '../../../assets/img/akar-icons_cart.png';


export interface AccessoryItemProps {
	name: string;
	image: string;
	price: number;
}

export default function AccessoryItem({
	name,
	image,
	price,
}: AccessoryItemProps) {
	return (
		<div className="accessory-item-container">
			<img src={image} alt={name} width={239} height={270} />
			<div className="accessory-item-description">
				<div className="accessory-item-name">{name}</div>
				<div className="accessory-price-cart-container">
					<div className="accessory-item-price">R$ {price}</div>
					<div className="accessory-item-cart">
						<img src={cartIcon} alt="Adicionar ao carrinho" />
					</div>
				</div>
			</div>
		</div>
	);
}
