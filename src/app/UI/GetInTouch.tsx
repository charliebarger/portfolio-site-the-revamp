import React from "react";
import styles from "./getintouch.module.css";
import Mail from "@/assets/mail.svg?react";
import LinkedIn from "@/assets/linkedin.svg?react";
import Github from "@/assets/github.svg?react";
import Resume from "@/assets/resume.svg?react";
import ContactLink from "./Link";

const GetInTouch = () => {
  return (
    <section className={styles.wrapper}>
      <h4 className={`${styles.header} text-body-md-semibold`}>Get In Touch</h4>
      <div className={styles.linkWrapper}>
        <ContactLink
          href="mailto:charliebarger96@gmail.com"
          icon={<Mail />}
          text="charliebarger96@gmail.com"
        />
        <ContactLink
          href="https://www.linkedin.com/in/charlie-barger/"
          icon={<LinkedIn />}
          text="LinkedIn"
        />
        <ContactLink
          href="https://github.com/charliebarger"
          icon={<Github />}
          text="Github"
        />
      </div>
      <div className={styles.resumeLink}>
        <ContactLink
          href="/charlie_barger_resume.pdf"
          icon={<Resume />}
          text="Resume"
        />
      </div>
    </section>
  );
};

export default GetInTouch;
