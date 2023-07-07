import { Item } from "../../../requests/ItemRequests";
import { Product } from "../../../requests/ProductRequests";

export interface ThirdPageProps {
  items: Item[];
  products: Product[];
  handleNextPage: () => void;
  handlePreviousPage: () => void;
}

export default function ThirdPage({
  items,
  products,
  handleNextPage,
  handlePreviousPage
}: ThirdPageProps){

return (
  <>

  </>
);
}