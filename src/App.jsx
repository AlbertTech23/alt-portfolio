import Test from "./Test";
import "./app.scss";
import { motion } from "framer-motion";
import { Navbar } from "./components";
const App = () => {
  return (
    <div>
      <section>
        <Navbar />
      </section>
      <section>Hero</section>
      <section>Parallax</section>
      <section>Experience</section>
      <section>Projects</section>
      <section>Education</section>
      <section>Contact</section>
      {/* <section>Footer</section> */}
      {/* <Test /> */}
    </div>
  );
};

export default App;
