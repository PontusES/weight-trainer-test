'use client';

import { Film } from '@/types/film';
import { People } from '@/types/people';
import { idFromUrl } from '@/utils/idFromUrl';
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

const SWAPI_URL = 'https://swapi.dev/api/';

interface SwapiContextType {
  loading: boolean;
  people: People[];
  films: Film[];
  getPerson: (id: string) => People | undefined;
}

interface SwapiProviderProps {
  children: ReactNode;
}

export const swapiContext = createContext<SwapiContextType | undefined>(
  undefined,
);

export const useSwapi = () => {
  const context = useContext(swapiContext);
  if (!context) {
    throw new Error('useSwapi must be used within a SwapiProvider');
  }
  return context;
};

export const SwapiProvider: React.FC<SwapiProviderProps> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [people, setPeople] = useState<People[]>([]);
  const [films, setFilms] = useState<Film[]>([]);

  const getPerson = useCallback(
    (id: string) => {
      return people.find((person) => person.id === id);
    },
    [people],
  );

  const fetchFilms = useCallback(async () => {
    const response = await fetch(`${SWAPI_URL}/films`);
    const data = await response.json();

    return data.results;
  }, []);

  // Fetch all people in this case to not spam the SWAPI server
  const fetchPeople = useCallback(async () => {
    let allPeople: People[] = [];
    let nextUrl: string | null = `${SWAPI_URL}/people`;

    while (nextUrl) {
      const response: any = await fetch(nextUrl);
      const data = await response.json();

      allPeople = [...allPeople, ...data.results];
      nextUrl = data.next;
    }

    return allPeople;
  }, []);

  useEffect(() => {
    if (people.length === 0 && films.length === 0) {
      Promise.all([fetchPeople(), fetchFilms()]).then(
        ([peopleData, filmsData]) => {
          setPeople(
            peopleData.map((person: People) => ({
              ...person,
              id: idFromUrl(person.url),
            })),
          );
          setFilms(filmsData);
          setLoading(false);
        },
      );
    }
  }, []);

  const contextValue = useMemo(() => {
    return {
      loading,
      people,
      films,
      getPerson,
    };
  }, [loading, people, films]);

  return (
    <swapiContext.Provider value={contextValue}>
      {children}
    </swapiContext.Provider>
  );
};
