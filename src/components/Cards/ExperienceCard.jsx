import "./ExperienceCard.scss";

const ExperienceCard = ({ exp }) => {
  return (
    <div className="expCard">
      <div className="expTop">
        <div>
          <img src={exp.img} alt={exp.company} className="logo" />
        </div>
        <div className="expBody">
          <div className="expRole">{exp.role}</div>
          <div className="expCompany">{exp.company}</div>
          <div className="expDuration">{exp.date}</div>
        </div>
      </div>
      <div className="expDesc">
        {exp.desc}
        {exp?.skills && (
          <>
            <br />
            <div className="expSkills">
              <b>Skills:</b>
              <div className="expSkillsList">
                {exp.skills.map((skill) => (
                  <div className="expSkill" key={exp.id}>
                    • {skill}
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
      {exp.docs && (
        <div className="expDocs">
          {Array.isArray(exp.docs) ? (
            exp.docs.map((doc, index) => (
              <a
                key={index}
                href={doc}
                target="_blank"
                rel="noopener noreferrer"
                className="expDoc"
              >
                ➤ {doc}
              </a>
            ))
          ) : (
            <a
              href={exp.docs}
              target="_blank"
              rel="noopener noreferrer"
              className="expDoc"
            >
              ➤ {exp.docs}
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default ExperienceCard;
