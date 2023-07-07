import { useEffect, useState } from "react";
import { getQrCodePix } from "../../../requests/PixRequests";
import "./styles.css";
import { createOrder } from "../../../requests/OrderRequests";
import { Cart } from "../../../requests/CartRequests";

export interface PixPageProps {
  cart: Cart;
  handleNextPage: () => void;
  handlePreviousPage: () => void;
}

export default function PixPage({
  cart,
  handleNextPage,
  handlePreviousPage,
}: PixPageProps) {
  const [qrCode, setQrCode] = useState<string>("");

  useEffect(() => {
    getQrCodePix().then((qrCode) => {
      if (qrCode == null) {
        return;
      }
      setQrCode(qrCode);
    });
  }, []);

  return (
    <>
      <div className="pix-info">
        <p className="pix-text">Pague o pix pelo QR Code!</p>
        <img src={qrCode} alt="QR Code" />
      </div>
      <div className="buttons-back-next">
      <div className="back-button-2" onClick={() => handlePreviousPage()}>Voltar</div>
      <div className="next-button-2" onClick={() =>{handleNextPage(); createOrder(String(new Date().getTime()), 1, cart.id)}}>Continuar</div>
      </div>
    </>
  );
}
