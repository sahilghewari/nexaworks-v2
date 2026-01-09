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
  backgroundColor: "#0D1015",
  margin: 0,
  padding: "24px",
  fontFamily: "Inter, system-ui, -apple-system, sans-serif",
};

const containerStyles: CSSProperties = {
  backgroundColor: "#111827",
  borderRadius: "12px",
  padding: "32px",
  color: "#CBC8BA",
};

const headingStyles: CSSProperties = {
  color: "#CBC8BA",
  fontSize: "24px",
  fontWeight: 700,
  marginBottom: "16px",
};

const sectionStyles: CSSProperties = {
  backgroundColor: "#1F2937",
  borderRadius: "8px",
  padding: "20px",
  marginTop: "12px",
};

const rowStyles: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 12px",
  borderBottom: "1px solid #1F2937",
};

const labelStyles: CSSProperties = {
  color: "#9CA3AF",
  fontSize: "13px",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  margin: 0,
};

const valueStyles: CSSProperties = {
  color: "#CBC8BA",
  fontSize: "14px",
  margin: 0,
  textAlign: "right",
  maxWidth: "60%",
  wordBreak: "break-word",
};

const paragraphStyles: CSSProperties = {
  color: "#9CA3AF",
  fontSize: "14px",
  lineHeight: "22px",
  marginTop: "16px",
};

const hrStyles: CSSProperties = {
  borderColor: "#1F2937",
  margin: "32px 0 8px",
};

const footerStyles: CSSProperties = {
  color: "#5A352F",
  fontSize: "12px",
  textAlign: "center",
};

export default InternalNotification;
