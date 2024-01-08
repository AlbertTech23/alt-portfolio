import "./EducationCard.scss";

const EducationCard = ({ edu }) => {
  return (
    <div className="eduCard">
      <div className="eduTop">
        <div>
          <img src={edu.img} alt={edu.company} className="logo" />
        </div>
        <div className="eduBody">
          <div className="eduName">{edu.school}</div>
          <div className="eduDegree">{edu.degree}</div>
          <div className="eduDuration">{edu.date}</div>
        </div>
      </div>
      <div className="eduGrade">
        <b>Grade:</b> {edu.grade}
      </div>
      <div className="eduDesc">{edu.desc}</div>
    </div>
  );
};

export default EducationCard;
