import OfferItem from './OfferItem';
import './styles.css';
import offer1 from '../../../assets/img/mock/offer1.png';

export default function Offer() {
	return (
		<div className="offer-background">
			<div className="offer-title">Ofertas!</div>
			<div className="offer-list">
				<OfferItem image={offer1} price={100.59} priceDiscount={69.99} description='Blusa Red Peach | Coleção Peach' alt='Blusa rosa com detalhes vermelhos' />
				<OfferItem image={offer1} price={100.59} priceDiscount={69.99} description='Blusa Red Peach | Coleção Peach' alt='Blusa rosa com detalhes vermelhos' />
				<OfferItem image={offer1} price={100.59} priceDiscount={69.99} description='Blusa Red Peach | Coleção Peach' alt='Blusa rosa com detalhes vermelhos' />
				<OfferItem image={offer1} price={100.59} priceDiscount={69.99} description='Blusa Red Peach | Coleção Peach' alt='Blusa rosa com detalhes vermelhos' />
				<OfferItem image={offer1} price={100.59} priceDiscount={69.99} description='Blusa Red Peach | Coleção Peach' alt='Blusa rosa com detalhes vermelhos' />
			</div>
		</div>
	);
}
