import AccessoryItem from './AccessoryItem';
import './styles.css';
import accessory1 from '../../assets/img/mock/accessory1.png';

export default function Accessories() {
	return (
		<>
			<div className="accessory-title">A C E S S Ó R I O S</div>
			<div className="accessory-list-container">
				<AccessoryItem name="Bolsa" image={accessory1} price={100} />
				<AccessoryItem name="Bolsa" image={accessory1} price={100} />
				<AccessoryItem name="Bolsa" image={accessory1} price={100} />
				<AccessoryItem name="Bolsa" image={accessory1} price={100} />
				<AccessoryItem name="Bolsa" image={accessory1} price={100} />
				<AccessoryItem name="Bolsa" image={accessory1} price={100} />
				<AccessoryItem name="Bolsa" image={accessory1} price={100} />
			</div>
		</>
	);
}
