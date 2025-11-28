import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Fundacja Przyjaźń bez Granic",
  description: "Pomorski Hub współpracy międzynarodowej i działań humanitarnych",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className="font-body text-primary-main bg-neutral-bg">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
