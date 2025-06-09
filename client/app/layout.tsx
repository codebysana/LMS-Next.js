import { Poppins } from "next/font/google";
import { Hind } from "next/font/google";
import { ThemeProvider } from "./utils/theme-provider";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-Poppins",
});

const hind = Hind({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-Hind",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${hind.variable} !bg-white bg-no-repeat dark:bg-gradient-to-b dark:from-gray-900 dark:to-black transition duration-300`}
      >
        <ThemeProvider attribute="data-theme" defaultTheme="light" enableSystem>
          {children}
          <Toaster position="top-right" reverseOrder={false}/>
        </ThemeProvider>
      </body>
    </html>
  );
}
