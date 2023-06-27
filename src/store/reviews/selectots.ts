import { NameSpace } from '../../consts';
import { Review } from '../../types/reviews';
import { State } from '../../types/state';

export const getAllReviews = (state: State): Review[] => state[NameSpace.Reviews].allReviews;
