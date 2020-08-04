import React from 'react';
import PropTypes from 'prop-types';

import { Rate } from 'antd';
import { format } from 'date-fns';

import truncateText from '../../utils/truncateText';

import './MovieCard.css';

const MovieCard = ({
  movie: { title, overview: description, release_date: releaseDate, vote_average: titleRating },
  imageUrl,
}) => {
  const date = releaseDate ? (
    <div className="movieCard__date">{format(new Date(releaseDate), 'MMMM d, yyyy')}</div>
  ) : null;

  return (
    <div className="movieCard">
      <img className="movieCard__image" src={imageUrl} alt="poster" />
      <div className="movieCard__summary">
        <div className="movieCard__title">
          <h2 className="movieCard__title-inscription">{title}</h2>
          <div className="movieCard__title-rating">{titleRating}</div>
        </div>
        {date}
        <div className="movieCard__genres">Action</div>
        <div className="movieCard__description">{truncateText(description)}</div>
        <div className="movieCard__fill" />
        <Rate disabled="true" allowClear="false" allowHalf defaultValue={2.5} />
      </div>
    </div>
  );
};

MovieCard.defaultProps = {
  movie: {
    title: '',
    overview: '',
    release_date: '',
    vote_average: 0,
  },
  imageUrl: '',
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    overview: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
  }),
  imageUrl: PropTypes.string,
};

export default MovieCard;
