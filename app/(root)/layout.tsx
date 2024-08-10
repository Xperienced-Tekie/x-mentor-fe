import type { Metadata } from "next";
import "../globals.css";
import { NavBar, Content } from "@/components/design-system/Navigation";

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
      <body className="bg-[#ffffff] dark:bg-[#030910] dark:text-white">
        <main>
          <NavBar />
          <Content>
            {children}
          </Content>
        </main>
      </body>
    </html>
  );
}
