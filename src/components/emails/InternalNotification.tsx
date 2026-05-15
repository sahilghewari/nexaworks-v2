import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import type { CSSProperties } from "react";

interface InternalNotificationProps {
  title: string;
  items: Array<{ label: string; value: string | number | null | undefined }>;
  footerNote?: string;
}

export const InternalNotification = ({ title, items, footerNote }: InternalNotificationProps) => (
  <Html>
    <Head />
    <Preview>{title}</Preview>
    <Body style={bodyStyles}>
      <Container style={containerStyles}>
        <Heading as="h2" style={headingStyles}>{title}</Heading>
        <Section style={sectionStyles}>
          {items.map((item) => (
            <div key={item.label} style={rowStyles}>
              <div style={labelStyles}>{item.label}</div>
              <div style={valueStyles}>{item.value ?? "-"}</div>
            </div>
          ))}
        </Section>
        {footerNote ? <Text style={paragraphStyles}>{footerNote}</Text> : null}
        <Hr style={hrStyles} />
        <Text style={footerStyles}>NexaWorks · Internal Notification</Text>
      </Container>
    </Body>
  </Html>
);

const bodyStyles: CSSProperties = {
  backgroundColor: "#FAFAFA",
  margin: 0,
  padding: "40px 20px",
  fontFamily: "Inter, system-ui, -apple-system, sans-serif",
};

const containerStyles: CSSProperties = {
  backgroundColor: "#FFFFFF",
  borderRadius: "16px",
  padding: "48px",
  color: "#09090B",
  border: "1px solid #E4E4E7",
  maxWidth: "600px",
  margin: "0 auto",
  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
};

const headingStyles: CSSProperties = {
  color: "#09090B",
  fontSize: "28px",
  fontWeight: 600,
  marginBottom: "32px",
  textAlign: "center",
  letterSpacing: "-0.02em",
};

const sectionStyles: CSSProperties = {
  backgroundColor: "#FFFFFF",
  borderRadius: "12px",
  padding: "8px 0",
};

const rowStyles: CSSProperties = {
  padding: "16px 0",
  borderBottom: "1px solid #F4F4F5",
};

const labelStyles: CSSProperties = {
  color: "#71717A",
  fontSize: "12px",
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "0.1em",
  marginBottom: "4px",
};

const valueStyles: CSSProperties = {
  color: "#09090B",
  fontSize: "16px",
  lineHeight: "24px",
  fontWeight: 500,
};

const paragraphStyles: CSSProperties = {
  color: "#52525B",
  fontSize: "14px",
  lineHeight: "22px",
  marginTop: "24px",
  textAlign: "center",
};

const hrStyles: CSSProperties = {
  borderColor: "#E4E4E7",
  margin: "40px 0 24px",
};

const footerStyles: CSSProperties = {
  color: "#A1A1AA",
  fontSize: "12px",
  textAlign: "center",
};

export default InternalNotification;
