import "./ProjectCard.scss";

const ProjectCard = ({ project }) => {
  return (
    <a
      href={project.webapp}
      target="_blank"
      rel="noreferrer noopener"
      className="projectLink"
    >
      <div className="projectCard">
        <div className="projImg">
          <img className="projImg" src={project.image} alt={project.name} />
        </div>
        <div className="projTags">
          {project.tags.map((tag) => (
            <div className="projTag" key={tag}>
              <span>{tag}</span>
            </div>
          ))}
        </div>
        <div className="projDetails">
          <div className="projTitle">{project.title}</div>
          <div className="projDate">{project.date}</div>
          <div className="projDesc">{project.description}</div>
        </div>
        <div className="projMembers">
          {project.member?.map((member) => (
            <div className="projAvatarContainer" key={member}>
              <img className="projAvatar" src={member.img} alt={member.name} />
            </div>
          ))}
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
