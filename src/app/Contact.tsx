import Github from "@/assets/github.svg?react";
import LinkedIn from "@/assets/linkedin.svg?react";
import Resume from "@/assets/resume.svg?react";
import Footer from "./UI/Footer/Footer";
import LocationMap from "./UI/LocationMap/LocationMap";
import styles from "./contact/contact.module.css";

const Contact = () => (
  <div className={styles.shell}>
    <section id="contact" className={styles.page} aria-labelledby="contact-title">
      <div className={styles.main}>
        <header className="page-section-header">
          <h2 id="contact-title" className="text-section-title">Get In Touch</h2>
        </header>
        <div className={styles.content}>
          <div className={styles.intro}>
            <p className={styles.introCopy}>
              <strong>I’m always interested in meeting great people and working on meaningful products.</strong>{" "}
              If you have a question, want to collaborate, or think I’d be a good fit for your team, I’d love to hear from you.
            </p>
            <a className={styles.email} href="mailto:charliebarger96@gmail.com">charliebarger96@gmail.com</a>
            <div className={styles.socials}>
              <a href="https://www.linkedin.com/in/charlie-barger/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedIn /></a>
              <a href="https://github.com/charliebarger" target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
              <a href="/charlie_barger_resume.pdf" target="_blank" rel="noreferrer" className={styles.resume}><Resume />Resume</a>
            </div>
          </div>
          <LocationMap />
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default Contact;
