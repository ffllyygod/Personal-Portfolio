/* eslint-disable react/prop-types */
import { getImgUrl } from "../../utils";
import styles from "./ProjectCard.module.css";


const ProjectCard = ({ project }) => {
  return (
    <div className={styles.container}>
      <img
        src={getImgUrl(project.imageSrc)}
        alt={`Image of ${project.title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.description}>{project.description}</p>
      <ul className={styles.skills}>
        {project.skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        <a href={project.demo} className={styles.link}>
          Demo
        </a>
        <a href={project.source} className={styles.link}>
          Source
        </a>
      </div>
    </div>
  );
};
export default ProjectCard;
