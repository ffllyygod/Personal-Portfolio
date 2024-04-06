/* eslint-disable react/no-unescaped-entities */
import { getImgUrl } from "../../utils";
import styles from "./Hero.module.css";
const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Ayush</h1>
        <p className={styles.description}>
          I am a final-year B.Tech student at Indian Institute of Technology,
          Jodhpur and my passion lies in the world of app and website
          development. Crafting digital experiences through coding is my true
          love.
        </p>
        <div className={styles.btnBox}>
          <a href="https://drive.google.com/file/d/1OFiJScXq50hMoM1IcswtEoQ7AI18g263/view?usp=sharing" target="_blank" className={styles.btn}>Download CV</a>
          <a href="mailto:abad.1@iitj.ac.in" className={styles.btn}>Contact Me</a>
        </div>
      </div>
      {/* <img src={getImgUrl("hero/heroImage.png")} alt="hero image of me" className={styles.heroImg} /> */}
      <img src={getImgUrl("ayush/ayushbg.png")} alt="hero image of me" className={styles.heroImg} />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
export default Hero;
