import { useSwapi } from '@/contexts/swapiContext';
import FilmsGrid from './FilmsGrid';
import { useCallback, useEffect, useState } from 'react';
import { Film } from '@/types/film';
import FilmDetails from './FilmDetails';

export const Dashboard = () => {
  const [selectedFilm, setSelectedFilm] = useState<Film | null>(null);
  const { films, loading } = useSwapi();

  const handleSelectFilm = useCallback((film: Film) => {
    setSelectedFilm(film);
  }, []);

  const handleCloseDetails = useCallback(() => {
    setSelectedFilm(null);
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (selectedFilm) {
    return <FilmDetails film={selectedFilm} onClose={handleCloseDetails} />;
  }

  return <FilmsGrid films={films} onSelectFilm={handleSelectFilm} />;
};
