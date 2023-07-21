import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "@/src/styles/pages/product";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Product() {
  const { query } = useRouter();
  return (
    <ProductContainer>
      <ImageContainer>
        <Image src="" alt="" />
      </ImageContainer>
      <ProductDetails>
        <h1>Camiseta X: {JSON.stringify(query)}</h1>
        <span>R$ 19,70</span>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sed
          voluptatibus obcaecati, laboriosam impedit perferendis error itaque
          iste ullam aperiam facere maxime minus eaque dolore alias natus eius.
          Ipsa, error.
        </p>

        <button>comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  );
}
