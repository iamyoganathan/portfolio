import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Gokul G",
  description:
    "Ways to collaborate with Gokul G, including email, scheduling, and a quick QR code.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
