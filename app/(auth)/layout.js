import { Inter } from "next/font/google";
import "../globals.css";
import ToasterContext from "@components/ToasteContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Auth Halo Chart",
  description: "Build a Next 14 Chart App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-purple-1`}>
        <ToasterContext />
        {children}
        
      </body>
    </html>
  );
}
