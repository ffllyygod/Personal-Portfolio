import { getImgUrl } from '../../utils'
import styles from './Contact.module.css'
const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
    <div className={styles.text}>
      <h2>Contact</h2>
      <p>Do you need a full-stack web developer? I would love to hear from you</p>
    </div>
    <ul className={styles.links}>
      <li className={styles.link}>
        <img src={getImgUrl("contact/emailIcon.png")} alt="Email icon" />
        <a href="mailto:abad.1@iitj.ac.in">abad.1@iitj.ac.in</a>
      </li>
      <li className={styles.link}>
        <img
          src={getImgUrl("contact/linkedinIcon.png")}
          alt="LinkedIn icon"
        />
        <a href="https://www.linkedin.com/in/ayushabad/">linkedin.com/ayushabad</a>
      </li>
      <li className={styles.link}>
        <img src={getImgUrl("contact/githubIcon.png")} alt="Github icon" />
        <a href="https://github.com/ffllyygod">github.com/ffllyygod</a>
      </li>
    </ul>
  </footer>
  )
}
export default Contact