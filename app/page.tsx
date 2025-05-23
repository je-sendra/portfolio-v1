import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-11/12  md:w-4/5 2xl:w-7/12 mx-auto">
        <MainSection />
        <Experience />
        <AboutMe />
        <Skills />
        <Projects />
      </main >
      <Footer />
    </>

  );
}
