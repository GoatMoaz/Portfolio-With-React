import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <a href="mailto:moaz.ayman.mahmoud@email.com" target="_blank">
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          </a>
          <a
            href="mailto:moaz.ayman.mahmoud@email.com"
            target="_blank"
            className={styles.hidden}
          >
            MoazAyman@email.com
          </a>
        </li>
        <li className={styles.link}>
          <a href="https://www.linkedin.com/in/goat-moaz/" target="_blank">
            <img
              src={getImageUrl("contact/linkedinIcon.png")}
              alt="LinkedIn icon"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/goat-moaz/"
            target="_blank"
            className={styles.hidden}
          >
            linkedin.com/GoatMoaz
          </a>
        </li>
        <li className={styles.link}>
          <a href="https://github.com/GoatMoaz" target="_blank">
            <img
              src={getImageUrl("contact/githubIcon.png")}
              alt="Github icon"
            />
          </a>
          <a href="https://github.com/GoatMoaz" className={styles.hidden} target="_blank">
            github.com/GoatMoaz
          </a>
        </li>
      </ul>
    </footer>
  );
};
