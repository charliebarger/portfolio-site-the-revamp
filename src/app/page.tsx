import styles from "./page.module.css";
import IntroCopy from "./IntroCopy";
import Header from "./UI/Navigation/Header/Header";
import GetInTouch from "./UI/GetInTouch";
import Avatar from "./Avatar";
import Work from "./Work";
import About from "./About";
import Contact from "./Contact";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.intro}>
          <Header />
          <IntroCopy />
          <GetInTouch />
          <Avatar />
        </section>
        <Work />
        <About />
        <Contact />
      </main>
    </div>
  );
}
