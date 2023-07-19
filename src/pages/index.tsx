import { styled } from "@stitches/react";

const Button = styled("button", {
  backgroundColor: "$green500",
  borderRadius: 4,
  border: 0,
  padding: "4px",

  span: {
    fontWeight: "bold",
  },

  "&:hover": {
    filter: "brightness(0.8)",
  },
});

export default function Home() {
  return (
    <Button>
      <span>Test</span>
      Enviar
    </Button>
  );
}
