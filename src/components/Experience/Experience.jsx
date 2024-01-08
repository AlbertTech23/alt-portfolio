import "./Experience.scss";
import { myExp } from "../../data/data";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import ExperienceCard from "../Cards/ExperienceCard";

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
          <Timeline>
            {myExp.map((exp, index) => (
              <TimelineItem key={exp.id}>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="secondary" />
                  {index !== myExp.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <ExperienceCard exp={exp} />
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
      </div>
    </div>
  );
};

export default Experience;
