import { ThemeProvider } from "@/context/ThemeContext";

const Home = () => {
  return (
    <ThemeProvider>
      <div>
        <h1 className="text-3xl font-bold underline">Welcome to Bhimashankar Folio</h1>
      </div>
    </ThemeProvider>
  );
}
export default Home;