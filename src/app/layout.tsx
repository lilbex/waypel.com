import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Waypel - Play, Learn, Earn",
  description: "Join Waypel - the ultimate mobile app where you play games, learn new skills, chat with friends, and earn coins. Download now and start your journey!",
  keywords: "mobile app, games, learning, social, chat, quiz, livestream, earn coins",
  authors: [{ name: "Waypel Team" }],
  openGraph: {
    title: "Waypel - Play, Learn, Earn",
    description: "The ultimate mobile app for gaming, learning, and socializing",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Waypel - Play, Learn, Earn",
    description: "The ultimate mobile app for gaming, learning, and socializing",
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}