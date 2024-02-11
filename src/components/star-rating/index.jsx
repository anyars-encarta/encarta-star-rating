import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa';
import './styles.css';

const StarRating = ({ noOfStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (index) => {
    setRating(index);
  };

  const handleMouseEnter = (index) => {
    setHover(index);
  };

  const handleMouseLeave = () => {
    setHover(rating);
  };

  return (
    <div className="star-rating">
      <h2>Give me some Stars⭐️ if you like my swag!</h2>

      {
                [...Array(noOfStars)].map((_, index) => {
                  let currentIndex = index;
                  currentIndex += 1;

                  const key = `star-${currentIndex}`;

                  return (
                    <FaStar
                      key={key}
                      className={currentIndex <= (hover || rating) ? 'active' : 'inActive'}
                      onClick={() => handleClick(currentIndex)}
                      onMouseMove={() => handleMouseEnter(currentIndex)}
                      onMouseLeave={() => handleMouseLeave()}
                      size={40}
                    />
                  );
                })
            }
    </div>
  );
};

StarRating.propTypes = {
  noOfStars: PropTypes.number.isRequired,
};

export default StarRating;
