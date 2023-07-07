import { Item } from "../../../requests/ItemRequests";
import { Product } from "../../../requests/ProductRequests";
import "./styles.css";
import trash from "../../../assets/img/trash.png";

export interface FirstPageProps {
  items: Item[];
  products: Product[];
  handleNextPage: () => void;
}

export default function FirstPage({
  items,
  products,
  handleNextPage,
}: FirstPageProps) {
  return (
    <>
      <div className="items-box">
        <div className="item-quantity">
          {items && items.length < 2
            ? `${items.length} item`
            : `${items.length} itens`}
        </div>
        <div className="item-divider" />

        {products &&
          products.map((product, key) => (
            <div key={key}>
              <div className="items-info">
                <img
                  src={product.prod_img}
                  alt={product.prod_name}
                  height={135}
                  width={135}
                />
                <div className="name-qtd">
                  <div className="name-trash">
                    <div className="item-name">{product.prod_name}</div>
                    <img src={trash} alt={trash} />
                  </div>
                  <div className="item-price">
                    R$
                    {product.prod_price *
                      items.filter(
                        (item) => item.id_product === product.prod_id
                      ).length}
                  </div>
                  <div className="item-qtd">
                    Quantidade:
                    <div className="qtd">
                      {
                        items.filter(
                          (item) => item.id_product === product.prod_id
                        ).length
                      }
                    </div>
                  </div>
                </div>
              </div>
              <div className="item-divider" />
            </div>
          ))}
      </div>
      <div className="next-button" onClick={() => handleNextPage()}>
        Continuar
      </div>
    </>
  );
}
