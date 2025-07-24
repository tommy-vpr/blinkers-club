import {
  Body,
  Container,
  Column,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
  Hr,
} from "@react-email/components";

type LineItem = {
  title: string;
  productHandle: string;
  image: string | null;
};

type Props = {
  customerName?: string;
  lineItems: LineItem[];
};

export default function EmailTemplate({
  customerName = "there",
  lineItems,
}: Props) {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          <Img
            src="https://blinkers.club/images/blinkers-black.png"
            alt="Teevong Logo"
            width="80"
            style={logoImage}
          />

          <Text style={paragraph}>
            Hi {customerName}, thanks for joining the Blinkers waitlist!
          </Text>

          <Text style={paragraph}>
            We’ll let you know the moment our launch goes live. Stay tuned!
          </Text>

          <Hr />
          <Text style={footer}>© 2025 Blinkers, All Rights Reserved</Text>
        </Container>
      </Body>
    </Html>
  );
}

// Styles
const main = {
  backgroundColor: "#f4f4f7",
  fontFamily: "Helvetica, Arial, sans-serif",
  padding: "40px 0",
};

const container = {
  backgroundColor: "#ffffff",
  padding: "20px",
  maxWidth: "600px",
  margin: "0 auto",
  borderRadius: "8px",
  boxShadow: "0 0 6px rgba(0,0,0,0.05)",
};

const logoImage = {
  marginBottom: "20px",
};

const paragraph = {
  fontSize: "14px",
  color: "#333333",
  lineHeight: "1.5",
  marginBottom: "16px",
};

const productImage = {
  display: "inline-block",
  margin: "0 auto",
};

const productTitle = {
  fontSize: "16px",
  fontWeight: "bold",
  textTransform: "uppercase" as const,
  marginBottom: "5px",
  color: "#333",
};

const productLinkStyle = {
  fontSize: "14px",
  color: "cornflowerblue",
  textDecoration: "none",
};

const footer = {
  fontSize: "12px",
  color: "#999999",
  textAlign: "center" as const,
  marginTop: "20px",
};
