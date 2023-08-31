import { NameSpace } from '../../consts';
import { Basket } from '../../types/basket';
import { State } from '../../types/state';

export const getBasket = (state: State): Basket => state[NameSpace.Basket].basket;
export const getPromocode = (state: State): string => state[NameSpace.Basket].promocode;
export const orderCreated = (state: State): boolean => state[NameSpace.Basket].orderCreated;
export const orderRejected = (state: State): boolean => state[NameSpace.Basket].orderRejected;
