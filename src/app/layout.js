// import {localFont} from "next/font/local";
import { Sen } from "next/font/google";
import "./globals.css";

// Components
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Theme Provider
import { ThemeProvider } from "@/components/ThemeProvider";

/*
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});*/

const Senfont = Sen({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Interior Styling Office",
  description: "Interior Styling Office for design and styling of interiror spaces",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* className={`${geistSans.variable} ${geistMono.variable} antialiased`} */}
      {/* className={
          Senfont.className +
          " min-h-screen bg-background font-sans text-foreground"} */}
      <body
        className={Senfont.className}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
            {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
