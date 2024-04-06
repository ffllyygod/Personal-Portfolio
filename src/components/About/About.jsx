import { getImgUrl } from "../../utils";
import styles from './About.module.css'
const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img src={getImgUrl("ayush/develperbg.png")} alt="me tweakin" className={styles.aboutImage}/>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImgUrl("about/cursorIcon.png")} alt="cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>I’m a front-end developer with experience
              in building responsive and optimized sites</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImgUrl("about/serverIcon.png")} alt="server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>I have experience developing fast and
              optimized back-end systems and APIs</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImgUrl("about/devops.png")} alt="devops icon" />
            <div className={styles.aboutItemText}>
              <h3>DevOps Engineer</h3>
              <p>I’m a DevOps engineer with experience in automating and optimizing deployment pipelines and infrastructure.</p>
            </div>
          </li>

        </ul>
      </div>
    </section>
  );
};
export default About;
