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
    <p>Compra realizada com sucesso!</p>
    </>
  );
}