import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import { Slide } from "react-awesome-reveal";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <Slide direction="left" duration={1200} triggerOnce>
          <img
            src={getImageUrl("about/about.png")}
            alt="Me sitting with a laptop"
            className={styles.aboutImage}
          />
        </Slide>

        <Slide direction="right" triggerOnce duration={1200}>
          <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
              <img
                src={getImageUrl("about/cursorIcon.png")}
                alt="Cursor icon"
              />
              <div className={styles.aboutItemText}>
                <h3>Frontend Developer</h3>
                <p>
                  I'm a frontend developer with experience in building
                  responsive and optimized sites
                </p>
              </div>
            </li>
            <li className={styles.aboutItem}>
              <img
                src={getImageUrl("about/serverIcon.png")}
                alt="Server icon"
              />
              <div className={styles.aboutItemText}>
                <h3>Backend Developer</h3>
                <p>
                  I have experience developing fast and optimised back-end
                  systems and APIs
                </p>
              </div>
            </li>
          </ul>
        </Slide>
      </div>
    </section>
  );
};
