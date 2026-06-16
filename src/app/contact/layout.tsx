import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a Pilot | Start Your 30-Day Evaluation",
  description: "Join the next generation of teams using operational memory. Request a 30-day pilot of CompanyBrain to automate resolutions.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
