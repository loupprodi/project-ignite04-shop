import Link from "next/link";

import { SuccessContainer, ImageContainer } from "../styles/pages/success";
import { GetServerSideProps } from "next";

export default function Success() {
  return (
    <SuccessContainer>
      <h1>Compra Efetuada !</h1>
      <ImageContainer></ImageContainer>

      <p>
        Uhuul <strong>Diego Fernandes</strong>, sua{" "}
        <strong>DCamiseta Beyond the Limits</strong> já está a caminho da sua
        casa.
      </p>

      <Link href="/">Voltar ao Catalago</Link>
    </SuccessContainer>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const sessionId = String(query.session_id);
  return {
    props: {},
  };
};
