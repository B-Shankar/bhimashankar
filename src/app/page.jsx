export const metadata = {
  title: 'Bhimashankar | Full-Stack Developer Portfolio',
  description:
    'Portfolio of Bhimashankar, a full-stack developer specializing in Java, Spring Boot, React, and modern web technologies.',
  keywords:
    'Bhimashankar, Java Developer, Spring Boot, Full Stack Developer, Portfolio, React Developer, Software Engineer, Software Development Engineer',
  authors: [{ name: 'Bhimashankar' }],
  robots: 'index, follow',
  alternates: {
    canonical: 'https://bhimashankar.vercel.app/',
  },
  openGraph: {
    title: 'Bhimashankar | Full-Stack Developer Portfolio',
    description:
      'Explore Bhimashankar’s developer portfolio with projects in Java, Spring Boot, React and more.',
    url: 'https://bhimashankar.vercel.app',
    siteName: 'Bhimashankar Portfolio',
    images: [
      {
        url: 'https://bhimashankar.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Bhimashankar Portfolio Preview',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bhimashankar | Full-Stack Developer Portfolio',
    description:
      'Check out Bhimashankar’s full-stack projects and skills in modern web development.',
    images: ['https://bhimashankar.vercel.app/og-image.png'],
    creator: '@bhimashankar_',
  },
};

import { ThemeProvider } from "@/context/ThemeContext";
import Header from "./pages/Header";
import Background from "./pages/Background";
import FloatingBar from "@/components/FloatingBar";
import About from "./pages/About";
import DownloadCV from "./pages/DownloadCV";
import Skills from "./pages/Skills";
import Education from "./pages/Education";
import Experience from "./pages/Experience";

const Home = () => {
  return (
    <ThemeProvider>
      <Background>
        <Header />
        <About />
        <DownloadCV />
        <Skills />
        <Experience />
        <Education />
        <FloatingBar />
      </Background>
    </ThemeProvider>
  );
};

export default Home;