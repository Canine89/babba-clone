import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "바빠 스마트 클래스",
  description: "바빠 스마트 클래스 - 교육 플랫폼",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}