import { useState, useEffect } from 'react';
import ProductReviewCard from '../product-review-card/product-review-card';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAllReviews } from '../../store/reviews/selectots';
import { fetchAllReviewsById } from '../../store/api-actions';
import { useParams } from 'react-router-dom';
import ShowMoreButton from '../show-more-button/show-more-button';

const REVIEWS_PER_STEP = 3;


function ProductReviewsAll(): JSX.Element {
  const reviews = useAppSelector(getAllReviews);
  const reviewsCount = reviews.length;
  const [visibleReviews, setVisibleReviews] = useState(REVIEWS_PER_STEP);
  const dispatch = useAppDispatch();
  const {id} = useParams();


  useEffect(() => {
    if (!id) {
      return;
    }
    dispatch(fetchAllReviewsById({id}));
  }, [id, dispatch]);


  if (!reviewsCount) {
    return (<span>Пока нет отзывов. Будь первым, напиши отзыв!</span>);
  }

  return (
    <>
      <ul className="review-block__list">
        {
          reviews.slice(0, visibleReviews).map((review) => <ProductReviewCard key={review.id} review={review}/>)
        }
      </ul>
      {
        visibleReviews < reviewsCount &&
        (
          <div className="review-block__buttons">
            <ShowMoreButton onClick={() => setVisibleReviews(visibleReviews + REVIEWS_PER_STEP)}/>
          </div>
        )
      }
    </>

  );
}

export default ProductReviewsAll;
