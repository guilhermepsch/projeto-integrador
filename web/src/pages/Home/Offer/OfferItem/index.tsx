import './styles.css';
import cartIcon from '../../../../assets/img/akar-icons_cart.png';

export interface OfferItemProps {
	image: string;
	price: number;
	priceDiscount: number;
	description: string;
	alt: string;
}

export default function OfferItem({
	image,
	price,
	priceDiscount,
	description,
	alt,
}: OfferItemProps) {
	return (
		<div className="offer-item">
			<div className="offer-item-image">
				<img src={image} alt={alt} />
			</div>
      <div className='offer-item-description'>{description}</div>
			<div className="offer-item-options">
				<div className="offer-item-price">
          <span className='offer-item-oldprice'>De: R${price}</span>
          <span className='offer-item-newprice'>Por: <span>R${priceDiscount}</span></span>
        </div>
				<div className="offer-item-cart">
          <img src={cartIcon} alt="Carrinho" />
        </div>
			</div>
		</div>
	);
}
