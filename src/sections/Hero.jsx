import styles from "./HeroStyles.module.css";
import HeroImg from "../assets/hero-img.png";
import sunIcon from "../assets/sun.svg";
import moonIcon from "../assets/moon.svg";
import twitterLight from "../assets/twitter-light.svg";
import twitterDark from "../assets/twitter-dark.svg";
import githubLight from "../assets/github-light.svg";
import githubDark from "../assets/github-dark.svg";
import linkdinLight from "../assets/linkedin-light.svg";
import linkdinDark from "../assets/linkedin-dark.svg";
import cv from "../assets/cv.pdf";
import { useTheme } from "../common/ThemeContext";
function Hero() {
  const { theme, toggleTheme } = useTheme();
  const ThemeIcon = theme === "light" ? sunIcon : moonIcon;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkdinIcon = theme === "light" ? linkdinLight : linkdinDark;
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.heroThemeContainer}>
        <img
          className={styles.heroImage}
          src={HeroImg}
          alt="profile picture of chenna"
        />
        <img
          src={ThemeIcon}
          alt="change theme icon"
          className={styles.changeThemeIcon}
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1 className={styles.profileName}>
          Vamsi <br /> Thrinadh
        </h1>
        <h2>Fullstack Developer</h2>
        <span>
          <a href="https://twitter.com/" target="_blank">
            <img src={twitterIcon} alt="twitter" />
          </a>
          <a
            href="https://www.linkedin.com/in/vamsi-thrinadh-golla-a436611b0/"
            target="_blank"
          >
            <img src={linkdinIcon} alt="linkdin" />
          </a>
          <a href="https://github.com/vamsi3nadh" target="_blank">
            <img src={githubIcon} alt="github" />
          </a>
        </span>
        <p className={styles.description}>
          With a passion for developing modern React web apps for commercial
          businesses.
        </p>
        <a href={cv} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
