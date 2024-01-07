import Test from "./Test";
import "./app.scss";
import { motion } from "framer-motion";
import { Hero, Navbar } from "./components";
const App = () => {
  return (
    <div>
      <section id="About">
        <Navbar />
        <Hero />
      </section>
      <section id="Skills">Parallax</section>
      <section>Skills</section>
      <section id="Experience">Parallax</section>
      <section>Experience</section>
      <section>Projects</section>
      <section id="Education">Education</section>
      <section id="Contact">Contact</section>
      {/* <section>Footer</section> */}
      {/* <Test /> */}
    </div>
  );
};

export default App;
