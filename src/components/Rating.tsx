import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating'

function StarRating() {
  const [ratingValue, setRatingValue] = useState(0)
  
  const handleRating = (rate: number) => {
    setRatingValue(rate)
  }
  return (
    <Rating 
    transition
    ratingValue={ratingValue}
    />
  )

}

export default StarRating;