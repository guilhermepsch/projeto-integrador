import { Item } from "../../../requests/ItemRequests";
import { Product } from "../../../requests/ProductRequests";

export interface FirstPageProps {
  items: Item[];
  products: Product[];
  handleNextPage: () => void;
}

export default function FirstPage({items, products, handleNextPage}: FirstPageProps) {
  return (
    (
      <>
        <div className="items-box">
          <div className="item-quantity">
            {items && items.length < 2
              ? `${items.length} item`
              : `${items.length} itens`}
          </div>
          <div className="item-divider" />

          {products &&
            products.map((product) => (
              <>
                <div className="items-info">
                  <img
                    src={product.prod_img}
                    alt={product.prod_name}
                    height={135}
                    width={135}
                  />
                  <div className="item-name">{product.prod_name}</div>
                  <div className="item-quantity">
                  {items.filter(item => item.id_product === product.prod_id).length}
                  </div>
                </div>
                <div className="item-divider" />
              </>
            ))}
        </div>
        <span className="next-button" onClick={() => handleNextPage()}>Continuar</span>
      </>
    )
  )
}