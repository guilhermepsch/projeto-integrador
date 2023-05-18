import { Link } from 'react-router-dom';
import { HeaderListOption } from './HeaderListOption';
import './styles.css';
import Logo from '../../assets/img/logo';
import { HeaderImageOption } from './HeaderImageOption';
import CartIcon from '../../assets/img/akar-icons_cart';

export default function Header() {
	return (
		<header className="header">
			<Link to="/" className="site-title">
				<Logo />
			</Link>
			<nav className="navigation">
				<ul className="header-unordered-list-options-normal">
					<HeaderListOption to="/">Home</HeaderListOption>
					<HeaderListOption to="/beachwear">
						Moda Praia
					</HeaderListOption>
					<HeaderListOption to="/collections">
						Coleções
					</HeaderListOption>
					<HeaderListOption to="/accessories">
						Acessórios
					</HeaderListOption>
				</ul>
			</nav>
			<HeaderImageOption to="/cart">
				<CartIcon />
			</HeaderImageOption>
			<Link className="login-button" to="/login">
				Login
			</Link>
		</header>
	);
}
