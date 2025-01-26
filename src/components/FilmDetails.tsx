'use client';

import React, { useState, useEffect } from 'react';
import filmDetailsStyles from '@/styles/film-details.module.css';
import { useSwapi } from '@/contexts/swapiContext';
import { idFromUrl } from '@/utils/idFromUrl';
import { People } from '@/types/people';

interface Film {
  title: string;
  episode_id: number;
  release_date: string;
  characters: string[];
}

interface Props {
  film: Film;
  onClose: () => void;
}

export default function FilmDetails({ film, onClose }: Props) {
  const [characters, setCharacters] = useState<People[]>([]);
  const { getPerson } = useSwapi();

  useEffect(() => {
    const people = film.characters
      .map((characterUrl) => {
        const id = idFromUrl(characterUrl);
        const person = getPerson(id);

        return person;
      })
      .filter((person) => !!person);

    setCharacters(people);
  }, [film, getPerson]);

  return (
    <div className={filmDetailsStyles.detailsContainer}>
      <button onClick={onClose} className={filmDetailsStyles.closeButton}>
        CLOSE
      </button>
      <h2 className={filmDetailsStyles.filmTitle}>{film.title}</h2>
      <p>Release Date: {film.release_date}</p>

      {characters.length > 0 && (
        <div className={filmDetailsStyles.characters}>
          {characters.map((person) => (
            <div key={person.id} className={filmDetailsStyles.character}>
              {person.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
