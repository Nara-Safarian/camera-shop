import { Review } from '../../types/reviews';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';


type ReviewsProps = {
  review: Review;
}

const MAX_RATING = 5;

function ProductReviewCard({review}: ReviewsProps): JSX.Element {

  const createdAtString = format(new Date(review.createAt), 'd MMMM', { locale: ru });

  return (
    <li className="review-card">
      <div className="review-card__head">
        <p className="title title--h4">{review.userName}</p>
        <time className="review-card__data" dateTime={format(new Date(review.createAt), 'yyyy-MM-dd')}>{createdAtString}</time>
      </div>
      <div className="rate review-card__rate">
        {
          [...Array(MAX_RATING).keys()].map((id, index) => (
            <svg width="17" height="16" aria-hidden="true" key={id}>
              <use xlinkHref={index < review.rating ? '#icon-full-star' : '#icon-star'}></use>
            </svg>
          ))
        }
        <p className="visually-hidden">Оценка: {review.rating}</p>
      </div>
      <ul className="review-card__list">
        <li className="item-list"><span className="item-list__title">Достоинства:</span>
          <p className="item-list__text">{review.advantage}</p>
        </li>
        <li className="item-list"><span className="item-list__title">Недостатки:</span>
          <p className="item-list__text">{review.disadvantage}</p>
        </li>
        <li className="item-list"><span className="item-list__title">Комментарий:</span>
          <p className="item-list__text">{review.review}</p>
        </li>
      </ul>
    </li>

  );
}

export default ProductReviewCard;

