import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import ScrollAnimation from "react-animate-on-scroll";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <ScrollAnimation
          animateIn="fadeInLeft"
          animateOut="fadeOut"
          duration={1.3}
          animateOnce={true}
        >
          <img
            src={getImageUrl("about/about.png")}
            alt="Me sitting with a laptop"
            className={styles.aboutImage}
          />
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInRight"
          animateOut="fadeOut"
          duration={1.3}
          animateOnce={true}
        >
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
        </ScrollAnimation>
      </div>
    </section>
  );
};
