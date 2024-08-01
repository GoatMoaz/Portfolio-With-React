import React from "react";

import styles from "./Projects.module.css";

import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";
import { Slide, Fade } from "react-awesome-reveal";

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <Fade triggerOnce>
        <h2 className={styles.title}>Projects</h2>
      </Fade>

      <Slide direction="up" cascade damping={0.1} duration={1500} triggerOnce>
        <ul className={styles.projects}>
          {projects.map((project, id) => {
            return <ProjectCard key={id} project={project} />;
          })}
        </ul>
      </Slide>
    </section>
  );
};
