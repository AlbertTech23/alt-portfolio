import "./Experience.scss";
import { myExp } from "../../data/data";

const Experience = () => {
  return (
    <div className="expContainer">
      <div className="expWrapper">
        <div className="expMainTitle">Experience</div>
        <div className="expMainDesc">
          Contributing to organizations and coding projects — my dynamic journey
          in tech and teamwork.
        </div>
        <div className="expTimeline">
          {myExp.map((exp) => (
            <div className="expTimelineItem" key={exp.id}>
              <div className="expTimelineItemTitle">{exp.title}</div>
              <div className="expTimelineItemDesc">{exp.desc}</div>
              {/* <div className="expTimelineItemDate">{exp.date}</div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
