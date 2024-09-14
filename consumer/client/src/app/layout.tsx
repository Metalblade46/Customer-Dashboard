import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
 
export const metadata: Metadata = {
  title: 'Customer Dashboard',
  description: 'The official Next.js Course Dashboard, built with App Router.',
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
