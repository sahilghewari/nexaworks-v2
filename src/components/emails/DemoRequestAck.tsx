import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import type { CSSProperties } from "react";

interface DemoRequestAckProps {
  name: string;
  company: string;
  industry: string;
  timeline: string;
  siteUrl?: string;
}

export const DemoRequestAck = ({
  name,
  company,
  industry,
  timeline,
  siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://nexaworks.com",
}: DemoRequestAckProps) => (
  <Html>
    <Head />
    <Preview>Your demo request is confirmed. We will reach out shortly.</Preview>
    <Body style={bodyStyles}>
      <Container style={containerStyles}>
        <Heading as="h2" style={headingStyles}>
          Demo request received
        </Heading>
        <Text style={paragraphStyles}>
          Hi {name}, thanks for your interest in NexaWorks. Our solutions team will reach out to
          schedule your personalized demo within the next business day.
        </Text>
        <Section style={sectionStyles}>
          <Text style={labelStyles}>Company</Text>
          <Text style={paragraphStyles}>{company}</Text>
          <Text style={{ ...labelStyles, marginTop: "16px" }}>Industry</Text>
          <Text style={paragraphStyles}>{industry}</Text>
          <Text style={{ ...labelStyles, marginTop: "16px" }}>Preferred timeline</Text>
          <Text style={paragraphStyles}>{timeline}</Text>
        </Section>
        <Text style={paragraphStyles}>
          Need to share more context before our call? Reply to this email or visit
          {" "}
          <Link href={`${siteUrl}/contact`} style={linkStyles}>
            our contact page
          </Link>
          .
        </Text>
        <Hr style={hrStyles} />
        <Text style={footerStyles}>NexaWorks · 2040 Innovation Drive · San Francisco, CA</Text>
      </Container>
    </Body>
  </Html>
);

const bodyStyles: CSSProperties = {
  backgroundColor: "#CBC8BA",
  margin: 0,
  padding: "24px",
  fontFamily: "Inter, system-ui, -apple-system, sans-serif",
};

const containerStyles: CSSProperties = {
  backgroundColor: "#B7B0A0",
  borderRadius: "12px",
  padding: "32px",
  color: "#0D1015",
};

const headingStyles: CSSProperties = {
  color: "#0D1015",
  fontSize: "24px",
  fontWeight: 700,
  marginBottom: "16px",
};

const paragraphStyles: CSSProperties = {
  color: "#0D1015",
  fontSize: "16px",
  lineHeight: "24px",
  margin: 0,
};

const sectionStyles: CSSProperties = {
  backgroundColor: "#A79F90",
  borderRadius: "8px",
  padding: "20px",
  marginTop: "24px",
};

const labelStyles: CSSProperties = {
  color: "#3F3A32",
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  margin: 0,
};

const linkStyles: CSSProperties = {
  color: "#A3542B",
  textDecoration: "underline",
};

const hrStyles: CSSProperties = {
  borderColor: "#A79F90",
  margin: "32px 0",
};

const footerStyles: CSSProperties = {
  color: "#9B8B75",
  fontSize: "12px",
  textAlign: "center",
  margin: 0,
};

export default DemoRequestAck;
