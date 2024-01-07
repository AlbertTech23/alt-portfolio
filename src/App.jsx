import Test from "./Test";
import "./app.scss";
import { motion } from "framer-motion";
import { Navbar, Sidebar } from "./components";
const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
      </section>
      <section>Hero</section>
      <section id="Experience">Parallax</section>
      <section>Experience</section>
      <section id="Projects">Parallax</section>
      <section>Projects</section>
      <section id="Education">Education</section>
      <section id="Contact">Contact</section>
      {/* <section>Footer</section> */}
      {/* <Test /> */}
    </div>
  );
};

export default App;
