import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import ModaPraia from './pages/ModaPraia';
import Colecoes from './pages/Colecoes';
import Acessorios from './pages/Acessorios';
import Login from './pages/Login';
import Carrinho from './pages/Carrinho';

export default function App() {
	return (
		<>
			<Header />
			<div className="container">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/modapraia" element={<ModaPraia />} />
					<Route path="/colecoes" element={<Colecoes />} />
					<Route path="/acessorios" element={<Acessorios />} />
					<Route path="/carrinho" element={<Carrinho />} />
					<Route path="/login" element={<Login />} />
				</Routes>
			</div>
		</>
	);
}
