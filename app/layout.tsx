import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import CommandMenu, { type CommandItem } from "./components/CommandMenu";
import Navigation from "./components/Navigation";
import ErrorBoundary from "./components/ErrorBoundary";
import ViewportDebugger from "./components/ViewportDebugger";
import { WebVitals } from "./components/WebVitals";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yoganathan.dev"),
  title: "Yoganathan C — Flutter Developer & AI Innovator",
  description:
    "Portfolio of Yoganathan C, MCA student specializing in Flutter, AI-powered mobile apps, and intelligent digital solutions. View projects including Language Learning App, Digital Diary, and Expense Tracker.",
  keywords: [
    "Flutter Developer",
    "Mobile App Developer",
    "AI Integration",
    "Cross-Platform Development",
    "React Developer",
    "AI/ML Developer",
    "Next.js",
    "TypeScript",
    "Firebase",
    "Python",
    "Portfolio",
    "MCA Student",
    "Tamil Nadu",
    "India",
  ],
  authors: [{ name: "Yoganathan C", url: "https://yoganathan.dev" }],
  creator: "Yoganathan C",
  publisher: "Yoganathan C",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yoganathan.dev",
    title: "Yoganathan C — Flutter Developer & AI Innovator",
    description:
      "Portfolio of Yoganathan C, MCA student specializing in Flutter, AI-powered mobile apps, and intelligent digital solutions. View projects including Language Learning App, Digital Diary, and Expense Tracker.",
    siteName: "Yoganathan C Portfolio",
    images: [
      {
        url: "/yoganathan.png",
        width: 1200,
        height: 630,
        alt: "Yoganathan C - Flutter Developer & AI Innovator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yoganathan C — Flutter Developer & AI Innovator",
    description:
      "Portfolio of Yoganathan C, MCA student specializing in Flutter and AI-powered mobile applications.",
    images: ["/yoganathan.png"],
    creator: "@yoganathan",
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  category: "technology",
};

const commandItems: CommandItem[] = [
  {
    label: "Hero intro",
    href: "#top",
    description: "Jump back to the opening headline and ripple card.",
  },
  {
    label: "Navigation grid",
    href: "#projects",
    description: "Open the Bento grid of portfolio routes.",
  },
  {
    label: "Highlights",
    href: "#insights",
    description:
      "Explore product mindset, performance, and accessibility pillars.",
  },
  {
    label: "Experience timeline",
    href: "#experience",
    description: "Review recent milestones, internships, and wins.",
  },
  {
    label: "Showcase lab",
    href: "#showcase",
    description: "See the 3D card stack and motion lab experiments.",
  },
  {
    label: "Contact",
    href: "#contact",
    description: "Reach out for internships or freelance collaborations.",
  },
  {
    label: "Send an email",
    href: "mailto:iamyoganathanc@gmail.com",
    description: "Compose an email to Yoganathan with your project idea.",
    shortcut: "Mail",
  },
  {
    label: "Schedule a call",
    href: "https://cal.com",
    description: "Open the booking calendar in a new tab.",
    shortcut: "Call",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0a0118" />
        <meta name="color-scheme" content="dark" />
        <link rel="canonical" href="https://yoganathan.dev" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} text-white antialiased`}
      >
        <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden>
          <div id="aurora-root" className="h-full w-full" />
        </div>
        {/* Skip link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-emerald-500 text-white px-4 py-2 rounded-md z-50 transition-all"
        >
          Skip to main content
        </a>

        <Navigation />
        <ErrorBoundary>
          <main id="main-content" className="min-h-screen">
            {children}
          </main>
        </ErrorBoundary>
        <CommandMenu items={commandItems} />
        <ViewportDebugger />
        <WebVitals />
      </body>
    </html>
  );
}
