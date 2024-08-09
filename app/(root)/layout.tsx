import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "X-Mentor",
  description: "AI Powered Gamified Mentorship Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#ffffff] dark:bg-[#030910] dark:text-white">{children}</body>
    </html>
  );
}
