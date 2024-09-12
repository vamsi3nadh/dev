import styles from "./ProjectsStyles.module.css";
import imageSearch from "../../assets/image-search-app.png";
import todoApp from "../../assets/todo-app.png";
import nxtWatch from "../../assets/nxt-watch-app.png";

const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <a href="https://vamsi3nadhdb.ccbp.tech/">
          <img className="hover" src={imageSearch} alt="image search app" />
          <h3>IPL DashBoard</h3>
          <p>Ipl Dashboard for Each Team</p>
        </a>
        <a href="https://vamsi3nadhsw.ccbp.tech/">
          <img className="hover" src={todoApp} alt="image search app" />
          <h3>StopWatch</h3>
          <p>Stopwatch App</p>
        </a>
        <a href="https://vamsi3nadhwiki.ccbp.tech/">
          <img className="hover" src={nxtWatch} alt="image search app" />
          <h3>Wikipedia</h3>
          <p>Wikipedia Search Application</p>
        </a>
      </div>
    </section>
  );
};

export default Projects;
