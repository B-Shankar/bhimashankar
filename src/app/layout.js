import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bhimashankar Holkundi 👨‍💻🚀",
  description: "Welcome to my tech hub—where ideas turn into slick, high-performance code. Full Stack Dev crafting clean, interactive & 🔥 experiences!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jakartaSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

