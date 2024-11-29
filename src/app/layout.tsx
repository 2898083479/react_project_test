"use client";
import "./globals.css";
import { useSelectedLayoutSegment } from "next/navigation";

export default function RootLayout({
  children,
  auth
}: Readonly<{
  children: React.ReactNode;
  team: React.ReactNode;
  analytics: React.ReactNode;
  auth: React.ReactNode;
}>) {
  // 獲取當前路徑的段落
  const loginSegment = useSelectedLayoutSegment("auth")
  return (
    <html lang="en">
      <body
        className="w-full min-h-svh flex item-center justify-center"
      >
        {children}
      </body>
    </html>
  );
}
