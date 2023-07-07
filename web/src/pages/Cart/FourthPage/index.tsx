import "./styles.css";
import Home from "../../Home";
import { Link } from "react-router-dom";

export interface FourthPageProps {
  handleNextPage: () => void;
  handlePreviousPage: () => void;
}

export default function FourthPage({
  handleNextPage,
  handlePreviousPage,
}: FourthPageProps) {
  return (
    <>
    <p className="success-order">Compra realizada com sucesso!</p>
    <Link to="/" className="site-title">
    <div className="home-page-button">Retornar à página inicial</div>
    </Link>
    </>
  );
}