import { Link } from 'react-router-dom';
import { HeaderOption } from './HeaderOption';
import './style.css';
import Logo from '../../assets/img/logo';

export default function Header() {
	return (
		<nav className="header">
			<Link to="/" className="site-title">
				<Logo />
			</Link>
			<ul className="header-unordered-list">
				<HeaderOption to="/">Home</HeaderOption>
				<HeaderOption to="/modapraia">Moda Praia</HeaderOption>
				<HeaderOption to="/colecoes">Coleções</HeaderOption>
				<HeaderOption to="/acessorios">Acessórios</HeaderOption>
				<HeaderOption to="/carrinho">Carrinho</HeaderOption>
				<HeaderOption to="/login">Login</HeaderOption>
			</ul>
		</nav>
	);
}
