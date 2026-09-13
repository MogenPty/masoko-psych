import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Row,
  Section,
  Text,
} from "react-email";

interface Props {
  name: string;
  email: string;
  phone: string;
  service: string; // human-readable label, not the slug — resolved by the caller
  message?: string;
}

export function ContactNotification({
  name,
  email,
  phone,
  service,
  message,
}: Readonly<Props>) {
  return (
    <Html lang="en">
      <Head />
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Text style={brand}>Masoko Psychological Clinic</Text>
            <Text style={subBrand}>New enquiry from the website</Text>
          </Section>

          <Section style={card}>
            <Heading style={h1}>{service}</Heading>

            <Row style={row}>
              <Column style={label}>Name</Column>
              <Column style={value}>{name}</Column>
            </Row>
            <Row style={row}>
              <Column style={label}>Email</Column>
              <Column style={value}>{email}</Column>
            </Row>
            <Row style={row}>
              <Column style={label}>Phone</Column>
              <Column style={value}>{phone}</Column>
            </Row>

            {message && (
              <>
                <Hr style={hr} />
                <Text style={label}>Message</Text>
                <Text style={messageBody}>{message}</Text>
              </>
            )}
          </Section>

          <Text style={footer}>
            Reply directly to this email to respond to{" "}
            {name.split(" ")[0].trim()} — it goes straight to {email}. <br />
            This enquiry was submitted confidentially via
            masokopsychology.co.za.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#f4f6f5",
  fontFamily: "Georgia, 'Times New Roman', serif",
};
const container = { margin: "0 auto", padding: "32px 24px", maxWidth: "560px" };
const header = { textAlign: "center" as const, marginBottom: "24px" };
const brand = {
  fontSize: "14px",
  letterSpacing: "1px",
  textTransform: "uppercase" as const,
  color: "#5b7a6a",
  margin: 0,
};
const subBrand = { fontSize: "13px", color: "#8a9a92", margin: "4px 0 0" };
const card = {
  backgroundColor: "#ffffff",
  borderRadius: "10px",
  padding: "28px",
  border: "1px solid #e4e9e6",
};
const h1 = {
  fontSize: "18px",
  color: "#2f3e38",
  marginTop: 0,
  marginBottom: "16px",
};
const row = { marginBottom: "8px" };
const label = {
  fontSize: "12px",
  color: "#8a9a92",
  textTransform: "uppercase" as const,
  letterSpacing: "0.5px",
  width: "90px",
  verticalAlign: "top" as const,
};
const value = { fontSize: "14px", color: "#2f3e38" };
const hr = { borderColor: "#e4e9e6", margin: "20px 0" };
const messageBody = {
  fontSize: "14px",
  lineHeight: "22px",
  color: "#2f3e38",
  whiteSpace: "pre-wrap" as const,
};
const footer = {
  fontSize: "12px",
  color: "#9aa8a2",
  textAlign: "center" as const,
  marginTop: "20px",
};
