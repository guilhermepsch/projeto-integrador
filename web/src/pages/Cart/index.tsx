import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./styles.css";
import { Cart, getCartById } from "../../requests/CartRequests";
import { Item, getItemsByCartId } from "../../requests/ItemRequests";
import { Product, getProductById } from "../../requests/ProductRequests";
import { ClientAddress, getClientAddressByClientId } from "../../requests/ClientAddressRequest";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";

export default function Carrinho() {
  const { id } = useParams();
  const [cart, setCart] = useState<Cart | null | undefined>(null);
  const [items, setItems] = useState<Item[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
	const [paginaAtiva, setPaginaAtiva] = useState<number>(1);
	const [address, setAddress] = useState<ClientAddress[]>([]);
	let renderizou = false;

	function handleNextPage() {
		setPaginaAtiva(paginaAtiva + 1);
	}

	function handlePreviousPage() {
		setPaginaAtiva(paginaAtiva - 1);
	}

  useEffect(() => {
		if (renderizou === true) return;
		setProducts([]);
    getCartById(Number(id)).then((cart) => {
      if (cart == null) {
        setCart(undefined);
        return;
      }
      setCart(cart);
      getItemsByCartId(cart.id).then((cartItems) => {
        if (cartItems == null) {
          return;
        }
        setItems(cartItems);
        Promise.all(
          cartItems.map((item) => {
            getProductById(item.id_product).then((product) => {
              if (product == null) {
                return;
              }
              setProducts((products) => [...products, product]);
            });
						getClientAddressByClientId(cart.clie_id).then((address) => {
							if (address == null) {
								return;
							}
							setAddress((address) => [...address, address[0]]);
						});
          })
        );
      });
    });
		renderizou = true;
  }, []);

	if (cart === null) return <p>Carregando...</p>
	if (cart === undefined) return (
	<>
		<div className="empty-cart">
			<p>
				O seu carrinho está vazio... <br />
				Volte e dê uma olhada em nosso catálogo!
			</p>
		</div>
		<span onClick={() => window.history.back()} className="back-button">
			Voltar
		</span>
	</>
	);

	switch (paginaAtiva) {
		case 2:
			return <SecondPage address={address} handleNextPage={handleNextPage} handlePreviousPage={handlePreviousPage}/>
		case 3:
			return <p>Terceira página</p>;
		case 4:
			return <p>Quarta página</p>;
		default:
			return <FirstPage items={items} products={products} handleNextPage={handleNextPage}  />;
	}
}