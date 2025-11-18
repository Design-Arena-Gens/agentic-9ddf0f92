import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "5 Ways AI Chatbots Increase Website Conversion Rates",
  description:
    "Discover five practical strategies to use AI chatbots for higher website conversions and turn more of your existing traffic into customers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="body-root">{children}</body>
    </html>
  );
}
