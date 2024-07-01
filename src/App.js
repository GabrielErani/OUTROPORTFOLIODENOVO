import "./App.css";
import NavBar from "./components/Navbar";
import Home from "./components/sections/Home";
import ProjectSection from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <>
      <section
        className="h-screen w-screen flex justify-center items-center flex-col"
        id="Home"
      >
        <Home />
      </section>
      <section
        className="min-h-screen h-fit w-screen bg-slate-200 flex justify-center items-center flex-col"
        id="Skills"
      >
        <Skills />
      </section>
      <section className="min-h-screen h-fit w-screen flex justify-center items-center flex-col " id="Projects">
        <ProjectSection />
      </section>
      <section className="min-h-screen h-fit w-screen bg-slate-200 flex justify-center items-center flex-col" id="Contact">
        <Contact />
      </section>
    </>
  );
}

export default App;
