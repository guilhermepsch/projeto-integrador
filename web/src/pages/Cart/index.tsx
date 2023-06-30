import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./styles.css";
import { Cart, getCartById } from "../../requests/CartRequests";

export default function Carrinho() {
  const { id } = useParams();
  const [cart, setCart] = useState<Cart | null | undefined>(null);

  useEffect(() => {
    getCartById(Number(id)).then((cart) => {
      if (cart != null) {
        setCart(cart);
      } else {
        setCart(undefined);
      }
    });
  }, [id]);

  return (
    <>
      {cart === null ? (
        <p>Carregando...</p>
      ) : cart === undefined ? (
        <>
          <div className="empty-cart">
            <p>
              O seu carrinho está vazio... <br />
              Volte e dê uma olhada em nosso catálogo!
            </p>
          </div>
          <span onClick={
            () => window.history.back()
          } className="back-button">Voltar</span>
        </>
      ) : (
        <>
        <div className="items-box">
          <div className="item-quantity">
            item 1 de 1
          </div>
          <div className="item-divider" />
          <div className="item-image">
            <img 
            src=""
            alt=""
            height={135}
            width={135} />
          </div>
        </div>
        </>
      )}
    </>
  );
}
