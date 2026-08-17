import styles from "./page.module.css";
import IntroCopy from "./IntroCopy";
import Header from "./UI/Navigation/Header/Header";
import GetInTouch from "./UI/GetInTouch";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.intro}>
          <Header />
          <IntroCopy />
          <GetInTouch />
        </section>
      </main>
    </div>
  );
}
