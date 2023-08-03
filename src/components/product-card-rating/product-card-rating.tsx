import { useMemo } from 'react';
import { Review } from '../../types/reviews';

type ProductCardRatingProps = {
  reviewCount: number;
  reviews?: Review[];
}

const MAX_RATING = 5;

function ProductCardRating({reviewCount, reviews = []}: ProductCardRatingProps): JSX.Element {
  const rating = useMemo(() => {
    if (!reviews.length) {
      return 0;
    }
    return Math.ceil(reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length);
  }, [reviews]);

  return (
    <div className="rate product-card__rate">
      {
        [...Array(MAX_RATING).keys()].map((id, index) => (
          <svg width="17" height="16" aria-hidden="true" key={id}>
            <use xlinkHref={index < rating ? '#icon-full-star' : '#icon-star'}></use>
          </svg>
        ))
      }
      <p className="visually-hidden">Рейтинг: {rating}</p>
      <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>{reviewCount}</p>
    </div>
  );
}

export default ProductCardRating;
