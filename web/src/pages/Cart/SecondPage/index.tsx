import { ClientAddress } from "../../../requests/ClientAddressRequest";

export interface SecondPageProps {
  address: ClientAddress[];
  handleNextPage: () => void;
  handlePreviousPage: () => void;
}

export default function SecondPage({address, handleNextPage, handlePreviousPage}: SecondPageProps) {
  return (
    (
      <>
      
      </>
    )
  )
}