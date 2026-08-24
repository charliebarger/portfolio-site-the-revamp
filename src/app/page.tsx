import styles from "./page.module.css";
import IntroCopy from "./IntroCopy";
import GetInTouch from "./UI/GetInTouch";
import Avatar from "./Avatar";
import Work from "./Work";
import About from "./About";
import Contact from "./Contact";
import GradientHero from "./UI/GradientHero/GradientHero";

export default function Home() {
  return (
    <div id="top" className={styles.page}>
      <main className={styles.main}>
        <GradientHero className={styles.intro}>
          <IntroCopy />
          <GetInTouch />
          <Avatar />
        </GradientHero>
        <Work />
        <About />
        <Contact />
      </main>
    </div>
  );
}
