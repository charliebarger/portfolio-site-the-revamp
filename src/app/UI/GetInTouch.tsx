import React from "react";
import styles from "./getintouch.module.css";
import Mail from "@/assets/mail.svg?react";
import LinkedIn from "@/assets/linkedin.svg";
import Github from "@/assets/github.svg";
import Location from "@/assets/location.svg";
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
          href="mailto:charliebarger96@gmail.com"
          icon={<LinkedIn />}
          text="LinkedIn"
        />
        <ContactLink
          href="mailto:charliebarger96@gmail.com"
          icon={<Github />}
          text="Github"
        />
      </div>
      <ContactLink
        href="mailto:charliebarger96@gmail.com"
        icon={<Location />}
        iconColor="action"
        text="Denver, Co"
      />
    </section>
  );
};

export default GetInTouch;
