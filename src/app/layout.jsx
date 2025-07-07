import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bhimashankar Holkundi 👨‍💻🚀",
  description:
    "Welcome to my tech hub—where ideas turn into slick, high-performance code. Full Stack Dev crafting clean, interactive & 🔥 experiences!",
  verification: {
    google: "TOCa55LC4Piws59KRSjobWt0KgJ_uwrCYiIPBoViJLk", // Your meta tag here
  },
  // https://search.google.com/u/4/search-console/welcome?utm_source=about-page
};

export default function RootLayout({ children }) {
  return (
        <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

