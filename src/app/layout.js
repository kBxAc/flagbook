import "./globals.css";
import { Navbar, Footer } from "@/components";
import { DataProvider } from "@/context";

export const metadata = {
  title: "flagbook",
  description: "Made with ❤️ by kBxAc",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="spline-sans-400"
      >   
        <DataProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            {children}
            <Footer />
          </div>
        </DataProvider>
      </body>
    </html>
  );
}
