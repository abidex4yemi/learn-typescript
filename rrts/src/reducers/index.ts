import { combineReducers } from 'redux';
import { todoReducer } from './todo';
import { StoreState } from '../util/interfaces';

export const reducers = combineReducers<StoreState>({
  todo: todoReducer,
});
