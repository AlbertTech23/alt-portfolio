import "./Education.scss";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { myEdu } from "../../data/data";
import EducationCard from "../Cards/EducationCard";

const Education = () => {
  return (
    <div className="eduContainer">
      <div className="eduWrapper">
        <div className="eduMainTitle">Education</div>
        <div className="eduMainDesc">
          Explore my diverse educational journey in school, technology, and
          more!
        </div>
        <div className="eduTimeline">
          <Timeline>
            {myEdu.map((edu, index) => (
              <TimelineItem key={edu.id}>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <EducationCard edu={edu} />
                </TimelineContent>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="secondary" />
                  {index !== myEdu.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
      </div>
    </div>
  );
};

export default Education;
