import { StarwarsLogo } from './StarwarsLogo';
import styles from '../styles/intro.module.css';

export const Intro = () => {
  return (
    <>
      <section className={styles.intro}>
        A long time ago, in a galaxy far,
        <br /> far away....
      </section>
      <section className={styles.logoWrapper}>
        <div className={styles.logo}>
          <StarwarsLogo />
        </div>
      </section>
      <section id='board' className={styles.board}>
        <div id='content' className={styles.content}>
          <p id='title' className={styles.title}>
            Episode I
          </p>
          <p id='subtitle' className={styles.subtitle}>
            THE CODER'S APPRAISAL
          </p>
          <br />
          <p>
            Turmoil has engulfed the Galactic Republic! In the midst of this
            chaos, an aspiring developer named PONTUS SANDSTRÖM sets forth on
            his grand quest to master the code. Determined to bring balance to
            bugs and breakpoints alike, he wages a valiant campaign against
            looming deadlines and cosmic complexity. Now, as the fate of his job
            application hangs in the balance, he faces the ultimate trial: a
            code test of epic proportions. Should he succeed, a new era of
            innovation will dawn upon the galaxy...
          </p>
        </div>
      </section>
    </>
  );
};
