import { Inter } from "next/font/google";
import "./globals.css";

// Inisialisasi font Inter
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Todos Dashboard",
  description: "A simple dashboard built with Next.js and MongoDB",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-slate-900 text-black min-h-screen antialiased transition-colors duration-300`}
      >
        {children}
      </body>
    </html>
  );
}

