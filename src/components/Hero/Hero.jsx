import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

import { Slide } from "react-awesome-reveal";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <Slide triggerOnce duration={1500}>
          <h1 className={styles.title}>Hi, I'm Moaz Ayman</h1>
          <p className={styles.description}>
            I'm a full-stack developer with experience of using React and
            NodeJS. Reach out if you'd like to learn more!
          </p>
          <a href="/Moaz_resume.pdf" className={styles.contactBtn} download>
            Donwload Resume
          </a>
        </Slide>
      </div>
        <img
          src={getImageUrl("hero/hero.png")}
          alt="Hero image of me"
          className={styles.heroImg}
        />
    </section>
  );
};
