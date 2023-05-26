import HighlightItem from './HighlightItem';
import './styles.css';
import frontImage from '../../../assets/img/mock/beach1.png';
import backImage from '../../../assets/img/mock/beach2.png';

export default function Highlight() {
	return (
		<div className="highlight-background">
			<div className="highlight-title">Destaques</div>
			<div className="highlight-list">
				<HighlightItem
					imageFront={frontImage}
					imageBack={backImage}
					price={100}
					description="Conjunto Branco Praia"
					alt="Praia"
				/>
				<HighlightItem
					imageFront={frontImage}
					imageBack={backImage}
					price={100}
					description="Conjunto Branco Praia"
					alt="Praia"
				/>

				<HighlightItem
					imageFront={frontImage}
					imageBack={backImage}
					price={100}
					description="Conjunto Branco Praia"
					alt="Praia"
				/>
			</div>
		</div>
	);
}
