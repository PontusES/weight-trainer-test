'use client';

import React from 'react';
import filmGridStyles from '@/styles/films-grid.module.css';
import { Film } from '@/types/film';

interface Props {
  films: Film[];
  onSelectFilm: (film: Film) => void;
}

export default function FilmsGrid({ films, onSelectFilm }: Props) {
  if (films.length === 0) {
    return <p>No films found.</p>;
  }

  return (
    <div className={filmGridStyles.pageContainer}>
      <div className={filmGridStyles.filmsGridContainer}>
        {films.map((film) => (
          <div
            key={film.episode_id}
            className={filmGridStyles.filmCard}
            onClick={() => onSelectFilm(film)}
          >
            <h3>{film.title}</h3>
            <p>{film.release_date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
