import Test from "./Test";
import "./app.scss";
import { motion } from "framer-motion";
import {
  Contact,
  Education,
  Experience,
  Hero,
  Navbar,
  Projects,
  Skills,
} from "./components";
import Parallax from "./components/Parallax/Parallax";
const App = () => {
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
        <Projects />
      </section>
      <section id="Education">
        <Education />
      </section>
      <section id="Contact">
        <Contact />
      </section>
      {/* <Test /> */}
    </div>
  );
};

export default App;
