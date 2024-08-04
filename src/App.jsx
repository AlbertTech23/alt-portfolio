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
import AnimatedCursor from "react-animated-cursor";

const App = () => {
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  return (
    <div>
      <AnimatedCursor
        innerSize={12.5}
        outerSize={50}
        innerScale={1.5}
        outerScale={2}
        color="#c3073f"
        outerAlpha={0.3}
        innerStyle={{
          backgroundColor: "#c3073f",
          mixBlendMode: "normal",
          zIndex: 9999,
        }}
        outerStyle={{
          backgroundColor: "#c3073f50",
          mixBlendMode: "normal",
          zIndex: 9999,
        }}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
          {
            target: ".custom",
            options: {
              innerSize: 12,
              outerSize: 12,
              color: "255, 255, 255",
              outerAlpha: 0.3,
              innerScale: 0.7,
              outerScale: 5,
            },
          },
        ]}
      />
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
