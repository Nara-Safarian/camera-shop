// import {store} from '../store';
// import {setError} from '../store/action';
// import {clearErrorAction} from '../store/api-actions';
import {StatusCodes} from 'http-status-codes';

export const handleError = (message: string, status: StatusCodes): void => {
  // @todo доделать ошибку
  // eslint-disable-next-line no-console
  console.error(message, status);
  // store.dispatch(setError({message, status}));
  // store.dispatch(clearErrorAction());
};
