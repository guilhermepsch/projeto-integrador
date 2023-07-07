import { Product } from "../../../requests/ProductRequests";
import { User } from "../../../requests/UserRequests";
import piximg from "../../../assets/img/piximg.png";
import "./styles.css";

export interface ThirdPageProps {
  handleNextPage: () => void;
  handlePreviousPage: () => void;
}

export default function ThirdPage({
  handleNextPage,
  handlePreviousPage
}: ThirdPageProps){
return (
  <div className="payment">
  <p className="set-address">ESCOLHA A FORMA DE PAGAMENTO:</p>
  <div className="pix" onClick={() => handleNextPage()}>
    <img src={piximg} alt={piximg} />
  </div>
  <div className="back-button-3" onClick={() => handlePreviousPage()}>Voltar</div>
  </div>
);
}