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
}
export default Home;