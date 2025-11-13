import type { Metadata } from "next";
import ContactPageWithSuspense from "../components/ContactPageWrapper";

export const metadata: Metadata = {
  title: "Contact — Yoganathan C",
  description:
    "Get in touch with Yoganathan C for Flutter development opportunities, AI-powered app collaborations, or mobile app projects. Quick response guaranteed.",
};

export default function ContactPage() {
  return <ContactPageWithSuspense />;
}
