import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from '../../components/fetchApi';

import { LuSearch } from 'react-icons/lu';
import { CastCard, CastContainer, Paragraf } from './Cast.styled';

const Cast = () => {
  const [moviesCast, setMoviesCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchCast(movieId).then(({ cast }) => {
      setMoviesCast(cast);
    });
  }, [movieId]);

  return (
    <CastContainer>
      {moviesCast.length > 0 ? (
        moviesCast.map(({ id, profile_path, character, name }) => (
          <CastCard key={id}>
            {profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                alt={name}
              />
            ) : (
              <LuSearch size={22}></LuSearch>
            )}

            <Paragraf>{name}</Paragraf>

            <Paragraf>Character : {character.substr(0, 9)}</Paragraf>
          </CastCard>
        ))
      ) : (
        <Paragraf> Sorry, there isn't any info</Paragraf>
      )}
    </CastContainer>
  );
};
export default Cast;
