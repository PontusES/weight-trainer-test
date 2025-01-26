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

  useEffect(() => {
    console.log(films);
  }, [films]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {selectedFilm ? (
        <FilmDetails film={selectedFilm} onClose={handleCloseDetails} />
      ) : (
        <FilmsGrid films={films} onSelectFilm={handleSelectFilm} />
      )}
    </div>
  );
};
