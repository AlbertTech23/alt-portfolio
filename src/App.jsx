import "./app.scss";
import {
  Contact,
  Education,
  Experience,
  Hero,
  Navbar,
  Projects,
  Skills,
  ProjectDetails,
} from "./components";
import Parallax from "./components/Parallax/Parallax";
import { useState } from "react";

const App = () => {
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  return (
    <div>
      <section id="About">
        <Navbar />
        <Hero />
      </section>
      <section id="Skills">
        <Parallax type="skills" />
      </section>
      <section>
        <Skills />
      </section>
      <section id="Experience">
        <Parallax type="experience" />
      </section>
      <section>
        <Experience />
      </section>
      <section id="Projects">
        <Projects openModal={openModal} setOpenModal={setOpenModal} />
      </section>
      <section id="Education">
        <Education />
      </section>
      <section id="Contact">
        <Contact />
      </section>
      {openModal.state && (
        <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
      )}
    </div>
  );
};

export default App;
