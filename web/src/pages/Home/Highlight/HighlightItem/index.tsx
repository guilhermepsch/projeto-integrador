import cartIcon from '../../../../assets/img/akar-icons_cart.png';
import './styles.css';

export interface HighlightItemProps {
	imageFront: string;
	imageBack: string;
	price: number;
	description: string;
	alt: string;
}

export default function HighlightItem({
	imageFront,
	imageBack,
	price,
	description,
	alt,
}: HighlightItemProps) {
	return (
		<div className="highlight-item-container">
			<div className="highlight-item-image">
				<img
					className="highlight-item-back-image"
					src={imageBack}
					alt={alt}
				/>
				<img
					className="highlight-item-front-image"
					src={imageFront}
					alt={alt}
				/>
			</div>
			<div className="highlight-item-properties-container">
				<div className="highlight-item-options">
					<span>{description}</span>
					<span>R$ {price}</span>
				</div>
				<div className="highlight-item-cart">
					<img src={cartIcon} alt={alt} />
				</div>
			</div>
		</div>
	);
}
