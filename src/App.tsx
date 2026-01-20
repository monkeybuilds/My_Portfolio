import Header from "./components/Header";
import Banner from "./components/Banner";
import Experience from "./components/Experience";
import About from "./components/About";
import Projects from "./components/Projects";
import DesignPortfolio from "./components/DesignPortfolio";
import WorksInProgress from "./components/WorksInProgress";
import SocialMedia from "./components/SocialMedia";
import Footer from "./components/Footer";
import "./globals.css";

function App(): React.JSX.Element {
  return (
    <main className="min-h-screen bg-[#110720] text-white">
      <Header />
      <Banner />
      <Experience />
      <About />
      <DesignPortfolio />
      <SocialMedia />
      <WorksInProgress />
      <Projects />
      <Footer />
    </main>
  );
}

export default App;
