import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
