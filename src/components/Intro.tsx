import { StarwarsLogo } from './StarwarsLogo';
import introStyles from '../styles/intro.module.css';

export const Intro = () => {
  return (
    <main className={introStyles.main}>
      <section className={introStyles.intro}>
        A long time ago, in a galaxy far,
        <br /> far away....
      </section>
      <section className={introStyles.logoWrapper}>
        <div className={introStyles.logo}>
          <StarwarsLogo />
        </div>
      </section>
      <section id='board' className={introStyles.board}>
        <div id='content' className={introStyles.content}>
          <p id='title' className={introStyles.title}>
            Episode I
          </p>
          <p id='subtitle' className={introStyles.subtitle}>
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
    </main>
  );
};
