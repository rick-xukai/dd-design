import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "点点设计 - 一点点改变世界",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
