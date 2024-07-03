import "./Skills.scss";
import { mySkills } from "../../data/data";

const Skills = () => {
  return (
    <div className="skillsContainer">
      <div className="skillsWrapper">
        <h1 className="skillMainTitle">Skills</h1>
        <span className="skillMainDesc">
          Focused on Web Apps. Recently working on Microcontrollers (Arduino,
          ESP32) & Networking.
        </span>
        <div className="mySkillsContainer">
          {mySkills.map((item, index) => (
            <div className="skill" key={index}>
              <div className="skillTitle">
                <h3>{item.title}</h3>
              </div>
              <div className="skillList">
                {item.skills.map((skill, index) => (
                  <div className="skillSpecial" key={index}>
                    <img
                      className="skillImage"
                      src={skill.image}
                      alt={skill.name}
                    />
                    <h4>{skill.name}</h4>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
