import styles from "./page.module.css";
import IntroCopy from "./UI/Home/IntroCopy";
import GetInTouch from "./UI/GetInTouch";
import Avatar from "./UI/Home/Avatar";
import Work from "./UI/Home/Work";
import About from "./UI/Home/About";
import Contact from "./UI/Home/Contact";
import GradientHero from "./UI/GradientHero/GradientHero";

export default function Home() {
  return (
    <div className={styles.page} data-homepage>
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
