import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume — Yoganathan C",
  description:
    "Download or preview the latest resume for Yoganathan C, Frontend Developer and AI/ML enthusiast.",
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
