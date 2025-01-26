'use client';

import React, { useEffect } from 'react';
import introStyles from '@/styles/intro.module.css';
import { Intro } from '@/components/Intro';
import { Dashboard } from '@/components/Dashboard';

const Home: React.FC = () => {
  // Turn the intro off by setting this to true
  const [introFinished, setIntroFinished] = React.useState(false);

  useEffect(() => {
    // Sets the number of stars we wish to display
    const numStars = 100;

    // Get the size of the container (width and height)
    const y = document.documentElement.clientWidth;
    const x = document.documentElement.clientHeight;

    console.log(x, y);

    // Gets random x, y values based on the size of the container
    function getRandomPosition() {
      const randomX = Math.floor(Math.random() * x);
      const randomY = Math.floor(Math.random() * y);
      return [randomX, randomY];
    }

    // For every star we want to display
    for (let i = 0; i < numStars; i++) {
      const star = document.createElement('div');
      star.className = introStyles.star;
      const xy = getRandomPosition();
      star.style.top = xy[0] + 'px';
      star.style.left = xy[1] + 'px';
      document.body.append(star);
    }

    // Wait for 55 seconds before setting introFinished to true
    setTimeout(() => {
      setIntroFinished(true);
    }, 55000);
  }, []);

  return (
    <>
      {!introFinished ? (
        <main className={introStyles.main}>
          <Intro />
        </main>
      ) : (
        <Dashboard />
      )}
    </>
  );
};

export default Home;
