import "./globals.css";
import { Inter } from "next/font/google";

// COMPONENTS
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

// CONTEXTS
import { ThemeContextProvider } from "@/context/ThemeContext";
import ThemeProvider from "@/Providers/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jorvik Web Dev | Web Design and SEO",
  description: "Web design and SEO tips for small businesses and startups",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContextProvider>
          <ThemeProvider>
            <div className="container">
              <div className="wrapper">
                {" "}
                <Navbar />
                {children} <Footer />
              </div>
            </div>
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
