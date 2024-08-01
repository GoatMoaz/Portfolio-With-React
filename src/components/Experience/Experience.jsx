import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Fade } from "react-awesome-reveal";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <Fade triggerOnce>
        <h2 className={styles.title}>Skills</h2>
      </Fade>
      <Slider
        centerMode={true}
        className={styles.Slider}
        infinite={true}
        slidesToShow={4}
        autoplay={true}
        autoplaySpeed={1000}
        pauseOnHover={true}
        responsive={[
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 375,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ]}
      >
        {skills.map((skill, id) => (
          <div key={id} className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};
