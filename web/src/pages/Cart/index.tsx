import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./styles.css";
import { Cart, getCartById } from "../../requests/CartRequests";
import { Item, getItemsByCartId } from "../../requests/ItemRequests";
import { Product, getProductById } from "../../requests/ProductRequests";
import {
  ClientAddress,
  getClientAddressByClientId,
} from "../../requests/ClientAddressRequest";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";

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
      getClientAddressByClientId(cart.clie_id).then((address) => {
        if (address == null) {
          return;
        }
        setAddress(address);
      });
      getItemsByCartId(cart.id).then((cartItems) => {
        if (cartItems == null) {
          return;
        }
        setItems(cartItems);
        let productArray: Product[] = [];
				Promise.all(
          cartItems.map((item) => {
						getProductById(item.id_product).then((product) => {
              if (product == null) {
                return;
              }
              if (productArray.find((prod) => prod.prod_id === product.prod_id))
                return;
								productArray.push(product);
              setProducts((products) => [...products, product]);
            });
          })
        );
      });
    });
    renderizou = true;
  }, []);

  if (cart === null) return <p>Carregando...</p>;
  if (cart === undefined)
    return (
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
      return (
        <SecondPage
          address={address}
          handleNextPage={handleNextPage}
          handlePreviousPage={handlePreviousPage}
        />
      );
    case 3:
      return <p><ThirdPage items={items} products={products} handleNextPage={handleNextPage} handlePreviousPage={handlePreviousPage}/></p>;
    case 4:
      return <p>Quarta página</p>;
    default:
      return (
        <FirstPage
          items={items}
          products={products}
          handleNextPage={handleNextPage}
        />
      );
  }
}
