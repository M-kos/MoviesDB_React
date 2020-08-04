import React from 'react';
import { Row, Col } from 'antd';
import PropTypes from 'prop-types';
import MovieCard from '../MovieCard/MovieCard';

const ViewCards = ({ movies, getImageUrl }) => {
  let cards = null;

  if (movies) {
    cards = movies.map((movie) => {
      const imageUrl = movie.poster_path
        ? getImageUrl(movie.poster_path)
        : 'https://via.placeholder.com/150?text=No+Picture';

      return (
        <Col key={movie.id} md={12} sm={24}>
          <MovieCard movie={movie} imageUrl={imageUrl} />
        </Col>
      );
    });
  }

  return (
    <Row
      gutter={[
        { xs: 16, sm: 16, md: 36 },
        { xs: 20, sm: 20, md: 36 },
      ]}
      sm={24}
    >
      {cards}
    </Row>
  );
};

ViewCards.defaultProps = {
  movies: [],
  getImageUrl: () => {},
};

ViewCards.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
  getImageUrl: PropTypes.func,
};

export default ViewCards;
