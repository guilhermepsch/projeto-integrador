import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Beachwear from './pages/Beachwear';
import Collections from './pages/Collections';
import Accessories from './pages/Accessories';
import Login from './pages/Login';
import Cart from './pages/Cart';

export default function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/beachwear" element={<Beachwear />} />
				<Route path="/collections" element={<Collections />} />
				<Route path="/accessories" element={<Accessories />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</>
	);
}
