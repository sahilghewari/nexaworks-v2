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

interface NewsletterWelcomeProps {
  email: string;
  siteUrl?: string;
}

export const NewsletterWelcome = ({
  email,
  siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://nexaworks.com",
}: NewsletterWelcomeProps) => (
  <Html>
    <Head />
    <Preview>Welcome to the NexaWorks newsletter</Preview>
    <Body style={bodyStyles}>
      <Container style={containerStyles}>
        <Heading as="h2" style={headingStyles}>
          You're in, {email}!
        </Heading>
        <Text style={paragraphStyles}>
          Thanks for subscribing to the NexaWorks newsletter. Expect monthly product updates, industry
          insights, and behind-the-scenes stories from our team.
        </Text>
        <Section style={sectionStyles}>
          <Heading as="h3" style={subheadingStyles}>
            Here's what to expect:
          </Heading>
          <ul style={listStyles}>
            <li>Curated deep-dives into emerging technologies</li>
            <li>Case studies showcasing measurable impact</li>
            <li>Invites to exclusive events and early feature previews</li>
          </ul>
        </Section>
        <Text style={paragraphStyles}>
          We respect your inbox. If you ever want to unsubscribe, there's a link at the bottom of every email.
        </Text>
        <Text style={paragraphStyles}>
          Until then, explore our latest work at
          {" "}
          <Link href={`${siteUrl}/projects`} style={linkStyles}>
            {siteUrl}/projects
          </Link>
          .
        </Text>
        <Hr style={hrStyles} />
        <Text style={footerStyles}>
          NexaWorks · Crafted for innovators. Follow us on
          {" "}
          <Link href="https://linkedin.com/company/nexaworks" style={linkStyles}>
            LinkedIn
          </Link>
          .
        </Text>
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

const subheadingStyles: CSSProperties = {
  color: "#CBC8BA",
  fontSize: "18px",
  fontWeight: 600,
  marginBottom: "12px",
};

const paragraphStyles: CSSProperties = {
  color: "#CBC8BA",
  fontSize: "16px",
  lineHeight: "24px",
  margin: "0 0 16px 0",
};

const sectionStyles: CSSProperties = {
  backgroundColor: "#1F2937",
  borderRadius: "8px",
  padding: "20px",
  marginTop: "24px",
};

const listStyles: CSSProperties = {
  color: "#CBC8BA",
  fontSize: "16px",
  lineHeight: "24px",
  paddingLeft: "20px",
};

const linkStyles: CSSProperties = {
  color: "#FF2003",
  textDecoration: "underline",
};

const hrStyles: CSSProperties = {
  borderColor: "#1F2937",
  margin: "32px 0",
};

const footerStyles: CSSProperties = {
  color: "#5A352F",
  fontSize: "12px",
  textAlign: "center",
};

export default NewsletterWelcome;
