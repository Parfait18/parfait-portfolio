import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Metadata } from "next";
import { Roboto } from "next/font/google";
import { template } from "./utils/constants";
import ParticleBg from "./components/ParticleBg";

const roboto = Roboto({
  weight: "300",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Parfait's Portfolio",
    template: template,
  },
  description: "My portfolio app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={
          roboto.className +
          "flex flex-col h-screen justify-between bg-slate-10"
        }
      >
        <Header />
        {children}
        <Footer />
        <ParticleBg />
      </body>
    </html>
  );
}
