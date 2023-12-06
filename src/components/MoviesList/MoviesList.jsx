import PropTypes from 'prop-types';
import { Outlet, useLocation } from 'react-router-dom';
import { List, Li, Links } from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      <List movies={movies}>
        {movies.map(({ id, title }) => (
          <Li key={id}>
            <Links to={`/movies/${id}`} state={{ from: location }}>
              <h3>{title}</h3>
            </Links>
          </Li>
        ))}
      </List>
      <Outlet />
    </>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default MoviesList;
