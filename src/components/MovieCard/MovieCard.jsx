import React from 'react';
import { Rate } from 'antd';

import truncateText from '../../utils/truncateText';

import './MovieCard.css';

const MovieCard = () => {
  return (
    <div className="movieCard">
      <img className="movieCard__image" src="https://via.placeholder.com/183x281" alt="poster" />
      <div className="movieCard__summary">
        <div className="movieCard__title">
          <h2 className="movieCard__title-inscription">The way back</h2>
          <div className="movieCard__title-rating">6.6</div>
        </div>
        <div className="movieCard__date">March 5, 2020</div>
        <div className="movieCard__genres">Action</div>
        <div className="movieCard__description">
          {truncateText(
            'A former basketball all-star, who has lost his wife and family foundation in a struggle with addiction attempts to regain his soul and salvation by becoming the coach of a disparate ethnically mixed high addiction attempts to regain his soul and salvation by becoming the coach of a disparate ethnically mixed high addiction attempts to regain his soul and salvation by becoming the coach of a disparate ethnically mixed high addiction attempts to regain his soul and salvation by becoming the coach of a disparate ethnically mixed high'
          )}
        </div>
        <div className="movieCard__fill" />
        <Rate disabled="true" allowClear="false" allowHalf defaultValue={2.5} />
      </div>
    </div>
  );
};

export default MovieCard;
