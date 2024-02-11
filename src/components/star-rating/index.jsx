import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './styles.css';

const StarRating = ({noOfStars = 5}) => {

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const handleClick = (getCurrentIndex) => {
      setRating(getCurrentIndex)
    }

    const handleMouseEnter = (getCurrentIndex) => {
        setHover(getCurrentIndex)
    }
    
    const handleMouseLeave = () => {
        setHover(rating)
    }

    return (
        <div className='star-rating'>
            {
                [...Array(noOfStars)].map((_, index) => {
                    index += 1

                    return <FaStar 
                      key={index}
                      className={index <= (hover || rating) ? 'active' : 'inActive'}
                      onClick={() => handleClick(index)}
                      onMouseMove={() => handleMouseEnter(index)}
                      onMouseLeave={() => handleMouseLeave()}
                      size={40}
                    />
                })
            }
        </div>
    );
};

export default StarRating;