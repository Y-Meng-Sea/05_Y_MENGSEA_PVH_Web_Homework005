import { Geist, Geist_Mono, Poppins, Poppins } from "next/font/google";
import "../style/globals.css";

const geistSans = Geist({
     variable: "--font-geist-sans",
     subsets: ["latin"],
});
const poppins = Poppins({
     subsets: ["latin"],
     weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});
const geistMono = Geist_Mono({
     variable: "--font-geist-mono",
     subsets: ["latin"],
});

export const metadata = {
     title: "my next app",
     description: "Generated by create next app",
};

export default function RootLayout({ children }) {
     return (
          <html lang="en">
               <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
          </html>
     );
}
